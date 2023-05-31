const ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

function extractFrames(videoPath, outputFolder, quality, frameRate) {
  return new Promise((resolve, reject) => {
    // Create the output folder if it doesn't exist
    if (!fs.existsSync(outputFolder)) {
      fs.mkdirSync(outputFolder);
    }

    // Set the path to the ffmpeg executable
    ffmpeg.setFfmpegPath(ffmpegPath);

    // Set up the input video path and frame extraction options
    ffmpeg(videoPath)
      .output(path.join(outputFolder, 'output-%03d.jpg'))
      .noAudio()
      .videoCodec('mjpeg')
      .outputOptions([`-q:v ${quality}`, `-r ${frameRate}`])
      .on('end', () => resolve())
      .on('error', (err) => reject(err))
      .run();
  });
}

// Extract frames from the video specified via command-line arguments
const videoPath = process.argv[2];
const outputFolder = process.argv[3];
const quality = process.argv[4] || 5; // Default quality is 5
const frameRate = process.argv[5] || 24; // Default frame rate is 24

if (!videoPath || !outputFolder) {
  console.error(
    'Please provide the path to the video and output folder for extracted frames.'
  );
} else {
  extractFrames(videoPath, outputFolder, quality, frameRate)
    .then(() => {
      console.log('Frame extraction completed.');
    })
    .catch((err) => {
      console.error('Error occurred during frame extraction:', err);
    });
}

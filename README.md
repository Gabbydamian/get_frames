# Video to Frames Extractor

This is a Node.js program that extracts individual frames from a video and saves them as separate image files. It provides a command-line interface for easy usage.

## Features

- Extract frames from a video and save them as individual image files.
- Specify the output folder to store the extracted frames.
- Customize image quality and frame rate settings.

## Installation

1. Ensure you have Node.js installed on your machine.

2. Clone this repository or download the source code.

3. Open a terminal or command prompt and navigate to the project directory.

4. Install the dependencies by running the following command:

## Usage

To extract frames from a video, use the following command:

- `<inputVideoPath>`: The path to the input video file.
- `<outputFolder>`: The folder where the extracted frames will be saved.
- `[quality]` (optional): The image quality (1-31, lower values mean higher quality). Defaults to 5.
- `[frameRate]` (optional): The frame rate (frames per second) for extraction. Defaults to 24.

For example, to extract frames from a video named `input.mp4` with a quality of 2 and a frame rate of 12 fps, and save them in a folder named `frames`, run the following command:

After executing the command, the program will extract the frames from the video and save them as individual image files in the specified output folder.

## Dependencies

- `fluent-ffmpeg`: A library for handling video and audio processing in Node.js.
- `@ffmpeg-installer/ffmpeg`: A pre-built ffmpeg binary for easy installation.

## Author

This program is created by [Damian Gabriel](https://github.com/Gabbydamian).

## License

This program is licensed under the ISC License.

# Video PiP Enabler

![Lint Status](https://github.com/jpgbarbosa/video-pip-enabler/workflows/CI/badge.svg?job=lint)
![Test Status](https://github.com/jpgbarbosa/video-pip-enabler/workflows/CI/badge.svg?job=test)

Chrome extension to enable resizable picture-in-picture mode for videos

## Description

This Chrome extension detects videos on web pages and enables a resizable picture-in-picture mode for easy multitasking.

## Features

- Automatically detects videos on web pages
- Enables Picture-in-Picture mode with a single click
- Allows resizing of the PiP window
- Works on Chrome for macOS and other platforms

## Installation

1. Clone this repository or download the ZIP file and extract it.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Click on the extension icon in your Chrome toolbar.
2. If a video is detected on the current page, you'll see an "Enable Picture-in-Picture" button.
3. Click the button to activate PiP mode for the first video on the page.
4. Resize the PiP window as needed.

## Development

To modify or enhance this extension:

1. Make changes to the relevant files (content.js, popup.js, etc.).
2. Reload the extension on the `chrome://extensions/` page.
3. Test your changes on various websites with video content.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

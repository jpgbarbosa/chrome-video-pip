function detectVideo() {
  const videos = document.querySelectorAll('video');
  if (videos.length > 0) {
    console.log('Video detected on the page');
    return true;
  } else {
    console.log('No video detected on the page');
    return false;
  }
}

// Only add the listener if chrome.runtime exists
if (typeof chrome !== 'undefined' && chrome.runtime) {
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'checkVideo') {
      sendResponse({ videoDetected: detectVideo() });
    } else if (request.action === 'enablePiP') {
      const videos = document.querySelectorAll('video');
      if (videos.length > 0) {
        try {
          videos[0].requestPictureInPicture().then(pipWindow => {
            console.log('Picture-in-Picture mode enabled');

            // Set initial size
            pipWindow.width = 320;
            pipWindow.height = 180;

            // Add resize event listener
            pipWindow.addEventListener('resize', () => {
              console.log(`PiP window resized to ${pipWindow.width}x${pipWindow.height}`);
            });

            sendResponse({ success: true });
          });
        } catch (error) {
          console.error('Failed to enable Picture-in-Picture mode:', error);
          sendResponse({ success: false, error: error.message });
        }
      } else {
        console.log('No video found to enable Picture-in-Picture mode');
        sendResponse({ success: false, error: 'No video found' });
      }
    }
    // Return true to indicate that we'll send the response asynchronously
    return true;
  });
}

// Run detection when the page loads
detectVideo();

// Run detection again when the page content changes
const observer = new MutationObserver(() => {
  detectVideo();
});
observer.observe(document.body, { childList: true, subtree: true });

module.exports = { detectVideo };

document.addEventListener('DOMContentLoaded', function() {
  const statusDiv = document.getElementById('status');
  const pipButton = document.getElementById('pipButton');

  function updateStatus(message) {
    statusDiv.textContent = message;
  }

  function checkForVideo() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "checkVideo"}, function(response) {
        if (chrome.runtime.lastError) {
          updateStatus('Error: ' + chrome.runtime.lastError.message);
          return;
        }

        if (response && response.videoDetected) {
          updateStatus('Video detected on the page.');
          pipButton.style.display = 'block';
        } else {
          updateStatus('No video detected on the page.');
          pipButton.style.display = 'none';
        }
      });
    });
  }

  checkForVideo();

  pipButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "enablePiP"}, function(response) {
        if (chrome.runtime.lastError) {
          updateStatus('Error: ' + chrome.runtime.lastError.message);
          return;
        }

        if (response && response.success) {
          updateStatus('Picture-in-Picture mode enabled!');
        } else {
          updateStatus('Failed to enable Picture-in-Picture mode: ' + (response && response.error ? response.error : 'Unknown error'));
        }
      });
    });
  });
});

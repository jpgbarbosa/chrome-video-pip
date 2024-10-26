const { chrome } = require('jest-chrome');
const { detectVideo } = require('./content.js');

// Mock chrome API
global.chrome = chrome;

describe('detectVideo', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('returns true when video is present', () => {
    document.body.innerHTML = '<video></video>';
    expect(detectVideo()).toBe(true);
    expect(console.log).toHaveBeenCalledWith('Video detected on the page');
  });

  test('returns false when no video is present', () => {
    expect(detectVideo()).toBe(false);
    expect(console.log).toHaveBeenCalledWith('No video detected on the page');
  });
});

"use strict";

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: "www.boiteajeux.net" },
            css: ["input[type='button'][value='END OF TURN']"],
          }),
        ],
        actions: [
          new chrome.declarativeContent.RequestContentScript({
            js: ["content.js"],
          }),
        ],
      },
    ]);
  });
});

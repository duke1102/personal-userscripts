// ==UserScript==
// @name         Twitch Download Clip Button
// @namespace    https://github.com/duke1102/personal-userscripts
// @version      0.1
// @description  Adds a simple "Download Clip" button on Twitch Clips
// @author       duke1102
// @match        https://*.twitch.tv/*/clip/*
// @grant        none
// @run-at document-body
// ==/UserScript==

(function () {
  "use strict";
  document.addEventListener("readystatechange", (event) => {
    if (document.readyState == "complete") {
      let videoSrc = document.querySelector("video").src;
      let moreContainer = document.querySelector(
        '[data-test-selector="clips-watch-full-button"]'
      ).parentNode;
      let tmpl = `
    <a class="tw-align-items-center tw-align-middle tw-border-bottom-left-radius-medium tw-border-bottom-right-radius-medium tw-border-top-left-radius-medium tw-border-top-right-radius-medium tw-core-button tw-core-button--secondary tw-inline-flex tw-interactive tw-justify-content-center tw-overflow-hidden tw-relative" style="margin-left: 2px;" data-test-selector="clips-download-button" href="${videoSrc}">
        <div class="tw-align-items-center tw-core-button-label tw-flex tw-flex-grow-0">
            <div data-a-target="tw-core-button-label-text" class="tw-flex-grow-0">
            Download Clip
            </div>
        </div>
    </a>`;
      moreContainer.innerHTML += tmpl;
    }
  });
})();

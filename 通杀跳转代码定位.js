// ==UserScript==
// @name         页面跳转JS代码定位通杀方案
// @namespace   https://github.com/CC11001100/page-redirect-code-location-hook
// @version      0.2
// @description  阻断页面跳转，留在当前页面分析
// @author       CC11001100
// @match       *://*/*
// @run-at      document-start
// @grant        none
// @license MIT
// ==/UserScript==
(() => {

    // 使用说明： https://github.com/CC11001100/page-redirect-code-location-hook

    window.onbeforeunload = () => {
        debugger;
        return false;
    }

})();
// ==UserScript==
// @name         AutoHideChatter
// @namespace    http://danvanbrunt.com/
// @version      0.2
// @updateURL		 https://raw.githubusercontent.com/iDVB/monkeyscripts/master/tampermonkey/autohidechatter.js
// @description  Auto hide the chatter panel on all task pages.
// @author       Dan Van Brunt
// @include      https://genome.klick.com/tickets/*
// @match        https://genome.klick.com/tickets/*
// @copyright 2015+, danvanbrunt.com
// @grant        none
// ==/UserScript==



//chatter.toggleChatter();
chatter.hideChatter(true);


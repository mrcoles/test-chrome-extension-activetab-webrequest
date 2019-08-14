const val = chrome.webRequest;
const elt = document.getElementById("result");

elt.textContent = `${!!val} (${typeof val})`;

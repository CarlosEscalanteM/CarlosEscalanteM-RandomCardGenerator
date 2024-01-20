/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let imgs = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/SuitHearts.svg/1024px-SuitHearts.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/d/db/SuitDiamonds.svg",
    "https://upload.wikimedia.org/wikipedia/en/0/0a/Card_club.svg",
    "https://upload.wikimedia.org/wikipedia/en/b/b8/Card_spade.svg"
  ];
  var suit = document.getElementsByTagName("img");
  var suitRandom = imgs[Math.floor(Math.random() * 4)];
  for (var i = 0; i < suit.length; i++) {
    suit[i].src = suitRandom;
  }
  let symbol = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  var numberOrSymbol = document.getElementsByTagName("span")[0];
  var numberOrSymbolRandom = symbol[Math.floor(Math.random() * 12)];
  numberOrSymbol.textContent = numberOrSymbolRandom;
};

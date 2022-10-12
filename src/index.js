import "./style.css";

import iconImg from "./assets/iconShip.png";
import warIcon from "./assets/war.png";

const icon = document.querySelector("link[rel=icon]");
icon.href = iconImg;
const war = document.querySelectorAll("img.warIcon");
war.forEach((e) => e.src = warIcon);

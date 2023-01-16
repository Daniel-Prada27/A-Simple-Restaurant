import './style.css';
import {loadHomeBody, hahaha} from './page-loaders.js';
// import BackGround from './backgroundImg.jpg';

// const achu = document.createElement("div");

// console.log("WERBP");
// achu.innerHTML = "Added via webpack";
// achu.classList.add('achu');
// document.body.appendChild(achu);
// const myBackground = new Image();

// myBackground.src = BackGround;

// achu.appendChild(myBackground);


export let currentTab;

const header = document.createElement('header');
const homeBtn = document.createElement('div');
const menuBtn = document.createElement('div');
const orderBtn = document.createElement('div');
const headerBtnList = [homeBtn, menuBtn, orderBtn];

homeBtn.id = "home-btn";
menuBtn.id = "menu-btn";
orderBtn.id = "order-btn";

homeBtn.innerHTML = "Home";
menuBtn.innerHTML = "Menu";
orderBtn.innerHTML = "Order";

document.body.appendChild(header);
header.classList.add('header');


// HOME PAGE ELEMENTS
export const title = document.createElement('div');
const h1 = document.createElement('h1');
title.id = "content";
h1.innerHTML = "A Simple Restaurant";
title.appendChild(h1);

for (let btn in headerBtnList) {
    header.appendChild(headerBtnList[btn]);
    headerBtnList[btn].classList.add('header-btn');
}

homeBtn.addEventListener('click', () => {
    loadHomeBody();
})





function clearBody() {
    if (currentTab === "Home") {
        document.body.removeChild(title);
    }
}

menuBtn.addEventListener('click', () => {
    clearBody();
})

loadHomeBody();
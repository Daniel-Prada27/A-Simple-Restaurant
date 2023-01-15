import './style.css';
// import BackGround from './backgroundImg.jpg';

// const achu = document.createElement("div");

// console.log("WERBP");
// achu.innerHTML = "Added via webpack";
// achu.classList.add('achu');
// document.body.appendChild(achu);
// const myBackground = new Image();

// myBackground.src = BackGround;

// achu.appendChild(myBackground);



function loadHeader() {

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
    for (let btn in headerBtnList) {
        header.appendChild(headerBtnList[btn]);
        headerBtnList[btn].classList.add('header-btn');
    }
    
}

loadHeader();
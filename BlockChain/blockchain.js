const gifId = document.getElementById("gif");
const gif = document.querySelector(".gif");
const gif2 = document.querySelector(".gif2");
const gifBtn = document.querySelector(".gif-btn");
const wallet = document.querySelector(".wallet-body");
const walletBuy = document.querySelector(".wallet-buy");
const walletControl = document.querySelector(".wallet-control");
const walletEarn = document.querySelector(".wallet-earn");
const walletBorrow = document.querySelector(".wallet-borrow");
const walletSwap = document.querySelector(".wallet-swap");
const arrowLeft = document.querySelector(".left");
const arrowRight = document.querySelector(".right");
const indicatorA = document.querySelector(".indicator-a");
const indicatorB = document.querySelector(".indicator-b");
const indicatorC = document.querySelector(".indicator-c");
const indicatorD = document.querySelector(".indicator-d");
const indicatorE = document.querySelector(".indicator-e");
const wallets = document.querySelectorAll(".wallets");

gifBtn.style.display = "none";

gifId.addEventListener("mouseover", () => {
    gifId.classList.remove("gif2");
    gifId.classList.add("gif");
    gifBtn.style.display = "block";
});

gifId.addEventListener("mouseout", () => {
    gifId.classList.remove("gif");
    gifId.classList.add("gif2");
    gifBtn.style.display = "none";
});

wallets.forEach(wallet => {
    wallet.style.display = "none";
});

walletBuy.style.display = "block";

/* image Carousel */
const leftControl = document.querySelector(".left");
const rightControl = document.querySelector(".right");

var slides = 0;
    
    function mslides() {
        var i;
        var slider = document.getElementsByClassName("wallets");
        
        //var dash = document.getElementsByClassName("dash");

        // for loop //

    for(i = 0; i < slider.length; i++) {
            slider[i].style.display = "none";
        }
        slides++;
    
        if(slides > slider.length) {
            slides = 1;
        }
        slider[slides-1].style.display = "block";
       // setTimeout(mslides,3000);
    }

leftControl.addEventListener("click", () => {
        mslides();
});

rightControl.addEventListener("click", () => {
        mslides();
});



/*
walletBuy.style.display = "flex";
walletControl.style.display = "none";
walletEarn.style.display = "none";
walletBorrow.style.display = "none";
walletSwap.style.display = "none";
indicatorA.style.backgroundColor = "purple";

arrowRight.addEventListener("click", () => {
    if(walletBuy.style.display === "flex") {
        walletBuy.style.display = "none";
        walletControl.style.display = "flex";
        indicatorA.style.backgroundColor = "rgb(247, 178, 247)";
        indicatorB.style.backgroundColor = "purple";
    }
});

wallets.forEach(wallet => {
    wallet.style.backgroundColor = "green";
});
*/
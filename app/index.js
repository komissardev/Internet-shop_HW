let maxCard,
count = 0;

if(!localStorage.linkMemory){
  localStorage.linkMemory = JSON.stringify([]);
};

if(!localStorage.basketMemory){
  localStorage.basketMemory = JSON.stringify([]);
};

if(!localStorage.goodsMemory){
  localStorage.goodsMemory = JSON.stringify("");
};

(function(){
  const burgerMenu = document.querySelector('.burger-menu'),
  navMenu = document.querySelector('.nav__body_container__content__unordered_list'),
  linkNavMenu = document.querySelector('.nav__body_container__content__unordered_list');
  

  burgerMenu.addEventListener('click',() =>{
    burgerMenu.classList.toggle('burger_active');
    navMenu.classList.toggle('visible');
  });

  linkNavMenu.addEventListener('click',(e)=>{
    if(e.target.innerHTML === "shorts"){
      localStorage.linkMemory = JSON.stringify(SHORTS);
      window.location.href = "/pages/all_goods.html"
    }else if(e.target.innerHTML === "pants"){
      localStorage.linkMemory = JSON.stringify(PANTS);
      window.location.href = "/pages/all_goods.html"
    }else if(e.target.innerHTML === "shirts"){
      localStorage.linkMemory = JSON.stringify(SHIRTS);
      window.location.href = "/pages/all_goods.html"
    }else if(e.target.innerHTML === "accessories"){
      localStorage.linkMemory = JSON.stringify(ACCESSORIES);
      window.location.href = "/pages/all_goods.html"
    }else if(e.target.innerHTML === "sale"){
      localStorage.linkMemory = JSON.stringify(PRODUCT_SALE);
      window.location.href = "/pages/all_goods.html"
    };
  });
}());

logicsCreateCardSale();

let [...mousEventSaleProduct] = document.querySelectorAll(".section_sale__container__content__product_card");

document.getElementById("section_sale__container_back").addEventListener("click", (e)=>{
  if(count != 0){
    let [...arr] = document.getElementById("section_sale__container__content").children;
    arr.forEach(e => e.remove());

    count--;
    for (let x = 0; x < maxCard; x++){
      let obj = PRODUCT_SALE[x + count]
      createCardSale(obj);
      createRatingCardSale(obj);
    };
    mousEventSaleProduct = [];
    [...mousEventSaleProduct] = document.querySelectorAll(".section_sale__container__content__product_card");
    eventClickCard(mousEventSaleProduct);
  };
});

document.getElementById("section_sale__container_up").addEventListener("click", (e)=>{
  if(count < (PRODUCT_SALE.length - maxCard)){
    let [...arr] = document.getElementById("section_sale__container__content").children;
    arr.forEach(e => e.remove());

    count++;
    for (let x = 0; x < maxCard; x++){
      let obj = PRODUCT_SALE[x + count]
      createCardSale(obj);
      createRatingCardSale(obj);
    };

    mousEventSaleProduct = [];
    [...mousEventSaleProduct] = document.querySelectorAll(".section_sale__container__content__product_card");
    eventClickCard(mousEventSaleProduct);
  };
});

addEventListener("resize", (e) =>{
  let [...cildrenElement] = document.getElementsByClassName("section_sale__container__content")[0].children;
  cildrenElement.forEach(element => element.remove());
  logicsCreateCardSale();
});

eventClickCard(mousEventSaleProduct);
checkGoodsBasketTrue();
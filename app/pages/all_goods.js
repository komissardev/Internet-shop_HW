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

let allProductArr = JSON.parse(localStorage.linkMemory),
memoryPage = 0,
startPage = 0,
secondPage = 10,
pageStep = 1,
lastPage = 0,
filterGoodsArr =[],
options_size = [],
options_color = [];

main(allProductArr,startPage,secondPage);

let [...mousEventCard] = document.querySelectorAll(".product_card");

createElementOptionSize(filterElemetnOptionSize(allProductArr),"options_size__content");
createElementOptionColor(filterElemetnOptionColor(allProductArr),"options_color__content");

document.querySelector(".pagination").addEventListener('click', (e)=>{
  lastPage = Math.ceil(parseInt(allProductArr.length)/10);
  if(e.target.id === "upBtnPagin"){
    if(lastPage > 0  && pageStep === 0){
      pageStep = 1;
    };

    if(pageStep <= (lastPage - 1)){
      pageStep++;

      memoryPage += 10,
      secondPage += 10;
      if ((allProductArr.length - secondPage > 0)){

        document.getElementById("secondBtnPagin").innerText = secondPage / 10;
        document.getElementById("thirdBtnPagin").innerText = (secondPage / 10) + 1;
      }
      if(allProductArr.length - secondPage <= 0){
        document.getElementById("secondBtnPagin").classList.remove("chosen");
        document.getElementById("thirdBtnPagin").classList.add("chosen");
      }

      removeElChildren(document.querySelector(".main_container__content__product"));
      main(allProductArr,memoryPage,secondPage);
    }else{
      return
    };

  }else if(e.target.id === "backBtnPagin"){
    if (pageStep > 1){

      pageStep--,
      memoryPage -= 10,
      secondPage -= 10;


      document.getElementById("secondBtnPagin").innerText = secondPage / 10;
      document.getElementById("thirdBtnPagin").innerText = (secondPage / 10) + 1;

      if(allProductArr.length - secondPage !== 0){
        document.getElementById("thirdBtnPagin").classList.remove("chosen");
        document.getElementById("secondBtnPagin").classList.add("chosen");
      }

      removeElChildren(document.querySelector(".main_container__content__product"));
      main(allProductArr,memoryPage,secondPage);
    }else{
      return
    };

  }else if(e.target.id === "thirdBtnPagin"){
    // console.log(allProductArr)
    
    // if(allProductArr.length - secondPage > 0){

    //   memoryPage += 10,
    //   secondPage += 10;

    //   document.getElementById("thirdBtnPagin").classList.remove("chosen");
    //   document.getElementById("secondBtnPagin").classList.add("chosen");
    //   pageStep = secondPage / 10;
    //   console.log(pageStep)
    //   if ((allProductArr.length - secondPage > 0)){

    //     document.getElementById("secondBtnPagin").innerText = secondPage / 10;
    //     document.getElementById("thirdBtnPagin").innerText = (secondPage / 10) + 1;

    //   }
    //   if(allProductArr.length - secondPage === 0){
    //     document.getElementById("secondBtnPagin").classList.remove("chosen");
    //     document.getElementById("thirdBtnPagin").classList.add("chosen");
    //   }
      
    //   removeElChildren(document.querySelector(".main_container__content__product"));
    //   main(allProductArr,memoryPage,secondPage);
    // }else{
    //   return
    // };

  }else if(e.target.id === "secondBtnPagin"){
    // console.log(allProductArr)
    // if (allProductArr.length - secondPage <= secondPage){
    //   memoryPage -= 10,
    //   secondPage -= 10;

    //   document.getElementById("thirdBtnPagin").classList.remove("chosen");
    //   document.getElementById("secondBtnPagin").classList.add("chosen");

    //   if ((allProductArr.length - secondPage > 0)){
    //     if(allProductArr.length - secondPage !== 0){

    //       document.getElementById("secondBtnPagin").classList.remove("chosen");
    //       document.getElementById("thirdBtnPagin").classList.add("chosen");

    //       document.getElementById("secondBtnPagin").innerText = secondPage/10 - 1;
    //       document.getElementById("thirdBtnPagin").innerText = secondPage/10;
    //     }
    //     if(memoryPage === 0){

    //       document.getElementById("secondBtnPagin").innerText = secondPage/10;
    //       document.getElementById("thirdBtnPagin").innerText = secondPage/10 + 1;

    //       document.getElementById("thirdBtnPagin").classList.remove("chosen");
    //       document.getElementById("secondBtnPagin").classList.add("chosen");
    //     }
    //   };
    //   removeElChildren(document.querySelector(".main_container__content__product"));
    //   main(allProductArr,memoryPage,secondPage);
    // }else{
    //   return
    // };

  };
  mousEventCard = [];

  [...mousEventCard] = document.querySelectorAll(".product_card");
  console.log(mousEventCard)
  eventClickCard(mousEventCard);
});

eventClickCard(mousEventCard);
filterAllElementsGoods();
checkGoodsBasketTrue();

window.onbeforeunload = function() {
  let [...sizeEl] = document.getElementById("options_size__content").children;
  let [...colorEl]  = document.getElementById("options_color__content").children;

  sizeEl.forEach(e=>{
    if(e.nodeName === "INPUT"){
      e.checked = false;
    }
  });
  colorEl.forEach(e=>{
    if(e.nodeName === "INPUT"){
      e.checked = false;
    }
  });
};
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

if(!localStorage.userOrder){
  localStorage.userOrder = JSON.stringify({
    userInfo:{
      userPost: "post",
      userPostNumber: 0,
      userName: "name",
      userSurname: "surname",
      userTelNum: "+38000000000",
      userMail: "userMail@mail.com",
      userAgreement: false
    }
  });
};
if(!localStorage.userOrderGoods){
  localStorage.userOrderGoods = JSON.stringify([])
};

let arr = JSON.parse(localStorage.basketMemory),
price = 0,
trigerTru = false,
arrOrder = [],
arrBtnDelet = [],
arrBtnQuantytyGoods = [],
arrBtnQuantytyUp = [],
arrBtnQuantytyDown = [],
formDelivery = [
  document.getElementById("ukranianPostInput"),
  document.getElementById("newPostInput"),
  document.getElementById("userPostNumberInput"),
  document.getElementById("userFirstNameInput"),
  document.getElementById("userSecondNameInput"),
  document.getElementById("userPhoneNumInput"),
  document.getElementById("userEmailNameInput"),
  document.getElementById("userAgreementInput")
],
formUserOrderGoods = [];

function checkCorrectBasketOrder(argument){
  let arr = [];
  let userInfo = {
    userPost: "post",
    userPostNumber: 0,
    userName: "name",
    userSurname: "surname",
    userTelNum: "+38000000000",
    userMail: "userMail@mail.com",
    userAgreement: false,
    priceOrder: document.getElementById("paid").innerText
  };

  argument.forEach(e=>{
    if(e.id === "userAgreementInput"){
      if(e.checked === true){
        userInfo.userAgreement = true;
        arr.push(true);
      }else{
        return
      };

    }else if(e.type === "radio"){
      if(e.checked === true){
        userInfo.userPost = e.id.split("").reverse().join("").slice(5).split("").reverse().join("");
        arr.push(true);
      }else{
        return
      };

    }else if(e.type === "tel"){
      if(e.value.substring(0, 4) === "+380" && e.value.length === 13){
        userInfo.userTelNum = e.value;
        arr.push(true);
      }else{       
        return
      };

    }else if(e.type === "email"){
      let trueEmail = false;
      let arrEmailEl = e.value.split("");
      arrEmailEl.forEach(elem=>{
        if(elem === "@"){
          trueEmail = true;
        }else{
          return
        };

        if(trueEmail === true){
          userInfo.userMail = e.value;
          arr.push(true);
        }else{
          return
        };
      });

    }else if(e.id === "userPostNumberInput"){
      if(parseInt(e.value) > 0){
        userInfo.userPostNumber = e.value;
        arr.push(true);
      }else{
        return
      };

    }else if(e.id === "userFirstNameInput"){
      if(e.value.length > 1 && isNaN(e.value)){
        userInfo.userName = e.value;
        arr.push(true);
      }else{
        return
      };

    }else if(e.id === "userSecondNameInput"){
      if(e.value.length > 1 && isNaN(e.value)){
        userInfo.userSurname = e.value;
        arr.push(true);
      }else{
        return
      };

    }else{
      return
    };
  });

  if(arr.length === 7){
    localStorage.userOrder = JSON.stringify(userInfo);
    localStorage.userOrderGoods = JSON.stringify(formUserOrderGoods);

    const resultOne = window.confirm(`Check the correctness of filling:
    Your name: ${userInfo.userName}.
    Your last name: ${userInfo.userSurname}.
    Your phone number: ${userInfo.userTelNum}.
    Your email: ${userInfo.userMail}.
    Your post name: ${userInfo.userPost}.
    Your post office number: ${userInfo.userPostNumber}.
    The cost of your order: ${userInfo.priceOrder}$.
    `);
    
    if(resultOne){
      localStorage.removeItem('basketMemory');
      localStorage.removeItem('userOrderGoods');
      localStorage.removeItem('userOrder');
      localStorage.removeItem('linkMemory');
      alert("Thanks for your order! Your order is accepted! Our manager will contact you to clarify the order");
      window.location.href = '/index.html';
    }else{
      return
    };

  }else{
    return alert(`Please fill out the delivery form correctly!
    And choose the color and size for each item!
    You can adjust the amount of goods!`);
  };
};

function checkCorrectBasketGoods(arr){
  let checkArr = [];

  formUserOrderGoods = [];

  arr.forEach(element=>{
    let arrRadioColor = [],
    arrRadioSize = [],
    goods = {
      goodsId: element.id,
      goodsName: element.name,
      goodsColor: "color",
      goodsSize: 'size',
      goodsPrice: `$${element.sale === 0?element.prise:(element.prise/100*(100-element.sale)).toFixed(2)}`,
      goodsQuantity: document.getElementById("input"+ element.id).value

    };

    element.color.forEach(e=>{
      arrRadioColor.push(document.getElementById('radioColor'+ element.id + e.articul))
    });

    element.size.forEach(e=>{
      arrRadioSize.push(document.getElementById('radioSize'+ element.id + e))
    });

    arrRadioColor.forEach(e=>{
      if(e.checked === true){
        goods.goodsColor = e.value;
        checkArr.push(true);
      }else{
        return
      }
    });

    arrRadioSize.forEach(e=>{
      if(e.checked === true){
        goods.goodsSize = e.value
        checkArr.push(true)
      }else{
        return
      };
    });
    formUserOrderGoods.push(goods)
  });

  if(checkArr.length === arr.length * 2){
    checkCorrectBasketOrder(formDelivery)
  }else{
    alert("Please select the color and size of the product you need in each product card")
  };
};

arr.forEach(elArr=>{
  PRODUCT_LIBRARY.forEach(element => {
    element.forEach(e=>{
      if (e.id === elArr){
        arrOrder.push(e);
      }else{
        return
      };
    });
  });
});

arrOrder.forEach(e=>{
  createBascketCardEl(e);
  createFormElColor(e);
  createFormElSize(e);
  createRatingCard(e);

  arrBtnDelet.push("delet" + e.id);
  arrBtnQuantytyGoods.push("input" + e.id);
  arrBtnQuantytyUp.push("up" + e.id);
  arrBtnQuantytyDown.push("down" + e.id);
});

arrBtnDelet.forEach(element=>{
  document.getElementById(element).addEventListener("click", (e) =>{
    let qwestion = confirm("Are you sure you want to remove this item from your cart ITEM " + element.substring(5) + "?");

    if(qwestion === true){
    arr.splice(arr.indexOf(element.substring(5)), 1);
    arrBtnDelet.splice(arrBtnDelet.indexOf("delet" + element.substring(5)), 1);
    arrBtnQuantytyGoods.splice(arrBtnQuantytyGoods.indexOf("input" + element.substring(5)), 1);
    arrBtnQuantytyUp.splice(arrBtnQuantytyUp.indexOf("up" + element.substring(5)), 1);
    arrBtnQuantytyDown.splice(arrBtnQuantytyDown.indexOf("down" + element.substring(5)), 1);
    arrOrder.forEach(el=>{

      if(el.id === e.target.id.substring(5)){
        arrOrder.splice(arrOrder.indexOf(el), 1)
      }else{
        return
      }
    });

    localStorage.basketMemory = JSON.stringify(arr);
    document.getElementById(element.substring(5)).remove();
    conversionBasketPrice (arrBtnQuantytyGoods);
    }else{
      return
    };
  });
});

arrBtnQuantytyUp.forEach(element=>{
  document.getElementById(element).addEventListener("click", ()=>{
    document.getElementById("input" + element.substring(2)).value =
    parseInt(document.getElementById("input" + element.substring(2)).value) + 1
    
    conversionBasketPrice(arrBtnQuantytyGoods);
  });
});

arrBtnQuantytyDown.forEach(element=>{
  document.getElementById(element).addEventListener("click", ()=>{

    if (parseInt(document.getElementById("input" + element.substring(4)).value) > 1){
      document.getElementById("input" + element.substring(4)).value =
      parseInt(document.getElementById("input" + element.substring(4)).value) - 1;

      conversionBasketPrice (arrBtnQuantytyGoods);
    }else{
      return
    };
  });
});

document.getElementById("send_order_complet")
.addEventListener('click', ()=>{
  checkCorrectBasketGoods(arrOrder);
});

conversionBasketPrice (arrBtnQuantytyGoods);
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

let obj = JSON.parse(localStorage.goodsMemory);

PRODUCT_LIBRARY.forEach(element => {
  element.forEach(e=>{
    if (e.id === obj){
      return obj = e;
    }else{
      return
    };
  });
});

let product = `
  <div class="section_goods__container">
    <div class="section_goods__container__content">
      <img id="goodImage" src="${obj.image[0]}" alt="img goods" class="section_goods__container__content__img">
      <div class="section_goods__container__content__img_all">
        <img id="goodImageFirst" src="${obj.image[0]}" alt="img goods first" class="selected">
        <img id="goodImageSecond" src="${obj.image[1]}" alt="img  goods second" class="unselected">
      </div>
    </div>
    <div class="section_goods__container__content">
      <div class="goods_name">
        <h3>${obj.name}</h3>
        <span>ITEM</span>
        <span class="ITEM">${obj.id}</span>
      </div>
      <div class="section_goods__container__rating">
        <div class="rating_product_container" id=${'rating'+ obj.id}>
          <div class="rating_product_container_star">
            <div></div>
          </div>
          <div class="rating_product_container_star">
            <div></div>
          </div>
          <div class="rating_product_container_star">
            <div></div>
          </div>
          <div class="rating_product_container_star">
            <div></div>
          </div>
          <div class="rating_product_container_star">
            <div></div>
          </div>
        </div>
        <div class="reviews">
          <p><span>1</span>REVIEWS</p>
        </div>
      </div>
      <div class="goods_options">
        <div class="goods_options__priсe">
          <span>As low as</span>
          <span class="goods_priсe">$${obj.sale === 0?obj.prise:(obj.prise/100*(100-obj.sale)).toFixed(2)}</span>
        </div>
        <form action="" class="form_goods">
          <div class="form_color">
            <span class="form__txt">COLOR:</span>
            <div class="box_color">
            </div>
            <span class="form__txt">SIZE:</span>
            <div class="box_size">
            </div>
            <div class="form__btn">
              <button id="${obj.id}" class="btn_add_to" type ="button">ADD TO BAG</button>
              <button id="btn_add_to_wishlist" class="btn_add_to">ADD TO WISHLIST</button>
            </div>
          </div>
        </form>
        <div class="goods_options__network">
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
          <a href="#"></a>
        </div>
        <div class="goods_options__free_shoping">
          <div class="free_shoping__container">
            <p><span>FREE PRIORITY SHIPPING ON ORDERS $99+*</span></p>
            <p><span>FREE RETURNS & EXCHANGES*</span></p>
            <p>- Worry Free Shopping -</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

document.getElementById("section_goods").insertAdjacentHTML("beforeend", product);

createRatingCard(obj);

obj.color.forEach(e=>{
  let elColor = `
  <span class="box_color_label" style = "background-color:${e.articul};"></span>
  `;
  
  document.querySelector(".box_color").insertAdjacentHTML("beforeend", elColor);
});
obj.size.forEach(e=>{
  let elSize = `
  <span class="box_size_label">${e}</span>
  `;
  
  document.querySelector(".box_size").insertAdjacentHTML("beforeend", elSize);
});
document.getElementById(obj.id).addEventListener("click",(e)=>{

  let bascket = JSON.parse(localStorage.basketMemory);
    
  if (bascket.includes(e.target.id)){
    return
  }else{
    bascket.push(e.target.id);
    localStorage.basketMemory = JSON.stringify(bascket);

    checkGoodsBasketTrue();

    document.querySelector(".link_basket").children[0].innerText = JSON.parse(localStorage.basketMemory).length;

  };
});

document.getElementById("goodImageFirst").addEventListener("click", (e)=>{
  if(e.target.classList.value === "unselected"){
    document.getElementById("goodImage").src = document.getElementById("goodImageFirst").src;
    document.getElementById("goodImageSecond").classList.remove("selected");
    document.getElementById("goodImageSecond").classList.add("unselected");
    e.target.classList.remove("unselected");
    e.target.classList.add("selected");
  }else{
    return
  };
});

document.getElementById("goodImageSecond").addEventListener("click", (e)=>{
  if(e.target.classList.value === "unselected"){
    document.getElementById("goodImage").src = document.getElementById("goodImageSecond").src;
    document.getElementById("goodImageFirst").classList.remove("selected");
    document.getElementById("goodImageFirst").classList.add("unselected");
    e.target.classList.remove("unselected");
    e.target.classList.add("selected");
  }else{
    return
  };
});

checkGoodsBasketTrue();
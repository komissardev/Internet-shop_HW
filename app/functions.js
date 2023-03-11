function checkGoodsBasketTrue(){
  if(JSON.parse(localStorage.basketMemory).length === 0){
    document.querySelector(".link_basket").classList.add("unvisible")
  }else if(JSON.parse(localStorage.basketMemory).length > 0){
    document.querySelector(".link_basket").classList.remove("unvisible");
    document.querySelector(".link_basket").children[0].innerText = JSON.parse(localStorage.basketMemory).length;
  }
};

function createCardSale(obj){
  const card = `
   <div class="section_sale__container__content__product_card">
     <img src=${obj.image[0]} alt="product card picture" class="product_card_picture">
     <p class="name_product">
       ${obj.name}
     </p>
     <div class="rating_product_container" id="${'rating'+ obj.id}">
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
     <div class="price_product_info">
       <p>As low as</p>
       <span class="price_product">$${obj.sale === 0?obj.prise:(obj.prise/100*(100-obj.sale)).toFixed(2)}</span>
     </div>
     <button class="section_sale__add_to_cart" id=${obj.id}>add to cart</button>
   </div>
  `;
 
  document.getElementById("section_sale__container__content").insertAdjacentHTML("beforeend", card);
};
 
function createRatingCardSale(obj){
 
   let ratingElements = document.getElementById('rating'+ obj.id);
 
   if (obj.rating === 5){
     for(let x = 0; x < 5; x++){
       ratingElements.children[x].children[0].classList.add('yelow_all')
     };
   }else if(obj.rating < 5 && obj.rating >= 4.5){
     for(let x = 0; x < 4; x++){
       ratingElements.children[x].children[0].classList.add('yelow_all')
     };
     ratingElements.children[4].children[0].classList.add('yelow_half');
   }else if(obj.rating >= 4 && obj.rating < 4.5){
     for(let x = 0; x < 4; x++){
       ratingElements.children[x].children[0].classList.add('yelow_all')
     };
   }else if(obj.rating < 4 && obj.rating >= 3.5){
     for(let x = 0; x < 3; x++){
       ratingElements.children[x].children[0].classList.add('yelow_all')
     };
     ratingElements.children[3].children[0].classList.add('yelow_half');
   }else if(obj.rating >= 3 && obj.rating < 3.5){
     for(let x = 0; x < 3; x++){
       ratingElements.children[x].children[0].classList.add('yelow_all')
     };
   }else if(obj.rating < 3 && obj.rating >= 2.5){
     for(let x = 0; x < 2; x++){
       ratingElements.children[x].children[0].classList.add('yelow_all')
     };
     ratingElements.children[2].children[0].classList.add('yelow_half');
   }else if(obj.rating >= 2 && obj.rating < 2.5){
     for(let x = 0; x < 2; x++){
       ratingElements.children[x].children[0].classList.add('yelow_all')
     };
   }else if(obj.rating < 2 && obj.rating >= 1.5){
     for(let x = 0; x < 1; x++){
       ratingElements.children[x].children[0].classList.add('yelow_all')
     };
     ratingElements.children[1].children[0].classList.add('yelow_half');
   }else if(obj.rating >= 1 && obj.rating < 1.5){
     for(let x = 0; x < 1; x++){
       ratingElements.children[x].children[0].classList.add('yelow_all')
     };
   }else if(obj.rating < 1 && obj.rating >= 0){
     ratingElements.children[0].children[0].classList.add('yelow_half');
   }else{
     console.error("Error that product rating is not exist");
   };
};

function logicsCreateCardSale(){
  if( window.screen.width > 2200){
    let card = 7;
    for (let x = 0; x < card; x++){
      let obj = PRODUCT_SALE[x];
      createCardSale(obj);
      createRatingCardSale(obj);
    }
    maxCard = card;
  }else if( window.screen.width > 1900 &&  window.screen.width < 2200){
    let card = 6;
    for (let x = 0; x < card; x++){
      let obj = PRODUCT_SALE[x];
      createCardSale(obj);
      createRatingCardSale(obj);
    }
    maxCard = card;
  }else if( window.screen.width < 1900 && window.screen.width > 1600){
    let card = 5;
    for (let x = 0; x < card; x++){
      let obj = PRODUCT_SALE[x];
      createCardSale(obj);
      createRatingCardSale(obj);
    }
    maxCard = card;
  }else if ( window.screen.width < 1600 && window.screen.width > 1150){
    let card = 4;
    for (let x = 0; x < card; x++){
      let obj = PRODUCT_SALE[x];
      createCardSale(obj);
      createRatingCardSale(obj);
    }
    maxCard = card;
  } else if(window.screen.width < 1150 && window.screen.width > 870){
    let card = 3;
    for (let x = 0; x < card; x++){
      let obj = PRODUCT_SALE[x];
      createCardSale(obj);
      createRatingCardSale(obj);
    }
    maxCard = card;
  } else if(window.screen.width < 870 && window.screen.width > 570){
    let card = 2;
    for (let x = 0; x < card; x++){
      let obj = PRODUCT_SALE[x];
      createCardSale(obj);
      createRatingCardSale(obj);
    }
    maxCard = card;
  } else if(window.screen.width < 570){
    let obj = PRODUCT_SALE[0];
    createCardSale(obj);
    createRatingCardSale(obj);
    maxCard = 1;
  };
};

function createCard(obj){
  const card = `
    <div class="product_card">
      <img class="product_card__img" src=${obj.image[0]}>
      <p>${obj.name}</p>
      <div class="rating_product_container" id="${'rating'+ obj.id}">
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
      <div class="price_product_info">
        <p>As low as</p>
        <span class="price_product">$${obj.sale === 0?obj.prise:(obj.prise/100*(100-obj.sale)).toFixed(2)}</span>
      </div>
      <div class="product_card_color" id="${"color" + obj.id}">
      </div>
      <button class="section_sale__add_to_cart" id=${obj.id}>add to cart</button>
    </div>
  `;

  document.querySelector(".main_container__content__product").insertAdjacentHTML("beforeend", card);
}

function createColorCard(obj){

  obj.color.forEach(element =>{
    let contentColor = `
    <div>
      <span style="background-color:${element.articul};">
      </span>
    </div>
    `;

    document.getElementById("color" + obj.id).insertAdjacentHTML("beforeend", contentColor);

  })
};

function createRatingCard(obj){

  let ratingElements = document.getElementById('rating'+ obj.id);

  if (obj.rating === 5){
    for(let x = 0; x < 5; x++){
      ratingElements.children[x].children[0].classList.add('yelow_all')
    };
  }else if(obj.rating < 5 && obj.rating >= 4.5){
    for(let x = 0; x < 4; x++){
      ratingElements.children[x].children[0].classList.add('yelow_all')
    };
    ratingElements.children[4].children[0].classList.add('yelow_half');
  }else if(obj.rating >= 4 && obj.rating < 4.5){
    for(let x = 0; x < 4; x++){
      ratingElements.children[x].children[0].classList.add('yelow_all')
    };
  }else if(obj.rating < 4 && obj.rating >= 3.5){
    for(let x = 0; x < 3; x++){
      ratingElements.children[x].children[0].classList.add('yelow_all')
    };
    ratingElements.children[3].children[0].classList.add('yelow_half');
  }else if(obj.rating >= 3 && obj.rating < 3.5){
    for(let x = 0; x < 3; x++){
      ratingElements.children[x].children[0].classList.add('yelow_all')
    };
  }else if(obj.rating < 3 && obj.rating >= 2.5){
    for(let x = 0; x < 2; x++){
      ratingElements.children[x].children[0].classList.add('yelow_all')
    };
    ratingElements.children[2].children[0].classList.add('yelow_half');
  }else if(obj.rating >= 2 && obj.rating < 2.5){
    for(let x = 0; x < 2; x++){
      ratingElements.children[x].children[0].classList.add('yelow_all')
    };
  }else if(obj.rating < 2 && obj.rating >= 1.5){
    for(let x = 0; x < 1; x++){
      ratingElements.children[x].children[0].classList.add('yelow_all')
    };
    ratingElements.children[1].children[0].classList.add('yelow_half');
  }else if(obj.rating >= 1 && obj.rating < 1.5){
    for(let x = 0; x < 1; x++){
      ratingElements.children[x].children[0].classList.add('yelow_all')
    };
  }else if(obj.rating < 1 && obj.rating >= 0){
    ratingElements.children[0].children[0].classList.add('yelow_half');
  }else{
    console.error("Error that product rating is not exist");
  };
};

function createBascketCardEl(obj){
  let card = `
  <div class="goods__card" id="${obj.id}">
    <div class="goods__card_img">
      <img src=${obj.image[0]} alt="goods">
    </div>
    <div class="goods_card__container">
      <div class="goods_name">
        <h3>${obj.name}</h3>
        <span>ITEM<span class="ITEM">${obj.id}</span></span>
      </div>
      <div class="section_goods__container__rating"">
        <div class="rating_product_container" id="${'rating'+ obj.id}">
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
          <span>As low as:</span>
          <span class="goods_priсe" id="price${obj.id}">$${obj.sale === 0?obj.prise:(obj.prise/100*(100-obj.sale)).toFixed(2)}</span>
        </div>
        <form id="${'form' + obj.id}">
          <span class="form__txt">COLOR:</span>
          <div class="radio_color" id="${'radio_color' + obj.id}">

          </div>
          <span class="form__txt">SIZE:</span>
          <div class="radio_size" id="${'radio_size' + obj.id}">

          </div>
        </form>
      </div>
    </div>
    <div class="goods_card__btn">
      <button id="${'delet' + obj.id}"></button>
      <div class="goods_card__quantity">
        <button class="goods_card__quantity__up"  id="${'up' + obj.id}"></button>
        <input type="text" readonly value="1" id="${'input' + obj.id}">
        <button class="goods_card__quantity__down"  id="${'down' + obj.id}"></button>
      </div>
    </div>
  </div>
  `;

  document.querySelector(".section_basket__container__goods").insertAdjacentHTML("beforeend", card);

};

function createFormElColor(obj){

  obj.color.forEach(e=>{
    let elColor = `
    <input name="radioColor${obj.id}"  type="radio" class="radio_color_input" id="${'radioColor'+ obj.id + e.articul}" value="${e.colorName}">
    <label  style="background-color:${e.articul};" for="${'radioColor'+ obj.id + e.articul}" class="radio_color_label"></label>
    `;
    
    document.getElementById(`${'radio_color' + obj.id}`).insertAdjacentHTML("beforeend", elColor);
  })
};

function createFormElSize(obj){
  obj.size.forEach(e=>{
    let elSize = `
    <input name="radioSize${obj.id}"  type="radio" class="radio_size_input" id="${'radioSize'+ obj.id + e}" value="${e}">
    <label for="${'radioSize'+ obj.id + e}" class="radio_size_label">${e}</label>
    `;
    
    document.getElementById(`${'radio_size' + obj.id}`).insertAdjacentHTML("beforeend", elSize);
  })
};

function main(arr, memoryPage, secondPage){
  let data = arr.slice(memoryPage, secondPage);

  data.forEach((e, i)=>{
    createCard(data[i]);
    createColorCard(data[i]);
    createRatingCard(data[i]); 
  });
};

function removeElChildren(El){
  let [...arr] = El.children;
  arr.forEach(e => e.remove())
};

function filterElemetnOptionSize(arr){
  let arrDuplication = [];
  arr.forEach(e=>{
   e.size.forEach(e=>{
     if (arrDuplication.includes(e)){
       return
     }else{
       arrDuplication.push(e)
     };
   });
 });
 return arrDuplication;
};

function filterElemetnOptionColor(arr){
  let arrDuplication = [];
  arr.forEach(e=>{
    e.color.forEach(e=>{
      if (arrDuplication.includes(e.articul)){
        return
      }else{
        arrDuplication.push(e.articul)
      };
    });
  });
  return arrDuplication;
};

function SortNum(arr){
  arr.sort(function(a, b){
    return a - b
  });
};

function eventClickCard (arr){
  arr.forEach((e)=>{
    e.addEventListener("click", (e)=>{
      if(e.target.className !== "section_sale__add_to_cart"){
        console.log(e.target);
        if(e.target.className === "product_card__img"){
          localStorage.goodsMemory = JSON.stringify(e.target.offsetParent.lastElementChild.id);
        }else{
          localStorage.goodsMemory = JSON.stringify(e.target.lastElementChild.id);
        }
        window.location.href = "/pages/goods.html"
      }else if(e.target.className === "section_sale__add_to_cart"){
        let bascket = JSON.parse(localStorage.basketMemory);
        if (bascket.includes(e.target.id)){
          return
        }else{
          bascket.push(e.target.id);
          localStorage.basketMemory = JSON.stringify(bascket);
  
          checkGoodsBasketTrue();
  
          document.querySelector(".link_basket").children[0].innerText = JSON.parse(localStorage.basketMemory).length;
          
        };
      };
    });
  });
}

function createElementOptionSize(arr, fatherElemId){
  arr.forEach(e=>{
    let ElementOptionSize = `
    <input class="input_size" type="checkbox" id="size${e}">
    <label class="label_size" for="size${e}">${e}</label>
    `;

    document.getElementById(fatherElemId).insertAdjacentHTML("beforeend", ElementOptionSize);
  });
};

function createElementOptionColor(arr, fatherElemId){
  arr.forEach(e=>{
    let ElementOptionColor = `
    <input class="input_color" type="checkbox" id="color${e}">
    <label style="background: ${e};" class="label_color" for="color${e}"></label>
    `;

    document.getElementById(fatherElemId).insertAdjacentHTML("beforeend", ElementOptionColor);
  })
};

function filterAllElementsGoods(){
  allElementsGoodsSize = document.querySelectorAll(".input_size"),
  allElementsGoodsColor = document.querySelectorAll(".input_color");

  allElementsGoodsSize.forEach(e=>{
    e.addEventListener("change", ()=>{
      let variable = parseFloat(e.id.slice((e.id.length - 2),(e.id.length))),
      arr = [];

      if (e.checked === true){
        options_size.push(variable);

        options_size.sort(function(a, b){
          return a - b
        });

        if(options_size.length > 0 && options_color.length <= 0){
          allProductArr = JSON.parse(localStorage.linkMemory);

          filterGoodsArr = [];

          options_size.forEach(variable=>{
            allProductArr.forEach(element=>{
              element.size.forEach(e=>{
                if (e === variable){
                  filterGoodsArr.push(element);
                }else{
                  return
                };
              });
            });
          });

          arr = filterGoodsArr.filter((item, index) =>{
            return index === filterGoodsArr.indexOf(item);
          });

          allProductArr = arr;

        }else if(options_color.length > 0 && options_size.length > 0){
          let arrTemp = [];
          allProductArr = JSON.parse(localStorage.linkMemory);
          filterGoodsArr = [];

          options_color.forEach(variable=>{
            allProductArr.forEach(element=>{
              element.color.forEach(e=>{
                if (e.articul === variable){
                  filterGoodsArr.push(element);

                }else{
                  return
                };
              });
            });
          });

          arrTemp = filterGoodsArr.filter((item, index) =>{
            return index === filterGoodsArr.indexOf(item);
          });

          filterGoodsArr = [];

          options_size.forEach(variable=>{
            arrTemp.forEach(element=>{
              element.size.forEach(e=>{
                if (e === variable){
                  filterGoodsArr.push(element);
                }else{
                  return
                };
              });
            });
          });
        };

      }else if (e.checked === false){
        options_size.splice(options_size.indexOf(variable), 1);

        if (options_size.length > 0 && options_color.length <= 0){
          allProductArr = JSON.parse(localStorage.linkMemory);
          filterGoodsArr = [];
  
          options_size.forEach(variable=>{
            allProductArr.forEach(element=>{
              element.size.forEach(e=>{
                if (e === variable){
                  filterGoodsArr.push(element);
                }else{
                  return
                };
              });
            });
          });

        }else if(options_size.length <= 0 && options_color.length > 0){
          allProductArr = JSON.parse(localStorage.linkMemory);
          filterGoodsArr = [];
  
          options_color.forEach(variable=>{
            allProductArr.forEach(element=>{
              element.color.forEach(e=>{
                if (e.articul === variable){
                  filterGoodsArr.push(element);
  
                }else{
                  return
                };
              });
            });
          });
        };
      };

      arr = filterGoodsArr.filter((item, index) =>{
        return index === filterGoodsArr.indexOf(item)
      });

      allProductArr = arr,
      memoryPage = 0,
      secondPage = 10,
      pageStep = 0;

      document.getElementById("thirdBtnPagin").classList.remove("chosen");
      document.getElementById("secondBtnPagin").classList.add("chosen");

      document.getElementById("secondBtnPagin").innerText = secondPage/10;
      document.getElementById("thirdBtnPagin").innerText = secondPage/10 + 1;

      if(options_size.length <= 0 && options_color.length <= 0){
        allProductArr = JSON.parse(localStorage.linkMemory);
      }

      removeElChildren(document.querySelector(".main_container__content__product"));
      main(allProductArr,memoryPage,secondPage);

      mousEventCard = [];
      [...mousEventCard] = document.querySelectorAll(".product_card");
      eventClickCard(mousEventCard);
    });
  });

  allElementsGoodsColor.forEach(e=>{
    e.addEventListener("change", ()=>{
      let variable = e.id.slice(5),
      arr = [];

      if (e.checked === true){
        options_color.push(variable);

        if (options_size.length <= 0 && options_color.length > 0){
          allProductArr = JSON.parse(localStorage.linkMemory);
          filterGoodsArr = [];

          options_color.forEach(variable=>{
            allProductArr.forEach(element=>{
              element.color.forEach(e=>{
                if (e.articul === variable){
                  filterGoodsArr.push(element);
                }else{
                  return
                };
              });
            });
          });

        }else if(options_size.length > 0 && options_color.length > 0){
          allProductArr = JSON.parse(localStorage.linkMemory);
          filterGoodsArr = [];
          let arrTemp = [];

          options_size.forEach(variable=>{
            allProductArr.forEach(element=>{
              element.size.forEach(e=>{
                if (e === variable){
                  filterGoodsArr.push(element);
                }else{
                  return
                };
              });
            });
          });

          arrTemp = filterGoodsArr.filter((item, index) =>{
            return index === filterGoodsArr.indexOf(item);
          });

          filterGoodsArr = [];

          options_color.forEach(variable=>{
            arrTemp.forEach(element=>{
              element.color.forEach(e=>{
                if (e.articul === variable){
                  filterGoodsArr.push(element);
  
                }else{
                  return
                };
              });
            });
          });
        };

      }else if(e.checked === false){
        options_color.splice(options_color.indexOf(variable), 1);
        if(options_size.length <= 0 && options_color.length > 0){
          allProductArr = JSON.parse(localStorage.linkMemory),
          filterGoodsArr = [];

          options_color.forEach(variable=>{
            allProductArr.forEach(element=>{
              element.color.forEach(e=>{
                if (e.articul === variable){
                  filterGoodsArr.push(element);
                }else{
                  return
                };
              });
            });
          });

        }else if(options_size.length > 0 && options_color.length <= 0){
          allProductArr = JSON.parse(localStorage.linkMemory);
          filterGoodsArr = [];

          options_size.forEach(variable=>{
            allProductArr.forEach(element=>{
              element.size.forEach(e=>{
                if (e === variable){
                  filterGoodsArr.push(element);
                }else{
                  return
                };
              });
            });
          });
        };
      };

      if(options_color.length <= 0){
        allProductArr = JSON.parse(localStorage.linkMemory);
      };

      if(options_size.length > 0 && options_color.length <= 0){
        allProductArr = JSON.parse(localStorage.linkMemory);
        filterGoodsArr = [];

        options_size.forEach(variable=>{
          allProductArr.forEach(element=>{
            element.size.forEach(e=>{
              if (e === variable){
                filterGoodsArr.push(element);
              }else{
                return
              };
            });
          });
        });

        arr = filterGoodsArr.filter((item, index) =>{
          return index === filterGoodsArr.indexOf(item);
        });

        allProductArr = arr;

      }else if(options_size.length <= 0 && options_color.length <= 0){
        allProductArr = JSON.parse(localStorage.linkMemory);
      };

      arr = filterGoodsArr.filter((item, index) =>{
        return index === filterGoodsArr.indexOf(item)
      });
  
      allProductArr = arr,
      memoryPage = 0,
      secondPage = 10,
      pageStep = 0;
  
      document.getElementById("thirdBtnPagin").classList.remove("chosen");
      document.getElementById("secondBtnPagin").classList.add("chosen");
  
      document.getElementById("secondBtnPagin").innerText = secondPage/10;
      document.getElementById("thirdBtnPagin").innerText = secondPage/10 + 1;
  
      if(options_size.length <= 0 && options_color.length <= 0){
        allProductArr = JSON.parse(localStorage.linkMemory);
      };
  
      removeElChildren(document.querySelector(".main_container__content__product"));
      main(allProductArr,memoryPage,secondPage);

      mousEventCard = [];
      [...mousEventCard] = document.querySelectorAll(".product_card");
      eventClickCard(mousEventCard);
    });
    
  });
};

function conversionBasketPrice(arr){
  price = 0;
  arr.forEach(element=>{
    let a = parseFloat(document.getElementById("price" + element.substring(5)).innerText.substring(1));
    let b = parseInt(document.getElementById(element).value);
    price += a * b;
  });

  document.getElementById("paid").innerText = price.toFixed(2);
};
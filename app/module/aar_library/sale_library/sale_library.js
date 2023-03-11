const PRODUCT_SALE = [];

PRODUCT_LIBRARY.forEach(element=>{
  element.forEach(e=>{
    if (e.sale > 0){
      PRODUCT_SALE.push(e);
    }else{
      return
    };
  });
});
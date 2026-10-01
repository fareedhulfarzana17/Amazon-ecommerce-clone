    import{products} from "./data.js";
    import{cart,localStorageCart,updatecartquantity,wholequantity} from"./cart.js";
   

    let productsContainerElement=document.querySelector(".products-container");
    let htmllines="";;

    
products.forEach((value)=>{
  htmllines=
    `<div class="product">
    <img src="${value.image}" class="productimgclass">
    <p class="producttextclass">${value.name}</p>
    <div class="ratings">
    <img src="images/ratings/rating-${(value.rating.star)*10}.png" class="ratingimgclass">
      <p class="ratings-count">${value.rating.count} </p>
    </div>
      <h3 class="price">
      $${(value.price/100).toFixed(2)} 
    </h3>
    <select class="quantityclass-${value.id}">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    <p class="addedtextclass addedtextclassremove" data-product-id="${value.id}">Added</p>
    <button class="product-button-class" data-product-id="${value.id}">Add to cart</button>

    </div>`
    productsContainerElement.innerHTML+=htmllines;

    })
    

let addToCartButtonElement=document.querySelectorAll(".product-button-class");
let cartAddedCountElement=document.querySelector(".cartAddedCount");
let addedtextclassElement=document.querySelectorAll(".addedtextclass");
let addedtimeout;
 updatecartquantity();


 

addToCartButtonElement.forEach((button)=>
{
  button.addEventListener("click",()=>{



    let productIdadd=button.dataset.productId;
    let addedtextclassid=document.querySelector(`.addedtextclass[data-product-id="${productIdadd}"]`)

    addedtextclassid.classList.add(`addedtextclassadd`);

    addedtextclassid.classList.remove(`addedtextclassremove`);

    console.log(addedtextclassid);

    clearTimeout(addedtimeout);

    addedtimeout=setTimeout(() => {
    addedtextclassid.classList.remove(`addedtextclassadd`);
    addedtextclassid.classList.add(`addedtextclassremove`);


    }, 1000);
    let {productId}=button.dataset;
//let productId=button.dataset.productId;
   
    let quantityclasselement;
    let selectvalue;



    quantityclasselement=document.querySelector(`.quantityclass-${productId}`); 
    selectvalue=Number(quantityclasselement.value);
    console.log(selectvalue);













let  check=false;





  


cart.forEach((item)=>
  {
    
  if(productId===item.productIds)
      {
        item.quantity+=selectvalue;
        check=true;

      }
})
if(!check){
cart.push(
  {productIds:productId,
    quantity:selectvalue,
    deliveryoption:1
  
  })}





 updatecartquantity();
 cartAddedCountElement.innerHTML=wholequantity;

console.log(cartAddedCountElement);
localStorageCart();











})



});
cartAddedCountElement.innerHTML=wholequantity;




          

          
          



    

  
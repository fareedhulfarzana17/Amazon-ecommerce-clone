import{cart,localStorageCart,updatecartquantity,wholequantity,updateincheckout} from "../cart.js";
import{products} from "../data.js";
import{caculatedeliverydate}from "../deliverydays.js";
import{paymentsummary} from "./checkout/paymentsummary(rightcheckout).js";

 
export function ordersummary(){
  
let wholeleftcontainerElement=document.querySelector(".whole-left-container");
let jscartquantityElement=document.querySelector(".jscartquantity");
let htmllines="";





  cart.forEach((cartitem)=>{
 

  
  let productId=cartitem.productIds;
  products.forEach((productitem)=>{
    if(productId===productitem.id)
      {
        
        let deliverydata=caculatedeliverydate(cartitem);
        




   
        
        

        

       
        
       htmllines+=
       `<div class="order js-del-${productId}">
    <h4 class="js-deliverydate-${productId} deliverydate">Delivery date:${deliverydata.delivery}</h4>
    <div class="ordertextdiv">
      <img src="${productitem.image}"class="ordertextdivimg">
      <div class="productdetails">
        <p class="productname">${productitem.name}
          </p>
          <p class="price">$${((productitem.price)/100).toFixed(2)}</p>
          <div class="quantityupdeleteclass">
          <p class="quantity js-quantity-${productId}">Quantity:${cartitem.quantity}</p>
          <p class="update" data-product-id="${productitem.id}">Update</p>
          <input type="number" class="inputupdate js-inputupdate-${productId}">
          <p class="save js-save-${productId}" data-product-id="${productitem.id}">Save</p>
      
          <p class="delete" data-product-id="${productitem.id}">Delete</p>
          </div>
        </div>
        <div class="deliveryoptions">
          <h3 class="deliveryoptionstext">Choose a delivery option:</h3>
          
          
${deliverydata.deliveryoptions}
        </div>
    </div>
  </div>`
 
  console.log(wholequantity);
  
      }

     
      
      
      })
    })
     

    



   
  
  
     
  
        
      
    
    console.log(cart)
  
  
  
   
  
 
 
 

  wholeleftcontainerElement.innerHTML=htmllines;
   let radiobuttonElement=document.querySelectorAll(".inputclassdelivery");
radiobuttonElement.forEach((radio)=>{
  radio.addEventListener('change',()=>{
    let selecteddate=radio.dataset.deliveryDate;
    let productId=radio.name;
    let deliverydateinnerhtml=document.querySelector(`.js-deliverydate-${productId}`);
    deliverydateinnerhtml.innerHTML=`Delivery date: ${selecteddate}`;
    
    
    
let deliveryoptionId=radio.dataset.deliveryoptionId;
cart.forEach((cartitem)=>
{
  
if(cartitem.productIds===productId)
  {

  cartitem.deliveryoption=Number(deliveryoptionId);

  }
  paymentsummary();


})

console.log(cart);




  })
  



})
   updatecartquantity()
    
    jscartquantityElement.innerHTML=`${wholequantity} items`;
    
    

    let deletebuttonElement=document.querySelectorAll(".delete");
    
   
    
    deletebuttonElement.forEach((button)=>{
    

       button.addEventListener("click",()=>
  {
       let productIddel=button.dataset.productId;
    cart.forEach((cartitem2,index)=>
      {
         

      if(cartitem2.productIds===productIddel)
        {
             cart.splice(index,1)
             localStorageCart();

             }
            
      
      
           
                          

             
    
            })
      console.log(cart);
       const del=document.querySelector(`.js-del-${productIddel}`);
              del.remove();
                updatecartquantity();
                paymentsummary()
    
    jscartquantityElement.innerHTML=`${wholequantity} items`;
      
    
})

  


    })

    
   updateincheckout(jscartquantityElement);

  }

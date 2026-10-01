export let cart=JSON.parse(localStorage.getItem("cart"));
// import{deliverydays}from "./deliverydays.js";

if(!cart){
  cart=[
  {
    productIds:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:1,
    deliveryoption:1

    
    

  },
   {
    productIds:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity:1,
    deliveryoption:1
    
   
  },
   
 

  
]
}

export function localStorageCart(){
  localStorage.setItem("cart",JSON.stringify(cart));
}; 
export let wholequantity=0;
export function updatecartquantity(){
      wholequantity=0;
  cart.forEach((item)=>{
  wholequantity+=item.quantity;
  })
   }

  export function updateincheckout(jscartquantityElement,wholequantity){
    
      let updatebuttonElement=document.querySelectorAll(".update");
    let savebuttonElement=document.querySelectorAll(".save");
    
   
    
    updatebuttonElement.forEach((button)=>{
      

      button.addEventListener("click",()=>{
        let updateproductId=button.dataset.productId;
        let inputupdateElement=document.querySelector(`.js-inputupdate-${updateproductId}`);
     let saveElement=document.querySelector(`.js-save-${updateproductId}`);
        
        button.classList.add("inactive");
          saveElement.classList.add(`active`);
         inputupdateElement.classList.add('active');
        console.log(updateproductId);
function save(){
   button.classList.remove("inactive");
          saveElement.classList.remove(`active`);
         inputupdateElement.classList.remove('active');
        let newupdatequantity=inputupdateElement.value;
        console.log(newupdatequantity);
        if(newupdatequantity>=0 && newupdatequantity<=1000)
        {

        cart.forEach((item)=>{
          let quantityElement=document.querySelector(`.js-quantity-${item.productIds}`)
          if(item.productIds===updateproductId){
            item.quantity=Number(newupdatequantity);
            localStorageCart();
            updatecartquantity();
             jscartquantityElement.innerHTML=`${wholequantity} items`;
             quantityElement.innerHTML=`Quantity:${newupdatequantity}`;

            return wholequantity;

          }
        })
      }
      else{
        alert(`Quantity:0 to 1000 only applicable`)
      }
         
  
}

        
      saveElement.addEventListener("click",()=>
        {
       save();


         
      })



       inputupdateElement.addEventListener("keydown",(event)=>{
          if(event.key==="Enter"){
            save();
     

          }
        })
        
    


      })
    })
  }



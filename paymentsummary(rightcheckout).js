import{cart,localStorageCart,wholequantity} from "../cart.js";
import {products} from"../data.js";
import{moneyconverter} from "../utils/moneyconverter.js"
import {deliverydays} from "../deliverydays.js";

export function paymentsummary()
{
  let productprice=0;
  let rawtotalcents=0;
  let productquantity;
  let deliveryoptionId;
  let shippingcents=0;
  let rawtotalprice=0;
  let shippingprice=0;
  let totalbeforetax=0;
  let totalbeforetaxcents=0;
  let taxcal=0;
  let totalorder=0;
  let taxcalcents=0;

    cart.forEach((cartitem)=>
    {
      let productId=cartitem.productIds;
        products.forEach((productitem)=>
            {
            if(productId==productitem.id)
              {
              productprice=productitem.price;
              productquantity=cartitem.quantity;
              rawtotalcents+=productprice*productquantity;
             
              deliveryoptionId=cartitem.deliveryoption;
              
              
              deliverydays.forEach((deliveryid)=>{
                if(deliveryoptionId===deliveryid.id)
                  {
                  shippingcents+=deliveryid.price; 
                }
              })

              
              }
            })
        


    })
     rawtotalprice=moneyconverter(rawtotalcents);
     shippingprice=moneyconverter(shippingcents);  
    totalbeforetaxcents=rawtotalcents+shippingcents
     totalbeforetax= moneyconverter(rawtotalcents+shippingcents)
     taxcalcents=Math.round((totalbeforetaxcents*0.1).toFixed(2))
     taxcal=moneyconverter(taxcalcents)
     totalorder=moneyconverter(totalbeforetaxcents + taxcalcents)
    console.log(rawtotalprice);
    console.log(shippingprice);
    console.log(totalbeforetax);
    console.log(taxcal);
    console.log(totalorder);






let paymentsummaryclass=document.querySelector(".whole-right-container");
let paymentsummaryhtml;


  paymentsummaryhtml =` <div class="whole-right-container-mini">
    <h3 class="right-container-next">
      Order Summary
    </h3>
    <table>
      <tr>
        <td>Items (${wholequantity}):</td>
        <td>$ ${rawtotalprice}</td>

      </tr>
      <tr>
        <td>Shipping & handling:
</td>
        <td>$ ${shippingprice}</td>

      </tr>
      <tr>
        <td></td>
        <td><hr></td>
      </tr>
      <tr>
        <td>Total before tax:
</td>
        <td>$ ${totalbeforetax}</td>

      </tr>
      <tr>
        <td>Estimated tax (10%):
</td>
        <td>$ ${taxcal}</td>

      </tr>
      <tr>
        <tr>
          <td><hr></td>
          <td><hr></td>
        </tr>
        <td class="ordertotaltext">Order total:
</td>
        <td class="ordertotaltext">$ ${totalorder}</td>

      </tr>


    </table>
    <button class="placebutton">Place your order</button>
</div>`

paymentsummaryclass.innerHTML=paymentsummaryhtml;

    localStorageCart();


}
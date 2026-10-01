import{moneyconverter}from "./utils/moneyconverter.js";

export const deliverydays=[
  {
  id:1,
  days:7,
  price:0
},
{
  id:2,
  days:4,
  price:499
},
{
  id:3,
  days:1,
  price:999
}
]

export function caculatedeliverydate(cartitem){
          let todayformat;
          let delivery;
          let deliveryoptions=``;
        deliverydays.forEach((deliverydate)=>{
    
          let today=dayjs();
          
          
          let shipping;
          let checkornot;
          if(deliverydate.price>0){
            shipping=moneyconverter(deliverydate.price)
          }
          else{
            shipping="FREE"
            
          }
         
        
          if(deliverydate.id==cartitem.deliveryoption){
            checkornot="checked";
            delivery=todayformat; 
          }
          else{
            checkornot=""
            
            
          } 
          let remainingdays=deliverydate.days;
          while(remainingdays>0){

            today=today.add(1,'days');
            let day=today.format('dddd')
            if(day!='Sunday' && day!="Saturday"){
              remainingdays--

            }
            

          }
          todayformat=today.format('dddd, MMMM D');
        deliveryoptions += 
        `
        <input type="radio"  name="${cartitem.productIds}" ${checkornot} data-delivery-date="${todayformat}"  data-deliveryoption-id="${deliverydate.id}" class="inputclassdelivery"><label>${todayformat}<br><span class="shippingtext"> $  
${shipping} - Shipping</span></label>
<br>
      
`;




 

        })
        return{
  deliveryoptions,
  delivery,
  
}
      }
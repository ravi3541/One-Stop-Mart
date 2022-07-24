// import './../utils/coupon' 
/// <reference lib="webworker" />

addEventListener('message', ( {data} ) => {

  let cart = data.cart
  let coupon = data.coupon

  let discount = checkDiscount(cart, coupon)

  postMessage(discount);
});



function checkDiscount(cart, coupon){
  let categoryTotal = 0
  let discount = 0


  switch (coupon.toUpperCase()){

    case 'EAR00010':
      for(let i in cart){
        if(cart[i].category =="earring"){
          categoryTotal += cart[i].total
        }
      }

      if (categoryTotal>1500){
        discount = categoryTotal * 0.10
        return  discount
      }

      return discount
      break;

    case 'NEC00020':
      
      for(let i in cart){
        if(cart[i].category =="necklace"){
          categoryTotal += cart[i].total
        }
      }

      if (categoryTotal>2500){
        discount = categoryTotal * 0.20
        return  discount
      }

      return discount
      break;

    
    case 'RIN00015':

      for(let i in cart){
        if(cart[i].category =="ring"){
          categoryTotal += cart[i].total
        }
      }

      if (categoryTotal>2000){
        discount = categoryTotal * 0.15
        return  discount
      }
      return discount
      break;

    case 'BRC00025':
      for(let i in cart){
        if(cart[i].category =="bracelet"){
          categoryTotal += cart[i].total
        }
      }

      if (categoryTotal>3000){
      discount = categoryTotal * 0.25
      return  discount
      }
      return discount
      break;

    case 'BRCRIN20':

      for(let i in cart){
        if(cart[i].category =="bracelet" || cart[i].category == "ring"){
          categoryTotal += cart[i].total
        }
      }

      if (categoryTotal>5000){
      discount = categoryTotal * 0.20
      return  discount
      }
      return discount
      break;


    case 'NECRIN25':

      for(let i in cart){
        if(cart[i].category =="necklace" || cart[i].category == "ring"){
          categoryTotal += cart[i].total
        }
      }

      if (categoryTotal>5000){
      discount = categoryTotal * 0.25
      return  discount
      }
      return discount
      break;

      
    case 'EARNEC20':

      for(let i in cart){
        if(cart[i].category =="earring" || cart[i].category == "necklace"){
          categoryTotal += cart[i].total
        }
      }

      if (categoryTotal>5000){
      discount = categoryTotal * 0.20
      return  discount
      }
      return discount
      break;

    default:
      return 0

  }
  
}


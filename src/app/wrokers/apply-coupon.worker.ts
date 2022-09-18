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
  console.log(cart)


  switch (coupon.toUpperCase()){

    case 'HMKT0010':
      for(let i in cart){
        if(cart[i].category =="homekitchen"){
          categoryTotal += cart[i].total
        }
      }

      if (categoryTotal>1500){
        discount = categoryTotal * 0.10
        return  discount
      }

      return discount
      break;

    case 'ELEC0020':
      
      for(let i in cart){
        if(cart[i].category =="electronics"){
          categoryTotal += cart[i].total
        }
      }

      if (categoryTotal>2500){
        discount = categoryTotal * 0.20
        return  discount
      }

      return discount
      break;

    
    case 'GRCS0015':

      for(let i in cart){
        if(cart[i].category =="groceries"){
          categoryTotal += cart[i].total
        }
      }

      if (categoryTotal>2000){
        discount = categoryTotal * 0.15
        return  discount
      }
      return discount
      break;

    case 'PRCR0025':
      for(let i in cart){
        if(cart[i].category =="personalcare"){
          categoryTotal += cart[i].total
        }
      }

      if (categoryTotal>3000){
      discount = categoryTotal * 0.25
      return  discount
      }
      return discount
      break;

    case 'PRGR0020':

      for(let i in cart){
        if(cart[i].category =="personalcare" || cart[i].category == "groceries"){
          categoryTotal += cart[i].total
        }
      }

      if (categoryTotal>5000){
      discount = categoryTotal * 0.20
      return  discount
      }
      return discount
      break;


    case 'ELGR0025':

      for(let i in cart){
        if(cart[i].category =="electronics" || cart[i].category == "groceries"){
          categoryTotal += cart[i].total
        }
      }

      if (categoryTotal>5000){
      discount = categoryTotal * 0.25
      return  discount
      }
      return discount
      break;

      
    case 'HKEL0020':

      for(let i in cart){
        if(cart[i].category =="homekitchen" || cart[i].category == "electronics"){
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


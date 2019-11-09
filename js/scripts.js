//Business Logic

function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.price = 0
}

Pizza.prototype.getPrice = function() {
  this.toppings.forEach(function(topping) {
    this.price +=1;
  })
  if (size === 10) {
    this.price += 8;
  }
  else if (size === 14) {
    this.price += 10;
  }
  else if (size === 18) {
    this.price += 12;
  }
  return this.price;
  }

//User Interface Logic
$(document).ready(function() {
  $("form#choices").submit(function(event) {
      event.preventDefault;


      let toppingsInput = $("input:checkbox[name=toppings]:checked");
      let toppingArray = [];
      let size = parseInt($("input:radio[name=size]:checked").val());
      //   toppingsInput.forEach(myFunction(toppingInput)) {
      //     function myFunction {
      //       toppingArray.push(toppingInput.val());
      //     }
      // })
      let myPizza = new Pizza(size, toppingArray);
      let price = myPizza.getPrice();

      console.log(price);
      console.log(sizeInput);
      console.log(toppingsInput);


      $("#price").text(price);
  })
});

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
  if (size === 14) {
    this.price += 10;
  }
  if (size === 18) {
    this.price += 12;
  }
  return this.price;
}

//User Interface Logic
$(document).ready(function() {
  $("#choices").submit(function(event) {
      event.preventDefault;

      let toppingArray = [];
      let toppingsInput = $("#choices: checked");
      let sizeInput = parseInt($("#choices: checked"));
        toppingsInput.forEach(function(toppingInput) {
          toppingArray.push(toppingInput.val());
        })
        let myPizza = new Pizza(sizeInput, toppingArray);
        let price = myPizza.getPrice();

        $("#price") = "";
        $("#price").text(price);
  })
});

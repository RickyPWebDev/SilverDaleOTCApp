
function feedBack() {

var product = document.getElementById("product").value;
var stock = document.getElementById("stock").value;
var price = document.getElementById("price").value;
var productDetail = "you have entered the following product details " + "product: " + product 
+ " " + "Quantity: " + stock + " " + "price: " + price;

var userFeedBack = document.getElementById("feedback");

userFeedBack.innerHTML = productDetail;


}
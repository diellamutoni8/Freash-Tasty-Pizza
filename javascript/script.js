var price , crust_price, topping_price ;
var total = 0;
function findpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}



$(document).ready(function(){

  $("button.order").click(function(event){
   var pname = $(".name option:selected").val();
   var psize = $("#size option:selected").val();
   var pcrust = $("#crust option:selected").val();
   var ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

   switch(psize){
    case "0":
      price =0;
    break;
    case "large":
       price = 15000;
       console.log(price);
     break;
     case "medium":
       price = 10000;
       console.log("price  "+price);
     break;
     case "small":
       price = 5000;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(pcrust){
      case "0":
        crust_price = 0;
      break;
      case "Crispy":
        crust_price = 5000;
      break;
      case "Stuffed":
        crust_price = 2500;
      break;
      case "Gluten":
        crust_price = 1800;
      break;
      default:
        console.log("No price"); 
    }
    var topping_value = ptopping.length*1000;
    console.log("toppins value" + topping_value);

    if((psize == "0") && (pcrust == "0")){
      console.log("nothing selected");
      $("button.order").show();
      $("#about-us").show();
      $("div.make-choice").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("button.order").hide();
      $("#about-us").hide();
      $("div.make-choice").slideDown(500);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    var checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#nameofpizza").html($(".name option:selected").val());
    $("#sizeofpizza").html( $("#size option:selected").val());
    $("#crustofpizza").html($("#crust option:selected").val());
    $("#toppingofpizza").html(ptopping.join(", "));
    $("#totals").html(total);
    
    $("button.addPizza").click(function(){
      let pname = $(".name option:selected").val();
      let psize = $("#size option:selected").val();
      let pcrust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
      switch(psize){
        case "0":
          price =0;
        break;
        case "large":
           price = 15000;
           console.log(price);
         break;
         case "medium":
           price = 10000;
           console.log(" price  "+price);
         break;
         case "small":
           price = 10000;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(pcrust){
          case "0":
            crust_price = 0;
          break;
          case "Crispy":
            crust_price = 15000;
          break;
          case "Stuffed":
            crust_price = 10000;
          break;
          case "Gluten":
            crust_price = 5000;
          break;
          default:
            console.log("No price"); 
        }
        var topping_value = ptopping.length*1000;
        console.log("toppins value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      var newOrder = new findpizza(pname, psize, pcrust,ptopping,total);

      $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
      
      

    });
    
    $("button#checkout").click(function () {
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(500);
      $("#price").slideDown(1000);
      console.log("Your total bills is RWF. " + checkoutTotal);
      $("#pizzatotal").append("Your bill is RWF. " + checkoutTotal);
    });

    
    $("#momo").click(function () {
      $("#momoForm").show();
      $(".cardForm").hide();
    });

    $("#cardpay").click(function () {
      $(".cardForm").show();
      $("#momoForm").hide();
    });
    $("#momoForm").submit(function () {
      alert("Your payment is in process. Thank you  for choosing Fresh&Tasty Pizza");
    });
    $(".cardForm").submit(function () {
      alert("Your payment is in process. Thank you  for choosing Fresh&Tasty Pizza");
    });

    $("button.deliver").click(function(){
      $(".pizzatable").hide();
      $(".make-order h2").hide();
      $(".delivery").slideDown(500);
      $("#price").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      var deliceryamount= checkoutTotal+2000;
      console.log("You will pay RWF. "+deliceryamount+" on delivery");
      $("#bill").append("Your bill plus delivery fee is: "+deliceryamount);
    });

    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      var deliceryamount= checkoutTotal+2000;
      console.log("Final Bill is: "+deliceryamount);
      var person = $("input#name").val();
      var phone = $("input#phone").val();
      var location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""&& $("#momoForm :input").val()!=""){
  
        $("#message").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare  "+deliceryamount+" RWF");
        $("#bill").hide();
        $("#message").slideDown(1000);
      }
      else {
        alert("Kindly choose your payment method ");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
   });
  });


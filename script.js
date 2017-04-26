var sandwich = $(".sandwich");

console.log(sandwich);

var ourSandwich = $("#sandwich-cheese");

// console.log(ourSandwich.width());
// console.log(ourSandwich.height());
// console.log(sandwich.length);
// console.log(sandwich.togleClass("cheese"));

// ourSandwich.addClass('food delicious');
// ourSandwich.removeClass('delicious');

var lettuce = $('.lettuce');

function lettuceClicked(){
    var newHeight = $(this).height();
    // console.log(height);
   newHeight = newHeight + 20;

    $(this).height(newHeight);
}

lettuce.click(lettuceClicked);

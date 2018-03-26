module.exports = function (){
  return {
    add: function(num1, num2) {
         var sum = num1 + num2;
         return sum;
         console.log(sum);
    },
    multiply: function(num1, num2) {
         var product = num1 * num2;
         return product;
         console.log(product);
    },
    square: function(num) {
         var square = num * num;
         return square;
         console.log(square);
    },
    random: function(num1, num2) {
         var random = Math.floor(Math.random() * num2);
    }
  }
};

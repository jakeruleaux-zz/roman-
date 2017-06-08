$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var number =$("input#number").val();

// var digit = function(number) {
    if ((number !== "0") || (number !== "1") || (number !== "2") || (number !== "3") || (number !== "4") || (number !== "5") || (number !== "6") || (number !== "7") || (number !== "8") || (number !== "9")) {
        warning = "please use single digit numeric values"
    }

     if ((number.charAt(0) === "0") || (number.charAt(0) === "1") || (number.charAt(0) === "2") || (number.charAt(0) === "3") || (number.charAt(0) === "4") || (number.charAt(0) === "5") || (number.charAt(0) === "6") || (number.charAt(0) === "7") || (number.charAt(0) === "8") || (number.charAt(0) === "9")) {
       warning = "its a number!"
     }
    //  var romans = [[9,'IX'],[8,'VII' ],[7, "VII"],
    //  [6, "VI"],[5, 'V'],[4, 'IV'],[3, "III"],[2, "II"],[1, 'I']];
    // // for (var index = 0; index <= number.length; index += 1){

    $("#result").text(warning);
    // if (number === 2 ) {
    });
  });

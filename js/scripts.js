$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var number =$("input#number").val();

    // number.forEach(function(digit)) {
    if ((number !== "0") || (number !== "1") || (number !== "2") || (number !== "3") || (number !== "4") || (number !== "5") || (number !== "6") || (number !== "7") || (number !== "8") || (number !== "9")) {
        $("#result").append("error");
    }
    // var romans = [[9,'IX'],[8,'VII' ],[7, "VII"],
    // [6, "VI"],[5, 'V'],[4, 'IV'],[3, "III"],[2, "II"],[1, 'I']];
    // // for (var index = 0; index <= number.length; index += 1){
    //
    // if (number === 2 ) {
    //
    // $("#result").append("II");
  });
});

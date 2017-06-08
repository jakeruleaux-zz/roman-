$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());

// var digit = function(number) {
  //  if ((number !== "0") || (number !== "1") || (number !== "2") || (number !== "3") || (number !== "4") || (number !== "5") || (number !== "6") || (number !== "7") || (number !== "8") || (number !== "9")) {
        //warning = "please use single digit numeric values"

     //
    //  if ((number.charAt(0) === "0") || (number.charAt(0) === "1") || (number.charAt(0) === "2") || (number.charAt(0) === "3") || (number.charAt(0) === "4") || (number.charAt(0) === "5") || (number.charAt(0) === "6") || (number.charAt(0) === "7") || (number.charAt(0) === "8") || (number.charAt(0) === "9")) {
    //   warning = "its a number!"
    //  }


    //  var romans = [[9,'IX'],[8,'VII' ],[7, "VII"],
    //  [6, "VI"],[5, 'V'],[4, 'IV'],[3, "III"],[2, "II"],[1, 'I']];

      //function changeToRome(number) {
        //if (number === 0) {
  //         return "";
  //       }
  //       for (var index = 0; index < romans.length; index += 1){
  //           if (number >= romans[index][0]) {
  //             return result
  //           }
  //         }
  //
  // };
    if (number === 1) {
      $("#result").text("I")
    }
    else if (number === 2) {
      $("#result").text("II");
    }
    else if (number === 3) {
      $("#result").text("III");
    }
    else if (number === 4) {
      $("#result").text("IV");
    }
    else if (number === 5) {
      $("#result").text("V");
    }
    else if (number === 6) {
      $("#result").text(VI);
    }
    else if (number === 7) {
      $("#result").text(VII);
    }
    else if (number === 8) {
      $("#result").text(VIII);
    }
    else if (number === 9) {
      $("#result").text(IX);
    }







  });

});

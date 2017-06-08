$(document).ready(function() {
  $("form#roman-numeral").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#number").val());
    var myNumber = number.toString();
    var thousands = (myNumber.length)-4;
    var hundreds = (myNumber.length)-3;
    var tens = (myNumber.length)-2;
    var ones = (myNumber.length)-1;
      $("#result").text(myNumber);


    function digit(myNumber) {
      var result

      if (thousands.charAt(4) === 1) {
        result = "M";
      }
      else if (myNumber.charAt(4) === 2) {
        result = "MM";
      }
      // else (myNumber.charAt(4) === 3) {
      //   result = "MMM";
      // }
    //   else if (number === 10) {
    //     result = "X";
    //   }
    //   else if (number === 11) {
    //    result ="XI";
    //   }
    //   else if (number === 12) {
    //     result = "XII";
    //   }
    //   else if (number === 13) {
    //     result = "XIII";
    //   }
    //   else if (number === 14) {
    //     result = "XIV";
    //   }
    //   else if (number === 15) {
    //     result = "XV";
    //   }
    //   else if (number === 16) {
    //     result = "XVI";
    //   }
    //   else if (number === 17) {
    //     result = "XVII";
    //   }
    //   else if (number === 18) {
    //     result = "XVIII";
    //   }
    //   else if (number === 19) {
    //     result = "XIX"
    //   }
    //
    // if (number === 1) {
    //   result = "I";
    // }
    // else if (number === 2) {
    //  result ="II";
    // }
    // else if (number === 3) {
    //   result = "III";
    // }
    // else if (number === 4) {
    //   result = "IV";
    // }
    // else if (number === 5) {
    //   result = "V";
    // }
    // else if (number === 6) {
    //   result = "VI";
    // }
    // else if (number === 7) {
    //   result = "VII";
    // }
    // else if (number === 8) {
    //   result = "VIII";
    // }
    // else if (number === 9) {
    //   result = "IX";
    // }
    return result;
  }
  });
});

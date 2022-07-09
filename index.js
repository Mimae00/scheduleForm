

function timeSlot() {

    $("#timeSlot").css("display", "block");
    $("#frequency").css("display", "none");
    $(".btn2").addClass("btn-outline-secondary");
    $(".btn1").removeClass("btn-outline-secondary");


}

function frequency() {

    $("#frequency").css("display", "block");
    $("#timeSlot").css("display", "none");
    $(".btn2").removeClass("btn-outline-secondary");
    $(".btn1").addClass("btn-outline-secondary");

}

function validateForm() {
  var x = document.forms["myForm"]["breakfast"].value;
  var y = document.forms["myForm"]["lunch"].value;
  var z = document.forms["myForm"]["dinner"].value;

  var a = document.forms["myForm"]["numberOftimes"].value;
  var b = document.forms["myForm"]["day"].value;

  if (x == 0) {
    alert("Breakfast must be filled out more than 0");
    return false;
  }

  if (y == 0) {
    alert("Lunch must be filled out more than 0");
    return false;
  }

  if (z == 0) {
    alert("Dinner ust be filled out more than 0");
    return false;
  }

  if (a == 0) {
    alert("Number Of times must be filled out more than 0");
    return false;
  }
  alert("Breakfast: " + x + " Lunch: " + y +
  " Dinner: " + z + "             " + a +  " times " + b);
}

function showData() {

}

$(document).ready(function() {
  $("form#insurance").submit(function(event) {
    var age = parseInt($("input#age"). val());
    var gender = $("select#gender").val();

    var quote = (100-age)*3;

    if (gender ==="female" && age < 25) {
      quote += 60;
        if (age < 18){
          alert ("ask your parents")
        }

    }

    $("#quote").show()
    $("#rate").text(quote)

    event.preventDefault();

  });
});

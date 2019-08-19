
$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var arr = ["favorite1","favorite2","favorite3"];
    arr.forEach(function(favthing){
      var userInput = $("input#"+ favthing).val();
      console.log(userInput);
        $(".favorite").append("<li>" + userInput + "</li>");
      });
    });
  });

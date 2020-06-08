function loadPreferences()
{

     window.location="preferences.html";

}

function loadMap()
{

window.location="public/maps.html"

}

 
var preferences = [];
function storeVar(el) {
    var preference = el.getAttribute('value'); 
    preferences.push(preference);
    $(el).addClass('button-clicked');
    console.log(preference);
    console.log(preferences)
  } 
 
  function newUser()
  {
    var username = document.getElementById("exampleInputName1").value; 
    var age = document.getElementById("exampleInputAge1").value;
    var gender = document.getElementById("inputGroupSelect01").value;
    var email = document.getElementById("exampleInputEmail1").value;
    var password = document.getElementById("exampleInputPassword1").value;
    console.log(username, age, gender, email, password);
  }

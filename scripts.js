//welcome

let myText;
myText = "Вы на странице Active Trust!";
alert(myText);

//Form
function remindMe() {
    document.getElementById("otpravka").innerHTML = "Форма успешно отправлена, с вами скоро свяжутся!";
  }


//To open menu
  function showMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// To close menu
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
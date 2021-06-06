//menubar toogle
var Menu=document.getElementById("menuitems");
Menu.style.maxHeight="0px";

function menutoggle()
{
    if( Menu.style.maxHeight=="0px")
    {
     Menu.style.maxHeight="200px";
    }
    else{
     Menu.style.maxHeight="0px";
    }
}
// for contact form
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
//for send button notification
var pressedButton = document.getElementsByClassName("btn")[0];
   pressedButton.addEventListener("click", function (event) {
      alert("Your Message is sent!..")
   })
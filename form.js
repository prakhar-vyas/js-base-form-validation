let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let button = document.getElementById("butn");
let messageerror = document.getElementById("messageerror");
let emailerror = document.getElementById("emailerror");
let regex = /([_\.a-zA-Z0-9]+)@([_\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;

function sendemail() {
  if(message.value == "")
  {
    messageerror.classList.add("active")
    messageerror.innerText= "*Message field can't be empty!";
  }
  if (regex.test(email.value) ) {
   alert("Message sent successfully")
  }
  else
  {
    emailerror.classList.add("active")
    emailerror.innerText= "*Please enter the valid email!";
  }
} 

message.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendemail();
    document.getElementById("form").reset();
  }
});



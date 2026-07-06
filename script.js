
let explore = document.querySelector("#Explore");
explore.addEventListener("click", () => {
  document.getElementById("Cloths").scrollIntoView({
    behavior: "smooth",
  });
  cloths.classList.add("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

let links = document.querySelectorAll(".nav-links a");

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", () => {
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove("active");
    }

    links[i].classList.add("active");
  });
}

let ham = document.querySelector("#ham");
let navLinks = document.querySelector("#nav-links");

ham.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

let login = document.querySelector("#Login");
let loginpage = document.querySelector(".login-page");
login.addEventListener("click", () => {
  loginpage.classList.add("show");
  navLinks.classList.remove("show");

  loginpage.scrollIntoView({
    behavior: "smooth",
  });
});

let logged = document.querySelector("#logged");
let email = document.querySelector("#email");
let pass = document.querySelector("#password");

logged.addEventListener("click", () => {
  if (email.value == "" || pass.value == "") {
    alert("Enter Your Email & Password");
  } else {
    alert("You Logged In");
    document.querySelector(".login-page").style.display = "none";
  }
  email.value = "";
  pass.value = "";
});

let submit = document.querySelector("#submit");
let name = document.querySelector("#name");
let number = document.querySelector("#number");

submit.addEventListener("click", () => {
  if (name.value == "" || number.value == "") {
    alert("Please Enter Your Name & Number");
  } else if (number.value.length < 10) {
    alert("Enter a Valid Number");
  } else {
    alert(name.value + " Thanks For Joining");
  }
  name.value = "";
  number.value = "";
});

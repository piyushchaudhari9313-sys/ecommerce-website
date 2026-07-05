let home=document.querySelector("#home");
let cloths=document.querySelector("#cloths");
let blogs=document.querySelector("#blogs");
let review=document.querySelector("#review");
let contactus=document.querySelector("#contactus");
let explore=document.querySelector("#Explore");





home.addEventListener("click",()=>{
    home.classList.add("active");
    cloths.classList.remove("active");
    blogs.classList.remove("active");
    review.classList.remove("active");
    contactus.classList.remove("active");

    
});
cloths.addEventListener("click",()=>{
    home.classList.remove("active");
    cloths.classList.add("active");
    blogs.classList.remove("active");
    review.classList.remove("active");
    contactus.classList.remove("active");

    
});
blogs.addEventListener("click",()=>{
    home.classList.remove("active");
    cloths.classList.remove("active");
    blogs.classList.add("active");
    review.classList.remove("active");
    contactus.classList.remove("active");

    
});
review.addEventListener("click",()=>{
    home.classList.remove("active");
    cloths.classList.remove("active");
    blogs.classList.remove("active");
    review.classList.add("active");
    contactus.classList.remove("active");

    
});
contactus.addEventListener("click",()=>{
    home.classList.remove("active");
    cloths.classList.remove("active");
    blogs.classList.remove("active");
    review.classList.remove("active");
    contactus.classList.add("active")

    
});
explore.addEventListener("click",()=>{
     document.getElementById("Cloths").scrollIntoView({
        behavior: "smooth"
     });
    home.classList.remove("active");
    cloths.classList.add("active");
    blogs.classList.remove("active");
    review.classList.remove("active");
    contactus.classList.remove("active");
    
});
 
let login=document.querySelector("#Login");
let loginpage= document.querySelector(".login-page");
login.addEventListener("click",()=>{
    loginpage.style.display="block"
    loginpage.scrollIntoView({
        behavior: "smooth"

    });
})

let loged=document.querySelector("#loged");
let email=document.querySelector("#email");
let pass=document.querySelector("#password");

loged.addEventListener("click",()=>{
    if(email.value=="" ||pass.value==""){
        alert("Enter Your Email & Password");
    }
    else{
        alert("You Loged");
        document.querySelector(".login-page").style.display="none"
    }
    email.value="";
    pass.value="";
})

let submit=document.querySelector("#submit");
let name=document.querySelector("#name");
let number=document.querySelector("#number")

submit.addEventListener("click",()=>{
    if(name.value==""|| number.value==""){
        alert("Please Enter Your Name & Number");
    }
    else{
        alert(name.value+" Thanks For Joining")

    }
    name.value="";
    number.value="";
})
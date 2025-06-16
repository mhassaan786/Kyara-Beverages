//  javascript pop up

// pop up
const pop = document.getElementsByClassName("popBox")[0];
function PopUp(){
    // alert("Sub")
    pop.classList.remove("deactive")
    pop.classList.add("active")
        setTimeout(() => {
        pop.classList.remove("active");
        pop.classList.add("deactive");
    }, 1000); // closes after 1 second
}

let form = document.querySelector("form");
form.addEventListener("submit", function (e) {

// values
let name = document.getElementById("name").value.trim()
let email = document.getElementById("email").value.trim();
let phoneNumber = document.getElementById("phoneNumber").value.trim();

// patterns
const phonePattern = /^03\d{9}$/;
const namePattern = /^[A-Za-z\s]+$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

e.preventDefault(); // Prevent form submission for validation

    if ( !(namePattern.test(name)) ) {
        e.preventDefault();
        alert("Invalid Name")
        return;
    }else if( !(phonePattern.test(phoneNumber)) ){
        e.preventDefault();
        alert("Phone Number is not matched with required no")
        return;
    }else if( !(emailPattern.test(email)) ){
        e.preventDefault();
        alert("Email is not apprpritate")
        return;   
    }else {
        PopUp();
        form.reset()
    }

})
let details = document.getElementsByClassName("details");

details.addEventListener("submit", (e) => {
    e.preventDefault();

    let inputName = document.getElementById("name");
    let inputEmail = document.getElementById("mail");
    let inputMessage = document.getElementById("text");

    if(inputName == ""){
        alert("Please enter your Name.");
    }

});
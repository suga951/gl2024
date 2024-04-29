window.addEventListener("DOMContentLoaded", () => {
    
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const username = document.querySelector("#username");
    const newsletter = document.querySelector('#newsletter');
    
    const lettersRegex = /^[A-Za-z]+$/;
    const usernameRegex = /^[a-zA-Z0-9]*$/;

   
    let lastValidName = "";
    const validateName = () => {
        firstName.value.match(lettersRegex) ? lastValidName = firstName.value : firstName.value = lastValidName;
    }

    let lastValidLastName = "";
    const validateLastName = () => {
        lastName.value.match(lettersRegex) ? lastValidLastName = lastName.value : lastName.value= lastValidLastName;
    }

    function usernameCharacters(){
        username.value.match(usernameRegex) ? true : false;
    }
    function usernameLength(){
        username.value >= 4 ? true : false;
    }
    const validateUsername = () => {
        
        if(usernameCharacters() && usernameLength()){
            console.log("value is true");
        } else {
            console.log("value is false");
        }
    }
    
    const checkNewsletter = () => {
        newsletter.checked ? console.log("Mails will be sent") : console.log("Mails won't be sent");
    }

    firstName.addEventListener("input", validateName);
    lastName.addEventListener("input", validateLastName);
    username.addEventListener("input", validateUsername)
    newsletter.addEventListener("input", checkNewsletter);
    
});

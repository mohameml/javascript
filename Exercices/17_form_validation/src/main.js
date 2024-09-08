document.getElementById("register").onsubmit = function () {
    let phoneInput = document.getElementById("phone").value;

    let phoneRegex = /\(\d{3}\)\s\d{3}-\d{4}/; // (123) 567-8910

    let phoneValidation = phoneRegex.test(phoneInput);
    console.log(phoneValidation);

    if (!phoneValidation) {
        return false;
    }

    return true;
};

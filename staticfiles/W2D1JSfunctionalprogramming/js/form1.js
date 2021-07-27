function onSubmit(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let url = document.getElementById('exampleInputURL1').value;
    let checkMe = document.getElementById('exampleCheck1').checked;
    console.log("Form data:");
    console.log("Email        :", email);
    console.log("Password     :", password);
    console.log("Homepage URL :", url);
    console.log("Check me out :", checkMe);
}
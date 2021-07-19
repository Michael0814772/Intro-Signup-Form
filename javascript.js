


function Submit_Form() {
    
    var fname = document.signin.firstname.value;
    var lname = document.signin.lastname.value;
    var email = document.signin.email.value;
    var password = document.signin.password.value;
    if(fname == null || fname == "") {
        const fname = document.querySelector(".f-name");
        fname.style.visibility = 'visible'
        return false;
    } else if (lname == null || lname == "") {
        const lname = document.querySelector(".l-name");
        lname.style.visibility = 'visible'
        return false;
    } else if (email == null || email == "") {
        const email = document.querySelector(".email");
        email.style.visibility = 'visible'
        return false;
    } else if (password == null || password == "" || password.length <= 5) {
        const password = document.querySelector(".password");
        password.style.visibility = 'visible'
        return false;
    }

}






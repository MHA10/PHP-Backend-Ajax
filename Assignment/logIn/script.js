function formValidation() {
    var uemail = document.getElementById('email');
    var passid = document.getElementById('passid');



    if (ValidateEmail(uemail)) {
        if (passid_validation(passid)) {
            var query = "SELECT Email, Password FROM grocerdb.credential WHERE Email = uemail.value? AND Password = passid.value";
        }
    }
    return false;
}
function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value == '') {
        alert("Email Required");
        return false;
    }
    else if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}
function passid_validation(passid) {
    var passid_len = passid.value.length;
    if (passid_len == 0) {
        alert("Password should not be ampty");
        passid.focus();
        return false;
    }
    else if (passid_len < 6) {
        alert("Password should be greater than 6");
        passid.focus();
        return false;
    }
    return true;
}
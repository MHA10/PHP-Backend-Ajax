
function formValidation() {

    var sql = "CREATE TABLE grocerdb.credential (idCredential INT NOT NULL, Email VARCHAR(45) NOT NULL, DOB VARCHAR(45) NOT NULL, Password VARCHAR(45) NOT NULL, PRIMARY KEY (idCredential))";
    var passid = document.getElementById('pswd');
    var passidC = document.getElementById('pswdr');
    var uemail = document.getElementById('email');
    var datec = document.getElementById('dob');
    var image = document.getElementById('avatar');

    if (ValidateEmail(uemail)) {
        if (validatedate(datec.value)) {
            if (validate_image(image)) {
                if (passid_validation(passid, passidC)) {
                    var query = "INSERT INTO grocerdb.credential (idCredential, Email,Image, DOB, Password) VALUES ('1', 'uemail.value', 'image.value', 'datec.value', 'passid.value');"
                }
            }
        }   
    }
}

function validatedate(date) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if (date.match(regEx) != null) {
        return true;
    }
    else{
        alert("Invalid Date Format");
        return false;
    }

}

function validate_image(image) {
    var filePath = image.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (filePath == '') {
        alert("Image Required");
        return false;
    }
    else if (!allowedExtensions.exec(filePath)) {
        alert('Invalid file type');
        fileInput.value = '';
        return false;
    }
    else {
        return true;
    }
}

function passid_validation(passid, passidC) {
    var passid_len = passid.value.length;
    var passid_lenr = passidC.value.length;
    if (passid_len == 0 || passid_lenr == 0) {
        alert("Password should not be ampty");
        passid.focus();
        return false;
    }
    else if (passid_len != passid_lenr || passid.value != passidC.value) {
        alert("Password does not match");
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

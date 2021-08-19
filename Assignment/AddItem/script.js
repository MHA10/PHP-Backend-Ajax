
function formValidation() {
    var table = "CREATE TABLE `grocerdb`.`additem` (idAddItem INT NOT NULL, Name VARCHAR(45) NOT NULL, NoOfItem VARCHAR(45) NOT NULL, Des VARCHAR(200) NOT NULL,Image VARCHAR(45) NOT NULL, FOREIGN KEY (idfamilyPage) REFERENCES (idfamilyPage) ON DELETE CASCADE, PRIMARY KEY ('idAddItem'))";
    var title = document.getElementById('itemname');
    var description = document.getElementById('detail');
    var image = document.getElementById('avatar');
    var num = document.getElementById('number');

    if (ValidateTitle(title)) {
        if (ValidNum(num)) {
            if (ValidDescription(description)) {
                if (validate_image(image)) {
                    var query = "INSERT INTO grocerdb.additem (idAddItem, Name, NoOfItem, Des, Image, idfamilyPage) VALUES ('1', 'Onion', '3', 'Onion_des', 'URL', familypage.idfamilyPage)";
                }
            }
        }
    }
    return false;
}

function ValidNum(num)
{
    if(num.value.length == 0)
    {
        alert("Quantity Required");
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


function ValidateTitle(title) {
    var letters = /^[A-Za-z]+$/;
    if (title.value.match(letters)) {
        return true;
    }
    else {
        alert('Item Title must be added');
        title.focus();
        return false;
    }
}
function ValidDescription(description) {
    var letters = /^[A-Za-z]+$/;
    if (description.value.match(letters)) {
        return true;
    }
    else {
        alert('Item description must be added');
        description.focus();
        return false;
    }
}
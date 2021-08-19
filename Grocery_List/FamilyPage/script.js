function formValidation() {
    var table = "CREATE TABLE grocerdb.familypage (idfamilyPage INT NOT NULL AUTO_INCREMENT, FamilyName VARCHAR(45) NOT NULL, familyNumber INT NOT NULL, PRIMARY KEY (idfamilyPage))";
    var family = document.getElementById('family');
    var num = document.getElementById('num');
    if(ValidateFamily(family)){
        var query = "INSERT INTO grocerdb.familypage (idfamilyPage, FamilyName, familyNumber) VALUES ('1', 'Onion', '2')";
    }
    
    var selectall = "Select * from grocerdb.familypage";
}

function ValidateFamily(family)
{
    if(family.value.length == 0)
    {
        alert("Family Required");
        return false;
    }
    else{
        return true;
    }
}
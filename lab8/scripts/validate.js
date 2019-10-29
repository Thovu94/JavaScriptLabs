//validate module
var validateProfile = function (e) {
    e.preventDefault();

    var valid = true;

    //display warning if firstName is not entered
    if (profile.fname.value == "") {
        document.getElementById('fnameWarning').innerHTML = "*Please enter a First Name*";
        valid = false;
    }
    //create private and public functions/objects/variables to validate the form

    //display warning if lastName is not entered
    if (profile.lname.value == "") {
        document.getElementById('lnameWarning').innerHTML = "*Please enter a Last Name*";
        valid = false;
    }
    if (profile.address01.value == "") {
        document.getElementById('address01Warning').innerHTML = "*Please enter a address*";
        valid = false;
    }
    if (profile.city1.value == "") {
        document.getElementById('cityWarning').innerHTML = "*Please enter a city*";
        valid = false;
    }
    if (profile.province.value == "") {
        document.getElementById('provinceWarning').innerHTML = "*Please select a province*";
        valid = false;
    }
    if (profile.country.value == "") {
        document.getElementById('countryWarning').innerHTML = "*Please select a country*";
        valid = false;
    }

    if (valid) {
        alert("Thank you");
    }

    return valid;



};

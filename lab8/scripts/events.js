//form element events
//When the user enters their name the input value is displayed as innerHTML
document.getElementById("fname").addEventListener("change", function () {
    greeting.innerHTML = "Hello " + this.value;
});

//remove warning if firstName has input
document.getElementById("fname").addEventListener("blur", function () {
    if (this.value !== "") {
        fnameWarning.innerHTML = "";
    }
});

//When the user enters their name the input value is displayed as innerHTML
document.getElementById("lname").addEventListener("change", function () {
    lnameWarning.innerHTML = " ";
});

//remove warning if lastName has input
document.getElementById("lname").addEventListener("blur", function () {
    if (this.value !== "") {
        lnameWarning.innerHTML = "";
    }
});

//When the user enters their address1 the input value is displayed as innerHTML
document.getElementById("address01").addEventListener("change", function () {
    address01Warning.innerHTML = "";
});

//remove warning if address1 has input
document.getElementById("address01").addEventListener("blur", function () {
    if (this.value !== "") {
        address01Warning.innerHTML = "";
    }
});
//When the user enters their city the input value is displayed as innerHTML
document.getElementById("city1").addEventListener("change", function () {
    cityWarning.innerHTML = "";
});

//remove warning if city has input
document.getElementById("city1").addEventListener("blur", function () {
    if (this.value !== "") {
        cityWarning.innerHTML = "";
    }
});


// Add an event to the form on submit to validate input
document.profile.addEventListener("submit", validateProfile);


//add option to campus dropdown list
function addOption() {
    var province = profile.province;
    var country = profile.country;
    province.options[province.options.length] = SelectProvince;
    country.options[country.options.length] = SelectCountry;
}

//add onclick event to multiple elements
var radCountry = profile.country;

for (var i = 0; i < radCountry.length; i++) {
    radCountry[i].onclick = function () {
        if (this.value !== "Canada") {
            addOption();
        }
    }
}

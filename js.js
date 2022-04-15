function validateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email.value)) {
        var emailValue = document.getElementById("email").value;
        document.getElementById("emailp").innerHTML = emailValue;
        return (true)
    }
    alert("You have entered an invalid email address!")
    return (false)
}

function myFunction() {

    var nameValue = document.getElementById("name").value;
    var phone = document.getElementById("tel").value;
    var quantity = document.getElementById("number").value;
    var select = document.getElementById('select');
    var value = select.options[select.selectedIndex].value;
    var address = document.getElementById('address').value;

    document.getElementById("namep").innerHTML = nameValue;
    document.getElementById("phonep").innerHTML = phone
    document.getElementById("quantityp").innerHTML = quantity;
    document.getElementById("typep").innerHTML = value;
    document.getElementById("addressp").innerHTML = address;

    document.getElementById("table").style.display = "table";
}
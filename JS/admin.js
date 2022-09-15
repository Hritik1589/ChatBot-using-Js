function validation() {
    var user = document.getElementById("username");
    var pass = document.getElementById("password");

    if (user.value.trim() == "") {

        user.style.border = 'solid red 2px';
        return false;

    } else if (pass.value.trim() == "") {
        pass.style.border = 'solid red 2px';
        return false;

    } else if (pass.value.trim().lenght < 5) {
        pass.style.border = 'solid red 2px';
        return false;

    }


}

function toggleNav() {
    var x = document.getElementById("left_menu");
    if (x.className === "left-menu") {
        x.className += " mobile-left-menu";
    } else {
        x.className = "left-menu";
    }
}
function toggleUser() {
    var x = document.getElementById("user_menu");
    if (x.className === "nav__user") {
        x.className += " mobile__user__menu";
    } else {
        x.className = "nav__user";
    }
}
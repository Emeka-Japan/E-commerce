const loginForm =
    document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        //Redirect to homepage
        window.location.href = "index.html";
    });
}
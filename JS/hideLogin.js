

function hideLogin(){
    var check = localStorage.getItem('signIn') ? JSON.parse(localStorage.getItem('signIn') ?? "") : "";

    const hide = document.getElementById("titl-log") ?? null;
    if (check != "" && hide) {
        hide.style.display = "none";
    }
}
hideLogin();


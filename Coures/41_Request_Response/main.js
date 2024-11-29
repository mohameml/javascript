let btn = document.getElementById("submit");

btn.onclick = function () {
    const login = document.getElementById("login").value;
    console.log(login);

    let xhr = new XMLHttpRequest();
    let url = `https://api.github.com/users/${login}`;
    xhr.open("GET", url);
    xhr.send();
    console.log(xhr);
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let div = document.getElementById("res");
            let obj_res = JSON.parse(xhr.responseText);
            div.innerHTML = `votre compte github est crée à ${obj_res["created_at"]}`;
            console.log(this.responseText);
        }
    };
};

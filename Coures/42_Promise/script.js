URL_API = "https://api.github.com/users/mohameml/repos";

const getData = (apiLink) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.open("GET", apiLink);
        xhr.send();

        xhr.onload = function () {
            if (this.readyState === 4 && this.status === 200) {
                let JsonData = JSON.parse(this.responseText);
                resolve(JsonData);
            }

            if (this.readyState === 4 && this.status !== 200) {
                reject(Error("API Link is not Found"));
            }
        };
    });
};

const data = getData(URL_API);

data.then((data) => {
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("div");
        let repoName = document.createTextNode(data[i].name);
        div.appendChild(repoName);
        document.body.appendChild(div);
    }
}).catch((err) => {
    console.log(err);
});

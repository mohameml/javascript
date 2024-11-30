// fetch API

const URL_API = "https://api.github.com/users/mohameml";

fetch(URL_API)
    .then((response) => {
        if (!response.ok) {
            throw new Error(
                "Erreur lors d'une Réquette HTTP vers l'API " + URL_API
            );
        }
        let res = response.json();
        console.log(res);
        return res;
    })
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

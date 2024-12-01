const URL_API = "https://api.github.com/users/mohameml";

async function fetchDataUser(apiLink) {
    try {
        let response = await fetch(apiLink);
        if (response.ok) {
            let data = await response.json();
            console.log(data);
        }
    } catch (e) {
        console.log(e);
    }
}

fetchDataUser(URL_API);

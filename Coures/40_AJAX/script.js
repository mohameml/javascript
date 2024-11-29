document.getElementById("loadMessage").addEventListener("click", function () {
    // Crée un objet XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // Ouvre une requête GET vers le serveur (ici on suppose que le serveur répond à cette URL)
    xhr.open("GET", "https://www.myjsons.com/v/21513678", true);

    // Définir ce qu'il faut faire lorsque la réponse arrive
    xhr.onload = function () {
        if (xhr.status === 200) {
            // Lorsque la réponse est reçue et est OK, on met à jour la page
            document.getElementById("message").innerText = xhr.responseText;
        } else {
            // Si la réponse n'est pas OK (exemple : erreur 404)
            document.getElementById("message").innerText =
                "Erreur de chargement du message.";
        }
    };

    // Envoie la requête au serveur
    xhr.send();
});

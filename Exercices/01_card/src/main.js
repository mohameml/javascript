

let theTitle = "Elzero"

let descriptionContent = "Elzero Web School"

let dateContent = "25/01"


let card = `
    <div class = "card">
        <h3>${theTitle}</h3>
        <p>${descriptionContent}</p>
        <span>${dateContent}</span>
    </div>
`



// render the elment :

document.write(card.repeat(4))
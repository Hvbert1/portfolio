function createBio() {
    let bioContainer = document.createElement("div");
    bioContainer.id = "bioContainer";

    let bioPic = document.createElement("img");
    bioPic.id = "bioPic";
    bioPic.src = "../src/imgs/portrait640w.jpg";
    
    let bioInfo = document.createElement("div");
    bioInfo.id = "bioInfo";

    let bioHeading = document.createElement("h1");
    let bioBody = document.createElement("h3");
    let bioIcons = document.createElement("div");
    bioIcons.id = "bioIcons";

    bioHeading.innerHTML = "About me";
    bioBody.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum omnis, magnam ex voluptatibus dolor vel iste sunt doloremque labore fugit obcaecati iure est recusandae error nisi provident, magni culpa eaque!. Saepe fugit totam necessitatibus enim placeat impedit quas debitis vitae. Deleniti animi magnam eos nisi dolores dicta, mollitia quidem odit non amet. "

    bioInfo.appendChild(bioHeading);
    bioInfo.appendChild(bioBody);
    bioInfo.appendChild(bioIcons);

    bioContainer.appendChild(bioPic);
    bioContainer.appendChild(bioInfo);

    document.getElementById("container").appendChild(bioContainer);
}

function createBody() {
    let projectContainer = document.createElement("div");
    projectContainer.id = "projectContainer";

    let projectTitle = document.createElement("h1");
    projectTitle.innerText = "My Work";

    let cardsContainer = document.createElement("div");
    cardsContainer.id = "cardsContainer";

    for (let i = 0; i < 6; i++) {
        let card = document.createElement("div");
        card.classList.add("card" + i);

        let cardPic = document.createElement("img");

        let cardBody = document.createElement("div");
        cardBody.classList.add("cardBody");
        
        let cardHeader = document.createElement("div");
        cardHeader.classList.add("cardHeader");

        let cardTitle = document.createElement("h3");
        cardTitle.innerHTML = "Project name";

        let cardIcons = document.createElement("div");
        cardIcons.classList.add("cardIcons");

        let cardText = document.createElement("p");
        cardText.classList.add("cardText");
        cardText.innerHTML = "Short description of the project. Just a couple of sentences will do";

        cardHeader.appendChild(cardTitle);
        cardHeader.appendChild(cardIcons);

        card.appendChild(cardPic);
        card.appendChild(cardHeader);
        card.appendChild(cardText);

        cardsContainer.appendChild(card);

        document.getElementById("container").appendChild(projectContainer);
    }

    projectContainer.appendChild(projectTitle);
    projectContainer.appendChild(cardsContainer);

}

function loadPage() {
    createBio();
    createBody();
}

loadPage();
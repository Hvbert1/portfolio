import './style.css';

function createBio() {
    let bioContainer = document.createElement("div");
    bioContainer.id = "bioContainer";

    let bioImgContainer = document.createElement("div");
    bioImgContainer.id = "bioImgContainer";

    let bioImg = document.createElement("img");
    bioImg.id = "bioImg";
    bioImg.src = "../src/imgs/portrait640w.jpg";

    let bioImgText = document.createElement("div");
    bioImgText.id = "bioImgText";
    bioImgText.innerText = "Suzie Williams";
    
    let bioInfo = document.createElement("div");
    bioInfo.id = "bioInfo";

    let bioHeading = document.createElement("h1");
    let bioBody = document.createElement("h3");
    let bioIcons = document.createElement("div");
    bioIcons.id = "bioIcons";

    let gitIcon = document.createElement("i");
    gitIcon.classList.add("devicon-github-original");

    let linIcon = document.createElement("i");
    linIcon.classList.add("devicon-linkedin-plain");

    let fbIcon = document.createElement("i");
    fbIcon.classList.add("devicon-facebook-plain");
  
    bioIcons.appendChild(gitIcon);
    bioIcons.appendChild(linIcon);
    bioIcons.appendChild(fbIcon);

    bioHeading.innerHTML = "About me";
    bioBody.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum omnis, magnam ex voluptatibus dolor vel iste sunt doloremque labore fugit obcaecati iure est recusandae error nisi provident, magni culpa eaque!. Saepe fugit totam necessitatibus enim placeat impedit quas debitis vitae. Deleniti animi magnam eos nisi dolores dicta, mollitia quidem odit non amet. "

    bioInfo.appendChild(bioHeading);
    bioInfo.appendChild(bioBody);
    bioInfo.appendChild(bioIcons);

    bioImgContainer.appendChild(bioImg);
    bioImgContainer.appendChild(bioImgText);

    bioContainer.appendChild(bioImgContainer);
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
        card.classList.add("card");

        let cardPic = document.createElement("img");
        cardPic.src = "../src/imgs/project.jpg";

        let cardBody = document.createElement("div");
        cardBody.classList.add("cardBody");
        
        let cardHeader = document.createElement("div");
        cardHeader.classList.add("cardHeader");

        let cardTitle = document.createElement("h3");
        cardTitle.innerHTML = "Project name";

        let cardIcons = document.createElement("div");
        cardIcons.classList.add("cardIcons");

        let gitIcon = document.createElement("i");
        gitIcon.classList.add("devicon-github-original");

        let clickIcon = document.createElement("i");
        clickIcon.classList.add("devicon-bamboo-original");

        let cardText = document.createElement("p");
        cardText.classList.add("cardText");
        cardText.innerHTML = "Short description of the project. Just a couple of sentences will do";

        cardIcons.appendChild(gitIcon);
        cardIcons.appendChild(clickIcon);

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

function createFooter() {
    let footerContainer = document.createElement("div");
    footerContainer.id = "footerContainer";

    let footerPic = document.createElement("img");
    footerPic.src = "../src/imgs/portrait640w.jpg";

    let footerInfo = document.createElement("div");
    footerInfo.id = "footerInfo";

    let footerTitle = document.createElement("h1");
    footerTitle.innerText = "Contact me"

    let footerBody = document.createElement("p");
    footerBody.innerHTML = "Please get in touch if you think our work could be mutually beneficial!";

    footerIcons = document.createElement("div");

    footerInfo.appendChild(footerTitle);
    footerInfo.appendChild(footerBody);
    footerInfo.appendChild(footerIcons);

    footerContainer.appendChild(footerInfo);
    footerContainer.appendChild(footerPic);

    document.getElementById("container").appendChild(footerContainer);
}

function loadPage() {
    createBio();
    createBody();
    createFooter();
}

loadPage();
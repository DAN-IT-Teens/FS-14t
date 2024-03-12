const recentPosts = [
    {
        image: "./images/post-1.png",
        title: "Aenean Adipiscing Etiam Vestibulum",
        category: "Photography, Journal",
        commentsAmount: 9,
        description: "Etiam porta sem malesuada euismod. Aenean leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
    },
    {
        image: "./images/post-2.png",
        title: "Aenean Adipiscing Etiam Vestibulum",
        category: "Photography, Journal",
        commentsAmount: 9,
        description: "Etiam porta sem malesuada euismod. Aenean leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
    },
    {
        image: "./images/post-3.png",
        title: "Aenean Adipiscing Etiam Vestibulum",
        category: "Photography, Journal",
        commentsAmount: 9,
        description: "Etiam porta sem malesuada euismod. Aenean leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
    },
    {
        image: "./images/post-4.png",
        title: "Aenean Adipiscing Etiam Vestibulum",
        category: "Photography, Journal",
        commentsAmount: 9,
        description: "Etiam porta sem malesuada euismod. Aenean leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
    },
]


const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener('click', () => {
    const menu = document.querySelector(".menu");
    menu.classList.toggle('active');
    menu.classList.toggle('menu-mobile');

    const menuButtonIcon = document.querySelector(".menu-button img");
    const isActiveMenu = menu.classList.contains("active");

    if(isActiveMenu) {
        menuButtonIcon.src = "./images/icons/menu-button-close.png";
    } else {
        menuButtonIcon.src = "./images/icons/menu-button.png";
    }
})

function createRecentPostCard({image, title, category, commentAmount, description}) {
    const containerCard = document.createElement('div');
    containerCard.className = "recent-posts-card";

    const cardImage = document.createElement('img');
    cardImage.src = image;

    const containerCardText = document.createElement('div');
    containerCardText.className = "recent-posts-card-text";

    const cardTextTitle = document.createElement("h3");
    cardTextTitle.className = "recent-posts-card-title";
    cardTextTitle.textContent = title;

    const cardTextInfo = document.createElement("h4");
    cardTextInfo.className = "recent-posts-card-info";
    cardTextInfo.textContent = `${category} / ${commentAmount} Comments`;

    const cardTextDescription = document.createElement('p');
    cardTextDescription.className = "recent-posts-card-description";
    cardTextDescription.textContent = description;

    containerCardText.append(cardTextTitle, cardTextInfo, cardTextDescription);
    containerCard.append(cardImage, containerCardText);

    return containerCard;
}

recentPosts.forEach((post) => {
    const containerRecentPost = document.querySelector('.recent-posts-list');
    const createdPostsCard = createRecentPostCard(post);

    containerRecentPost.append(createdPostsCard);
})
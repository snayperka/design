'use strict';

// Define the function to be executed on page load
function fadeIn() {
    const fadeInElem = document.querySelector('.fade-in');
    fadeInElem.classList.add('animation');
}

// Add an event listener to execute the function on page load
window.addEventListener('load', fadeIn);

function buildArticle(data) {
    const article = document.createElement("article");
    const section = document.createElement("section");
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const p = document.createElement('p');
    const h2 = document.createElement('h2');

    h2.textContent = data["name"];
    const summaryText = h2.textContent;
    p.textContent = data["description"];

    article.appendChild(section);
    section.appendChild(details);
    details.appendChild(summary);
    details.appendChild(p);
    summary.textContent = summaryText; //h2 is assigned to summary
    return article;
}

const articles = skills.map(buildArticle);
articles.forEach(article => target.appendChild(article));
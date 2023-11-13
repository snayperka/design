"use strict";
search.addEventListener('change', ev => {
    while (results.firstChild) {
        results.firstChild.remove();
    }
    if (!search.value) {
        return;
    }
    const filteredData = skills.filter(item => item.name.toLowerCase().includes(search.value.toLowerCase()));
    const article = filteredData.map(buildResultFromData);
    article.forEach(a => results.appendChild(a));
    if (!article.length) {
        results.appendChild(createNoResultsMessage(search.value));
    }
});
function buildResultFromData(data) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = data.name;
    li.appendChild(span);
    return li;
}
function createNoResultsMessage(searchTerm) {
    const li = document.createElement('li');
    li.textContent = `No results found for "${searchTerm}"`;
    return li;
}
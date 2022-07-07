const bikeshopSeeboden = document.getElementById('bikeshopSeeboden');
const findYourHat = document.getElementById('findYourHat');

const bssWebsite = () => {
    window.open('https://github.com/Radllaufer/websiteBikeshopSeeboden', '_blank');
}

const fyhWebsite = (e) => {
    window.open('https://github.com/Radllaufer/jsProjects/tree/main/codeCademy/findYourHat', '_blank');
}

const defineEventListeners = () => {
    bikeshopSeeboden.addEventListener('click', bssWebsite);
    findYourHat.addEventListener('click', fyhWebsite);
}

defineEventListeners();
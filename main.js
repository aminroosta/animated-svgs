const images = [
    'magic-hat.svg',
];

const $images = document.getElementById('images');
for (let img of images) {
    fetch(`./svg/${img}`)
        .then(response => response.text())
        .then(svg => {
            $images.innerHTML += svg;
        });
}
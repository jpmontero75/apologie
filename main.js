var movingButton = document.getElementById('moving-button');
movingButton.addEventListener('mouseover', moveButton);
movingButton.addEventListener('touchstart', moveButton);

function moveButton() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    this.style.left = x + 'px';
    this.style.top = y + 'px';
}

document.getElementById('static-button').addEventListener('mouseover', function() {
    document.querySelector('.title').innerHTML = 'Yo tambien, te amo :)';
});
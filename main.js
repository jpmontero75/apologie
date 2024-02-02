document.getElementById('moving-button').addEventListener('mouseover', function() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    this.style.left = x + 'px';
    this.style.top = y + 'px';
});
document.getElementById('static-button').addEventListener('click', function() {
    document.querySelector('#title').textContent = 'Yo también, te amo❤️'

});
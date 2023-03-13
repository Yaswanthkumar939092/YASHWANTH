setInterval(function() {
    var colors = ["gray", "white", "light-green", "yellow", "purple"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}, 2000);

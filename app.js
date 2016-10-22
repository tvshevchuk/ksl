// Get the modal
var modal = document.getElementById('myModal');
var modalContent = document.getElementById('modal-content');

// Get the button that opens the modal
var playerBoxes = document.getElementsByClassName("player-box");

var infoArray = ['aliot-info.jpg', 'blink-info.jpg', 'borman-info.jpg', 'dary-info.jpg', 
                'doyou-info.jpg', 'fill-info.jpg', 'fool-info.jpg', 'franklin-info.jpg',
                'just-info.jpg', 'kenny-info.jpg', 'kosmos-info.jpg', 'lucky-duck-info.jpg',
                'nif-info.jpg', 'omel-info.jpg', 'piatachok-info.jpg', 'q-info.jpg',
                'rio-info.jpg', 'sherlock-info.jpg', 'shrek-info.jpg', 'stonecold-info.jpg'];

for (var i = 0; i < playerBoxes.length; i++) {
    (function(i) {
        playerBoxes[i].onclick = function(url) {
            modal.style.display = "block";
            modalContent.style.backgroundImage = "url(./images/info/" + infoArray[i] + ")";
        }
    })(i);
}


modalContent.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

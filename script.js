function animateTitle(text) {
    let currentText = '';
    let index = 0;

    function updateTitle() {
        if (index < text.length) {
            currentText += text[index];
            document.title = currentText;
            index++;
        } else {
            setTimeout(removeTitle, 1000);
            return;
        }
        setTimeout(updateTitle, 200);
    }

    function removeTitle() {
        if (currentText.length > 1) {
            currentText = currentText.slice(0, -1);
            document.title = currentText;
        } else {
            currentText = '@';
            document.title = currentText;
            index = 0;
            setTimeout(() => updateTitle(), 500);
            return;
        }
        setTimeout(removeTitle, 200); 
    }

    updateTitle();
}

animateTitle('OgCat');

document.body.addEventListener("click", function(event) {
    if (event.button === 0) { 
        if (event.target.classList.contains('icon')) {
            const url = event.target.getAttribute('data-url');
            window.location.href = url; 
            return;
        }

        document.getElementById("message").style.opacity = "0"; 
        document.getElementById("overlay").style.backgroundColor = "rgba(0, 0, 0, 0)"; 

        const video = document.getElementById("background-video");
        video.play();

        const music = document.getElementById("background-music");
        music.play();

        const profileCard = document.getElementById("profile-card");
        profileCard.classList.add("visible");
    }
});

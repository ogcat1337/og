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

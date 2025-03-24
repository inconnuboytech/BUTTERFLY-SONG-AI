function generateSong() {
    let text = document.getElementById('song-input').value;
    if (text) {
        let audio = new SpeechSynthesisUtterance(text);
        audio.lang = "fr-FR";
        window.speechSynthesis.speak(audio);
        document.getElementById("song-output").innerText = "Chanson générée avec succès !";
    }
}

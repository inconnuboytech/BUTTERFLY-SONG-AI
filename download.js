function downloadSong() {
    let text = document.getElementById('song-input').value;
    if (text) {
        let blob = new Blob([text], { type: 'text/plain' });
        let a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'song.txt';
        a.click();
    }
}

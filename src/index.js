const notes = {
    'C3' : new Audio('./audio/C3.mp3'),
    'D3' : new Audio('./audio/D3.mp3'),
    'E3' : new Audio('./audio/E3.mp3'),
    'F3' : new Audio('./audio/F3.mp3'),
    'G3' : new Audio('./audio/G3.mp3'),
    'A3' : new Audio('./audio/A3.mp3'),
    'B3' : new Audio('./audio/B3.mp3'),
    'C4' : new Audio('./audio/C4.mp3'),
    'D4' : new Audio('./audio/D4.mp3'),
    'E4' : new Audio('./audio/E4.mp3'),
    'F4' : new Audio('./audio/F4.mp3'),
    'G4' : new Audio('./audio/G4.mp3'),
    'A4' : new Audio('./audio/A4.mp3'),
    'B4' : new Audio('./audio/B4.mp3'),
    'Db3' : new Audio('./audio/Db3.mp3'),
    'Eb3' : new Audio('./audio/Eb3.mp3'),
    'Gb3' : new Audio('./audio/Gb3.mp3'),
    'Ab3' : new Audio('./audio/Ab3.mp3'),
    'Bb3' : new Audio('./audio/Bb3.mp3'),
    'Db4' : new Audio('./audio/Db4.mp3'),
    'Eb4' : new Audio('./audio/Eb4.mp3'),
    'Gb4' : new Audio('./audio/Gb4.mp3'),
    'Ab4' : new Audio('./audio/Ab4.mp3'),
    'Bb4' : new Audio('./audio/Bb4.mp3'),

}

function playNote(note) {
    if (notes[note]) {
        notes[note].currentTime = 0;
        notes[note].play();
    } else {
    }
}

document.querySelectorAll('.whitekey, .blackkey').forEach(key => {
    key.addEventListener('click', () => {
        playNote(key.id);
    });
});


 
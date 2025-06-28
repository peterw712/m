const words =  [
  "I am present in this moment.",
  "I am safe and grounded.",
  "With each breath, I feel more calm.",
  "Peace flows through me.",
  "I trust the process of life.",
  "I release what I cannot control.",
  "I am open to healing.",
  "My breath anchors me to the present.",
  "I am light. I am love. I am peace.",
  "In stillness, I find clarity.",
  "I honor my journey.",
  "Every breath nourishes my soul.",
  "I choose inner peace.",
  "I am enough as I am.",
  "I embrace the now with gratitude.",
  "I am aligned with my highest self.",
  "I let go of fear and welcome love.",
  "My thoughts are gentle and kind.",
  "I am rooted in the here and now.",
  "Each breath cleanses my body and mind.",
  "I am becoming the best version of myself.",
  "My mind is calm, my heart is full.",
  "I trust my inner wisdom.",
  "I radiate peace and compassion.",
  "I am connected to everything around me.",
  "I choose serenity over stress.",
  "I inhale peace, I exhale tension.",
  "I am resilient and strong.",
  "I allow myself to simply be.",
  "I surrender to this moment.",
  "My body is relaxed. My mind is quiet.",
  "I release all tension with every exhale.",
  "I am centered and grounded.",
  "All is well in this moment.",
  "I let go of judgment and choose acceptance.",
  "My breath guides me home.",
  "I embrace the flow of life.",
  "I welcome peace into my being.",
  "I observe my thoughts without attachment.",
  "I am present. I am still. I am aware.",
  "Gratitude fills my heart.",
  "I let go of the past and welcome the present.",
  "I am whole and complete.",
  "Calm is my natural state.",
  "I breathe in clarity and breathe out doubt.",
  "I trust the rhythm of life.",
  "Stillness is my sanctuary.",
  "My presence is powerful and peaceful.",
  "Each breath is a gift.",
  "I am at peace with myself.",
  "My breath restores me.",
  "I live in harmony with myself and others.",
  "I forgive myself and others.",
  "I am love, I give love, I receive love.",
  "Every breath brings me peace.",
  "I detach from worry and embrace trust.",
  "I return to my breath when I feel lost.",
  "I am a vessel of calm.",
  "I invite healing into every cell of my body.",
  "I am grateful for this breath.",
  "I flow with the current of life.",
  "My soul is calm and quiet.",
  "I honor this sacred pause.",
  "I trust in the unfolding of my life.",
  "Peace is within me.",
  "I find joy in simple moments.",
  "I am still. I am silent. I am aware.",
  "I allow myself to slow down.",
  "I open my heart to stillness.",
  "I am in tune with the universe.",
  "I feel deeply rooted and free.",
  "In this breath, I am whole.",
  "I welcome silence and inner knowing.",
  "I choose to see through eyes of compassion.",
  "This moment is enough.",
  "I trust that everything is unfolding perfectly.",
  "My breath calms every cell in my body.",
  "I allow thoughts to pass like clouds.",
  "I welcome the calm of now.",
  "I find peace in letting go.",
  "I surrender my resistance.",
  "I am centered in love and peace.",
  "I listen deeply to the silence within.",
  "I relax into this moment fully.",
  "I am one with the breath of life.",
  "I breathe in peace, I breathe out love.",
  "Stillness is my strength.",
  "Each moment is a new beginning.",
  "I breathe deeply and release tension.",
  "I am a peaceful observer of my life.",
  "I accept myself completely.",
  "I am a mirror of calm reflection.",
  "I am at home in my body.",
  "I allow myself to feel light and free.",
  "This breath connects me to the divine.",
  "I find peace in simplicity.",
  "I am open to stillness and serenity.",
  "The present moment is my home.",
  "I radiate calm energy.",
  "I allow peace to enter my thoughts.",
  "Every inhale renews me. Every exhale softens me.",
  "I am clarity. I am ease. I am love."
];

const wordContainer = document.getElementById('wordContainer');
const intervalInput = document.getElementById('intervalInput');
const setIntervalButton = document.getElementById('setIntervalButton');

let intervalId;

// Function to get a random word from the array
function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

// Function to update the displayed word and speak it aloud
function updateWord() {
    const newWord = getRandomWord();
    wordContainer.textContent = newWord;
    speak(newWord);
}

// Function to set a new interval for generating words
function setNewInterval() {
    const intervalValue = parseInt(intervalInput.value) * 1000;
    if (!isNaN(intervalValue) && intervalValue > 0) {
        clearInterval(intervalId);
        intervalId = setInterval(updateWord, intervalValue);
        updateWord();  // Update word immediately after changing interval
    } else {
        alert("Please enter a valid number greater than 0");
    }
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    // Try to find a male voice by name (you can tweak this list based on what shows up in console)
    const maleVoice = voices.find(voice =>
        /male|daniel|david|fred|alex|google uk english male/i.test(voice.name + voice.voiceURI)
    );

    utterance.voice = maleVoice || voices[0]; // fallback to first voice
    utterance.rate = 1; // optional: tweak rate/speed
    window.speechSynthesis.speak(utterance);
}


// Event listener for the set interval button
setIntervalButton.addEventListener('click', setNewInterval);

// Initial call to display a word immediately on load and set default interval
intervalId = setInterval(updateWord, 5000);
updateWord();

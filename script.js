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
  "I am awareness itself.",
    "I rest in the eternal now.",
    "Presence is my true nature.",
    "I am the witness of all that arises.",
    "I observe without judgment.",
    "I let go of the illusion of time.",
    "I am not my thoughts.",
    "I am not this body.",
    "I am not this name.",
    "I am that which sees.",
    "I return to stillness.",
    "This moment is complete.",
    "I need nothing to be whole.",
    "I am empty and full at once.",
    "I am the silence beneath all sound.",
    "I welcome the unknown.",
    "My essence is changeless.",
    "I dissolve into being.",
    "There is nowhere to go but here.",
    "I am the space in which all unfolds.",
    "In stillness, I remember who I am.",
    "The now is enough.",
    "Awareness is free.",
    "I surrender to what is.",
    "I abide in pure being.",
    "I release the story of \"me.\"",
    "The ego is a passing cloud.",
    "I let go of needing to be someone.",
    "I am free from identity.",
    "I am not the doer.",
    "My soul is untouched by form.",
    "I welcome death of the false self.",
    "I lose myself to find my Self.",
    "I am nameless, formless, timeless.",
    "I am not the thinker.",
    "I let go of personal will.",
    "I trust the unfolding.",
    "I drop all masks.",
    "I dissolve all seeking.",
    "I am not defined by my past.",
    "I am not the roles I play.",
    "I offer up control.",
    "I accept not knowing.",
    "I surrender my identity.",
    "I am a mirror, reflecting all.",
    "I rest in the unknown.",
    "I am pure potential.",
    "I release all resistance.",
    "I bow to the mystery.",
    "I trust the truth to reveal itself.",
    "I am one with all that is.",
    "Separation is illusion.",
    "I am the light in all beings.",
    "I see God in all things.",
    "I am love without condition.",
    "My heart is boundless.",
    "The world is my reflection.",
    "I am the ocean, not the wave.",
    "All is one.",
    "I embrace the sacred in everything.",
    "I love without holding.",
    "I give without fear.",
    "I receive without attachment.",
    "I forgive because I am free.",
    "I serve the whole.",
    "I am compassion in motion.",
    "I am connected to all life.",
    "I bow to the divine in others.",
    "All beings are my family.",
    "Peace begins with me.",
    "I offer my heart to the world.",
    "My essence is love.",
    "There is no other.",
    "Love is what I am.",
    "I am home in the One.",
    "I see beyond form.",
    "Truth is revealed in silence.",
    "I awaken to what has always been.",
    "I am light beyond light.",
    "My soul is eternal.",
    "I dissolve in divine presence.",
    "I trust the pathless path.",
    "Enlightenment is my birthright.",
    "I am the flame that cannot be extinguished.",
    "I bow to the light within.",
    "Grace flows through me.",
    "I am the doorway to the infinite.",
    "All is sacred, all is divine.",
    "I have already arrived.",
    "I awaken now.",
    "I remember the Self.",
    "I merge with the Source.",
    "I see through the eyes of God.",
    "I am the awakened One.",
    "The Truth lives in me.",
    "I walk in freedom.",
    "I radiate divine stillness.",
    "I am a vessel of the Absolute.",
    "I am That I Am.",
    "There is only One, and I am That."
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

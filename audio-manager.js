// audio-manager.js

class AudioManager {
    constructor() {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    playTone(frequency, duration) {
        const oscillator = this.audioContext.createOscillator();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        oscillator.connect(this.audioContext.destination);
        oscillator.start();
        oscillator.stop(this.audioContext.currentTime + duration);
    }

    stopAll() {
        const oscillators = this.audioContext._oscillators || [];
        oscillators.forEach(oscillator => oscillator.stop());
    }
}

export default AudioManager;
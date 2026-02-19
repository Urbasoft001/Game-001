// Enregistrement du Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(registration => {
        console.log('Service Worker enregistré:', registration);
    }).catch(error => {
        console.log('Erreur Service Worker:', error);
    });
}

// PWA Installation
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.classList.add('show');
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`Installation: ${outcome}`);
        deferredPrompt = null;
        installBtn.classList.remove('show');
    }
});

window.addEventListener('appinstalled', () => {
    console.log('PWA installée avec succès!');
});
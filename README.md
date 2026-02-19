# 🚀 Space Shooter - PWA Game

Un jeu de tir spatial complet et immersif en **Progressive Web App (PWA)** avec système sonore intégré.

## 📋 Fonctionnalités

✅ **Jeu complet** :
- Mécanique de tir fluide
- Ennemis variés (basiques et renforcés)
- Système de collision
- Niveaux progressifs avec difficultés croissantes

✅ **Système sonore** :
- Son de tir personnalisé
- Son d'explosion dynamique
- Son de dégâts
- Son de powerup (collecte d'ennemi)
- Son de victoire/défaite
- Gestion du volume et du mute

✅ **PWA** :
- Installation locale sur mobile et desktop
- Fonctionnement hors ligne
- Manifest.json complet
- Service Worker pour le cache

✅ **Responsive** :
- Fonctionne sur desktop (clavier)
- Fonctionne sur mobile (écran tactile)
- Adaptation automatique de l'écran

✅ **Persistance** :
- Sauvegarde du meilleur score
- LocalStorage pour les données

## 🎮 Contrôles

### Clavier
- **⬅️ ➡️ Flèches** : Se déplacer
- **ESPACE** : Tirer
- **P** : Pause/Reprendre
- **M** : Activer/Désactiver le son

### Tactile (Mobile)
- **Glisser** : Se déplacer et tirer automatiquement
- **Gauche de l'écran** : Aller à gauche
- **Droite de l'écran** : Aller à droite

## 📁 Structure des fichiers

```
Game-001/
├── index.html                  # Page principale
├── manifest.json               # Configuration PWA
├── sw.js                        # Service Worker
├── service-worker-register.js   # Enregistrement SW
├── game.js                      # Logique du jeu
├── audio-manager.js             # Gestionnaire de sons
└── README.md                    # Documentation
```

## 🚀 Installation et lancement

### 1. **En local** :
```bash
# Cloner le repo
git clone https://github.com/Urbasoft001/Game-001.git
cd Game-001

# Lancer avec un serveur local (Python 3)
python -m http.server 8000

# Ou avec Node.js
npx http-server
```

Accédez à `http://localhost:8000` dans votre navigateur.

### 2. **Installer en tant qu'app PWA** :
- Sur desktop : Cliquez sur l'icône d'installation dans la barre d'adresse
- Sur mobile : Tapez sur le bouton "📱 INSTALLER" au bas de l'écran
- L'app sera disponible hors ligne après installation

## 🎯 Objectif du jeu

1. **Détruire les ennemis** rouges qui descendent de l'écran
2. **Éviter les collisions** avec les ennemis
3. **Augmenter votre score** :
   - Ennemi basique : 10 points
   - Ennemi renforcé : 50 points
4. **Débloquer des niveaux** en atteignant 500 points par niveau
5. **Battre votre meilleur score** sauvegardé

## 📊 Progression du jeu

| Niveau | Score | Vitesse d'apparition | Difficulté |
|--------|-------|----------------------|-----------|
| 1      | 0-499 | Normal               | Facile    |
| 2      | 500-999 | Rapide             | Moyen     |
| 3      | 1000+ | Très rapide         | Difficile |

## 🎵 Système sonore

Le jeu utilise l'**API Web Audio** pour générer des sons synthétiques :

- **Tir** : Fréquence descendante (400→200Hz)
- **Explosion** : Son grave avec bruit blanc filtré
- **Dégâts** : Double fréquence rapide
- **PowerUp** : Mélodie ascendante (400→800Hz)
- **Victoire** : Accord Do-Mi-Sol-Do
- **Défaite** : Notes descendantes

Appuyez sur **M** pour activer/désactiver le son.

## 🛠️ Technologies utilisées

- **HTML5** Canvas pour le rendu graphique
- **JavaScript ES6+** pour la logique du jeu
- **Web Audio API** pour les sons synthétiques
- **Service Worker** pour le fonctionnement hors ligne
- **PWA Manifest** pour l'installation

## 📱 Support des navigateurs

| Navigateur | Desktop | Mobile |
|-----------|---------|--------|
| Chrome    | ✅      | ✅     |
| Firefox   | ✅      | ✅     |
| Safari    | ✅      | ✅     |
| Edge      | ✅      | ✅     |

## 📈 Statistiques

- **Taille totale** : < 30KB (sans compression)
- **Temps de chargement** : < 500ms
- **FPS** : 60 FPS constant
- **Offline** : ✅ Complètement fonctionnel

## 🐛 Bugs connus

Aucun bug connu actuellement. Reportez les problèmes via les issues GitHub.

## 🤝 Contribution

Les contributions sont bienvenues! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Créer des pull requests

## 📄 Licence

Ce projet est sous licence MIT. Libre d'utilisation et de modification.

## 👨‍💻 Auteur

**Urbasoft001** - [GitHub Profile](https://github.com/Urbasoft001)

---

**Amusez-vous bien! 🎮🚀**
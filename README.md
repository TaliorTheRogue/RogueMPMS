# 🎲 Rogue MPMS - Mario Party Map Selector

## 📌 Description

**Rogue MPMS - Mario Party Map Selector** est une application mobile développée en **React Native avec Expo**. Elle permet de sélectionner aléatoirement une carte (map) pour le jeu **Super Mario Party Jamboree** sur Nintendo Switch.

L'application intègre :

- 🎮 **Génération aléatoire d'une map**
- 🎶 **Musique de fond et effets sonores** avec `expo-av`
- 🎭 **Animations fluides** avec `react-native-reanimated`
- 🎨 **Interface optimisée et responsive**

---

## 🚀 Installation et exécution

### 📥 1. Cloner le projet

```bash
git clone https://github.com/TaliorTheTogue/RogueMPMS.git
cd RogueMPMS
```

### 📦 2. Installer les dépendances

```bash
npm install
```

### ▶ 3. Lancer l'application

Si vous utilisez Expo Go :

```bash
npx expo start
```

Puis scannez le QR Code avec l'application Expo Go sur votre téléphone.

Pour lancer sur un simulateur Android ou iOS :

```bash
npx expo start --android # Pour Android
npx expo start --ios    # Pour iOS (nécessite un Mac)
```

---

## 📚 Technologies utilisées

- **React Native** : Framework pour applications mobiles
- **Expo** : Outils et SDK pour faciliter le développement
- **Zustand** : Gestion de l'état simplifiée
- **react-native-reanimated** : Animations fluides et performantes
- **expo-av** : Gestion des sons et de la musique

---

## 🎵 Fonctionnalités principales

### 🎲 Sélection aléatoire d'une map

- Lorsqu'on appuie sur le bouton **"Choisis-moi une Map !"**, une map aléatoire est sélectionnée.
- Une animation de transition est jouée.

### 🎶 Musique de fond

- Une musique d'ambiance se lance automatiquement au démarrage de l'application.

### 🔊 Effets sonores

- Un **son est joué** lors de la sélection d'une map.
- Un **son d'arrivée** est joué après l'animation de transition.

---

## 📁 Structure du projet

```
📂 RogueMPMS
├── 📂 assets
│   ├── 🎨 board-icons/ (fichiers icones des plateaux)
│   ├── 🎨 board-view/ (fichiers images d'illustration des plâteaux)
│   ├── 📜 fonts/ (fichiers des polices personnalisées en ttf et otf)
│   └── 🎵 sounds/ (fichiers audio)
│        └── 🎵 sounds-effects/ (fichiers audio sfx)
├── 📂 src
│   ├── 📂 components
│   │   └── 📜 MapIcons.js  # Affichage des maps avec animations
│   ├── 📂 store
│   │   └── 📜 store.js  # Gestion de l'état avec Zustand
│   ├── 📂 utils
│   │   └── 📜 soundManager.js  # Gestion centralisée des effets sonores
│   └── 📜 App.js  # Composant principal
├── 📜 index.js # Porte d'entrée de l'application
├── 📜 README.md  # Documentation
└── ...
```

---

## 📜 Licence

Projet sous licence **MIT**. Libre à vous de l'utiliser et le modifier.

---

🚀 **Développé avec ❤️ par RogueCorp.**


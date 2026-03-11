# 🍽️ Forktune

A cross-platform recipe discovery app that helps you find inspiration for your next meal. Discover random recipes with detailed ingredients and cooking instructions—available on iOS, Android, and web.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React Native](https://img.shields.io/badge/React%20Native-0.79-61DAFB?style=flat-square&logo=react)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-53.0-000020?style=flat-square&logo=expo)](https://expo.dev/)
[![License](https://img.shields.io/badge/License-Unlicense-blue?style=flat-square)](LICENSE)

## ✨ Features

- **Random Recipe Discovery** – Get inspired with a single tap using TheMealDB API
- **Cross-Platform** – Works seamlessly on iOS, Android, and web browsers
- **Rich Recipe Details** – View ingredients, measurements, and step-by-step cooking instructions
- **Dark Mode Support** – Beautiful dark and light themes with persistent preferences
- **Responsive Design** – Optimized UI for phones, tablets, and desktops
- **Performance Optimized** – Leverages native rendering with React Native

## 🛠️ Tech Stack

- **Frontend**: React Native 0.79 with Expo Router
- **Styling**: Tailwind CSS + NativeWind v4
- **Language**: TypeScript 5.8
- **UI Components**: React Primitives (buttons, cards, progress bars, etc.)
- **Icons**: Lucide React Native
- **Data**: TheMealDB API integration
- **Backend Ready**: PocketBase setup for future features

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Expo CLI: `npm install -g expo-cli`
- iOS/Android simulators or physical devices (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/ijshd7/forktune.git
cd forktune

# Install dependencies
cd ui
npm install

# Start the development server
npm run dev        # Expo tunnel
npm run dev:web    # Web browser
npm run dev:android # Android emulator
npm run dev:ios    # iOS simulator
```

### Available Scripts

```bash
npm run dev          # Start with Expo tunnel
npm run dev:web      # Start web version
npm run dev:android  # Start Android development
npm run dev:ios      # Start iOS development
npm run clean        # Remove .expo and node_modules
```

## 📱 Usage

1. Launch the app on your preferred platform
2. Tap **"Get Random Recipe"** to fetch a recipe
3. Scroll through ingredients and cooking instructions
4. Toggle dark/light mode with the theme switcher
5. Repeat to discover more recipes!

## 🏗️ Project Structure

```
forktune/
├── ui/                           # Main React Native app
│   ├── app/                      # Expo Router screens
│   │   ├── index.tsx            # Home/recipe screen
│   │   ├── _layout.tsx          # Root layout with theme
│   │   └── +not-found.tsx       # 404 page
│   ├── components/               # Reusable UI components
│   ├── lib/                      # Utilities & constants
│   ├── assets/                   # Images, icons, fonts
│   ├── global.css               # Tailwind styles
│   ├── app.json                 # Expo configuration
│   └── package.json
├── db/                          # PocketBase backend (optional)
├── LICENSE
└── README.md
```

## 🎨 Design & UX

- **Responsive Layout** – Adapts beautifully to all screen sizes
- **Accessible** – Proper contrast ratios, semantic HTML/React components
- **Loading States** – Clear feedback with spinners and status messages
- **Error Handling** – Graceful error messages for failed requests
- **Theme Persistence** – User's theme preference saved locally

## 🔮 Future Enhancements

- User authentication with PocketBase
- Favorite recipes bookmarking
- Advanced search and filtering
- Nutritional information display
- Recipe sharing functionality
- Offline support with local caching

## 📄 License

This project is released under the **Unlicense**, placing it in the public domain. See [LICENSE](LICENSE) for details.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests to help improve Forktune.

## 🙏 Acknowledgments

- Recipe data provided by [TheMealDB API](https://www.themealdb.com/)
- UI components from [React Primitives](https://github.com/rn-primitives/rn-primitives)
- Styling powered by [Tailwind CSS](https://tailwindcss.com/) and [NativeWind](https://www.nativewind.dev/)
- Starter template based on [react-native-reusables](https://github.com/mrzachnugent/react-native-reusables)
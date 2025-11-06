# HobbyCue - Complete Authentication System

## 🚀 Quick Start Guide

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable Authentication:
   - Go to **Authentication** → **Sign-in method**
   - Enable **Google** provider
   - Add your domain to authorized domains
4. Get your Firebase config:
   - Go to **Project Settings** → **General**
   - Scroll down to "Your apps"
   - Click the web icon (`</>`) to add a web app
   - Copy the `firebaseConfig` object
5. Update `src/firebase.js` with your config:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
};
```

### 3. Run the Development Server

```bash
npm run dev
```

### 4. Access the Application

- **Home Page:** `http://localhost:5173/`
- **Sign In:** `http://localhost:5173/signin`
- **Join/Sign Up:** `http://localhost:5173/join`
- **Dashboard (Protected):** `http://localhost:5173/dashboard`

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Main navigation header
│   ├── DropdownMenu.jsx     # Reusable dropdown component
│   ├── AuthCard.jsx         # Authentication card wrapper
│   ├── InputField.jsx       # Email input with icon
│   ├── PasswordField.jsx    # Password input with visibility toggle
│   ├── GoogleButton.jsx     # Google OAuth button
│   ├── FacebookButton.jsx   # Facebook OAuth button
│   └── ProtectedRoute.jsx   # Route protection component
├── pages/
│   ├── SignIn.jsx           # Sign In page
│   ├── Join.jsx             # Join/Sign Up page
│   └── GroupPage.jsx        # Home page
├── context/
│   └── AuthContext.jsx      # Authentication context provider
├── firebase.js              # Firebase configuration
├── App.jsx                  # Main app component with routing
└── main.jsx                # Entry point
```

## 🔐 Authentication Features

- ✅ Google OAuth integration with Firebase
- ✅ Auth state management with React Context
- ✅ Protected routes
- ✅ Sign out functionality
- ✅ User session persistence

## 🎨 Design Specifications

- **Background:** `bg-[#f4f1fa]`
- **Primary Colors:** Purple `#7a57d1`, Teal `#00b8d4`
- **Typography:** TailwindCSS utility classes
- **Responsive:** Mobile-first design

## 📝 Routes

- `/` - Home page (Add Your Listing)
- `/signin` - Sign In page
- `/join` - Join/Sign Up page
- `/dashboard` - Protected dashboard

## 🎯 Components Usage

All components are reusable and modular. Check individual component files for props and usage examples.


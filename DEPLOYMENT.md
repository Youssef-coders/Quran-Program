# Deployment Guide - MRIS Quran Program

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended)

#### Prerequisites:
- GitHub account
- Git installed locally
- Repository created on GitHub

#### Steps:

1. **Initialize Git Repository**
```bash
git init
git add .
git commit -m "Initial commit: MRIS Quran Program with Firebase integration"
```

2. **Connect to GitHub**
```bash
git remote add origin https://github.com/yourusername/quran-program.git
git branch -M main
git push -u origin main
```

3. **Enable GitHub Pages**
- Go to your repository settings
- Scroll to "Pages" section
- Select "Deploy from a branch"
- Choose "main" branch and "/ (root)" folder
- Click "Save"

4. **Access Your Site**
Your site will be available at: `https://yourusername.github.io/quran-program/`

#### Automatic Deployment (Optional):
Move `deploy.yml` to `.github/workflows/deploy.yml` for automatic deployments on push.

### Option 2: Firebase Hosting

#### Prerequisites:
- Firebase CLI installed: `npm install -g firebase-tools`
- Firebase project created

#### Steps:

1. **Login to Firebase**
```bash
firebase login
```

2. **Initialize Firebase Hosting**
```bash
firebase init hosting
```

3. **Configure firebase.json**
```json
{
  "hosting": {
    "public": ".",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

4. **Deploy**
```bash
firebase deploy
```

### Option 3: Netlify

#### Steps:

1. **Connect Repository**
- Go to [Netlify](https://netlify.com)
- Click "New site from Git"
- Connect your GitHub repository

2. **Configure Build Settings**
- Build command: `echo "No build required"`
- Publish directory: `/` (root)

3. **Deploy**
Netlify will automatically deploy on every push to main branch.

## 🔧 Configuration

### Firebase Setup

1. **Create Firebase Project**
- Go to [Firebase Console](https://console.firebase.google.com)
- Create new project
- Enable Firestore Database

2. **Update Configuration**
Replace the Firebase config in both `index.html` and `signup.html`:

```javascript
const firebaseConfig = {
    apiKey: "your-actual-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};
```

3. **Set Firestore Rules**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true; // For development only
    }
  }
}
```

### Security Considerations

For production deployment:

1. **Firestore Security Rules**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /students/{studentId} {
      allow read, write: if request.auth != null;
    }
    match /teachers/{teacherId} {
      allow read, write: if request.auth != null;
    }
    match /emailLogs/{logId} {
      allow write: if request.auth != null;
      allow read: if false;
    }
    match /smsLogs/{logId} {
      allow write: if request.auth != null;
      allow read: if false;
    }
  }
}
```

2. **Environment Variables**
Consider using environment variables for sensitive configuration.

## 📱 Mobile Optimization

The application is fully responsive and works on:
- Desktop browsers
- Tablets
- Mobile phones
- Progressive Web App (PWA) ready

## 🔍 Testing Before Deployment

1. **Local Testing**
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8000
```

2. **Test Checklist**
- [ ] Student signup works
- [ ] ID generation functions correctly
- [ ] Email/SMS notifications simulate properly
- [ ] Login system authenticates users
- [ ] Firebase connection established
- [ ] Responsive design on mobile
- [ ] Language toggle works
- [ ] All forms validate properly

## 🚨 Troubleshooting

### Common Issues:

1. **Firebase Connection Failed**
- Check API key and project configuration
- Verify Firestore is enabled
- Check browser console for errors

2. **GitHub Pages Not Loading**
- Ensure `index.html` is in root directory
- Check repository is public
- Wait up to 10 minutes for deployment

3. **CORS Issues**
- Use proper hosting (not file:// protocol)
- Configure Firebase CORS if needed

### Debug Mode:
Open browser console to see detailed logs and Firebase connection status.

## 📊 Analytics & Monitoring

Consider adding:
- Google Analytics for usage tracking
- Firebase Analytics for user behavior
- Error monitoring with Sentry

---

**Note**: This deployment guide covers static hosting. For advanced features like real email/SMS sending, you'll need backend services or Firebase Functions.

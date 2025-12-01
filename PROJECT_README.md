# Client Service MasterClass

An interactive Progressive Web Application (PWA) for training and onboarding Client Service teams. Built with React 19, TypeScript, and Tailwind CSS.

## Features

### 🎓 Learning Modules
- **5 Comprehensive Modules** covering:
  - Foundations & Communication
  - Project Management Excellence
  - Meetings & Digital Etiquette
  - Documentation & Security
  - Client Strategy & Relations

- Each module includes:
  - Multiple sections with detailed content
  - DO's and DON'Ts cards
  - Section completion tracking
  - Progress bars

### 📝 Interactive Quizzes
- 10 questions per module
- Instant feedback with explanations
- Module-specific and Comprehensive Exam modes
- Score tracking and best score persistence
- Certificate generation for passing scores (70%+)

### 🎮 Gamification
- **XP System**:
  - 50 XP per completed section
  - 100 XP per correct quiz answer
- Live leaderboard with rankings
- Progress tracking across all modules
- Badge system (Gold, Silver, Bronze)

### 👤 User Management
- Simple name/role login
- Profile editing
- Session persistence via localStorage
- Statistics dashboard (Total XP, Modules Completed, Quiz Average)

### 🏆 Certifications
- Auto-generated certificates upon passing quizzes
- Blue theme for module completion
- Gold theme for Comprehensive Exam
- Downloadable as PNG images

### 📱 PWA Capabilities
- Installable on mobile and desktop
- Offline-first with Service Worker
- Responsive design (mobile bottom nav, desktop sidebar)
- App manifest for "Add to Home Screen"

## Tech Stack

- **Framework**: React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Data Persistence**: Browser localStorage
- **State Management**: React hooks (useState, useEffect)

## Design System

- **Primary Color**: Blue (#3B82F6) - Professional, trustworthy
- **Success Color**: Green (#16A34A) - Progress, achievements
- **Warning Color**: Amber (#F59E0B) - Attention, alerts
- **Destructive Color**: Red (#DC2626) - Errors, warnings
- **Gold Color**: Gold (#F59E0B) - Premium certifications

### Typography
- Font Family: Inter (system sans-serif fallback)
- Responsive sizing with proper hierarchy
- Excellent readability for training content

### Animations
- Smooth progress bar transitions
- Fade-in animations for content
- Gold shimmer effect for premium certifications
- Micro-interactions throughout

## Data Structure

### LocalStorage Keys
- `csm_user_profile` - User name and role
- `csm_completed_sections` - Array of completed sections
- `csm_quiz_scores` - Best quiz scores per module

### Module Structure
Each module contains:
- ID, title, description
- Icon (Lucide icon name)
- Sections array (title, content, dos, donts)
- Quiz array (questions, options, correct answer, explanation)

## Routes/Views

1. **Login** - Initial authentication
2. **Dashboard** - Module overview with search
3. **Module Reader** - Section-by-section content viewer
4. **Quiz Runner** - Interactive quiz interface
5. **Profile** - User settings and statistics
6. **Leaderboard** - XP rankings
7. **Comprehensive Exam** - Final assessment

## PWA Setup

### Manifest (`/manifest.json`)
- App name, icons, theme colors
- Standalone display mode
- Portrait orientation

### Service Worker (`/sw.js`)
- Cache-first strategy for static assets
- Stale-while-revalidate for dynamic content
- Offline fallback to index.html

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Build for production: `npm run build`

## Deployment

The app is fully client-side and can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- Firebase Hosting

## Future Enhancements

Potential features for future versions:
- Backend integration for multi-device sync
- Admin panel for content management
- Video lessons and interactive demos
- Team/cohort features
- Advanced analytics and reporting
- Social sharing of achievements
- Notification system for deadlines
- Mobile app versions (iOS/Android)

## License

All rights reserved.

# Talent Hub

Your gateway to opportunities, growth, and development. An interactive Progressive Web Application (PWA) that combines job applications, professional training, skills assessments, and company culture discovery. Built with React 19, TypeScript, and Tailwind CSS.

## Platform Overview

Talent Hub is a comprehensive talent management platform featuring four integrated pathways:

### 💼 Opportunities
- Browse and apply to open positions
- Detailed job descriptions with requirements and responsibilities
- Streamlined application process
- Track application status

### 🎓 MasterClass Programs
- **Client Service MasterClass** - 5 comprehensive modules covering:
  - Foundations & Communication
  - Project Management Excellence
  - Meetings & Digital Etiquette
  - Documentation & Security
  - Client Strategy & Relations

- **Design MasterClass** - Professional design training (coming soon)
- **Creative MasterClass** - Creative excellence programs (coming soon)

- Each module includes:
  - Multiple sections with detailed content
  - DO's and DON'Ts best practices
  - Section completion tracking
  - Interactive quizzes with instant feedback
  - Certificate generation for passing scores (70%+)

### 🎯 Skills Development
- Competency validation assessments
- Required assessments for new hire onboarding
- Categories include:
  - Communication Skills
  - Problem Solving
  - Time Management
  - Technical Knowledge
- Preparation lessons and retake options

### 🏢 Company Culture
- Learn about company values and mission
- Explore office locations
- Discover benefits and perks
- Read FAQs about working with us

## Key Features

### 🎮 Gamification & Progress Tracking
- **XP System**:
  - 50 XP per completed section
  - 100 XP per correct quiz answer
- Live leaderboard with rankings
- Progress tracking across all modules
- Badge system (Gold, Silver, Bronze)

### 👤 User Management
- Simple name/role login
- Profile editing and statistics
- Session persistence via localStorage
- Personal dashboard with achievements

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

### Authentication & Navigation
1. **Login** - Initial authentication
2. **Homepage** - Main portal with four pathway cards
3. **Not Found (404)** - Error page with quick navigation links

### Job Application Pathway
4. **Job Listings** - Browse open positions
5. **Job Details** - View specific job information
6. **Job Application** - Submit application form

### MasterClass Pathway
7. **MasterClass Hub** - Choose learning path (Client Service, Design, Creative)
8. **Dashboard** - Module overview with search and progress
9. **Module Reader** - Section-by-section content viewer
10. **Quiz Runner** - Interactive quiz interface
11. **Profile** - User settings and statistics
12. **Leaderboard** - XP rankings and achievements

### Skills Development Pathway
13. **Skill Testing Dashboard** - Assessments and preparation lessons

### Company Information Pathway
14. **Company Info** - About us, values, culture, and FAQs

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

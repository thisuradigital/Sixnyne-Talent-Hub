# Hiring Portal

A comprehensive hiring and training portal with a unified authentication system and modern UI/UX built with React, TypeScript, and Vite.

## Overview

This is an attractive hiring portal application that provides:
- **Unified Login System**: Single authentication for entire platform
- **Job listings and application workflows**
- **MasterClass training programs** for Client Service, Design, and Creative roles
- **Skill testing assessments** for competency validation
- **Global Header Navigation** accessible from all pages
- **User profiles and progress tracking**
- **Leaderboard functionality**

## Authentication

### Unified Login
- Users must login once to access the entire portal
- A single login credential (name and role) grants access to all features
- Login state is persisted across sessions using localStorage
- Logging out returns users to the login page and clears the session

### Routes
- `/login` - Global authentication page
- Once authenticated, users have access to all features

## Global Navigation

### Top Header Navigation
- Present on all pages (except login)
- **Desktop**: Shows horizontal menu bar with navigation buttons and labels
  - Contains: Home, Jobs, MasterClass, Skills, Company navigation items
  - Logout button on the right side
  - Logo badge on the left showing "HP"
- **Mobile**: Shows hamburger menu button that opens dropdown menu
  - Tap menu button to show/hide navigation items
  - Full vertical menu with all options
  - Auto-closes when selecting an item
- Active state styling to show current section
- Fixed position at top with glass-effect background
- Consistent styling across entire application

## Project Architecture

### Frontend Stack
- **React 18** with TypeScript
- **Vite** for development and bundling
- **React Router v6** for routing
- **TanStack Query** for data fetching
- **Tailwind CSS** for styling
- **Radix UI** + **shadcn/ui** for components
- **Lucide React** for icons

### Directory Structure
```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── GlobalNav.tsx    # Global bottom navigation
│   ├── GlobalLayout.tsx # Layout wrapper with nav
│   ├── MasterClassLayout.tsx
│   └── ...
├── data/                # Constants and static data
├── hooks/               # Custom React hooks
├── lib/                 # Utility libraries
├── pages/               # Page components
├── types/               # TypeScript definitions
└── utils/
    ├── storage.ts       # localStorage utilities
    └── ...
```

### Key Routes
- `/login` - Global login page
- `/` - Homepage with pathway cards
- `/jobs` - Job listings
- `/jobs/:jobId` - Job details
- `/jobs/:jobId/apply` - Job application form
- `/company` - Company information
- `/masterclass` - MasterClass hub
- `/masterclass/dashboard` - User dashboard
- `/masterclass/module/:moduleId` - Module reader
- `/masterclass/quiz/:moduleId` - Quiz runner
- `/masterclass/profile` - User profile
- `/masterclass/leaderboard` - Leaderboard
- `/skill-testing` - Skill testing dashboard
- `/skill-testing/quiz/:assessmentId` - Assessment runner

## Design System

### Color Palette
- **Primary**: Purple gradient (270° 70% 60%)
- **Accent**: Pink/Purple (290° 60% 65%)
- **Destructive**: Red (0° 72% 51%)
- **Warning**: Amber/Gold (43° 96% 56%)
- **Success**: Green (142° 76% 36%)

### Key Visual Features
- Animated gradient backgrounds with radial overlays
- Glass-effect headers with backdrop blur
- Smooth fade-in animations for page elements
- Hover elevations and glow effects
- Modern card designs with rounded corners
- Color-coded pathway icons
- Polished shadows and depth
- Responsive layout (mobile-first design)

### Typography
- Large, bold headings with gradient text
- Clear hierarchy with multiple text color levels
- Improved spacing and padding throughout
- Consistent font sizing across all pages

## Development

### Running the Application
The application runs on port 5000 using Vite dev server:
```bash
npm run dev
```

### Building for Production
```bash
npm run build
```

### Running Preview
```bash
npm run preview
```

## Recent Changes - December 12, 2025

### Unified Authentication System
- Created global login page that authenticates users for entire platform
- Removed separate login pathways (was separate for masterclass/skill-testing)
- Users login once on `/login` with name and role
- Single user profile stored globally in localStorage
- Logout button available in global navigation

### Global Navigation System (Updated)
- **Created `GlobalHeader.tsx`**: Top header navigation component
  - Desktop: Horizontal menu bar with full labels and icons
  - Mobile: Hamburger menu with dropdown
  - Moved from bottom to top of page
  - Logo badge "HP" on left side
  - Active route styling for current page
  - Smooth animations and glass-effect design

- **Updated `GlobalLayout.tsx`**: 
  - Changed from bottom padding (`pb-20`) to top padding (`pt-16`)
  - Now includes header at top via GlobalHeader component
  - Fixed position header with proper z-index layering

### Navigation Fixes
- Removed `hideNav` prop from ModuleReader routes
- Removed `hideNav` prop from QuizRunner routes
- Users now have full navigation access from module pages
- Can navigate away from training modules at any time

### Pages Updated (Padding Adjustments)
- **Homepage.tsx**: Removed bottom padding
- **JobListings.tsx**: Removed bottom padding
- **CompanyInfo.tsx**: Removed bottom padding
- **SkillTestingDashboard.tsx**: Removed bottom padding
- **MasterClassHub.tsx**: Removed bottom padding
- **ModuleReader.tsx**: Removed bottom padding
- **QuizRunner.tsx**: Removed bottom padding (both main and completion screens)

### UI/UX Improvements
- Header navigation fixed at top with glass-effect background
- Responsive design: hamburger menu on mobile, full menu on desktop
- No content overlap with navigation
- Smooth transitions and modern styling
- Logo integration in header

## Component Hierarchy

```
App
├── Login (if not authenticated)
└── GlobalLayout (if authenticated)
    ├── GlobalNav
    └── Routes
        ├── Homepage
        ├── JobListings
        ├── JobDetails
        ├── JobApplication
        ├── CompanyInfo
        ├── MasterClassHub
        ├── MasterClassLayout
        │   ├── Dashboard
        │   ├── ModuleReader
        │   ├── QuizRunner
        │   ├── Profile
        │   └── Leaderboard
        └── SkillTestingDashboard
```

## Styling Approach

The project uses Tailwind CSS with custom color variables defined in `index.css`:
- All colors use HSL format for better theme switching
- Dark mode fully supported with automatic color adaptation
- Custom utilities for common patterns
- Smooth transitions and animations throughout
- Consistent spacing and padding across all pages

## Key Features

### Authentication
- Simple, secure user login with name and role
- localStorage-based persistence
- Global state management for user profile
- Automatic logout with profile clearing

### Navigation
- Bottom-fixed navigation bar for easy access on mobile
- Visual indicators for active sections
- Responsive design that adapts to screen sizes
- Quick logout button

### User Experience
- Smooth page transitions with fade-in animations
- Modern gradient backgrounds
- Glass-effect components
- Consistent visual language across all pages
- Accessible color scheme and typography

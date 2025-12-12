# Hiring Portal

A comprehensive hiring and training portal with a modern, polished UI built with React, TypeScript, and Vite.

## Overview

This is an attractive hiring portal application that provides:
- Job listings and application workflows
- MasterClass training programs for Client Service, Design, and Creative roles
- Skill testing assessments
- User profiles and progress tracking
- Leaderboard functionality

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
├── components/       # Reusable UI components
│   ├── ui/          # shadcn/ui components
│   └── ...          # App-specific components
├── data/            # Constants and static data
├── hooks/           # Custom React hooks
├── lib/             # Utility libraries
├── pages/           # Page components
├── types/           # TypeScript type definitions
└── utils/           # Helper functions
```

### Key Routes
- `/` - Homepage with pathway cards
- `/jobs` - Job listings
- `/jobs/:jobId` - Job details
- `/jobs/:jobId/apply` - Job application form
- `/company` - Company information
- `/masterclass` - MasterClass hub
- `/masterclass/dashboard` - User dashboard
- `/masterclass/module/:moduleId` - Module reader
- `/masterclass/quiz/:moduleId` - Quiz runner
- `/skill-testing` - Skill testing dashboard

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

### Typography
- Large, bold headings with gradient text
- Clear hierarchy with multiple text color levels
- Improved spacing and padding throughout

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

## Recent Changes

### December 12, 2025
- **Migrated from Lovable to Replit environment**
  - Updated Vite config to use port 5000 and allow all hosts
  - Removed lovable-tagger plugin dependency

### UI/UX Improvements
- Enhanced Homepage with modern design and visual hierarchy
- Added animated background gradients and overlays
- Improved card styling with better hover states and animations
- Color-coded pathway cards (red, purple, amber, cyan)
- New "Welcome to Your Journey" badge on homepage
- Better typography with larger, bolder headings
- Added footer CTA section with dual action buttons
- Enhanced JobListings page with larger header and improved spacing
- Updated MasterClassHub with consistent styling
- Refined color system with better shadows and depth
- Added new animation classes (slide-in-up, pulse-glow)
- Improved glass-effect headers with backdrop blur
- Better visual feedback on interactive elements

## Styling Approach

The project uses Tailwind CSS with custom color variables defined in `index.css`:
- All colors use HSL format for better theme switching
- Dark mode fully supported with automatic color adaptation
- Custom utilities for common patterns (hover-lift, glow-on-hover, card-hover, scale-on-hover)
- Smooth transitions and animations throughout
- Consistent spacing and padding across all pages

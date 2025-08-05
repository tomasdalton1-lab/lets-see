# Geremiaco Landing Page

A modern, responsive Next.js landing page with smooth Framer Motion animations and video backgrounds.

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Stylus for component-specific styles
- Zustand for state management
- Shadcn UI / Radix UI components

## Features

- 🎬 **Video Backgrounds** - Hero section with looping MP4 video
- ✨ **Smooth Animations** - Framer Motion with subtle, professional transitions
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🎯 **Viewport Triggers** - Animations trigger once when sections enter view
- 🎨 **Modern UI** - Clean design with hover effects and micro-interactions

## Project Structure

```
/src
  /app             # Next.js App Router pages
  /components      # Reusable React components
    /sections      # Landing page sections
      /hero        # Hero section with video background
      /problem     # Problem section with animated cards
      /solution    # Solution timeline with staggered animations
      /diference   # Difference section with hover effects
      /opinion-leadership # Article cards with smooth transitions
      /social-test # Testimonial carousel with AnimatePresence
      /call-to-action # Final CTA with form animations
    /ui            # UI components (buttons, cards, etc.)
  /lib             # Utilities and shared code
  /public/videos   # Video assets for backgrounds
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Landing Page Structure

The landing page is organized into seven strategic sections with smooth Framer Motion animations:

1. **Hero** - Video background with staggered text animations
2. **Problem** - Animated cards with glowing hover borders
3. **Solution** - Timeline with phase-by-phase reveals
4. **Difference** - Grid cards with subtle lift effects
5. **Opinion Leadership** - Article cards with scale animations
6. **Social Test** - Testimonial carousel with smooth transitions
7. **Call to Action** - Form with interactive input animations

## Animation Guidelines

- **Smooth & Subtle**: Low movement values (8-20px) with long durations (1.0-1.2s)
- **Consistent Easing**: "easeOut" for all transitions
- **Viewport Triggers**: `once: true` for single-play animations
- **Staggered Effects**: Natural cascading with 0.15s delays
- **Interactive Elements**: Hover and tap micro-interactions

## Development Guidelines

- Follow Standard.js rules
- Use functional components and hooks
- Implement Tailwind for layout and common utilities
- Use Stylus modules for component-specific styles
- Minimize client-side JavaScript with React Server Components
- Use Framer Motion for all animations and transitions

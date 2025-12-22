# Enactus App Setup Instructions

## Project Structure Created

✅ **Router** - Vue Router installed and configured
✅ **Navbar** - Responsive navigation with routing
✅ **Hero Section** - Home page with text, button, and image
✅ **Pages** - 6 pages created (Home, About, Business, Participants, Competitions, News)

## How to Add Your Images

### 1. Add the Enactus Logo
- Place your Enactus logo in: `public/images/enactus-logo.png`
- Update the Navbar component at line 7 to use your logo:
  ```vue
  <img src="/images/enactus-logo.png" alt="Enactus Logo" class="logo-img">
  ```

### 2. Add the Hero Image
- Place your hero image (students with flags) in: `public/images/hero-image.jpg`
- Update the Home.vue component at line 13 to use your image:
  ```vue
  <img src="/images/hero-image.jpg" alt="Enactus students with flags" />
  ```

## Running the Project

1. **Install Node.js** (if not already installed)
   - Download from: https://nodejs.org/
   - Version required: 20.19.0 or higher

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run development server:**
   ```
   npm run dev
   ```

4. **Open in browser:**
   - Usually: http://localhost:5173

## Navigation Structure

The navbar includes these routes:
- **Главная** (Home) - `/`
- **О нас** (About) - `/about`
- **Бизнес** (Business) - `/business`
- **Участникам** (Participants) - `/participants`
- **Соревнования** (Competitions) - `/competitions`
- **Новости** (News) - `/news`

## Customization

### Change Text in Hero Section
Edit `src/views/Home.vue`:
- Line 6: Main title
- Lines 7-9: Subtitle text
- Line 11: Button text

### Change Colors
Edit the styles in components:
- Yellow button: `#ffd700`
- Dark background: `#1a1a2e`
- WhatsApp green: `#25d366`

### Add More Pages
1. Create new file in `src/views/YourPage.vue`
2. Add route in `src/router/index.js`
3. Add link in `src/components/Navbar.vue`

## Features Included

✅ Responsive design (mobile-friendly)
✅ Sticky navbar
✅ Active route highlighting
✅ Mobile menu toggle
✅ Contact button
✅ Language selector (RU)
✅ WhatsApp icon
✅ Hero section with image overlay
✅ Smooth transitions and hover effects

Enjoy building your Enactus website! 🚀
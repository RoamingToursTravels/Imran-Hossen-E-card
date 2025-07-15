# Imran Hossen - Digital Business Card

## 📋 Project Overview

A modern, responsive digital business card for Imran Hossen, built with HTML5, CSS3, and JavaScript. Features dark mode toggle, smooth animations, contact saving functionality, and social media integration.

**Name:** Imran Hossen  
**Roles:** Executive Director at Mind Mentor Overseas Ltd | Head Of Business at Roaming Tours & Travels  
**Version:** 2.0.0  
**Last Updated:** December 19, 2024

## 📁 Project Structure

```
Imran Hossen E-card/
├── Photos/                    # Image assets
│   ├── dark-pattern.svg      # Dark mode background pattern
│   ├── employee.jpeg         # Profile image (Imran Hossen)
│   ├── light-pattern.svg     # Light mode background pattern
│   ├── RTTLOGO.png           # Roaming Tours & Travels logo
│   └── Rlogo.png             # Mind Mentor Overseas logo
├── index.html                # Main HTML file
├── ecard.css                 # Stylesheet
├── ecard.js                  # JavaScript functionality
├── config.json               # Configuration data
├── imran-hossen-contact.vcf  # vCard contact file
├── .gitignore                # Git ignore file
└── README.md                 # Documentation
```

## 🔧 Easy Customization Guide

### 1. Personal Information

Edit the `config.json` file to update personal details:

```json
{
  "personal": {
    "name": "Your Name",
    "organization": "Your Company",
    "title": "Your Job Title",
    "department": "Your Department",
    "employeeId": "Your ID",
    "officePhone": "Your Office Phone",
    "personalPhone": "Your Personal Phone",
    "email": "your.email@company.com",
    "website": "https://yourwebsite.com/",
    "address": {
      "street": "Your Street Address",
      "city": "Your City",
      "country": "Your Country",
      "full": "Complete Address"
    }
  }
}
```

### 2. Social Media Links

Update social media profiles in `config.json`:

```json
{
  "social": {
    "linkedin": "https://linkedin.com/in/yourprofile",
    "facebook": "https://facebook.com/yourprofile",
    "github": "https://github.com/yourusername",
    "portfolio": "https://yourportfolio.com",
    "whatsappNumber": "your-whatsapp-number"
  }
}
```

### 3. Image Assets

Current images in the `Photos/` folder:

- **Profile Image:** `employee.jpeg` (Imran Hossen's photo)
- **Company Logos:** `RTTLOGO.png` (Roaming Tours & Travels), `Rlogo.png` (Mind Mentor Overseas)
- **Background Patterns:** `light-pattern.svg`, `dark-pattern.svg`

To customize, update paths in `config.json`:

```json
{
  "assets": {
    "companyLogo": "./Photos/your-logo.png",
    "profileImage": "./Photos/your-photo.jpeg",
    "lightBackground": "./Photos/light-pattern.svg",
    "darkBackground": "./Photos/dark-pattern.svg",
    "favicon": "./Photos/your-favicon.png"
  }
}
```

### 4. Theme Colors

Customize colors in `config.json`:

```json
{
  "theme": {
    "primaryColor": "#your-primary-color",
    "secondaryColor": "#your-secondary-color",
    "accentColor": "#your-accent-color"
  }
}
```

### 5. HTML Content Updates

For direct HTML updates, modify these sections in `index.html`:

- **Line 25:** Company logo source
- **Line 28:** Profile image source
- **Line 31-33:** Name, role, and department
- **Line 37-40:** Contact information
- **Line 44-48:** Social media links
- **Line 52-53:** Address and website

## 🎨 CSS Customization

### Key CSS Variables (in `ecard.css`):

```css
body {
    --primary-color: #884dff;
    --secondary-color: #33aaff;
    --accent-color: #ff6b6b;
    /* ... other variables */
}
```

### Background Images:

```css
.ecard-bg-pattern {
    background-image: url('./Photos/RoamingBackground.jpg');
}

body.dark-mode .ecard-bg-pattern {
    background-image: url('./Photos/DarkMOOD.png');
}
```

## ⚙️ JavaScript Configuration

### Main Configuration Object (in `ecard.js`):

```javascript
const ECARD_CONFIG = {
    PERSONAL: { /* personal info */ },
    SOCIAL: { /* social links */ },
    ASSETS: { /* file paths */ },
    ANIMATION: { /* animation settings */ }
};
```

## 🚀 Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **Dark Mode Toggle** - Smooth light/dark theme switching
- ✅ **Contact Saving** - Download vCard (.vcf) files
- ✅ **WhatsApp Integration** - Direct messaging functionality
- ✅ **Social Media Links** - LinkedIn, Facebook, GitHub, Portfolio
- ✅ **Smooth Animations** - Modern CSS transitions and effects
- ✅ **Professional Styling** - Glass morphism and modern UI
- ✅ **Cross-browser Compatible** - Works on all modern browsers

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🔄 Quick Setup Steps

1. **Clone/Download** the project files
2. **Replace images** in the `Photos/` folder
3. **Update** `config.json` with your information
4. **Modify** HTML content if needed
5. **Customize** CSS colors and styles
6. **Test** in browser
7. **Deploy** to your web server

## 🚀 Deployment

### GitHub Deployment
1. Initialize git repository: `git init`
2. Add files: `git add .`
3. Commit: `git commit -m "Initial commit"`
4. Add remote: `git remote add origin <your-repo-url>`
5. Push: `git push -u origin main`

### Netlify Deployment
1. Connect your GitHub repository to Netlify
2. Set build command: (leave empty for static site)
3. Set publish directory: `/` (root directory)
4. Deploy automatically on git push

### Manual Deployment
- Upload all files to your web server
- Ensure `index.html` is in the root directory
- All relative paths will work correctly

## 📞 Contact Imran Hossen

- **Office Phone:** +8801332547044
- **Personal Phone:** +8801521334411
- **Primary Email:** imranhossen.mindmentor@gmail.com
- **Secondary Email:** imranhossen.rtt@gmail.com
- **LinkedIn:** [Imran Hossen](https://www.linkedin.com/in/imran-hossen-5b5802318/)
- **Facebook:** [Imran Hossen](https://www.facebook.com/imran.hossen.7796420)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Digital Business Card for Imran Hossen**  
**Executive Director - Mind Mentor Overseas Ltd**  
**Head Of Business - Roaming Tours & Travels**
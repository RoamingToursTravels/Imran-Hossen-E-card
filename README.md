# E-Card - Digital Business Card

## 📋 Project Overview

A modern, responsive digital business card built with HTML5, CSS3, and JavaScript. Features dark mode toggle, smooth animations, contact saving functionality, and social media integration.

**Author:** M S Kamran  
**Organization:** Roaming BD  
**Version:** 2.0.0  
**Last Updated:** December 19, 2024

## 📁 Project Structure

```
e-card updated copy/
├── Photos/                    # Image assets
│   ├── DarkMOOD.png          # Dark mode background
│   ├── Kamran.png            # Profile image
│   ├── RTTLOGO.png           # Company logo
│   ├── Rlogo.png             # Favicon
│   └── RoamingBackground.jpg # Light mode background
├── index.html               # Main HTML file
├── ecard.css                 # Stylesheet
├── ecard.js                  # JavaScript functionality (includes configuration)
└── README.md                 # Documentation
```

## 🔧 Easy Customization Guide

### 1. Personal Information

Edit the `ECARD_CONFIG` object in `ecard.js` file to update personal details:

```javascript
const ECARD_CONFIG = {
    PERSONAL: {
        name: 'Your Name',
        organization: 'Your Company',
        title: 'Your Job Title',
        secondaryOrganization: 'Your Secondary Company',
        secondaryTitle: 'Your Secondary Title',
        officePhone: 'Your Office Phone',
        personalPhone: 'Your Personal Phone',
        email: 'your.email@company.com',
        secondaryEmail: 'your.secondary@email.com',
        website: 'https://yourwebsite.com/',
        address: {
            street: 'Your Street Address',
            city: 'Your City',
            country: 'Your Country'
        }
    }
};
```

### 2. Social Media Links

Update social media profiles in the `ECARD_CONFIG` object in `ecard.js`:

```javascript
const ECARD_CONFIG = {
    // ... other config
    SOCIAL: {
        linkedin: 'https://linkedin.com/in/yourprofile',
        facebook: 'https://facebook.com/yourprofile',
        github: 'https://github.com/yourusername',
        portfolio: 'https://yourportfolio.com',
        whatsappNumber: 'your-whatsapp-number'
    }
};
```

### 3. Image Assets

Replace images in the `Photos/` folder:

- **Profile Image:** Replace `Kamran.png` with your photo
- **Company Logo:** Replace `RTTLOGO.png` with your company logo
- **Favicon:** Replace `Rlogo.png` with your favicon
- **Backgrounds:** Replace `RoamingBackground.jpg` and `DarkMOOD.png`

Update paths in the `ECARD_CONFIG` object in `ecard.js`:

```javascript
const ECARD_CONFIG = {
    // ... other config
    ASSETS: {
        companyLogo: './Photos/your-logo.png',
        profileImage: './Photos/your-photo.png',
        lightBackground: './Photos/your-light-bg.jpg',
        darkBackground: './Photos/your-dark-bg.png',
        favicon: './Photos/your-favicon.png'
    }
};
```

### 4. Theme Colors

Customize colors directly in the CSS file `ecard.css` by modifying the CSS variables:

```css
body {
    --primary-color: #your-primary-color;
    --secondary-color: #your-secondary-color;
    --accent-color: #your-accent-color;
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
3. **Update** the `ECARD_CONFIG` object in `ecard.js` with your information
4. **Modify** HTML content if needed
5. **Customize** CSS colors and styles
6. **Test** in browser
7. **Deploy** to your web server

## 📞 Support

For questions or support, contact:
- **Email:** mskamranroamingbd@gmail.com
- **LinkedIn:** [M S Kamran](https://www.linkedin.com/in/mskamran23/)
- **GitHub:** [MS-Kamran](https://github.com/MS-Kamran)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by M S Kamran | Roaming BD**
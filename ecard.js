/**
 * E-Card JavaScript - Digital Business Card
 * Author: M S Kamran
 * Organization: Roaming BD
 * Description: Interactive functionality for digital business card
 */

// ===== DATA SCRAPING =====
/**
 * Scrapes employee information directly from the HTML document.
 * This makes the card easily updatable by just changing the HTML.
 * @returns {object} - An object containing the employee's information.
 */
function getEmployeeInfo() {
    const getElementText = (id) => document.getElementById(id)?.textContent.trim() || '';
    const getElementHref = (id) => document.getElementById(id)?.href.trim() || '';

    const roleText = getElementText('ecard-role');
    const departmentText = getElementText('ecard-department');

    // Extract title and organization from the role and department strings
    const extractInfo = (text) => {
        const parts = text.split(' at ');
        return {
            title: parts[0] || '',
            organization: parts[1] || ''
        };
    };

    const primary = extractInfo(roleText);
    const secondary = extractInfo(departmentText);

    return {
        name: getElementText('ecard-name'),
        title: primary.title,
        organization: primary.organization,
        secondaryTitle: secondary.title,
        secondaryOrganization: secondary.organization,
        officePhone: getElementText('ecard-office-phone').replace('Office: ', ''),
        personalPhone: getElementText('ecard-personal-phone').replace('Personal: ', ''),
        email: getElementText('ecard-email'),
        secondaryEmail: getElementText('ecard-secondary-email'),
        website: getElementHref('ecard-website'),
        address: getElementText('ecard-address'),
        linkedin: getElementHref('ecard-linkedin'),
        facebook: getElementHref('ecard-facebook'),
        whatsappNumber: getElementText('ecard-personal-phone').replace('Personal: ', '').replace(/[^0-9]/g, '')
    };
}

// ===== CONTACT MANAGEMENT =====
/**
 * Generates and downloads a vCard contact file.
 */
function saveContact() {
    const employee = getEmployeeInfo();

    const nameParts = employee.name.split(' ');
    const lastName = nameParts.pop() || '';
    const firstName = nameParts.join(' ');

    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${employee.name}
N:${lastName};${firstName};;;
ORG:${employee.organization}
TITLE:${employee.title}
TEL;TYPE=WORK,VOICE:${employee.officePhone}
TEL;TYPE=CELL,VOICE:${employee.personalPhone}
EMAIL:${employee.email}
URL:${employee.website}
ADR;TYPE=WORK:;;${employee.address};;;
END:VCARD`;

    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isAndroid = /android/i.test(navigator.userAgent);

    try {
        const blob = new Blob([vCard], { type: 'text/vcard;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);

        if (isSafari || isAndroid) {
            window.location.href = url;
        } else {
            const downloadLink = document.createElement('a');
            const fileName = `${employee.name.toLowerCase().replace(/\s+/g, '-')}-contact.vcf`;
            
            downloadLink.href = url;
            downloadLink.download = fileName;
            
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            
            setTimeout(() => window.URL.revokeObjectURL(url), 100);
        }
        
        showNotification('Contact ready to be saved!', 'success');
    } catch (error) {
        console.error('Error saving contact:', error);
        showNotification('Error saving contact. Please try again.', 'danger');
    }
}

// ===== WHATSAPP INTEGRATION =====
/**
 * Opens WhatsApp chat with a predefined message.
 */
function openWhatsApp() {
    const employee = getEmployeeInfo();
    const message = 'Hello! I found your contact through your digital business card.';
    
    try {
        const whatsappUrl = `https://wa.me/${employee.whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    } catch (error) {
        console.error('Error opening WhatsApp:', error);
        showNotification('Error opening WhatsApp. Please try again.', 'danger');
    }
}

// ===== DARK MODE FUNCTIONALITY =====
/**
 * Initializes dark mode toggle functionality
 */
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const icon = darkModeToggle?.querySelector('i');
    
    if (!darkModeToggle || !icon) {
        console.error('Dark mode toggle elements not found');
        return;
    }
    
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        body.classList.add('dark-mode');
        updateDarkModeIcon(icon, true);
    }
    
    darkModeToggle.addEventListener('click', function() {
        toggleDarkMode(body, icon, darkModeToggle);
    });
    
    icon.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
}

/**
 * Toggles between light and dark mode
 */
function toggleDarkMode(body, icon, toggleButton) {
    const bgPattern = document.querySelector('.ecard-bg-pattern');
    
    if (!bgPattern) return;
    
    bgPattern.style.opacity = '0.7';
    
    setTimeout(() => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        
        icon.style.transform = 'rotate(180deg)';
        
        setTimeout(() => {
            updateDarkModeIcon(icon, isDark);
            icon.style.transform = 'rotate(0deg)';
        }, 150);
        
        localStorage.setItem('darkMode', isDark.toString());
        
        setTimeout(() => {
            bgPattern.style.opacity = '1';
        }, 100);
        
    }, 100);
    
    toggleButton.style.transform = 'scale(0.9)';
    setTimeout(() => {
        toggleButton.style.transform = '';
    }, 150);
}

/**
 * Updates dark mode toggle icon
 */
function updateDarkModeIcon(icon, isDark) {
    if (isDark) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// ===== NOTIFICATION SYSTEM =====
/**
 * Displays modern notification messages
 */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    const iconMap = {
        success: 'check-circle',
        danger: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    
    notification.className = `alert alert-${type} position-fixed`;
    notification.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        border-radius: 10px;
        animation: slideInRight 0.3s ease;
    `;
    
    notification.innerHTML = `
        <i class="fas fa-${iconMap[type] || iconMap.info} me-2"></i>
        ${message}
        <button type="button" class="btn-close" onclick="this.parentElement.remove()"></button>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentElement) {
                    notification.remove();
                }
            }, 300);
        }
    }, 3000);
}

// ===== ANIMATION SYSTEM =====
/**
 * Initializes sequential animations for page elements
 */
function initAnimations() {
    const animateElements = document.querySelectorAll('.animate-element');
    
    animateElements.forEach(element => {
        const delay = parseInt(element.getAttribute('data-delay')) || 0;
        
        setTimeout(() => {
            element.classList.add('animate-in');
        }, delay);
    });
}

/**
 * Adds interactive hover effects to social buttons
 */
function initSocialButtonEffects() {
    const socialBtns = document.querySelectorAll('.ecard-social-btn');
    
    socialBtns.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.1)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ===== INITIALIZATION =====
/**
 * Main initialization function
 */
function initECard() {
    try {
        initDarkMode();
        initAnimations();
        initSocialButtonEffects();
        
        console.log('E-Card initialized successfully');
    } catch (error) {
        console.error('Error initializing E-Card:', error);
        showNotification('Error loading page features. Please refresh.', 'warning');
    }
}

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', initECard);

document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('Page hidden - optimizing performance');
    } else {
        console.log('Page visible - resuming normal operation');
    }
});

// Export functions for global access
if (typeof window !== 'undefined') {
    window.ECard = {
        saveContact,
        openWhatsApp,
        showNotification
    };
}

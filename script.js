// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Menu Items Data
// Menu Items Data
const menuItems = {
    bread: [
        {
            name: 'Rosemary Olive Sourdough',
            price: '7.95',
            description: 'Our signature sourdough with fresh rosemary and Kalamata olives'
        },
        {
            name: 'Country White Loaf',
            price: '6.95',
            description: 'Classic white bread with a soft, pillowy interior'
        },
        {
            name: 'Whole Grain Seeded',
            price: '8.50',
            description: 'Hearty whole grain bread with pumpkin, sunflower, and flax seeds'
        },
        {
            name: 'Cranberry Walnut',
            price: '9.25',
            description: 'Sweet and nutty bread perfect for breakfast'
        },
        {
            name: 'French Baguette',
            price: '4.95',
            description: 'Traditional crusty baguette baked fresh throughout the day'
        }
    ],
    pastries: [
        {
            name: 'Lavender Honey Croissant',
            price: '4.50',
            description: 'Buttery croissant with lavender-infused honey glaze'
        },
        {
            name: 'Maple Pecan Morning Bun',
            price: '4.25',
            description: 'Flaky pastry swirled with maple and toasted pecans'
        },
        {
            name: 'Classic Pain au Chocolat',
            price: '4.50',
            description: 'Traditional chocolate-filled croissant'
        },
        {
            name: 'Almond Croissant',
            price: '4.75',
            description: 'Double-baked croissant filled with almond cream'
        },
        {
            name: 'Fruit Danish',
            price: '4.25',
            description: 'Seasonal fruit-filled danish with vanilla custard'
        },
        {
            name: 'Cinnamon Roll',
            price: '4.95',
            description: 'Oversized roll with cream cheese frosting'
        }
    ],
    cakes: [
        {
            name: 'Vanilla Bean Layer Cake',
            price: '38.00',
            description: 'Three layers of vanilla cake with buttercream frosting'
        },
        {
            name: 'Dark Chocolate Ganache',
            price: '42.00',
            description: 'Rich chocolate cake covered in smooth ganache'
        },
        {
            name: 'Lemon Lavender',
            price: '40.00',
            description: 'Light lemon cake with lavender buttercream'
        },
        {
            name: 'Carrot Cake',
            price: '38.00',
            description: 'Spiced carrot cake with cream cheese frosting and candied pecans'
        },
        {
            name: 'Berry Chantilly',
            price: '44.00',
            description: 'Fresh berry-filled cake with light chantilly cream'
        }
    ]
};

// Menu Tab Functionality
const menuTabs = document.querySelectorAll('.menu-tab');
const menuItemsContainer = document.getElementById('menuItems');

function displayMenuItems(category) {
    const items = menuItems[category];
    menuItemsContainer.innerHTML = items.map(item => `
        <div class="menu-item">
            <div class="menu-item-header">
                <h3>${item.name}</h3>
                <span class="price">$${item.price}</span>
            </div>
            <p class="description">${item.description}</p>
        </div>
    `).join('');
}

// Add click event listeners to menu tabs
menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        menuTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        // Display menu items for selected category
        displayMenuItems(tab.dataset.category);
    });
});

// Display bread items by default when page loads
displayMenuItems('bread');

// Workshop Registration Modal
const signUpButtons = document.querySelectorAll('.sign-up-button');
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2>Workshop Registration</h2>
        <form id="workshopForm">
            <input type="text" placeholder="Full Name" required>
            <input type="email" placeholder="Email" required>
            <input type="tel" placeholder="Phone Number" required>
            <button type="submit">Register</button>
        </form>
    </div>
`;

document.body.appendChild(modal);

signUpButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

const closeModal = modal.querySelector('.close-modal');
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Form Submission
const contactForm = document.getElementById('orderForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert('Thank you for your order request! We will contact you shortly.');
    contactForm.reset();
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        navLinks.classList.remove('active');
    });
});

// Intersection Observer for Fade-in Animation
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Add fade-in animation to sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-out');
    observer.observe(section);
});

// Dynamic Copyright Year
document.querySelector('.footer-bottom p').innerHTML = 
    `&copy; ${new Date().getFullYear()} Crumb & Kettle. All rights reserved.`;

// Add to Cart Functionality
let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCartCount();
    showCartNotification();
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function showCartNotification() {
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = 'Item added to cart!';
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 2000);
}

// Add these additional styles to styles.css
const additionalStyles = `
    .modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        justify-content: center;
        align-items: center;
        z-index: 1001;
    }

    .modal-content {
        background: white;
        padding: 2rem;
        border-radius: 10px;
        position: relative;
        max-width: 500px;
        width: 90%;
    }

    .close-modal {
        position: absolute;
        right: 1rem;
        top: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
    }

    .fade-out {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s, transform 0.6s;
    }

    .fade-in {
        opacity: 1;
        transform: translateY(0);
    }

    .cart-notification {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 1rem;
        border-radius: 5px;
        animation: slideIn 0.3s ease-out;
    }

    @keyframes slideIn {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(0);
        }
    }
`;

// Create a style element and add the additional styles
const styleElement = document.createElement('style');
styleElement.textContent = additionalStyles;
document.head.appendChild(styleElement);
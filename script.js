// Custom Cursor Let elements setup
const cursor = document.querySelector('.cursor');
const cursorRing = document.querySelector('.cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
    cursor.style.display = 'none';
    cursorRing.style.display = 'none';
    document.body.style.cursor = 'default';
}

document.addEventListener('mousemove', (e) => {
    if (isTouchDevice) return;
    mouseX = e.clientX;
    mouseY = e.clientY;

    // Direct cursor movement
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;
});

// Smooth animate ring loop
const renderRing = () => {
    if (isTouchDevice) return;
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;

    requestAnimationFrame(renderRing);
};
requestAnimationFrame(renderRing);

// Hover animations for cursor
const interactives = document.querySelectorAll('a, button, .project-card, .skill-card, .impact-card, .tech-nodes span, .flow-node');
interactives.forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll Reveal
const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');

            // Trigger skill bars if in skills grid
            if (entry.target.classList.contains('skills-grid')) {
                const fills = entry.target.querySelectorAll('.fill');
                fills.forEach(fill => {
                    setTimeout(() => {
                        fill.style.width = fill.getAttribute('data-width');
                    }, 300);
                });
            }

            // Trigger impact count up
            if (entry.target.classList.contains('impact-grid')) {
                const impactNumbers = entry.target.querySelectorAll('.impact-number');
                impactNumbers.forEach(num => {
                    const target = parseInt(num.getAttribute('data-target'));
                    let current = 0;
                    const increment = target / 40;
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            num.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            num.innerText = target;
                        }
                    };
                    updateCounter();
                });
            }

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(el => {
    observer.observe(el);
});

// Typewriter logic removed per value prop design

/*
 * EMAILJS SETUP — Complete these steps before deploying:
 *
 * 1. Go to https://emailjs.com and create a free account
 * 2. Add an Email Service (Gmail recommended) → copy the Service ID
 *    → Replace 'YOUR_SERVICE_ID' in both emailjs.send() calls
 *
 * 3. Create Template 1 — Email to YOU (owner):
 *    Subject:  New Portfolio Message from {{from_name}}
 *    Body:
 *      Name:    {{from_name}}
 *      Email:   {{from_email}}
 *      Message: {{message}}
 *    → Copy Template ID → Replace 'YOUR_TEMPLATE_TO_YOU'
 *
 * 4. Create Template 2 — Confirmation to SENDER:
 *    To Email field in template: {{to_email}}   ← IMPORTANT
 *    Subject:  Thanks for reaching out, {{to_name}}!
 *    Body:
 *      Hi {{to_name}},
 *
 *      Thanks for reaching out! I've received your message
 *      and will get back to you within 24 hours.
 *
 *      Best regards,
 *      Divyanshu Kumar
 *      Full-Stack & AI Developer
 *      GitHub: https://github.com/Divyanshu-2907
 *      LinkedIn: https://www.linkedin.com/in/divyanshukr004
 *    → Copy Template ID → Replace 'YOUR_TEMPLATE_TO_SENDER'
 *
 * 5. Go to EmailJS Dashboard → Account → Public Key
 *    → Replace 'YOUR_PUBLIC_KEY' in the emailjs.init() call in index.html
 *
 * 6. In EmailJS Template 2, make sure "To Email" is set to {{to_email}}
 *    (not hardcoded) so the confirmation goes to the person who submitted.
 */

// Contact Form — EmailJS (sends to both receiver and sender)
const submitBtn = document.getElementById('submit-btn');
const contactForm = document.getElementById('contact-form');
const successMsg = document.getElementById('success-msg');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const msg = document.getElementById('message').value.trim();

        if (!name || !email || !msg) {
            alert('Please fill in all fields.');
            return;
        }

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        submitBtn.innerHTML = 'Sending...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;

        const toYouParams = {
            name: name,
            email: email,
            message: msg,
            title: 'New Portfolio Submission'
        };

        const toSenderParams = {
            name: name,
            email: email,
            from_name: 'Divyanshu Kumar',
            message: msg
        };

        // Send email to YOU first, then confirmation to SENDER
        emailjs.send('service_64gihld', 'template_985b1vf', toYouParams)
            .then(function () {
                return emailjs.send('service_64gihld', 'template_s5vkm7g', toSenderParams);
            })
            .then(function () {
                contactForm.classList.add('hidden');
                successMsg.classList.remove('hidden');
            })
            .catch(function (error) {
                console.error('EmailJS Error:', error);
                submitBtn.innerHTML = 'Send Message';
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
                alert('Something went wrong. Please email me directly at dk5506934@gmail.com');
            });
    });
}

// Hero Code Typing Animation
const typingCodeElement = document.getElementById('typing-code');
if (typingCodeElement) {
    const codeText = `const developer = {
  name: 'Divyanshu Kumar',
  role: 'Software Engineer',

  build() {
    return 'High-Impact Software Solutions';
  }
};

developer.build();`;

    let charIndex = 0;
    const typingSpeed = 30; // ms per char

    function highlightSyntax(text) {
        return text
            .replace(/\b(const|return)\b/g, '<span class="keyword">$1</span>')
            .replace(/\b(developer)\b/g, '<span class="variable">$1</span>')
            .replace(/\b(name|role|stack|experience|internships|projects|systemsBuilt)\b/g, '<span class="property">$1</span>')
            .replace(/\b(build)(?=\()/g, '<span class="method">$1</span>')
            .replace(/'[^']*'?/g, '<span class="string">$&</span>')
            .replace(/\b(\d+)\b/g, '<span class="number">$1</span>');
    }

    function typeCode() {
        if (charIndex < codeText.length) {
            const currentText = codeText.substring(0, charIndex + 1);
            typingCodeElement.innerHTML = highlightSyntax(currentText);
            charIndex++;
            setTimeout(typeCode, typingSpeed);
        }
    }

    setTimeout(typeCode, 800);
}


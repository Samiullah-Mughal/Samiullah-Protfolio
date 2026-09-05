
const typingElement = document.querySelector('.typing');
const words = ['Frontend Developer', 'Web Designer', 'Problem Solver', 'Creative Thinker'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

setTimeout(type, 1000);

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks1 = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks1.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close menu when clicking on a nav link
const navItems = navLinks1.querySelectorAll('a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks1.classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

// Close menu when clicking outside (on backdrop)
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks1.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks1.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav-links a");

window.addEventListener("scroll", () => {
    let scrollPos = window.scrollY + 200;

    sections.forEach(sec => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
            let id = sec.getAttribute("id");

            navLinks.forEach(link => {
                link.classList.remove("active");
                if (link.getAttribute("data-link") === id) {
                    link.classList.add("active");
                }
            });
        }
    });
});

/* ========== SCROLL ANIMATIONS ========== */
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            
            // Apply different animations based on element type
            if (element.classList.contains('animate-on-scroll')) {
                element.classList.add('animate-fade');
            }
            if (element.classList.contains('animate-slide-up-scroll')) {
                element.classList.add('animate-slide-up');
            }
            if (element.classList.contains('animate-slide-down-scroll')) {
                element.classList.add('animate-slide-down');
            }
            if (element.classList.contains('animate-slide-left-scroll')) {
                element.classList.add('animate-slide-left');
            }
            if (element.classList.contains('animate-slide-right-scroll')) {
                element.classList.add('animate-slide-right');
            }
            if (element.classList.contains('animate-scale-scroll')) {
                element.classList.add('animate-scale');
            }
            
            // Stop observing after animation is applied
            animationObserver.unobserve(element);
        }
    });
}, observerOptions);

// Observe all elements with animation classes
document.querySelectorAll('[class*="animate-"][class*="-scroll"]').forEach(element => {
    animationObserver.observe(element);
});





const bars = document.querySelectorAll('.progress-fill');

const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.dataset.width + "%";
        } 
    });
}, { threshold: 0.5 });

bars.forEach(bar => obs.observe(bar));

// service_p3rcapk
// template_0kzxizk
  (function(){
    emailjs.init("Jio6Mr1eSqFyMWWop"); 
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e){
    e.preventDefault();

    emailjs.sendForm("service_p3rcapk", "template_0kzxizk", this)
    .then(() => {
        alert("Message Sent Successfully!");
    }, (err) => {
        alert("Error: " + JSON.stringify(err));
    });
  });




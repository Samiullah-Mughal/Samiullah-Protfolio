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





const bars = document.querySelectorAll('.progress-fill');

const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            bar.style.width = bar.dataset.width + "%";
        } else {
            entry.target.style.width = "0";
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


// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks1 = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks1.classList.toggle('active');
});

// Close menu when clicking on a nav link
const navItems = navLinks1.querySelectorAll('a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks1.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks1.contains(e.target)) {
        hamburger.classList.remove('active');
        navLinks1.classList.remove('active');
    }
});

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


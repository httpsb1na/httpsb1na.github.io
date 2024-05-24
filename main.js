// Toggle navigation menu for mobile view
document.querySelector('.menu-toggle').addEventListener('click', () => {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Highlight active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('nav ul li a').forEach(a => {
                a.classList.remove('active');
                if (sectionId === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            });
        }
    });
});

// Form validation for the contact form
document.querySelector('.contact-container form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    // If all validations pass, simulate form submission
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message!');
});

// Load dynamic news content
function loadNews() {
    const news = [
        { title: "Annual Science Fair Winners", content: "Check out this year's innovative projects from our talented students." },
        { title: "Sports Day 2024", content: "Highlights and results from this year's exciting events." }
    ];

    const newsContainer = document.querySelector('.news-container');
    newsContainer.innerHTML = ''; // Clear existing news
    news.forEach(item => {
        const article = document.createElement('div');
        article.className = 'news-article';
        article.innerHTML = `<h3>${item.title}</h3><p>${item.content}</p>`;
        newsContainer.appendChild(article);
    });
}

document.addEventListener('DOMContentLoaded', loadNews);

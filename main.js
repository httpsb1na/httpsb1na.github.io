// JavaScript for School Website

/**
 * Slideshow Functionality
 */
let slideIndex = 0;
showSlides();

/**
 * Function to show slides
 */
function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

/**
 * Function to navigate to the next/previous slide
 */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/**
 * Function to navigate to a specific slide
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/**
 * Smooth scrolling for all anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/**
 * Active navigation link highlighting based on scroll position
 */
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            document.querySelectorAll('nav a').forEach(a => {
                a.classList.remove('active');
                if (section.getAttribute('id') === a.getAttribute('href').substring(1)) {
                    a.classList.add('active');
                }
            });
        }
    });
});

/**
 * Form validation for contact form
 */
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return false;
    }
    if (!email.includes('@')) {
        alert('Please enter a valid email address');
        return false;
    }
    return true; // form is valid
}

document.querySelector('.contact-container form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    if (validateForm()) {
        this.submit();
    }
});

/**
 * Dynamic news section updating
 */
function loadNews() {
    const newsData = [
        { title: 'Annual Science Fair Winners', content: 'Our annual science fair was a success! Check out the innovative projects from our talented students.' },
        { title: 'Sports Day 2024', content: 'We celebrated our annual Sports Day last week with great enthusiasm. See the highlights and results of the events.' }
    ];

    const newsContainer = document.querySelector('.news-container');
    newsContainer.innerHTML = ''; // Clear current news

    newsData.forEach(news => {
        const article = document.createElement('div');
        article.className = 'news-article';
        article.innerHTML = `<h3>${news.title}</h3><p>${news.content}</p>`;
        newsContainer.appendChild(article);
    });
}

window.addEventListener('DOMContentLoaded', loadNews);

/**
 * Custom Calendar
 */
const calendar = document.getElementById('calendar');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function generateCalendar(month, year) {
    calendar.innerHTML = '';

    const monthName = months[month];
    const firstDay = (new Date(year, month)).getDay();
    const daysInMonth = 32 - new Date(year, month, 32).getDate();

    const monthAndYear = document.createElement('div');
    monthAndYear.className = 'month';
    monthAndYear.innerHTML = `${monthName} ${year}`;
    calendar.appendChild(monthAndYear);

    const weekdayRow = document.createElement('div');
    weekdayRow.className = 'weekdays';
    weekdays.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = day;
        weekdayRow.appendChild(dayDiv);
    });
    calendar.appendChild(weekdayRow);

    const daysRow = document.createElement('div');
    daysRow.className = 'days';
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        daysRow.appendChild(emptyDay);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.innerHTML = day;
        daysRow.appendChild(dayDiv);
    }
    calendar.appendChild(daysRow);
}

const today = new Date();
const currentMonth = today.getMonth();
const currentYear = today.getFullYear();
generateCalendar(currentMonth, currentYear);

/**
 * Dropdown Menu Functionality
 */
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseenter', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });
    dropdown.addEventListener('mouseleave', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});

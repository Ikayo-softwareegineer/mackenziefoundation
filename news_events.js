// News content for the modal
const newsContent = {
    news1: {
        title: "New Education Program Launched",
        date: "March 15, 2024",
        image: "images/news1.jpg",
        content: `
            <h2>New Education Program Launched</h2>
            <p class="date">March 15, 2024</p>
            <img src="images/news1.jpg" alt="Children's Education Program" style="width: 100%; max-height: 400px; object-fit: cover; margin: 20px 0;">
            <p>We are excited to announce the launch of our new education program aimed at providing quality education to all our children. This program includes:</p>
            <ul>
                <li>State-of-the-art learning facilities</li>
                <li>Qualified and experienced teachers</li>
                <li>Personalized learning plans</li>
                <li>Extracurricular activities</li>
                <li>Digital learning resources</li>
            </ul>
            <p>The program has already shown promising results, with children showing improved academic performance and increased enthusiasm for learning. We are committed to providing the best possible education to help our children build a brighter future.</p>
        `
    },
    news2: {
        title: "Volunteer Program Success",
        date: "March 10, 2024",
        image: "images/news2.jpg",
        content: `
            <h2>Volunteer Program Success</h2>
            <p class="date">March 10, 2024</p>
            <img src="images/news2.jpg" alt="Volunteer Program" style="width: 100%; max-height: 400px; object-fit: cover; margin: 20px 0;">
            <p>Our volunteer program has reached new heights with over 100 active volunteers contributing to our cause. The program includes:</p>
            <ul>
                <li>Mentoring and tutoring</li>
                <li>Skill development workshops</li>
                <li>Recreational activities</li>
                <li>Community outreach programs</li>
            </ul>
            <p>Our volunteers have made a significant impact on the lives of our children, providing them with guidance, support, and valuable life skills. We are grateful for their dedication and commitment.</p>
        `
    },
    news3: {
        title: "Medical Camp for Children",
        date: "March 5, 2024",
        image: "images/news3.jpg",
        content: `
            <h2>Medical Camp for Children</h2>
            <p class="date">March 5, 2024</p>
            <img src="images/news3.jpg" alt="Medical Camp" style="width: 100%; max-height: 400px; object-fit: cover; margin: 20px 0;">
            <p>A successful medical camp was organized for all children in our care, providing comprehensive health check-ups. The camp included:</p>
            <ul>
                <li>General health check-ups</li>
                <li>Dental examinations</li>
                <li>Eye tests</li>
                <li>Nutritional counseling</li>
                <li>Vaccination updates</li>
            </ul>
            <p>The medical camp was made possible through the support of local healthcare professionals and organizations. We are committed to ensuring the well-being of all children in our care.</p>
        `
    },
    news4: {
        title: "Annual Donation Drive Results",
        date: "March 1, 2024",
        image: "images/news4.jpg",
        content: `
            <h2>Annual Donation Drive Results</h2>
            <p class="date">March 1, 2024</p>
            <img src="images/news4.jpg" alt="Donation Drive" style="width: 100%; max-height: 400px; object-fit: cover; margin: 20px 0;">
            <p>Our annual donation drive has exceeded expectations, raising over $50,000 for the foundation's programs. The funds will be used for:</p>
            <ul>
                <li>Education programs</li>
                <li>Healthcare services</li>
                <li>Facility improvements</li>
                <li>Nutrition programs</li>
                <li>Staff training</li>
            </ul>
            <p>We extend our heartfelt gratitude to all our donors and supporters who have made this possible. Your generosity will help us continue our mission of providing a better future for our children.</p>
        `
    }
};

// Get the modal elements
const modal = document.getElementById('newsModal');
const modalContent = document.getElementById('modalContent');
const closeBtn = document.querySelector('.close');

// Get all read more links
const readMoreLinks = document.querySelectorAll('.read-more');

// Add click event to read more links
readMoreLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const newsId = this.getAttribute('data-news');
        const news = newsContent[newsId];
        
        if (news) {
            modalContent.innerHTML = news.content;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        }
    });
});

// Close modal when clicking the close button
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    }
});

// Add animation to statistics
const statCards = document.querySelectorAll('.stat-card');

const animateStats = () => {
    statCards.forEach(card => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    card.style.animation = 'fadeInUp 1s ease forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(card);
    });
};

// Call the animation function when the page loads
window.addEventListener('load', animateStats);

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover effect to event cards
const eventCards = document.querySelectorAll('.event-card');
eventCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
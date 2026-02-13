// Portfolio filter + load more
const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
const portfolioItems = Array.from(document.querySelectorAll('.portfolio-item'));
const loadMoreBtn = document.querySelector('.load-more-section .btn');

let itemsToShow = 9; // 3 rows initially
let currentFilter = 'all';

const showItem = (item) => {
    item.style.display = 'block';
    requestAnimationFrame(() => {
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    });
};

const hideItem = (item) => {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.9)';
    setTimeout(() => {
        item.style.display = 'none';
    }, 150);
};

const applyFilters = () => {
    let visibleCount = 0;
    const totalMatches = portfolioItems.filter((item) => currentFilter === 'all' || item.dataset.category === currentFilter).length;

    portfolioItems.forEach((item) => {
        const matchesFilter = currentFilter === 'all' || item.dataset.category === currentFilter;
        if (matchesFilter && visibleCount < itemsToShow) {
            showItem(item);
            visibleCount += 1;
        } else {
            hideItem(item);
        }
    });

    if (loadMoreBtn) {
        loadMoreBtn.style.display = itemsToShow >= totalMatches ? 'none' : 'inline-block';
    }
};

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilter = button.getAttribute('data-filter');
        applyFilters();
    });
});

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        itemsToShow += 9; // reveal 3 more rows (3 cols each)
        applyFilters();
    });
}

applyFilters();

// Animate stats on scroll
const statsSection = document.querySelector('.portfolio-stats');
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

function animateStats() {
    statNumbers.forEach(stat => {
        const target = stat.textContent;
        const isPercentage = target.includes('%');
        const numericValue = parseInt(target.replace(/\D/g, ''));
        const duration = 2000;
        const increment = numericValue / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= numericValue) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                if (isPercentage) {
                    stat.textContent = Math.floor(current) + '%';
                } else if (target.includes('+')) {
                    stat.textContent = Math.floor(current) + '+';
                } else {
                    stat.textContent = Math.floor(current);
                }
            }
        }, 16);
    });
}

if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !hasAnimated) {
                animateStats();
                hasAnimated = true;
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(statsSection);
}

// Smooth scroll for portfolio items
portfolioItems.forEach(item => {
    item.addEventListener('click', (e) => {
        if (!e.target.closest('.portfolio-link')) {
            const link = item.querySelector('.portfolio-link');
            if (link) {
                window.location.href = link.getAttribute('href');
            }
        }
    });
});

console.log('📁 Portfolio page loaded successfully!');


        // Mobile menu toggle functionality
        document.addEventListener('DOMContentLoaded', function() {
            // For demo purposes - this would be replaced with actual functionality
            console.log('LearnHub website loaded');
            
            // Course card hover effect enhancement
            const courseCards = document.querySelectorAll('.course-card');
            courseCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.1)';
                });
                card.addEventListener('mouseleave', function() {
                    this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.05)';
                });
            });
            
            // Category card hover effect
            const categoryCards = document.querySelectorAll('.category-card');
            categoryCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.querySelector('.category-icon').style.transform = 'scale(1.1)';
                });
                card.addEventListener('mouseleave', function() {
                    this.querySelector('.category-icon').style.transform = 'scale(1)';
                });
            });
            
            // Simple search functionality
            const searchInput = document.querySelector('.search-bar input');
            searchInput.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    alert('Searching for: ' + this.value);
                    // In a real implementation, this would trigger a search function
                }
            });
            
            // Filter dropdown functionality
            const filterSelects = document.querySelectorAll('.filter-group select');
            filterSelects.forEach(select => {
                select.addEventListener('change', function() {
                    console.log('Filter changed:', this.value);
                    // In a real implementation, this would filter courses
                });
            });
        });
  

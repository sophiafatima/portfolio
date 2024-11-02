document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    
   
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        toggleSwitch.checked = true; 
    }

   
    toggleSwitch.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    
    const carousels = document.querySelectorAll('.carousel-container');

    carousels.forEach(carouselContainer => {
        const carousel = carouselContainer.querySelector('.carousel');
        const images = carousel.querySelectorAll('img');
        const prevButton = carouselContainer.querySelector('.prev');
        const nextButton = carouselContainer.querySelector('.next');
        let currentIndex = 0;

        
        function updateCarousel() {
            images.forEach((img, index) => {
                img.classList.toggle('active', index === currentIndex);
            });
        }

       
        function showNext() {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        }

        
        function showPrev() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        }

       
        updateCarousel();

        
        nextButton.addEventListener('click', showNext);
        prevButton.addEventListener('click', showPrev);
    });

    
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('myImage');
    const modalImg = document.getElementById('modalImage');
    const span = document.getElementsByClassName('close')[0];

    
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src; 
    }

  
    span.onclick = function() {
        modal.style.display = "none";
    }

    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});

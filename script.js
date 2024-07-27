new Vue({
    el: '#app',
    data: {
        config: config,
        companyName: config.companyName,
        companySlogan: config.companySlogan,
        phone: config.phone,
        email: config.email,
        address: config.address,
        socialMedia: config.socialMedia,
        services: config.services,
        portfolio: config.portfolio,
        team: config.team,
        reviews: config.reviews,
        selectedProject: null,
        currentImageIndex: 0,
        imageTransitionDirection: 'next',
        currentReviewIndex: 0,
        mobileMenuOpen: false,
        isScrolled: false,
        navItems: [
            { text: 'Domů', href: '#home' },
            { text: 'O nás', href: '#about' },
            { text: 'Služby', href: '#services' },
            { text: 'Portfolio', href: '#portfolio' },
            { text: 'Hodnocení', href: '#reviews' },
            { text: 'Kontakt', href: '#contact' }
        ],
        form: {
            name: '',
            email: '',
            message: ''
        },
        team: config.team.map(member => ({...member, showBio: false}))
    },
    computed: {
        currentReview() {
            return this.reviews[this.currentReviewIndex];
        }
    },
    methods: {
        submitForm() {
            console.log('Form submitted:', this.form);
            alert('Děkujeme za vaši zprávu! Brzy se vám ozveme.');
            this.form = { name: '', email: '', message: '' };
        },
        
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        handleScroll() {
            const scrollToTopBtn = document.getElementById("scrollToTopBtn");
            if (scrollToTopBtn) {
                if (window.pageYOffset > 300) {
                    scrollToTopBtn.classList.remove('opacity-0', 'invisible');
                    scrollToTopBtn.classList.add('opacity-100', 'visible');
                } else {
                    scrollToTopBtn.classList.add('opacity-0', 'invisible');
                    scrollToTopBtn.classList.remove('opacity-100', 'visible');
                }
            }
            this.isScrolled = window.scrollY > 50;
        },
        handleResize() {
            this.handleScroll();  // Re-check button visibility on resize
        },

        toggleMobileMenu() {
            this.mobileMenuOpen = !this.mobileMenuOpen;
        },

        observeSections() {
            const sections = document.querySelectorAll('section');
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
    
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);
    
            sections.forEach(section => {
                observer.observe(section);
            });
        },
        animateAboutSection() {
            const aboutSection = document.querySelector('#about');
            const options = {
                threshold: 0.2,
                rootMargin: "0px 0px -100px 0px"
            };
    
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);
    
            observer.observe(aboutSection);
        },
        animateServicesOnScroll() {
            const serviceItems = document.querySelectorAll('#services .service-item');
            const options = {
                threshold: 0.2,
                rootMargin: "0px 0px -20% 0px"
            };
    
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);
    
            serviceItems.forEach(item => {
                observer.observe(item);
            });
        },
        animatePortfolioSection() {
            const portfolioSection = document.querySelector('#portfolio');
            const options = {
                threshold: 0.2,
                rootMargin: "0px 0px -100px 0px"
            };
    
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, options);
    
            observer.observe(portfolioSection);
        },
        animateTeamSection() {
            const teamSection = document.querySelector('#team');
            const teamMembers = teamSection.querySelectorAll('.team-member');
            
            const options = {
                threshold: 0.15,
                rootMargin: "0px 0px -100px 0px"
            };
        
            const observer = new IntersectionObserver((entries, observer) => {
                if (entries[0].isIntersecting) {
                    teamSection.classList.add('is-visible');
                    teamMembers.forEach((member, index) => {
                        setTimeout(() => {
                            member.style.opacity = '1';
                            member.style.transform = 'translateY(0)';
                        }, 150 * index);
                    });
                    observer.unobserve(teamSection);
                }
            }, options);
        
            observer.observe(teamSection);
        },
        animateContactSection() {
            const contactSection = document.querySelector('#contact');
            const animateItems = contactSection.querySelectorAll('.animate-item');
            
            const options = {
                threshold: 0.15,
                rootMargin: "0px 0px -100px 0px"
            };
        
            const observer = new IntersectionObserver((entries, observer) => {
                if (entries[0].isIntersecting) {
                    contactSection.classList.add('is-visible');
                    animateItems.forEach((item, index) => {
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100 * index);
                    });
                    observer.unobserve(contactSection);
                }
            }, options);
        
            observer.observe(contactSection);
        },
        openProject(index) {
            this.selectedProject = index;
            this.currentImageIndex = 0;
            document.body.style.overflow = 'hidden';
        },
        closeProject() {
            this.selectedProject = null;
            document.body.style.overflow = '';
        },
        transitionToImage(newIndex, direction) {
            this.imageTransitionDirection = direction;
            this.currentImageIndex = newIndex;
        },    
        nextImage() {
            const currentIndex = this.currentImageIndex;
            const nextIndex = (currentIndex + 1) % this.portfolio[this.selectedProject].images.length;
            this.transitionToImage(nextIndex, 'next');
        },
        prevImage() {
            const currentIndex = this.currentImageIndex;
            const prevIndex = (currentIndex - 1 + this.portfolio[this.selectedProject].images.length) % this.portfolio[this.selectedProject].images.length;
            this.transitionToImage(prevIndex, 'prev');
        },

        setReview(index) {
            this.currentReviewIndex = index;
            this.resetReviewInterval();
        },
        nextReview() {
            this.currentReviewIndex = (this.currentReviewIndex + 1) % this.reviews.length;
        },
        startReviewCarousel() {
            this.reviewInterval = setInterval(this.nextReview, 5000); // Change review every 5 seconds
        },
        resetReviewInterval() {
            clearInterval(this.reviewInterval);
            this.startReviewCarousel();
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
        this.$nextTick(() => {
            this.animatePortfolioSection();
            this.observeSections();
            this.animateServicesOnScroll();
            this.handleScroll();
        });
        this.animateTeamSection();
        this.animateContactSection();
        this.startReviewCarousel();
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
        clearInterval(this.reviewInterval);
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

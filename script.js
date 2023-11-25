document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".sidebar a");

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7,
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach((section) => {
        observer.observe(section);
    });

    function handleIntersection(entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                setActiveNavLink(sectionId);
                updateURL(sectionId); 
            }
        });
    }

    function setActiveNavLink(sectionId) {
        navLinks.forEach((link) => {
            link.classList.remove("active");
            const href = link.getAttribute("href").substring(1); 
            if (href === sectionId) {
                link.classList.add("active");
            }
        });
    }

    function updateURL(sectionId) {
        history.replaceState(null, null, `#${sectionId}`);
    }
});

const app = document.getElementById('typewriter');
const typewriter = new Typewriter(app, {
    loop : true,
})
typewriter
    .pauseFor(2000)
    .typeString('Sumit')
    .pauseFor(2000) 
    .start();

// cCarousel
const images = document.querySelectorAll('.carousel-image');
let currentIndex = 0;

function showNextImage () {
    const currentImage = images[currentIndex];
    const nextIndex = (currentIndex + 1) % images.length;
    const nextImage = images[nextIndex];

    currentImage.classList.remove('active');
    currentImage.classList.add('inactive');
    nextImage.classList.remove('inactive');
    nextImage.classList.add('active');

    currentIndex = nextIndex;
    nextImage.classList.add('active'); // Add this line
}

setInterval(showNextImage, 3000); 

// progress bar
const circulateProgress = document.querySelectorAll('.circular-progress');
const progressValue = document.querySelectorAll('.progress-value');
const progressEndValues = [80,80,70,75,70,80]; // Add more if needed
const speed = 25;

circulateProgress.forEach((progress, index) => {
    let progressStartValue = 0;
    const progressEndValue = progressEndValues[index];

    const progressInterval = setInterval(() => {
        progressStartValue++;
        progressValue[index].textContent = `${progressStartValue}%`;

        progress.style.background = `conic-gradient(#BFA181 ${progressStartValue * 3.6}deg, #0379ff 0deg)`;

        if (progressStartValue === progressEndValue) {
            clearInterval(progressInterval);
        }
    }, speed);
});

// SHOW MORE BUTTON
function myFunction(){
    var dots = document.getElementById('points');
    var more = document.getElementById('more');
    var btnText =  document.getElementById('showMoreBtn');
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show More";
        more.style.display="none";
    }
    else {
        dots.style.display = "none";
        btnText.innerHTML = "Show Less";
        more.style.display="inline";
    }
}

// NAVIGATION
document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
    document.body.style.scrollBehavior = 'smooth';
});

// GSAP ANIMATION

function time(){
    var a = 0;
    setInterval(function(){
        a += Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }else{
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%";
            document.querySelector("#loader h1").innerHTML = "SuMiT"; 
        }
    },80)
}

gsap.to("#loader h1",{
    delay : 1,
    duration: 1,
    onStart: time(),
    stagger:1
})

gsap.to("#loader",{
    top:"-100vh",
    delay:1,
    duration:1.5
})

gsap.registerPlugin(ScrollTrigger);


gsap.from('h2',{
    y: '-200%',
    opacity:1,
    duration : 1,
    delay : 2,
    ease : 'power2.out'
})
gsap.from('.title', {
    x: '-100%',
    opacity: 0, 
    duration:1,
    scrollTrigger: {
        trigger: '.title',
        start: 'top 100%',
        end: 'center center',
        scrub: 5,
        toggleActions: "play none none none" 
    },
});
gsap.from('.section-title', {
    z: '-100%',
    opacity: 0, 
    duration:1,
    scrollTrigger: {
        trigger: '.section-title',
        start: 'top 100%',
        end: 'center center',
        scrub: 5,
        toggleActions: "play none none none" 
    },
});
gsap.from('p',{
    x: '-100%',
    duration: 2,
    opacity: 0,
    ease:'power1.out',
})

gsap.from('.bi', {
    duration:1,
    opacity: 0,
    stagger: 0.3,
    ease:'power1 out'
});
gsap.from(".card",{
    z:120,
    y:400,
    duration:2,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 96%",
        end:"top 30%",
        scrub:5
    }
})

gsap.from(".skills-container",{
    scaleY:4,
    y:400,
    duration:2,
    scrollTrigger:{
        trigger:".skills-container",
        scroller:"body",
        start:"top 96%",
        end:"top 30%",
        scrub:true
    }
})


gsap.from(".skill",{
    opacity: 0,
    scale: 0,
    stagger: 0.3,
    duration: 1,
    scrollTrigger:{
        trigger: ".skill",
        scroller:'body',
        start: 'top 90%',
        end: 'top 30%',
        scrub: 5
    }
})

gsap.from(".contact-heading", {
    x: -300,
    opacity: 0,
    duration: 1,
    delay: .7,
    scrollTrigger: {
        trigger:'.contact-heading',
        scroller: 'body',
        scrub: 5
    }
});

gsap.from("input , textarea ", {
    x: -500,
    opacity: 0,
    duration: 1,
    delay: .5,
    stagger: 1,
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%",
        end: "top 40%",
        scrub: 5
    }
});


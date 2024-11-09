function Nav_Animation() {
    const tl = gsap.timeline();

    tl.from(['.navbar', '.logo', '.nav-links li', '.icons img'], {
        y: -40,
        opacity: 0,
        delay: 0.5,
        duration: 0.8,
        stagger: 0.15,
    });

    tl.from(['.express-content h1', '.express-content h1 span', '.express-content h1 img', '.express-content p'], {
        y: 40,
        scale: 0,
        duration: 0.8,
        opacity: 0,
    })

}

function MainShoe_Animation() {
    gsap.registerPlugin(ScrollTrigger);
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".bgdesign",
            scroller: "body",
            start: "top 80%",
            end: "bottom top",
        },
    })

    tl2.from(['.bgdesign', ".Star1 img"], {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: "power2.out",

    })

    tl2.from(['.featured-shoe'], {
        y: -100,
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
    }, '<')
}

function popular_section_Animation() {
    gsap.registerPlugin(ScrollTrigger);
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: "#popular-products",
            scroller: "body",
            start: "top 70%",
            end: "bottom top",

        },
    })

    tl3.from(['#popular-products h2', '.carousel-controls',
        '.product-carousel'], {
        x: -50,
        opacity: 0,
        duration: 1
    })
}
function Boywithcam_Animation() {
    gsap.registerPlugin(ScrollTrigger);
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".perfect-shoe-section",
            scroller: "body",
            start: "top 70%",
            end: "bottom top",
            scrub: 2,

        },
    })

    tl4.from(['.main-perfect-shoe .content'], {
        y: -50,
        scale: 0.5,
        duration: 1
    })
    tl4.from(['.main-perfect-shoe .boyimg-bg'], {
        y: -50,
        scale: 0.5,
        duration: 0.8
    }, '<')
}

function moretoexporal_Animation() {
    gsap.registerPlugin(ScrollTrigger);
    const tl4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".more-to-explore",
            scroller: "body",
            start: "top 70%",
            end: "bottom top",
            scrub: 2,


        },
    })

    tl4.from(['.more-to-explore h2',], {
        y: 40,
        duration: 0.8,
        opacity: 0,
    })
    tl4.from(['.more-to-explore .collections-container '], {

        y: 40,
        scale: 0.5,
        duration: 0.8,
    }, '<')

}

gsap.registerPlugin(ScrollTrigger);


gsap.utils.toArray('.product-card').forEach((card) => {
    gsap.from(card, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
        },
    });
});





Nav_Animation();
MainShoe_Animation();
popular_section_Animation();
Boywithcam_Animation();
moretoexporal_Animation()



function Mens_Animation() {
    gsap.registerPlugin(ScrollTrigger);

    const tl5 = gsap.timeline()
    tl5.from(['.Men-section h2', '.Men-section button', '.sort-container', '.product-grid'], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".Men-section",
            scroller: "body",
            start: "top 90%",
            end: "bottom top",


        },
    });
}

function women_Animation() {
    gsap.registerPlugin(ScrollTrigger);

    const tl6 = gsap.timeline()
    tl6.from(['.women-section h2', '.women-section button',], {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".women-section",
            scroller: "body",
            start: "top 90%",
            end: "bottom top",


        },
    });
}







Mens_Animation()
women_Animation()
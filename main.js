let screenWidth = window.innerWidth;

if (screenWidth <= 993) {
    console.log(screenWidth);
    anime({
        targets: '#dream',
        translateY: [-270, 0],
        opacity: [0, 1],
        delay: anime.stagger(100)
    });
} else {
    anime({
        targets: '#dream',
        translateX: [-270, 0],
        opacity: [0, 1],
        delay: anime.stagger(100)
    });
    
    anime({
        targets: 'nav',
        translateY: [-100, 0],
        opacity: [0, 1],
        easing: 'spring(1, 70, 10, 0)',
        duration: 200
    });
    
    anime({
        targets: '.card',
        translateY: [270, 0],
        opacity: [0, 1],
        easing: 'spring(1, 50, 10, 0)'
    });
}


function wait() {
    alert("This page is still under construction. Please come back later.");
}


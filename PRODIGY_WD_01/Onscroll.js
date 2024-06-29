const body = document.querySelector('body');
const sections = document.querySelectorAll('section');


sections.forEach((section, index) => {
    const bgColors = [
        'rgb(100, 170, 50)',
        'rgb(220, 230, 196)',
        'rgb(196, 230, 209)'
    ];

    section.style.backgroundColor = bgColors[index % bgColors.length];
});

window.addEventListener('scroll', () => {
    const topScroll = window.scrollY;
    const maximumTopScroll = body.scrollHeight - window.innerHeight;

    const scrollFraction = topScroll / maximumTopScroll;
    const [red, green, blue] = [100, 450, 190];
    const bColor = `rgb(${Math.round(red * scrollFraction)}, 
    ${Math.round(green * scrollFraction)}, ${Math.round(blue * scrollFraction)})`;
    body.style.backgroundColor = bColor;
});
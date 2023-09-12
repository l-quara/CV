AOS.init();
let i = 0;
let txt = 'Welcome to My Personal CV!';
let speed = 70;

window.onload = function typeWriter() {
    
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    
}
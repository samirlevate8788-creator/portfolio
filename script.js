const text = [
    "Full Stack Developer",
    "AI Enthusiast",
    "Open Source Learner"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
    const typing = document.getElementById("typing");

    if (!typing) return;

    current = text[i];

    if (isDeleting) {
        typing.textContent = current.substring(0, j--);
    } else {
        typing.textContent = current.substring(0, j++);
    }

    if (!isDeleting && j === current.length + 1) {
        isDeleting = true;
        setTimeout(type, 1200);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach((el) => {
    observer.observe(el);
});
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")){
        themeBtn.textContent = "☀️";
    }else{
        themeBtn.textContent = "🌙";
    }
});
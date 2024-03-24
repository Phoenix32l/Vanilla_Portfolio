function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".compact-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const counter = document.querySelector(".counter-number");
async function updateCounter(){
    let response=  await fetch("https://lz32rsc2d7qjt2i2bkrmlh5j6a0volpl.lambda-url.us-east-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = `Views:${data}`;
}

updateCounter();
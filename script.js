const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const message = document.querySelector(".message");
let firstClick = true; 


yesBtn.addEventListener("click", () => {
    if (firstClick) {
     
        question.innerHTML = "Really? I love you too!"; 
        gif.src = "https://media1.tenor.com/m/oZf3_XHoJ1cAAAAC/kiss.gif"; 
        firstClick = false; 
    } else {
        
        message.innerHTML = "I don’t believe you, where is this love? You don't love me anymore? I made this for you, love, but if you don't respond, I’ll take it as a sign that you're no longer interested. It breaks my heart, but I'll have to make the hardest decision.";
        message.style.display = "block"; 
        gif.src = "https://media1.tenor.com/m/oZf3_XHoJ1cAAAAC/kiss.gif"; 
    }
});


noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "absolute"; 
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});


noBtn.addEventListener("click", (event) => {
    event.preventDefault(); 
});

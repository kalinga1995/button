const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover",(Event) => {
    constX = (Event.pageX -btnEl.offsetLeft);
    constY = (Event.pageY -btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
});
//back button
const back = document.querySelector("#back");
back.style.cursor = "pointer";
back.addEventListener("click",backHome);
function backHome() {
    window.location.href="index.html";
}


//img hover
const map = document.querySelector("#map");
map.style.cursor = "pointer";

map.addEventListener("mouseover", mapHover);
function mapHover() {
    map.src = "images/map-hover.png";
}

map.addEventListener("mouseout", mapIdle);
function mapIdle() {
    map.src = "images/map-idle.png";
}


//img click (setup)
const portal = document.querySelector("#portal");
var imagesPortal = ["images/portal1.png", "images/portal2.png", "images/portal3.png", "images/portal4.png", "images/portal5.png"];
let index;

//img click (action)
map.addEventListener("click",closePortal);
function closePortal(){
    //part 1
    portal.style.border = "solid 7px darkolivegreen";
    portal.src = "images/portal-close.png";
    map.src = "images/map-click.png";
    const randomIndex = Math.floor(Math.random()*5);
    //part 2
        if (randomIndex !== index) {
            setTimeout (function openPortal() {
            map.src = "images/map-hover.png";
            portal.src = imagesPortal[randomIndex];
            index = randomIndex;
            portal.style.border = "solid 7px #3c3367";
            }
            , 500);
        }
        else {closePortal()}
}
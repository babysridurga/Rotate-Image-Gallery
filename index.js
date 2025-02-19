const Prev = document.getElementById("prev");
const Next = document.getElementById("next");
const imagecontainer = document.querySelector(".image-container");
let x = 0;
let timer ;
Prev.addEventListener("click" , () => {
x = x + 45;
clearTimeout(timer);
updategallery();
});
Next.addEventListener("click" , () => {
x = x - 45;
clearTimeout(timer);
updategallery();
});
function updategallery() {
    imagecontainer.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout( () => {
    x = x + 45;
    updategallery();
},2000);
}
updategallery();
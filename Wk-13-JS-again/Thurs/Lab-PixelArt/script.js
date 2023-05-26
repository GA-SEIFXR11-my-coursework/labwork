// [ -e script.js ] && rm script.js; tsc; mv main.js script.js 
let canvas_elem = document.querySelector(".canvas");
for (let i = 0; i < 2000; i++) {
    let new_pix_elem = document.createElement("div");
    new_pix_elem.classList.add("pixel");
    canvas_elem.appendChild(new_pix_elem);
}
let pixel_elem_list = Object.values(document.getElementsByClassName("pixel"));
pixel_elem_list.forEach(function (val) {
    val.addEventListener("mouseover", function (e) {
        let elem = e.target;
        elem.style.backgroundColor = "red";
        setTimeout(function () {
            elem.style.backgroundColor = "white";
        }, 5000);
    });
});

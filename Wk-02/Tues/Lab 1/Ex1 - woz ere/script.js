let p1 = document.createElement("p");
p1.textContent = "I woz ere";

let p2 = document.createElement("p");
p2.textContent = "it woz ere";

document.body.appendChild(p1); //puts p1 inside body
document.body.appendChild(p2); //puts p2 inside body

//moves p1 outside&before body
document.body.insertAdjacentElement("beforebegin",p1);

//moves p1 outside&after body
document.body.insertAdjacentElement("afterend",p1);
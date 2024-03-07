//1//
document.getElementById("container");

//2//
document.querySelector("#conatiner");

//3//
document.querySelectorAll(".second");

//4//
document.querySelector("ol.third");

//5//
let listsContainer = document.querySelector("#container");
listsContainer.innerText = "Hello";

//6//
let footer = document.querySelector(".footer");
footer.classList.add("main");

//7//
let footer = document.querySelector(".footer");
footer.classList.remove("main");

//8//
let newLi = document.createElement("li");

//9//
newLi.innerText = "four";

//10//
let firstList = document.querySelector("ul");
firstList.appendChild(newLi);

//11//

let listItems = document.querySelectorAll("ol.li");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.backgroundColor = "green";
}

//12//
let footer = document.querySelector(".footer");
footer.remove();

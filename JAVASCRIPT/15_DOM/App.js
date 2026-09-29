//console.dir((document.body.style.backgroundColor = "red"));

/*  

*/

//console.log(document);

// let heading1 = document.getElementsByTagName("h1");
// console.log(heading1[0]);
// heading1[0].style.color = "green";

// let heading2 = document.getElementsByClassName("heading2");
// console.log(heading2);
// heading2[0].computedStyleMap.margin = "20px";


// let para1 = document.getElementById("para1");
// console.log(para1);
// para1.style.backgroundColor = "blue";

//  QUERY SELECTOR
// let heading1 = document.querySelector("h1")
// console.log(heading1);
// heading1.style.backgroundColor = "yellow";

// let heading2 = document.querySelector(".heading2")
// console.log(heading2);
// heading2.style.backgroundColor = "orange";

// let para1 = document.querySelector("#para1");
// para1.style.border = "2px solid black";

// let btn = document.querySelectorAll(".btn");
// btn.forEach((singleBtn) => {
//     console.log(singleBtn);
// });

// let heading1 = document.querySelector("h1");

// heading1.innerHTML = `<u> DOM abhi complete nhi hua hai </u>`;

// console.log(heading1);
// console.log(heading1.innerHTML);
// console.log(heading1.innerText);
// console.log(heading1.textContent);

// console.log(heading1.innerText);
// console.log(heading1.textContent);

let div = document.querySelector(".list");
//createElement
let ul = document.createElement("ul");
div.append(ul);

let li1 = document.createElement("li");
//console.log(li);
li1.innerText = "HTML";

let li2 = document.createElement("li");
//console.log(li);
li2.innerText = "CSS";

//APPEND
ul.append(li1);
ul.append(li2);

div.append(newli);











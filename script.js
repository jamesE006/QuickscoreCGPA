function addSemester(){

let table = document.getElementById("semesterTable");

let row = document.createElement("tr");

row.innerHTML = `

<td><input type="text" placeholder="e.g 200L First Sem"></td>

<td><input type="number" step="0.01" min="0" max="5" placeholder="GPA"></td>

<td><button onclick="removeRow(this)">X</button></td>

`;

table.appendChild(row);
}

function removeRow(btn){
btn.parentElement.parentElement.remove();
}

function getClass(cgpa){

if(cgpa >= 4.50) return "First Class";
if(cgpa >= 3.50) return "Second Class Upper";
if(cgpa >= 2.40) return "Second Class Lower";
if(cgpa >= 1.50) return "Third Class";

return "Pass";

}

function calculateCGPA(){

let rows = document.querySelectorAll("#semesterTable tr");

let total = 0;
let count = 0;

rows.forEach(row => {

let gpa = parseFloat(row.cells[1].children[0].value);

if(!isNaN(gpa)){
total += gpa;
count++;
}

});

let cgpa = total / count;

let degreeClass = getClass(cgpa);

document.getElementById("result").innerHTML =
`CGPA: ${cgpa.toFixed(2)} <br> ${degreeClass}`;

let progress = (cgpa / 4.5) * 100;

document.getElementById("progressFill").style.width =
progress + "%";

}
let result = document.getElementById("result");

result.style.transform = "scale(1.1)";

setTimeout(()=>{
result.style.transform = "scale(1)";
},200);

function shareResult(){

let text = document.getElementById("result").innerText;

let url =
"https://wa.me/?text=" +
encodeURIComponent(
"My CGPA result from QuickScore: " + text
);

window.open(url,"_blank");

}

if("serviceWorker" in navigator){

navigator.serviceWorker.register("sw.js");

}
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.innerText = "☀️";
}else{
toggle.innerText = "🌙";
}

});
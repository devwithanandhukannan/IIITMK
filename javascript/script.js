console.log("Running script...");

document.getElementById("name").innerHTML = "anandhu";

document.write("<h2>Document Write Output</h2>");

let ans1 = 2 + 5;
let ans2 = 5 * 10;
let ans3 = (26 * 3) + 4;
let ans4 = 56 / 5;

document.write(`2+5 = ${ans1}<br>`);
document.write(`5*10 = ${ans2}<br>`);
document.write(`(26*3)+4 = ${ans3}<br>`);
document.write(`56/5 = ${ans4}<br>`);

console.log("2+5 =", ans1);
console.log("5*10 =", ans2);
console.log("(26*3)+4 =", ans3);
console.log("56/5 =", ans4);

document.getElementById("r1").innerHTML = `2+5 = ${ans1}`;
document.getElementById("r2").innerHTML = `5*10 = ${ans2}`;
document.getElementById("r3").innerHTML = `(26*3)+4 = ${ans3}`;
document.getElementById("r4").innerHTML = `56/5 = ${ans4}`;


let p1 = "*\n**\n***";
document.getElementById("pattern1").innerText = p1;

let p2 = "   *\n  **\n ***";
document.getElementById("pattern2").innerText = p2;

let p3 = "1\n12\n123";
document.getElementById("pattern3").innerText = p3;

document.getElementById("1").innerHTML = `3 + 4 - 1 = ${3 + 4 - 1}`;
document.getElementById("2").innerHTML = `(3 * 5) + 1 = ${(3 * 5) + 1}`;
document.getElementById("3").innerHTML = `(5 * 2) / 2 = ${(5 * 2) / 2}`;
document.getElementById("4").innerHTML = `10 * 2 + 3 - 1 = ${10 * 2 + 3 - 1}`;
document.getElementById("5").innerHTML = `10 % 2 = ${10 % 2}`;
document.getElementById("6").innerHTML = `17 % 2 = ${17 % 2}`;
document.getElementById("7").innerHTML = `(5 * 6) % 4 = ${(5 * 6) % 4}`;
document.getElementById("8").innerHTML = `3.5 + 2.4 = ${3.5 + 2.4}`;
document.getElementById("9").innerHTML = `104.5 / 5 = ${104.5 / 5}`;
document.getElementById("10").innerHTML = `4.5 * 2 = ${4.5 * 2}`;
document.getElementById("11").innerHTML = `2 + 5 = ${2 + 5}`;

console.log("Math Program Outputs:");
console.log(`3+4-1 = ${3 + 4 - 1}`);
console.log(`(3*5)+1 = ${(3 * 5) + 1}`);
console.log(`(5*2)/2 = ${(5 * 2) / 2}`);
console.log(`10*2+3-1 = ${10 * 2 + 3 - 1}`);
console.log(`10%2 = ${10 % 2}`);
console.log(`17%2 = ${17 % 2}`);
console.log(`(5*6)%4 = ${(5 * 6) % 4}`);
console.log(`3.5+2.4 = ${3.5 + 2.4}`);
console.log(`104.5/5 = ${104.5 / 5}`);
console.log(`4.5*2 = ${4.5 * 2}`);
console.log(`2+5 = ${2 + 5}`);

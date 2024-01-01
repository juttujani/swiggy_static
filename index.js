let textEl = document.getElementById("text");
let randomText = ["Cooking gone wrong?","Hungry?","Movie marathon?","Late night office","Game night ?"];
let i = 0;
setInterval(() => {
    if(i === randomText.length) i= 0;
    textEl.textContent = randomText[i];
    i ++;
},2000);
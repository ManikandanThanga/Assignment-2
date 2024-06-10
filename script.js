let container= document.querySelector('.container');
let button=document.querySelector('a');
let displayHex= document.querySelector('p');

const validcharacters = '0123456789ABCDEF';
const hexDecimalLength = 6;

function randomIntFromInterval(min,max){
    return Math.floor(Math.random() * (max-min+1)+min);
}
function getNextRandomColor(){
    let color ='#';
    for(let i=0;1<6;i++){
        let getRandomChar= validcharacters.charAt(randomIntFromInterval(0,15));
        color += getRandomChar;
    };
    displayHex.innerHTML =color;
    container.style.backgroundcolor = color;
}
getNextRandomColor();

button.addEventListener('click',function(){
    getNextRandomColor();
},false);
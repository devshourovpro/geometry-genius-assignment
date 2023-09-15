// random color function 

function getRandomColor(){
    const letters = '0123456789ABCEF';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}
const divS = document.querySelectorAll('.random-color');
for(const div of divS){
    div.addEventListener('mouseover', function(){
        const randomColor = getRandomColor();
        div.style.backgroundColor = randomColor;
    })
    div.addEventListener('mouseout', function(){
        div.style.backgroundColor = '#FFF';
    })
}
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




// edit button and drop down button 
document.getElementById('edit-button').addEventListener('click', function(){
    const dropDown = document.getElementById('drop-down');
    dropDown.classList.remove('hidden')
})


// click checkbox and add value 

document.getElementById('check-button').addEventListener('click', function(){
    const checkButton = document.getElementById('check-button');
    const userInputOne = document.getElementById('user-input-one');
    const userInputTwo = document.getElementById('user-input-two');
    const userValueOne = document.getElementById('user-value-one');
    const userValueTwo = document.getElementById('user-value-two');

    if(checkButton.Checked === false){
        userValueOne.innerText = '0';
        userValueTwo.innerText = '0';
    }
    else{
        userValueOne.innerText = userInputOne.value ;
        userValueTwo.innerText = userInputTwo.value;
    }
})

document.getElementById('calculate-btn').
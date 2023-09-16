// random color function 

function getRandomColor() {
    const letters = '0123456789ABCEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color;
}
const divS = document.querySelectorAll('.random-color');
for (const div of divS) {
    div.addEventListener('mouseover', function () {
        const randomColor = getRandomColor();
        div.style.backgroundColor = randomColor;
    })
    div.addEventListener('mouseout', function () {
        div.style.backgroundColor = '#FFF';
    })
}




// edit button and drop down button 
document.getElementById('edit-button').addEventListener('click', function () {
    const dropDown = document.getElementById('drop-down');
    dropDown.classList.remove('hidden')
})


// click checkbox and add value 

document.getElementById('check-button').addEventListener('click', function () {
    const checkButton = document.getElementById('check-button');
    const userInputOne = document.getElementById('user-input-one');
    const userInputTwo = document.getElementById('user-input-two');
    const userValueOne = document.getElementById('user-value-one');
    const userValueTwo = document.getElementById('user-value-two');
    const userLength = document.getElementById('user-length');
    const userHeight = document.getElementById('user-height');


    if (checkButton.Checked === false) {
        userValueOne.innerText = '0';
        userValueTwo.innerText = '0';
        // userLength.innerText = userValueOne.value ;
        // userHeight.innerText = userValueTwo.value ;
    }
    else {
        userValueOne.innerText = userInputOne.value;
        userValueTwo.innerText = userInputTwo.value;
        userLength.innerText = userInputOne.value;
        userHeight.innerText = userInputTwo.value;
    }
})
let number = 1;
document.getElementById('calculate-btn').addEventListener('click', function () {
    const rowNumber = number++;
    const geometryName = document.getElementById('geometry-heading');
    const userLength = document.getElementById('user-length');
    const userHeight = document.getElementById('user-height');
    const userLengthNumber = parseFloat(userLength.innerText);
    const userHeightNumber = parseFloat(userHeight.innerText);
    const area = userLengthNumber * userHeightNumber;
    const tableRow = document.getElementById('table-row');
    tableRow.classList.remove('hidden');
    const tdOne = document.getElementById('td-one');
    const tdTwo = document.getElementById('td-two');
    const tdThree = document.getElementById('td-three');
    tdThree.classList.remove('hidden')
    const geometryArea = document.getElementById('geometry-area');
    const tdFour = document.getElementById('td-four');
    const tdFive = document.getElementById('td-five');
    tdOne.innerText = rowNumber;
    tdTwo.innerText = geometryName.innerText;
    geometryArea.innerText = area;
    tdFour.classList.remove('hidden')
    tdFive.classList.remove('hidden')
})

document.getElementById('cross-button').addEventListener('click', function(){
    const tableRow = document.getElementById('table-row');
    tableRow.classList.add('hidden');
})
document.getElementById('Convert-button').addEventListener('click', function(){
    const geometryArea = document.getElementById('geometry-area');
    const geometryAreaNumber = parseFloat(geometryArea.innerText);
    const meter = geometryAreaNumber / 100;
    geometryArea.innerText = meter;
    const cm = document.getElementById('cm');
    cm.innerText= 'm';
})
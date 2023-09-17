

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


// triangle function here 

// edit button and drop down button 
document.getElementById('triangle-edit-button').addEventListener('click', function () {
    editValue('triangle-drop-down');

})


// click checkbox and add value 

document.getElementById('triangle-check-button').addEventListener('click', function () {

    clickCheckButton('triangle-check-button', 'triangle-input-one', 'triangle-input-two', 'triangle-value-one', 'triangle-value-two', 'triangle-length', 'triangle-height');
})

// click calculate button and get table row

document.getElementById('triangle-calculate-btn').addEventListener('click', function () {

    clickByCalculateButton('triangle-heading', 'triangle-length', 'triangle-height', 'table-row', 'td-one', 'td-two', 'td-three', 'td-four', 'td-five', 'geometry-area');
})

// cross button click and delete row button 
document.getElementById('cross-button').addEventListener('click', function(){
    crossButtonClick('table-row')
})

// cm to m convert button 
document.getElementById('convert-button').addEventListener('click', function(){
    const geometryArea = document.getElementById('geometry-area');
    const geometryAreaNumber = parseFloat(geometryArea.innerText);
    const meter = geometryAreaNumber / 100;
    geometryArea.innerText = meter;
    const cm = document.getElementById('cm');
    cm.innerText= 'm';
})

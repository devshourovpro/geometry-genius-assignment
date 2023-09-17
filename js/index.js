

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

    const triangleArea = clickByCalculateButton('triangle-heading', 'triangle-length', 'triangle-height', 'table-row', 'td-one', 'td-two', 'td-three', 'td-four', 'td-five');
    const geometryArea = document.getElementById('geometry-area');
    geometryArea.innerText = triangleArea * 0.5;

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

// rectangle function here 

document.getElementById('rectangle-edit-button').addEventListener('click', function () {
    editValue('rectangle-drop-down');

})

// rectangle check button 

document.getElementById('rectangle-check-button').addEventListener('click', function () {

    clickCheckButton('rectangle-check-button', 'rectangle-input-one', 'rectangle-input-two', 'rectangle-value-one', 'rectangle-value-two', 'rectangle-length', 'rectangle-height');
})

// rectangle area result 
document.getElementById('rectangle-calculate-btn').addEventListener('click', function () {

    const rectangleArea = clickByCalculateButton('rectangle-heading', 'rectangle-length', 'rectangle-height', 'table-row', 'td-one', 'td-two', 'td-three', 'td-four', 'td-five');
    const geometryArea = document.getElementById('geometry-area');
    geometryArea.innerText = rectangleArea;
})


// Parallelogram function here 

document.getElementById('Parallelogram-edit-button').addEventListener('click', function () {
    editValue('Parallelogram-drop-down');

})

// Parallelogram check button 

document.getElementById('Parallelogram-check-button').addEventListener('click', function () {

    clickCheckButton('Parallelogram-check-button', 'Parallelogram-input-one', 'Parallelogram-input-two', 'Parallelogram-value-one', 'Parallelogram-value-two', 'Parallelogram-length', 'Parallelogram-height');
})

// Parallelogram area result 
document.getElementById('Parallelogram-calculate-btn').addEventListener('click', function () {

    const ParallelogramArea = clickByCalculateButton('Parallelogram-heading', 'Parallelogram-length', 'Parallelogram-height', 'table-row', 'td-one', 'td-two', 'td-three', 'td-four', 'td-five');
    const geometryArea = document.getElementById('geometry-area');
    geometryArea.innerText = ParallelogramArea;
})

// Rhombus function here 

document.getElementById('Rhombus-edit-button').addEventListener('click', function () {
    editValue('Rhombus-drop-down');

})

// Rhombus check button 

document.getElementById('Rhombus-check-button').addEventListener('click', function () {

    clickCheckButton('Rhombus-check-button', 'Rhombus-input-one', 'Rhombus-input-two', 'Rhombus-value-one', 'Rhombus-value-two', 'Rhombus-length', 'Rhombus-height');
})

// Rhombus area result 
document.getElementById('Rhombus-calculate-btn').addEventListener('click', function () {

    const RhombusArea = clickByCalculateButton('Rhombus-heading', 'Rhombus-length', 'Rhombus-height', 'table-row', 'td-one', 'td-two', 'td-three', 'td-four', 'td-five');
    const geometryArea = document.getElementById('geometry-area');
    geometryArea.innerText = RhombusArea * 0.5;
})
// Pentagon function here 

document.getElementById('Pentagon-edit-button').addEventListener('click', function () {
    editValue('Pentagon-drop-down');

})

// Pentagon check button 

document.getElementById('Pentagon-check-button').addEventListener('click', function () {

    clickCheckButton('Pentagon-check-button', 'Pentagon-input-one', 'Pentagon-input-two', 'Pentagon-value-one', 'Pentagon-value-two', 'Pentagon-length', 'Pentagon-height');
})

// Pentagon area result 
document.getElementById('Pentagon-calculate-btn').addEventListener('click', function () {

    const PentagonArea = clickByCalculateButton('Pentagon-heading', 'Pentagon-length', 'Pentagon-height', 'table-row', 'td-one', 'td-two', 'td-three', 'td-four', 'td-five');
    const geometryArea = document.getElementById('geometry-area');
    geometryArea.innerText = PentagonArea * 0.5;
})

// Ellipse function here 

document.getElementById('Ellipse-edit-button').addEventListener('click', function () {
    editValue('Ellipse-drop-down');

})

// Ellipse check button 

document.getElementById('Ellipse-check-button').addEventListener('click', function () {

    clickCheckButton('Ellipse-check-button', 'Ellipse-input-one', 'Ellipse-input-two', 'Ellipse-value-one', 'Ellipse-value-two', 'Ellipse-length', 'Ellipse-height');
})

// Ellipse area result 
document.getElementById('Ellipse-calculate-btn').addEventListener('click', function () {

    const EllipseArea = clickByCalculateButton('Ellipse-heading', 'Ellipse-length', 'Ellipse-height', 'table-row', 'td-one', 'td-two', 'td-three', 'td-four', 'td-five');
    const geometryArea = document.getElementById('geometry-area');
    geometryArea.innerText = EllipseArea * 3.1416;
})


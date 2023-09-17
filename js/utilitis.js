// for edit button function 

function editValue(dropdownId) {
    const dropDown = document.getElementById(dropdownId);
    dropDown.classList.remove('hidden');
}

// for check box function 

function clickCheckButton(buttonId, InputIdOne, InputIdTwo, valueIdOne, valueIdTwo, lengthId, heightId) {
    const checkButton = document.getElementById(buttonId);
    const userInputOne = document.getElementById(InputIdOne);
    const userInputTwo = document.getElementById(InputIdTwo);
    const userValueOne = document.getElementById(valueIdOne);
    const userValueTwo = document.getElementById(valueIdTwo);
    const userLength = document.getElementById(lengthId);
    const userHeight = document.getElementById(heightId);


    if (checkButton.Checked === false) {
        userValueOne.innerText = '0';
        userValueTwo.innerText = '0';
        // userLength.innerText = userValueOne.value ;
        // userHeight.innerText = userValueTwo.value ;
    }
    else {
        if (userInputOne.value === '' || userInputTwo.value === '' || userInputOne.value === 'b' || userInputTwo.value === 'h' || /^[a-zA-Z]+$/.test(userInputOne.value) || /^[a-zA-Z]+$/.test(userInputTwo.value)) {
            alert('enter a valid input')
        }
        else {

            userValueOne.innerText = userInputOne.value;
            userValueTwo.innerText = userInputTwo.value;
            userLength.innerText = userInputOne.value;
            userHeight.innerText = userInputTwo.value;
        }
    }
}
let number = 1;
// for calculate button click function 
function clickByCalculateButton(geometryHeadingId, geometryLength, geometryHeight, tableRowId, tdOneId, tdTwoId, tdThreeId, tdFourId, tdFiveId, geometryAreaForAll) {
    const rowNumber = number++;
    const geometryName = document.getElementById(geometryHeadingId);
    const userLength = document.getElementById(geometryLength);
    const userHeight = document.getElementById(geometryHeight);
    if(userLength.innerText === 'b' || userHeight === 'h'){
        alert('not get valid input')
    }else{
        const userLengthNumber = parseFloat(userLength.innerText);
    const userHeightNumber = parseFloat(userHeight.innerText);
    const area = userLengthNumber * userHeightNumber;
    const tableRow = document.getElementById(tableRowId);
    tableRow.classList.remove('hidden');
    const tdOne = document.getElementById(tdOneId);
    const tdTwo = document.getElementById(tdTwoId);
    const tdThree = document.getElementById(tdThreeId);
    tdThree.classList.remove('hidden')
    const geometryArea = document.getElementById(geometryAreaForAll);
    const tdFour = document.getElementById(tdFourId);
    const tdFive = document.getElementById(tdFiveId);
    tdOne.innerText = rowNumber;
    tdTwo.innerText = geometryName.innerText;
    geometryArea.innerText = area;
    tdFour.classList.remove('hidden');
    tdFive.classList.remove('hidden');
    }
    
}

// cross button click 
function crossButtonClick(tableRowId){
    const tableRow = document.getElementById(tableRowId);
    tableRow.classList.add('hidden');
}
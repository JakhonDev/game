const str = 'Lorem ipsum, dolor sit amet consectetur.'
const strArr = str.split('')

const strParent = document.querySelector('.result-text')
const valueInput = document.querySelector('.value-input')
const btn = document.querySelector('.btn')

btn.addEventListener('click', function() {
    window.location.reload()
})

for (let i = 0; i < strArr.length; i++){
    const element = document.createElement('span')
    element.textContent = strArr[i]
    strParent.appendChild(element)
}

const allSpan = strParent.querySelectorAll('span')

valueInput.addEventListener('input', () => {
    const value = valueInput.value

    for(let i = 0; i < value.length; i++){
        if(value[i] === allSpan[i].innerText){
            allSpan[i].classList.add('correct')
        } else {
            allSpan[i].classList.add('incorrect')
        }
    }

    if (value.length === strArr.length){
        modalActive()
    }
})

valueInput.addEventListener('keydown', (e) => {
    if(e.key === 'Backspace'){
        for(let i = 0; i < valueInput.value.length; i++){
            allSpan[i].classList.remove('correct')
            allSpan[i].classList.remove('incorrect')
        }
    }
})

function modalActive(text) {
    const modal = document.querySelector('.modal')
    const modalText = document.querySelector('.modal h1')
    const textLength = document.querySelector('.textLength')
    const correctLength = document.querySelector('.correctLength')
    const inCorrectLength = document.querySelector('.inCorrectLength')
    const resultLength = document.querySelector('.resultLength')

    textLength.innerText = strArr.length
    resultLength.innerText = (valueInput.value.length * 100) / strArr.length + '%'
    correctLength.innerText = document.querySelectorAll('.correct').length
    inCorrectLength.innerText = document.querySelectorAll('.incorrect').length

    console.log(resultLength);

    if(valueInput.value.length === strArr.length && document.querySelectorAll('.incorrect').length <= 3){
        modalText.innerText = 'You Win'
    } else {
        modalText.innerText = 'Game Over'
    }

    modal.classList.add('active')
    valueInput.blur()
}

setTimeout(() => {
    modalActive()
}, 1000 * Math.ceil(strArr.length / 2))
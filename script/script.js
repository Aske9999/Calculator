const leftInput = document.querySelector('#left-input')
const rightInput = document.querySelector('#right-input')
const result = document.querySelector('#result')
const symbol = document.querySelector('#symbol')
const minmaxInput = document.querySelector('#minmax-input')
const minmaxResult = document.querySelector('#minmax-result')
const buttons = document.querySelectorAll('.math-op')
const disableBtns = () =>{
    if (leftInput.value === '' || rightInput.value === ''){
        Array.from(buttons).forEach(item => item.disabled = true)
    } else{
        Array.from(buttons).forEach(item => item.disabled = false)
    }
}

leftInput.addEventListener('input', disableBtns)
rightInput.addEventListener('input', disableBtns)


const plus = document.querySelector('#plus')
plus.addEventListener('click', () => {
    result.value = +leftInput.value + +rightInput.value
    symbol.textContent = '+'
})

const minus = document.querySelector('#minus')
minus.addEventListener('click', () => {
    result.value = +leftInput.value - +rightInput.value
    symbol.textContent = '-'
})

const multiply = document.querySelector('#multiply')
multiply.addEventListener('click', () => {
    result.value = (+leftInput.value * +rightInput.value).toFixed(4)
    symbol.textContent = '*'
})

const divide = document.querySelector('#divide')
divide.addEventListener('click', () => {
    result.value = (+leftInput.value / +rightInput.value).toFixed(4)
    symbol.textContent = '/'
})

const degree = document.querySelector('#degree')
degree.addEventListener('click', () => {
    result.value = (+leftInput.value) ** (+rightInput.value)
    symbol.textContent = '^'
})

const root = document.querySelector('#root')
root.addEventListener('click', () => {
    result.value = Math.sqrt(+leftInput.value)
})

const max = document.querySelector('#max')
max.addEventListener('click', () => {
    minmaxResult.value = Math.max(minmaxInput.value)
})

const min = document.querySelector('#min')
min.addEventListener('click', () => {
    minmaxResult.value = Math.min(minmaxInput.value)
})

const history = document.querySelector('#history')
const historyResult = () => {
    if()
}

const resultBtn = document.querySelector('#result-btn')
resultBtn.addEventListener('click', () => {
    history.value = ''
})
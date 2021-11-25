const leftInput = document.querySelector('#left-input')
const rightInput = document.querySelector('#right-input')
const result = document.querySelector('#result')
const symbol = document.querySelector('#symbol')
const minmaxInput = document.querySelector('#minmax-input')
const minmaxResult = document.querySelector('#minmax-result')
const history = document.querySelector('#history')
const buttons = document.querySelectorAll('.math-op')
const disableBtns = () => {
    if (leftInput.value === '' || rightInput.value === '') {
        Array.from(buttons).forEach(item => item.disabled = true)
    } else {
        Array.from(buttons).forEach(item => item.disabled = false)
    }
}

leftInput.addEventListener('input', disableBtns)
rightInput.addEventListener('input', disableBtns)


const plus = document.querySelector('#plus')
plus.addEventListener('click', () => {
    result.value = +leftInput.value + +rightInput.value
    symbol.textContent = '+'
    addHistory()
})

const minus = document.querySelector('#minus')
minus.addEventListener('click', () => {
    result.value = +leftInput.value - +rightInput.value
    symbol.textContent = '-'
    addHistory()
})

const multiply = document.querySelector('#multiply')
multiply.addEventListener('click', () => {
    const res = +leftInput.value * +rightInput.value
    result.value = Number.isInteger(res)? res : res.toFixed(4)
    symbol.textContent = '*'
    addHistory()
})

const divide = document.querySelector('#divide')
divide.addEventListener('click', () => {
    const res = +leftInput.value / +rightInput.value
    result.value = Number.isInteger(res)? res : res.toFixed(4)
    symbol.textContent = '/'
    addHistory()
    if (+rightInput.value === 0){
        alert('mistake')
    }
})

const degree = document.querySelector('#degree')
degree.addEventListener('click', () => {
    result.value = ((+leftInput.value) ** +rightInput.value).toFixed(4)
    symbol.textContent = '^'
    addHistory()
})

const root = document.querySelector('#root')
root.addEventListener('click', () => {
    result.value = ((+leftInput.value) ** (1 / +rightInput.value)).toFixed(4)
    addHistory()
})

const max = document.querySelector('#max')
max.addEventListener('click', () => {
    minmaxResult.value = Math.max(...minmaxInput.value.split(' '))
    addHistoryMaxMin()
})

const min = document.querySelector('#min')
min.addEventListener('click', () => {
    minmaxResult.value = Math.min(...minmaxInput.value.split(' '))
    addHistoryMaxMin()
})

minmaxInput.addEventListener('keydown', (e) => {
    if (!(e.key >= 0 && e.key <= 9) && e.key !== 'Backspace' && e.key !== '-'){
        e.preventDefault()
    }
})

const addHistory = () => {
    const li = document.createElement('li')
    li.textContent = `${leftInput.value} ${symbol.textContent} ${rightInput.value} = ${result.value}`
    history.append(li)
}

const addHistoryMaxMin = () => {
    const li = document.createElement('li')
    li.textContent = `${minmaxInput.value} => ${minmaxResult.value}`
    history.append(li)
}

const resultBtn = document.querySelector('#result-btn')
resultBtn.addEventListener('click', () => {
    history.innerHTML = ''
    confirm('Press OK or cancel')
})
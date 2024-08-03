const screenLightYear = document.querySelector('#light-year')
const screenParsecs = document.querySelector('#parsecs')
const calculator = document.querySelector('.calculator')
const buttons = document.querySelector('.calculator__buttons')
const calculatorMain = document.querySelector('.calculator__main')
const calculatorObjects = document.querySelector('.calculator__objects')
const wrapperObjects = document.querySelector('.wrapper')
const calculatorInfo = document.querySelector('.calculator__info')

let lightYearValue = ''
let parsecsValue = ''

function lightYearToParsecs(value) {
  value = value * 0.306601
  return value
}

function parsecsToLightYear(value) {
  value = value * 3.261156
  return value
}

function button(event) {
  if (event.target.outerText === 'clear') {
    screenLightYear.value = ''
    screenParsecs.value = ''
  }
  if (event.target.outerText === 'objeсts') {
    calculatorMain.hidden = true
    wrapperObjects.hidden = false
  }
  if (event.target.outerText === 'info') {
    calculatorMain.hidden = true
    calculatorInfo.hidden = false
  }
}

function objects(event) {
  const value = event.target.querySelector('span').outerText
  screenLightYear.value = value
  screenParsecs.value = lightYearToParsecs(value)
  calculatorMain.hidden = false
  wrapperObjects.hidden = true
}

screenLightYear.oninput = function () {
  console.log('Значение в световых годах: ', screenLightYear.value)
  lightYearValue = screenLightYear.value
  lightYearValue = lightYearToParsecs(lightYearValue)
  console.log('Значение переменной в световых годах: ', lightYearValue)
  screenParsecs.value = lightYearValue
};

screenParsecs.oninput = function () {
  console.log('Значение в световых годах: ', screenParsecs.value)
  parsecsValue = screenParsecs.value
  parsecsValue = parsecsToLightYear(parsecsValue)
  console.log('Значение переменной в световых годах: ', parsecsValue)
  screenLightYear.value = parsecsValue
};

buttons.onclick = button

calculatorObjects.onclick = objects

calculatorInfo.onclick = function () {    
  calculatorMain.hidden = false
  calculatorInfo.hidden =true 
}
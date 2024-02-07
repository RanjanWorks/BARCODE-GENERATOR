let form = document.getElementById('form')
let input = document.getElementById('input')
let barcodeContainer = document.querySelector('.barcodeContainer')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    barcodeContainer.classList.add('show')
    JsBarcode("#barcode",input.value)
})
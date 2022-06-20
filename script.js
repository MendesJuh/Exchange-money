const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const dolar = 4.99
const euro = 5.22
const bitcoin = 0.62

const convertValues = () => {
	const inputReal = document.getElementById('input-real').value
	const realValueText = document.getElementById('real-value')
	const currencyValue = document.getElementById('currency-value-text')

	realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(inputReal)


	if (select.value === 'US$ Dólar americano') {
		currencyValue.innerHTML = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD'
		}).format(inputReal / dolar)
	}


	if (select.value === '€ Euro') {
		currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
			style: 'currency',
			currency: 'EUR'
		}).format(inputReal / euro)
	}

	if (select.value === '₿ Bitcoin') {
		currencyValue.innerHTML = new Intl.NumberFormat('de-DE', {
			style: 'currency',
			currency: 'BTC'
		}).format(inputReal / bitcoin)
	}
}

changeCurrency = () => {
	const currencyName = document.getElementById('currency-name')
	const currencyImg = document.getElementById('currency-img')

	if (select.value === 'US$ Dólar americano') {
		currencyName.innerHTML = 'Dólar americano'
		currencyImg.src = './assets/estados-unidos (1) 1.svg'
	}

	if (select.value === '€ Euro') {
		currencyName.innerHTML = 'Euro'
		currencyImg.src = './assets/Design sem nome 1.svg'
	}

	if (select.value === '₿ Bitcoin') {
		currencyName.innerHTML = 'Bitcoin'
		currencyImg.src = './assets/Bitcoin.png'
	}

	convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)

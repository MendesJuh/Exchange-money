const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')


const convertValues = async () => {
	const inputReal = document.getElementById('input-real').value
	const realValueText = document.getElementById('real-value')
	const currencyValue = document.getElementById('currency-value-text')

	const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

	const dolar = data.USDBRL.high
	const euro = data.EURBRL.high
	const bitcoin = data.BTCBRL.high

	 console.log(data)

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

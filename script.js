let valorDaCompra = parseFloat(prompt("Digite o valor que deseja abastecer:"))
let valorLitro = 6.80
let litros = valorDaCompra / valorLitro
alert(`O cliente abasteceu ${litros}`)


let tempCelsius = parseFloat(prompt("Digite a temperatura em Celsius: "))
let tempFahrenheit = (9 * tempCelsius + 160) /5
alert(`O valor ${tempCelsius} em Fahrenheit é ${tempFahrenheit} `)


let temp_fahrenheit = parseFloat(prompt("Digite a temperatura em Fahrenheit:"))
let temp_celsius = ((temp_fahrenheit -32) *5)/9
alert(`O valor ${temp_fahrenheit} em Celsius é ${temp_celsius}`)

let comprimento = prompt("Digite o comprimento da caixa:")
let largura = prompt("Digite a largura da caixa:")
let altura = prompt ("Digite a altura da caixa: ")
let volume = comprimento * largura * altura
alert(`Área da caixa é: ${volume} m²`)

let numero = parseInt(prompt("Digite um número :"))
let valorQuadrado = numero ** 2
alert(`O valor ${numero} ao quadrado é ${valorQuadrado} `)



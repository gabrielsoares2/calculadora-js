function somar() {
	var nu1 = window.document.getElementById('num1')
	var nu2 = window.document.getElementById('num2')
	var n1 = Number(nu1.value)
	var n2 = Number(nu2.value)
	var resul= n1 + n2

	res.innerHTML = `O resultado de ${n1} e ${n2} é ${resul}`
}
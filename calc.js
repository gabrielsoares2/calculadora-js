function somar() {
	var nu1 = window.document.getElementById('num1')
	var nu2 = window.document.getElementById('num2')
	var ope = window.document.getElementById('opera').value
	var n1 = Number(nu1.value)
	var n2 = Number(nu2.value)
	var resul

	switch (ope) {
		case '+':
			resul = n1 + n2;
			res.innerHTML = `O resultado de ${n1} ${ope} ${n2} é <strong>${resul}</strong>`
			break;
		case '-':
			resul = n1 - n2;
			res.innerHTML = `O resultado de ${n1} ${ope} ${n2} é <strong>${resul}</strong>`
			break;
		case '*':
			resul = n1 * n2;
			res.innerHTML = `O resultado de ${n1} ${ope} ${n2} é <strong>${resul}</strong>`
			break;
		case '/':
			resul = n1 / n2;
			res.innerHTML = `O resultado de ${n1} ${ope} ${n2} é <strong>${resul}</strong>`
			break;
		default:
			res.innerHTML = `Operação não encontrada <br> Por favor digite uma dessas 4 operações: + - / *`
			break;
	}

	
}
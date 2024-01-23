// obs: o numero de avaliações só esta se comunicando com calculo de média final.

const soman1 = document.getElementById("soman1"),
	soman2 = document.getElementById("soman2"),
	btnMedia = document.getElementById("btnMed"),
	respostaMedia = document.getElementById("media"),
	respostaPr = document.getElementById("pr"),
	limpar1 = document.getElementById("limpar1"),
	limpar2 = document.getElementById("limpar2"),
	n1p1 = document.getElementById("n1p1"),
	n1p2 = document.getElementById("n1p2"),
	n2p1 = document.getElementById("n2p1"),
	n2p2 = document.getElementById("n2p2"),
	btnPr = document.getElementById("btnPR"),
	iptAvn1 = document.getElementById("numAvaliacoesN1"),
	iptAvn2 = document.getElementById("numAvaliacoesN2"),
	btnInfo = document.getElementById("info"),
	fundModal = document.getElementById("fundModal");
let medias = 0,
	numAvN1 = 2,
	numAvN2 = 2;

iptAvn1.addEventListener("input", () => {
	numAvN1 = parseInt(iptAvn1.value);
});
iptAvn2.addEventListener("input", () => {
	numAvN2 = parseInt(iptAvn2.value);
});

btnMedia.addEventListener("click", () => {
	let med = calcmedia().toFixed(1);
	if (!isNaN(med)) {
		respostaMedia.textContent = `Sua média é: ${med}`;
		if (med >= 6) {
			respostaMedia.textContent += ", Passou!";
		}
		if (med < 6 && med >= 3) {
			respostaMedia.textContent += ", Prova Final";
		} else if (med < 3) {
			respostaMedia.textContent += ", Reprovou";
		}
	} else {
		respostaMedia.textContent = `Valores Inválidos`;
	}
});

function calcmedia() {
	let multply;
	let pn1 = 2;
	let pn2 = 3;
	if (numAvN2 == numAvN1) {
		multply = numAvN2 * 5;
		return (
			(pn1 * parseFloat(soman1.value) + pn2 * parseFloat(soman2.value)) / multply
		);
	} else if (numAvN2 === 3 && numAvN1 === 2) {
		return (parseFloat(soman1.value) + parseFloat(soman2.value)) / 5;
	} else {
		multply = numAvN1 * numAvN2 * 5;
		return (
			(numAvN2 * pn1 * parseFloat(soman1.value) +
				numAvN1 * pn2 * parseFloat(soman2.value)) /
			multply
		);
	}
}
function calcPr() {
	let soman1s = parseFloat(n1p1.value) + parseFloat(n1p2.value);
	let soman2s = parseFloat(n2p1.value);
	medias = (2 * parseFloat(soman1s) + 3 * parseFloat(soman2s)) / 10;

	let PR = 6 - medias;
	return (PR * 10) / 3;
}
btnPr.addEventListener("click", () => {
	let med = calcPr().toFixed(1);
	if (!isNaN(med)) {
		if (med <= 0) {
			respostaPr.textContent = `Você passou com: ${med * -1} pontos de vantagem`;
			return;
		}
		respostaPr.textContent = `Você precisa tirar: ${med}`;
	} else {
		respostaPr.textContent = `Valor Digitado Inválido!`;
	}
});
limpar1.addEventListener("click", () => {
	respostaMedia.textContent = "";
	soman1.value = "";
	soman2.value = "";
});
limpar2.addEventListener("click", () => {
	respostaPr.textContent = "";
	n1p1.value = "";
	n1p2.value = "";
	n2p1.value = "";
});

let iconTheme = document.querySelector("label .material-symbols-outlined"),
	btn = document.getElementById("btn");

btn.addEventListener("input", () => {
	setTimeout(() => {
		if (btn.checked) {
			iconTheme.innerHTML = "dark_mode";
		} else {
			iconTheme.innerHTML = "light_mode";
		}
	}, 400);
	document.body.classList.toggle("dark");
});

function showModal() {
	fundModal.classList.toggle("active");
}
btnInfo.addEventListener("click", showModal);

fundModal.addEventListener("click", (e) => {
	if (e.target === fundModal) {
		showModal();
	}
});

const textMode = document.getElementById("textMode"),
	modes = document.querySelectorAll(".modes");

modes.forEach((mode, i) => {
	mode.addEventListener("change", (e) => {
		if (i === 0) {
			textMode.innerText = "Calcular Média";
		} else if (i === 1) {
			textMode.innerText = "Preciso Tirar";
		} else {
			textMode.innerText = "Selecionar Nº de Avaliações";
		}
	});
});



const actions = [
	{ text: "jabuti caminha pelo jardim", color: "green" },
	{ text: "jabuti come verduras", color: "green" },
	{ text: "jabuti bate a cabeça", color: "red" },
	{ text: "jabuti tomba", color: "red" },
	{ text: "jabuti se esconde no casco", color: "green" },
	{ text: "jabuti nada na piscina", color: "green" },
	{ text: "jabuti encontra um amigo", color: "green" },
	{ text: "jabuti fica preso em um galho", color: "red" },
	{ text: "jabuti come uma fruta do chão", color: "green" },
	{ text: "jabuti observa os pássaros", color: "green" },
	{ text: "jabuti toma sol na pedra", color: "green" },
	{ text: "jabuti escava um buraco", color: "green" },
	{ text: "jabuti cai em um buraco", color: "red" },
	{ text: "jabuti escorrega na grama", color: "red" },
	{ text: "jabuti encontra um brinquedo", color: "green" },
	{ text: "jabuti se assusta com um barulho", color: "red" }
];

const terminal = document.getElementById("terminal");

function generateAction() {
	const index = Math.floor(Math.random() * actions.length);
	const action = actions[index];
	const span = document.createElement("span");
	span.style.color = action.color;
	span.innerHTML = action.text;
	terminal.appendChild(span);
	terminal.appendChild(document.createElement("br"));
    terminal.scrollTop = terminal.scrollHeight;
}

setInterval(generateAction, 3000);

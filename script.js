let happiness = 50;
let defaultJabutiName = 'Jabuti';
let days = 1;
let weeks = 1;
let actionsTaken = 0;
const meterText = document.getElementById('meter-text');
meterText.textContent = `${happiness}%`;

function updateHappiness(action) {
  if (action.color === 'green') {
    happiness += 10;
  } else if (action.color === 'red') {
    happiness -= 10;
  }
  
  if (happiness > 100) {
    happiness = 100;
  } else if (happiness < 0) {
    happiness = 0;
  }
  
  const meterFill = document.getElementById('meter-fill');
  meterFill.style.width = `${happiness}%`;
  meterFill.style.backgroundColor = (happiness >= 50) ? 'green' : 'red';
  const meterText = document.getElementById('meter-text');
  meterText.textContent = `${happiness}%`;

}

const actions = [
	{ text: `${defaultJabutiName} caminha pelo jardim`, color: "green" },
	{ text: `${defaultJabutiName} come verduras`, color: "green" },
	{ text: `${defaultJabutiName} se esconde no casco`, color: "green" },
	{ text: `${defaultJabutiName} nada na piscina`, color: "green" },
	{ text: `${defaultJabutiName} encontra um amigo`, color: "green" },
	{ text: `${defaultJabutiName} come uma fruta do chão`, color: "green" },
	{ text: `${defaultJabutiName} observa os pássaros`, color: "green" },
	{ text: `${defaultJabutiName} toma sol na pedra`, color: "green" },
	{ text: `${defaultJabutiName} escava um buraco`, color: "green" },
	{ text: `${defaultJabutiName} encontra um brinquedo`, color: "green" },
	{ text: `${defaultJabutiName} escorrega na grama, mas não se machuca`, color: "green" },
	{ text: `${defaultJabutiName} dorme debaixo de uma árvore`, color: "green" },
	{ text: `${defaultJabutiName} faz um novo amigo na floresta`, color: "green" },
	{ text: `${defaultJabutiName} encontra um lugar seguro para passar a noite`, color: "green" },
	{ text: `${defaultJabutiName} anda em um riacho e se refresca`, color: "green" },
	{ text: `${defaultJabutiName} consegue subir em uma árvore`, color: "green" },
	{ text: `${defaultJabutiName} ajuda um filhote de animal perdido`, color: "green" },
	{ text: `${defaultJabutiName} atravessa um rio com segurança`, color: "green" },
	{ text: `${defaultJabutiName} encontra uma sombra fresca para descansar`, color: "green" },
	{ text: `${defaultJabutiName} descobre um caminho mais curto para chegar ao seu destino`, color: "green" },
	//boas
	{ text: `${defaultJabutiName} bate a cabeça`, color: "red" },
	{ text: `${defaultJabutiName} tomba`, color: "red" },
	{ text: `${defaultJabutiName} fica preso em um galho`, color: "red" },
	{ text: `${defaultJabutiName} cai em um buraco`, color: "red" },
	{ text: `${defaultJabutiName} escorrega na grama`, color: "red" },
	{ text: `${defaultJabutiName} se assusta com um barulho alto`, color: "red" },
	{ text: `${defaultJabutiName} perde o rumo e se perde`, color: "red" },
	{ text: `${defaultJabutiName} é surpreendido pela chuva e se molha`, color: "red" },
	{ text: `${defaultJabutiName} fica preso na lama`, color: "red" },
	{ text: `${defaultJabutiName} se cansa demais e precisa descansar`, color: "red" },
	{ text: `${defaultJabutiName} pega um atalho e acaba se perdendo`, color: "red" },
	{ text: `${defaultJabutiName} fica preso em uma teia de aranha`, color: "red" },
	{ text: `${defaultJabutiName} acorda tarde e perde o café da manhã`, color: "red" },
	{ text: `${defaultJabutiName} pega um caminho mais longo sem querer`, color: "red" },
	{ text: `${defaultJabutiName} se atrasa para um compromisso importante`, color: "red" },
	{ text: `${defaultJabutiName} esquece onde guardou seu alimento`, color: "red" },
	{ text: `${defaultJabutiName} come algo que lhe faz mal`, color: "red" },
	{ text: `${defaultJabutiName} fica preso em um recipiente`, color: "red" },
	{ text: `${defaultJabutiName} não encontra água para beber e fica com sede`, color: "red" },
	{ text: `${defaultJabutiName} se machuca ao tentar subir em uma árvore`, color: "red" }
]
const terminal = document.getElementById("terminal");

function showConfigMenu() {
	const configMenu = document.getElementById('config-menu');
	configMenu.style.display = 'block';
	document.getElementById('config-button').textContent = 'Minimizar';
	document.getElementById('config-button').classList.add('active');
  }
  
  function hideConfigMenu() {
	const configMenu = document.getElementById('config-menu');
	configMenu.style.display = 'none';
	document.getElementById('config-button').textContent = 'Configurações';
	document.getElementById('config-button').classList.remove('active');
  }
  
  function updateJabutiName() {
	  const input = document.getElementById('jabuti-name-input');
	  const name = input.value || defaultJabutiName;
	  document.getElementById(input).textContent = defaultJabutiName; // Update the Jabuti's name
	  defaultJabutiName = name; // Update the default name
	  changeJabutiName(defaultJabutiName);
	  hideConfigMenu();
	}
	function changeJabutiName(newName) {
		document.getElementById(input).textContent = defaultJabutiName; // Update the Jabuti's name
		defaultJabutiName = newName;
	  }
  function toggleConfigMenu() {
	const configMenu = document.getElementById('config-menu');
	if (configMenu.style.display === 'block') {
	  hideConfigMenu();
	} else {
	  showConfigMenu();
	}
  }
  
  // Eventos
  document.getElementById('jabuti-name-button').addEventListener('click', changeJabutiName);
  document.getElementById('config-button').addEventListener('click', toggleConfigMenu);
  document.addEventListener('click', (event) => {
	if (!event.target.closest('#config-menu') && !event.target.matches('#config-button')) {
	  hideConfigMenu();
	}
  });
  

function generateAction() {
	const index = Math.floor(Math.random() * actions.length);
	const action = actions[index];
	const span = document.createElement("span");
	span.style.color = action.color;
	span.innerHTML = action.text;
	terminal.appendChild(span);
	terminal.appendChild(document.createElement("br"));
    terminal.scrollTop = terminal.scrollHeight;
	if (action.color === 'green') {
		updateHappiness({ color: 'green' });
	  } else if (action.color === 'red') {
		updateHappiness({ color: 'red' });
	  }
	actionsTaken++;
 	if (actionsTaken % 24 === 0) {
		if (days % 7 === 0) {
			const terminal = document.getElementById("terminal");
      		terminal.innerHTML = '';
			weeks++
		}
    	days++;
		const terminal = document.getElementById("terminal");
      const day = days / 7;
      const message = document.createElement("span");
      message.style.color = 'yellow';
      message.innerHTML = `Dia ${days}, Semana ${weeks}`;
      terminal.appendChild(message);
      terminal.appendChild(document.createElement("br"));
  	}
}

setInterval(generateAction, 3000);
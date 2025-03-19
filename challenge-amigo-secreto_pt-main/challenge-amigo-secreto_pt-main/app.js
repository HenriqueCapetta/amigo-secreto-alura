let elemAmigo = document.getElementById("amigo"); 
let elemListaAmigos = document.getElementById("listaAmigos"); 
let elemListaSorteio = document.getElementById("resultado"); 

let amigos = [];

function adicionarAmigo() {
  const amigo = elemAmigo.value.trim();
  if (amigo && !amigos.includes(amigo.toUpperCase())) {
    amigos.push(amigo.toUpperCase());
    atualizarListaAmigos();
    elemAmigo.value = "";
  }
}

function atualizarListaAmigos() {
  elemListaAmigos.innerHTML = "";
  amigos.forEach(amigo => {
    let li = document.createElement("li");
    li.textContent = amigo;
    elemListaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para o sorteio!");
    return;
  }

  elemListaSorteio.innerHTML = "";
  let sorteio = [...amigos];
  embaralhaArray(sorteio);

  for (let i = 0; i < sorteio.length; i++) {
    let par = document.createElement("li");
    if (i === sorteio.length - 1) {
      par.textContent = `${sorteio[i]} --> ${sorteio[0]}`;
    } else {
      par.textContent = `${sorteio[i]} --> ${sorteio[i + 1]}`;
    }
    elemListaSorteio.appendChild(par);
  }
}

function embaralhaArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function reiniciar() {
  amigos = [];
  elemListaSorteio.innerHTML = "";
  elemListaAmigos.innerHTML = "";
  elemAmigo.value = "";
}

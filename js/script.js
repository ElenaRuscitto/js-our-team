
const output = document.querySelector('.output');
const teams = [
  {
    foto: 'wayne-barnett-founder-ceo.jpg',
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO'
  },

  {
    foto: 'angela-caroll-chief-editor.jpg',
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor'
  },

  {
    foto: 'walter-gordon-office-manager.jpg',
    nome: 'Walter Gordon',
    ruolo: 'Office Manager'
  },

  {
    foto: 'angela-lopez-social-media-manager.jpg',
    nome: 'Angela Lopez',
    ruolo: 'Social Media Manager'
  },

  {
    foto: 'scott-estrada-developer.jpg',
    nome: 'Scott Estrada',
    ruolo: 'Developer'
  },

  {
    foto: 'barbara-ramos-graphic-designer.jpg',
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer'
  }

];

for (let people of teams) {
  output.innerHTML += `
  <div class="col mt-4 mb-3">
  <div class="card">
    <img src="img/${people.foto}" alt="${people.nome}">
    <div class="card-body">
      <h5 class="card-title">${people.nome}</h5>
      <p class="card-text mb-2">${people.ruolo}</p>
    </div>
  </div>
</div>
  `
}
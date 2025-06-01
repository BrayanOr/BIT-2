'use sctrict';

const d = document;

const $root = d.getElementById('root');

let cards = `
<div class="row row-cols-1 row-cols-md-5 row-cols-sm-3 row-cols-2 g-4">`;

fetch('data.json')
   .then((res) => res.json())
   .then((info) => {
      for (let i = 0; i < info.length; i++) {
      if (info[i].intensity === '100 hours') {
         cards += `
         <div class="card border-success ">
  <img class="card-img-top" src="https://github.com/${info[i].usernameGithub}.png" alt="Imagen de perfil de ${info[i].student}">
  <div class="card-body">
  <p class="h6 card-title fs fs-5 fs-md-4 fs-lg-3">${info[i].student}</p>
  </div>
  <div class="card-footer">
  <a href="https://github.com/${info[i].usernameGithub}" target="_blank" rel="noopener noreferrer" class="card-link">GitHub</a>
  </div>
</div>`
;
      }
      }
   cards += '</div>';
   
   $root.innerHTML = cards;
})
.catch((err) => {
   console.log('No puedes continuar por el siguiente error: ' + err);
});


const $root2 = d.getElementById('root2');

let cards2 = `
<div class="row row-cols-1 row-cols-md-5 row-cols-sm-3 row-cols-2 g-4">`;

fetch('data.json')
   .then((res) => res.json())
   .then((info) => {
      for (let i = 0; i < info.length; i++) {
      if (info[i].intensity === '300 hours') {
         cards2 += `
         <div class="card border-success ">
  <img class="card-img-top" src="https://github.com/${info[i].usernameGithub}.png" alt="Imagen de perfil de ${info[i].student}">
  <div class="card-body">
  <h5 class="card-title fs-5 fs-md-4 fs-lg-3">${info[i].student}</h5>
  </div>
  <div class="card-footer">
  <a href="https://github.com/${info[i].usernameGithub}" target="_blank" rel="noopener noreferrer" class="card-link">GitHub</a>
  </div>
</div>`
;
      }
      }
   cards2 += '</div>';
   
   $root2.innerHTML = cards2;
})
.catch((err) => {
   console.log('No puedes continuar por el siguiente error: ' + err);
});


const $root3 = d.getElementById('root3');

let cards3 = `
<div class="row row-cols-1 row-cols-md-5 row-cols-sm-3 row-cols-2 g-4">`;

fetch('data.json')
   .then((res) => res.json())
   .then((info) => {
      for (let i = 0; i < info.length; i++) {
      if (info[i].intensity === '400 hours') {
         cards3 += `
         <div class="card border-success ">
  <img class="card-img-top" src="https://github.com/${info[i].usernameGithub}.png" alt="Imagen de perfil de ${info[i].student}">
  <div class="card-body">
  <h5 class="card-title fs-5 fs-md-4 fs-lg-3">${info[i].student}</h5>
  </div>
  <div class="card-footer">
  <a href="https://github.com/${info[i].usernameGithub}" target="_blank" rel="noopener noreferrer" class="card-link">GitHub</a>
  </div>
</div>`
;
      }
      }
   cards3 += '</div>';
   
   $root3.innerHTML = cards3;
})
.catch((err) => {
   console.log('No puedes continuar por el siguiente error: ' + err);
});



const $table1 = d.getElementById('table1');

let table1 = `
<table class="table table-bordered table-success">
 <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Proyecto</th>
      <th scope="col">Nota</th>
      <th scope="col">Proyecto</th>
      <th scope="col">Nota</th>
      
    </tr>
  </thead>`;

fetch('data.json')
   .then((res) => res.json())
   .then((info) => {
      for (let i = 0; i < info.length; i++) {
         table1 += `
        
   <tbody>
    <tr>
      <th scope="row"> ${info[i].code} </th>
      <td>${info[i].student}</td>
      <td>${info[i].projects[0].name}</td>
      <td>${info[i].projects[0].score}</td>
      <td>${info[i].projects[1].name}</td>
      <td>${info[i].projects[1].score}</td>
    </tr>
   </tbody>
  `
;
}
   table1 += '</div>';
   
   $table1.innerHTML = table1;
})
.catch((err) => {
   console.log('No puedes continuar por el siguiente error: ' + err);
});
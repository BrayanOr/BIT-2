'use sctrict';

const $parrafo1 = document.getElementById('parrafo1');


fetch('data.json').then((res) => res.json()).then((info) => {
 let estudiantes = '';
 for (let i = 0; i <info.length; i++) {
    estudiantes += `${info[i].student}<br>`;
 }
  $parrafo1.innerHTML = estudiantes;
})
.catch((err) => {
 console.error('Error fetching data:', err);
})


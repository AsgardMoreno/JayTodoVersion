let today = new Date();
const month = ['Enero', 'Febrero', 'Marzo', 'Abril',
  'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre',
  'Noviembre', 'Diciembre'];
const day = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves',
  'Viernes', ' Sabado'];
today = `${day[today.getDay()]} ${today.getDate()} 
    ${month[today.getMonth()]}
    ${today.getFullYear()}`;

export let ActualDate = today;



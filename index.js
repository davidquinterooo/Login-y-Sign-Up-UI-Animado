const username = document.getElementById('username');
const clave = document.getElementById('clave');

username

function mover() {
  document.getElementById('container').classList.toggle('activo');
}
const validar=()=>{
  if(clave.value==='1234' && username.value==="david") console.log("Ingreso aprobado");
  else console.log("Ingreso negado");  
}

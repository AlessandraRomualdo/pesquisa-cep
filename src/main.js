import './style.css';
import Swal from 'sweetalert2';
// Seletores
const cep = document.getElementById('cep');
const logadouro = document.getElementById('logadouro');
const complemento = document.getElementById('complemento');
const bairro = document.getElementById('bairro');
const localidade = document.getElementById('localidade');
const uf = document.getElementById('uf');
const ddd = document.getElementById('ddd');
const input = document.querySelector('input');
const button = document.querySelector('button');

export default async function getCep(){
  try {
    const cepInput = input.value;
    const res = await fetch(`https://viacep.com.br/ws/${cepInput}/json/`);
    const data = await res.json();
    console.log(data);
    cep.innerHTML = `<strong>Cep:</strong> ${data.cep}`;
    logadouro.innerHTML = `<strong>Logadouro:</strong> ${data.logradouro}`;
    complemento.innerHTML = `<strong>Complemento:</strong> ${data.complemento}`;
    bairro.innerHTML = `<strong>Bairro:</strong> ${data.bairro}`;
    localidade.innerHTML = `<strong>Localidade:</strong> ${data.localidade}`;
    uf.innerHTML = `<strong>UF:</strong> ${data.uf}`;
    ddd.innerHTML = `<strong>DDD:</strong> ${data.ddd}`;
    if (data.error) {
      throw new Error('Cep invalido!')
    }
  } catch(error) {
    Swal.fire({
      title: 'Error!',
      text: 'CEP inválido',
      icon: 'error',
      confirmButtonText: 'Tente novamente'
    })
    
  }
}

button.addEventListener('click', getCep);


document.querySelector('#nome').oninput = () =>{
    document.querySelector('#name').innerText = document.querySelector('#nome').value;
}

document.querySelector('#nome').onfocus = () =>{
    document.querySelector('#nome').placeholder='Digite o nome no cartão';
}

document.querySelector('#numero').oninput = () =>{
    document.querySelector('#number').innerText = document.querySelector('#numero').value;
}
document.querySelector('#numero').onfocus = () =>{
    document.querySelector('#numero').placeholder='0000 0000 0000 0000';
}

document.querySelector('#cvc').oninput = () =>{
    document.querySelector('#cod').innerText = document.querySelector('#cvc').value;
}
document.querySelector('#cvc').onfocus = () =>{
    document.querySelector('#cvc').placeholder= "000";
}

document.querySelector('#data').oninput = () =>{
    document.querySelector('#date').innerText = document.querySelector('#data').value.replace(/(\d{2})(\d{4})/,"$1/$2");
}
document.querySelector('#data').onfocus = () =>{
    document.querySelector('#data').placeholder='00/0000';
}

document.querySelector('#cpf').onfocus = () =>{
    document.querySelector('#cpf').placeholder='000.000.000-00';
}

/*Validação campo numero do cartão */
const number = document.getElementById("numero");

number.addEventListener("keypress", somenteNumeros);

function somenteNumeros(e) {

var charCode = (e.which) ? e.which : e.keyCode

if (charCode > 31 && (charCode < 48 || charCode > 57))

e.preventDefault();

 }
/*Validação campo cvc */
const cvc = document.getElementById("cvc");

cvc.addEventListener("keypress", somenteNumeros);

function somenteNumeros(e) {

var charCode = (e.which) ? e.which : e.keyCode

if (charCode > 31 && (charCode < 48 || charCode > 57))

e.preventDefault();

 }

 /*Validação campo CPF */
const cpf = document.getElementById("cpf");

cpf.addEventListener("keyup", formatarCPF);

function formatarCPF(e){

var v=e.target.value.replace(/\D/g,"");

v=v.replace(/(\d{3})(\d)/,"$1.$2");

v=v.replace(/(\d{3})(\d)/,"$1.$2");

v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2");

e.target.value = v;

} 
 /*Validação campo data */
const data = document.getElementById("data");
data.addEventListener("keyup", formatarData);

function formatarData(e){

    var v=e.target.value.replace(/\D/g,"");
    
    v=v.replace(/(\d{2})(\d{4})/,"$1/$2");
    
    v=v.replace(/(\d{2})(\d{4})/,"$1/$2");
    
    e.target.value = v;
    
    }

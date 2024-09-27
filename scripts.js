function limpa_formulario_cep(){
    document.getElementById("cep").value= "";
            document.getElementById("rua").value="";
            document.getElementById("bairro").value="";
            document.getElementById("cidade").value="";
            document.getElementById("uf").value="";

}

function meu_callback(conteudo){
    if(!("erro" in conteudo)){
        document.getElementById("cep").value= "conteudo.cep";
            document.getElementById("rua").value="conteudo.logradouro";
            document.getElementById("bairro").value="conteudo.bairro";
            document.getElementById("cidade").value="conteudo.cidade";
            document.getElementById("uf").value="conteudo.uf";

    }
    else{
        limpa_formulario_cep();
        alert("CEP não encontrado");
    }
}
function pesquisacep(valor){
    var cep = valor.replace(/\D/g,'');
    if(cep !=""){
        var validacep = /[0-9]{8}$/;
        document.getElementById("rua").value="";
            document.getElementById("bairro").value="";
            document.getElementById("cidade").value="";
            document.getElementById("uf").value="";

    }
}
function pesquisacep(valor) {
    var Cep = valor.replace(/\D/g,'');
    if(Cep != ""){
        var validacep = /[0-9](8)$/;
        if(validacep.test(Cep)){
            document.getElementById("cep").value= "...";
            document.getElementById("rua").value="...";
            document.getElementById("bairro").value="...";
            document.getElementById("cidade").value="...";
            document.getElementById("uf").value="...";

            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/' + Cep + '/json/?callback=meu_callback';
            document.body.appendChild(script)

        }
        else{
            limpa_formulario_cep();
            alert("Insere um CEP válido ai namoral!")
        }
    }
    else{
        limpa_formulario_cep();
    }
}


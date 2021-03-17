var funcionarios = [];

function imprimi(){
    window.print();
}

function armazenaDados(){
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var endereco = document.getElementById('endereco').value;
    var salario = document.getElementById('salario').value;
    var estadoCivil = document.getElementById('estadoCivil').value;
    var idade = document.getElementById('idade').value;
    var imposto = document.getElementById('imposto').value;

    if(idade >= 18){
        
        
        if(salario > 10000 && imposto == ""){
            alert("Necessário declarar imposto de renda");
            var input = document.getElementById('imposto');
            var label = document.getElementById('label');
            input.setAttribute("type", "text");
            label.setVisible(true);
    
        }else{
            if(estadoCivil == "Casado" || estadoCivil == "Casada"){
                alert("Necessário enviar a documentação da sua esposa(o)");
            }
            var funcionario = {
                id: 1,
                nome: nome,
                telefone: telefone,
                endereco: endereco,
                salario: salario,
                estadoCivil: estadoCivil,
                idade: idade,
                imposto: imposto
            };
            
            alert("Funcionário Cadastrado");
            //console.log(funcionario)
            funcionarios.push(funcionario)
            console.clear();
            funcionarios.forEach(i => {
                console.log(i)
            });
        }
        
    }else{
        alert("Necessário ser maior de 18 anos");
    }
}
function lista(){
    funcionarios.forEach(i => {
        var div = createElement("div");
        div.setAttribute("id", "item");
        div.setAttribute("class", "item");
        document.getElementById("navbar").appendChild(div);

        var p = createElement("p");
        p.setAttribute("id", "funcId");
        document.getElementById("item").appendChild(p);
        
        Document.getElementById("funcId").innerHTML = i.id;
        /*Document.getElementById("func").innerHTML = i.nome;
        Document.getElementById("func").innerHTML = i.telefone;
        Document.getElementById("func").innerHTML = i.endereco;
        Document.getElementById("func").innerHTML = i.salario;
        Document.getElementById("func").innerHTML = i.estadoCivil;
        Document.getElementById("func").innerHTML = i.idade;
        Document.getElementById("func").innerHTML = i.imposto;*/
    });
}
function findCEP(){
    var cep = document.getElementById("cep").value;
    const url = 'https://viacep.com.br/ws/' + cep + '/json/';
    loadDoc(url);
}

function loadDoc(urlWithCEP){
    this.getJSON(urlWithCEP, function(err, data){

        var logradouro = document.createElement("input");
        var bairro = document.createElement("input");
        var cidade = document.createElement("input");
        var uf = document.createElement("input");

        logradouro.setAttribute("type", "text");
        logradouro.setAttribute("id", "logradouro");
        document.getElementById("divCep").appendChild(logradouro);

        bairro.setAttribute("type", "text");
        bairro.setAttribute("id", "bairro");
        document.getElementById("divCep").appendChild(bairro);

        cidade.setAttribute("type", "text");
        cidade.setAttribute("id", "cidade");
        document.getElementById("divCep").appendChild(cidade);

        uf.setAttribute("type", "text");
        uf.setAttribute("id", "uf");
        document.getElementById("divCep").appendChild(uf);

        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("uf").value = data.uf;

    });
}

var getJSON = function(url, callback){

    var  xhr  = new XMLHttpRequest(); //XMLHttpRequest é um objeto que 
                                      //fornece funcionalidade ao cliente para 
                                      //transferir dados entre um cliente e um servidor.

    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function(){
        var status = xhr.status;
        if (status === 200){
            callback(null,  xhr.response);
        }else{
            callback(status, xhr.response);
        }
    };
    xhr.send();
}
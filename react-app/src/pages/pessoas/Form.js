import React, { useState, useEffect } from 'react'


function carregarInteresses() {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/rest/interesses', true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject({
          status: xhr.status,
          msg: 'Erro ao carregar dados'
        });
      }
    };

    xhr.onerror = function () {
      reject({
        status: xhr.status,
        msg: 'Erro ao carregar dados'
      });
    };
    xhr.send();
  });
}

function salvarDados(dadosParaSalvar) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();
    if (dadosParaSalvar.idPessoa) {
        xhr.open('PUT', 'http://localhost:8080/rest/pessoas/' + dadosParaSalvar.idPessoa, true);
    } else {
        xhr.open('POST', 'http://localhost:8080/rest/pessoas', true);
    }
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Accept', 'application/json');
    
    xhr.onload = function() {
        if (xhr.status === 200 || xhr.status === 201) {
            resolve({
              status: xhr.status,
              msg: 'SUCESSO'
            });
        } else {
          reject({
            status: xhr.status,
            msg: 'ERRO AO SALVAR'
          });
        }
    };
    
    xhr.send(JSON.stringify(dadosParaSalvar));
  });
}

export default function Form() {

  const [interesses, setInteresses] = useState([]);

  useEffect(() => {
    carregarInteresses().then(function (resultado) {
      setInteresses(resultado);
    });
  }, []);

  function handleSubmit(evt) {
    evt.preventDefault();

    const form = evt.target;
    // Verificar quais interesses foram selecionados
    const interesses = document.querySelectorAll('[name="interessesIds"]');
    const interessesIdsArr = [];
    for (const elCheckbox of interesses) {
        if (elCheckbox.checked) {
            interessesIdsArr.push(+elCheckbox.value);
        }
    }

    // Montar estrutura do Objeto JS
    const dadosParaSalvar = {
        nome: form.nome.value,
        apelido: form.apelido.value,
        descricao: form.descricao.value,
        dataNascimento: form.dataNascimento.value,
        email: form.email.value,
        senha: form.senha?.value, // ? indica que senha é opcional
        senhaRepetida: form.senhaRepetida?.value,
        numero: +form.numero.value,
        altura: +form.altura.value,
        peso: +form.peso.value,
        genero: +form.genero.value,
        interessesIds: interessesIdsArr
    };
    console.log(JSON.stringify(dadosParaSalvar));
    salvarDados(dadosParaSalvar).then(function(resultado) {
      alert('' + resultado.status + '\r\n' + resultado.msg);
    });
  }

  return (
    <main className="flex-shrink-0">
      <div className="container-lg mb-3">
        <h1 id="titulo">Inclusão de pessoa (VERSÃO React)</h1>

        <form method="post" noValidate={true} id="dadosForm" onSubmit={handleSubmit}>
          <input type="hidden" name="id" value="" />
          <div className="row mb-3">
            <label htmlFor="txtNome" className="col-sm-2 col-form-label">Nome</label>
            <div className="col-sm-10">
              <input type="text" className="form-control"
                id="txtNome" placeholder="Preencha o nome completo"
                maxLength={100} required={true} name="nome" defaultValue=""
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="txtApelido" className="col-sm-2 col-form-label">Apelido</label>
            <div className="col-sm-10">
              <input type="text" className="form-control"
                id="txtApelido" placeholder="Preencha um apelido"
                maxLength={100} required={true} name="apelido" defaultValue=""
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="txtDescricao" className="col-sm-2 col-form-label">Descrição</label>
            <div className="col-sm-10">
              <textarea className="form-control"
                id="txtDescricao" placeholder="Descrição"
                maxLength={1000} name="descricao" defaultValue="" />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="txtDataNascimento" className="col-sm-2 col-form-label">Data de nascimento</label>
            <div className="col-sm-10">
              <input type="date" className="form-control"
                id="txtDataNascimento"
                required={true} name="dataNascimento" defaultValue=""
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="txtEmail" className="col-sm-2 col-form-label">E-mail</label>
            <div className="col-sm-10">
              <input type="email" className="form-control"
                id="txtEmail" placeholder="E-mail válido"
                maxLength={100} required={true} name="email" defaultValue=""
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="txtTelefone" className="col-sm-2 col-form-label">Telefone</label>
            <div className="col-sm-10">
              <input type="text" className="form-control"
                id="txtTelefone" placeholder="Formato (99) 99999-9999"
                maxLength={20} name="telefone" defaultValue=""
              />
            </div>
          </div>

          { /* SÓ PREENCHE SENHA E REPETIÇÃO NA INCLUSÃO */}
          <div className="row mb-3" id="campoSenha">
            <label htmlFor="txtSenha" className="col-sm-2 col-form-label">Senha</label>
            <div className="col-sm-10">
              <input type="password" className="form-control"
                id="txtSenha" placeholder="Senha" name="senha" defaultValue=""
              />
            </div>
          </div>
          <div className="row mb-3" id="campoSenhaRepetida">
            <label htmlFor="txtSenhaRepetida" className="col-sm-2 col-form-label">Repetir senha</label>
            <div className="col-sm-10">
              <input type="password" className="form-control"
                id="txtSenhaRepetida" placeholder="Repetir senha" name="senhaRepetida" defaultValue=""
              />
            </div>
          </div>

          <div className="row mb-3">
            <label htmlFor="txtNumero" className="col-sm-2 col-form-label">Número de 1 a 99</label>
            <div className="col-sm-10">
              <input type="number" className="form-control"
                id="txtNumero" placeholder="Número de 1 a 99"
                min={1} max={99} name="numero" defaultValue="0"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="txtAltura" className="col-sm-2 col-form-label">Altura</label>
            <div className="col-sm-10">
              <input type="number" className="form-control"
                id="txtAltura" placeholder="Altura em metros com no máximo 2 casa decimais"
                min={0} max={3} step={0.01} name="altura" defaultValue=""
              />
            </div>
          </div>
          <div className="row mb-3">
            <label htmlFor="txtPeso" className="col-sm-2 col-form-label">Peso</label>
            <div className="col-sm-10">
              <input type="number" className="form-control"
                id="txtPeso" placeholder="Peso em Kg com no máximo 1 casa decimal"
                min={0} max={500} step={0.1} name="peso" defaultValue=""
              />
            </div>
          </div>
          <fieldset className="row mb-3">
            <legend className="col-sm-2 col-form-label pt-0">Gênero</legend>
            <div className="col-sm-10">
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input"
                  id="generoI" value="-1" name="genero" checked="checked"
                />
                <label className="form-check-label" htmlFor="generoI">Não informar</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input"
                  id="generoF" value="0" name="genero"
                />
                <label className="form-check-label" htmlFor="generoF">Feminino</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input"
                  id="generoM" value="1" name="genero"
                />
                <label className="form-check-label" htmlFor="generoM">Masculino</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="radio" className="form-check-input"
                  id="generoO" value="2" name="genero"
                />
                <label className="form-check-label" htmlFor="generoO">Outro</label>
              </div>
            </div>
          </fieldset>
          <fieldset className="row mb-3">
            <legend className="col-sm-2 col-form-label pt-0">Interesses</legend>
            <div className="col-sm-10" id="opcoesInteresses">
              {
                interesses.map(function(itemInteresse, idx) {
                  const valorId = 'interesse-' + itemInteresse.id;
                  return (
                    <div className="form-check form-check-inline" key={valorId}>
                      <input type="checkbox" className="form-check-input"
                        id={valorId} value={itemInteresse.id} name="interessesIds" />
                      <label className="form-check-label"
                        htmlFor={valorId}>{itemInteresse.nome}</label>
                    </div>
                  );
                })
              }

            </div>
          </fieldset>

          <div className="row">
            <div className="col-md-3 offset-md-3">
              <div className="d-grid">
                <a href="lista.html" role="button" className="btn btn-outline-dark">Cancelar</a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="d-grid">
                <button type="submit" className="btn btn-success">Salvar</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
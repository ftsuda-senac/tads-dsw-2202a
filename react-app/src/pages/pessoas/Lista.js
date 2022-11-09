import React, { useState, useEffect } from 'react'

function carregarDados(paginaAtual = 0, qtde = 10) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/rest/pessoas?page=' + paginaAtual + '&qtde=' + qtde, true);

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

export default function Lista() {

  const [dadosLista, setDadosLista] = useState([]);
  const [dadosPagina, setDadosPagina] = useState({
    atual: 0,
    ultimaPagina: 0,
    qtde: 10,
    primeira: true,
    ultima: true
  });

  function carregarInformacoes(pagina, qtde) {
    carregarDados(pagina, qtde).then(function (resultado) {
      setDadosLista(resultado.content);
      const dadosPaginaNovo = {
        atual: resultado.number,
        ultimaPagina: resultado.totalPages - 1,
        qtde: resultado.size,
        primeira: resultado.first,
        ultima: resultado.last
      };
      setDadosPagina(dadosPaginaNovo);
    });
  }

  useEffect(() => {
    carregarInformacoes(0, 10);
  }, []);

  function handleTrocarPagina(pagina) {
    carregarInformacoes(pagina, 10);
  }

  return (
    <main className="flex-shrink-0">
      <div className="container-lg mb-3">
        <h1>Listagem de pessoas (VERSÃO React)</h1>
        { /*
                <div className="alert alert-success" role="alert" id="alertaSucesso">
                    <h4 className="alert-heading">Sucesso</h4>
                    <p className="mb-0">Texto alerta sucesso</p>
                </div>
                <div className="alert alert-danger" role="alert" id="alertaErro">
                    <h4 className="alert-heading">Erro</h4>
                    <p className="mb-0">Texto alerta erro</p>
                </div>
                */ }

        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">E-mail</th>
              <th scope="col">Data nascimento</th>
              <th scope="col">Status ativação</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody id="dadosTabela">
            {
              dadosLista.map(function (item, idx) {
                return (
                  <tr key={"dados-" + item.id}>
                    <td>{item.id}</td>
                    <td>{item.nome}</td>
                    <td>{item.email}</td>
                    <td>{new Date(item.dataNascimento).toLocaleDateString('pt-BR')}</td>
                    <td>
                      {
                        item.cadastroAtivo === true &&
                        <span className="badge bg-success">ATIVO</span>
                      }
                      {
                        item.cadastroAtivo !== true &&
                        <span className="badge bg-danger">INATIVO</span>
                      }
                    </td>
                    <td>
                      <div className="btn-group" role="group" aria-label="Ações">
                        <a className="btn btn-primary" role="button" href="form.html"><i className="fas fa-edit"></i> Alterar</a>
                        <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalExcluir" data-action-url="/classic/pessoas/0/excluir" data-item-id="0"><i className="fas fa-trash-alt"></i> Excluir</button>
                      </div>
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <nav aria-label="Paginação">
          <ul className="pagination justify-content-center">
            <li className="page-item" id="paginacaoPrimeiro">
              <a className="page-link"
                href="#">Primeiro</a>
            </li>
            {
              !((dadosPagina.atual - 1) < 0) &&
              <li className="page-item" id="paginacaoAnterior">
                <a className="page-link"
                  href="#"
                  onClick={(evt) => handleTrocarPagina(dadosPagina.atual - 1)}>{dadosPagina.atual}</a>
              </li>
            }
            <li className="page-item active" aria-current="page" id="paginacaoAtual">
              <span className="page-link">{dadosPagina.atual + 1}</span>
            </li>
            {
              !((dadosPagina.atual + 1) > dadosPagina.ultimaPagina) &&
              <li className="page-item" id="paginacaoProximo">
                <a className="page-link"
                  href="#"
                  onClick={(evt) => handleTrocarPagina(dadosPagina.atual + 1)}
                >{dadosPagina.atual + 2}</a>
              </li>
            }
            <li className="page-item" id="paginacaoUltimo">
              <a className="page-link"
                href="#">Último</a>
            </li>
          </ul>
        </nav>
        <div>
          <a className="btn btn-lg btn-success" role="button" href="form.html"><i className="fas fa-plus-square"></i> Incluir novo</a>
        </div>
      </div>
    </main>
  ); 
}
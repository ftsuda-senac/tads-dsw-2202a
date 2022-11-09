
export default function Lista() {

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
                        <tr>
                            <td>0</td>
                            <td>Exemplo</td>
                            <td>exemplo@teste.com.br</td>
                            <td>09/06/1970</td>
                            <td><span className="badge bg-success">ATIVO</span></td>
                            <td>
                                <div className="btn-group" role="group" aria-label="Ações">
                                    <a className="btn btn-info" role="button" href="visualizacao.html"><i className="fas fa-eye"></i> Visualizar dados</a>
                                    <a className="btn btn-primary" role="button" href="form.html"><i className="fas fa-edit"></i> Alterar</a>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalExcluir" data-action-url="/classic/pessoas/0/excluir" data-item-id="0"><i className="fas fa-trash-alt"></i> Excluir</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav aria-label="Paginação">
                    <ul className="pagination justify-content-center">
                        <li className="page-item" id="paginacaoPrimeiro">
                            <a className="page-link"
                                href="#">Primeiro</a>
                        </li>
                        <li className="page-item" id="paginacaoAnterior">
                            <a className="page-link"
                                href="#">1</a>
                        </li>
                        <li className="page-item active" aria-current="page" id="paginacaoAtual">
                            <span className="page-link">2</span>
                        </li>
                        <li className="page-item" id="paginacaoProximo">
                            <a className="page-link"
                                href="#">3</a>
                        </li>
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
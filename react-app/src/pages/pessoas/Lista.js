
export default function Lista() {

    return (
        <main class="flex-shrink-0">
            <div class="container-lg mb-3">
                <h1>Listagem de pessoas (VERSÃO React)</h1>
                { /*
                <div class="alert alert-success" role="alert" id="alertaSucesso">
                    <h4 class="alert-heading">Sucesso</h4>
                    <p class="mb-0">Texto alerta sucesso</p>
                </div>
                <div class="alert alert-danger" role="alert" id="alertaErro">
                    <h4 class="alert-heading">Erro</h4>
                    <p class="mb-0">Texto alerta erro</p>
                </div>
                */ }

                <table class="table table-striped">
                    <thead class="table-dark">
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
                            <td><span class="badge bg-success">ATIVO</span></td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Ações">
                                    <a class="btn btn-info" role="button" href="visualizacao.html"><i class="fas fa-eye"></i> Visualizar dados</a>
                                    <a class="btn btn-primary" role="button" href="form.html"><i class="fas fa-edit"></i> Alterar</a>
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#modalExcluir" data-action-url="/classic/pessoas/0/excluir" data-item-id="0"><i class="fas fa-trash-alt"></i> Excluir</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <nav aria-label="Paginação">
                    <ul class="pagination justify-content-center">
                        <li class="page-item" id="paginacaoPrimeiro">
                            <a class="page-link"
                                href="#">Primeiro</a>
                        </li>
                        <li class="page-item" id="paginacaoAnterior">
                            <a class="page-link"
                                href="#">1</a>
                        </li>
                        <li class="page-item active" id="paginacaoAtual">
                            <a class="page-link active" href="#">
                                <span>2</span><span class="sr-only">Página atual</span></a>
                        </li>
                        <li class="page-item" id="paginacaoProximo">
                            <a class="page-link"
                                href="#">3</a>
                        </li>
                        <li class="page-item" id="paginacaoUltimo">
                            <a class="page-link"
                                href="#">Último</a>
                        </li>
                    </ul>
                </nav>
                <div>
                    <a class="btn btn-lg btn-success" role="button" href="form.html"><i class="fas fa-plus-square"></i> Incluir novo</a>
                </div>
            </div>
        </main>
    );

}
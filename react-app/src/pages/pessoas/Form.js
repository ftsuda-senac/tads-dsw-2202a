

export default function Form() {
    
    return (
        <main class="flex-shrink-0">
            <div class="container-lg mb-3">
                <h1 id="titulo">Inclusão de pessoa (VERSÃO React)</h1>
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

                <form method="post" action="" novalidate id="dadosForm">
                    <input type="hidden" name="id" value="" />
                    <div class="row mb-3">
                        <label for="txtNome" class="col-sm-2 col-form-label">Nome</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control"
                                id="txtNome" placeholder="Preencha o nome completo"
                                maxlength="100" required name="nome" value=""
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="txtApelido" class="col-sm-2 col-form-label">Apelido</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control"
                                id="txtApelido" placeholder="Preencha um apelido"
                                maxlength="100" required name="apelido" value=""
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="txtDescricao" class="col-sm-2 col-form-label">Descrição</label>
                        <div class="col-sm-10">
                            <textarea class="form-control"
                                id="txtDescricao" placeholder="Descrição"
                                maxlength="1000" name="descricao" />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="txtDataNascimento" class="col-sm-2 col-form-label">Data de nascimento</label>
                        <div class="col-sm-10">
                            <input type="date" class="form-control"
                                id="txtDataNascimento"
                                required name="dataNascimento" value=""
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="txtEmail" class="col-sm-2 col-form-label">E-mail</label>
                        <div class="col-sm-10">
                            <input type="email" class="form-control"
                                id="txtEmail" placeholder="E-mail válido"
                                maxlength="100" required name="email" value=""
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="txtTelefone" class="col-sm-2 col-form-label">Telefone</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control"
                                id="txtTelefone" placeholder="Formato (99) 99999-9999"
                                maxlength="20" name="telefone" value=""
                            />
                        </div>
                    </div>

                    { /* SÓ PREENCHE SENHA E REPETIÇÃO NA INCLUSÃO */ }
                    <div class="row mb-3" id="campoSenha">
                        <label for="txtSenha" class="col-sm-2 col-form-label">Senha</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control"
                                id="txtSenha" placeholder="Senha" name="senha" value=""
                            />
                        </div>
                    </div>
                    <div class="row mb-3" id="campoSenhaRepetida">
                        <label for="txtSenhaRepetida" class="col-sm-2 col-form-label">Repetir senha</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control"
                                id="txtSenhaRepetida" placeholder="Repetir senha" name="senhaRepetida" value=""
                            />
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="txtNumero" class="col-sm-2 col-form-label">Número de 1 a 99</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control"
                                id="txtNumero" placeholder="Número de 1 a 99"
                                min="1" max="99" name="numero" value="0"
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="txtAltura" class="col-sm-2 col-form-label">Altura</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control"
                                id="txtAltura" placeholder="Altura em metros com no máximo 2 casa decimais"
                                min="0" max="3" step="0.01" name="altura" value=""
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="txtPeso" class="col-sm-2 col-form-label">Peso</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control"
                                id="txtPeso" placeholder="Peso em Kg com no máximo 1 casa decimal"
                                min="0" max="500" step="0.1" name="peso" value=""
                            />
                        </div>
                    </div>
                    <fieldset class="row mb-3">
                        <legend class="col-sm-2 col-form-label pt-0">Gênero</legend>
                        <div class="col-sm-10">
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input"
                                    id="generoI" value="-1" name="genero" checked="checked"
                                />
                                <label class="form-check-label" for="generoI">Não informar</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input"
                                    id="generoF" value="0" name="genero"
                                />
                                <label class="form-check-label" for="generoF">Feminino</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input"
                                    id="generoM" value="1" name="genero"
                                />
                                <label class="form-check-label" for="generoM">Masculino</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input type="radio" class="form-check-input"
                                    id="generoO" value="2" name="genero"
                                />
                                <label class="form-check-label" for="generoO">Outro</label>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="row mb-3">
                        <legend class="col-sm-2 col-form-label pt-0">Interesses</legend>
                        <div class="col-sm-10" id="opcoesInteresses">
                            <div class="form-check form-check-inline">
                                <input type="checkbox" class="form-check-input"
                                    id="interesse0" value="0" name="interessesIds" />
                                <label class="form-check-label"
                                    for="interesse0">Opção</label>
                            </div>
                        </div>
                    </fieldset>

                    <div class="row">
                        <div class="col-md-3 offset-md-3">
                            <div class="d-grid">
                                <a href="lista.html" role="button" class="btn btn-outline-dark">Cancelar</a>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="d-grid">
                                <button type="submit" class="btn btn-success">Salvar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}
import searchAgi from "../pages/searchAgi"

describe('Fluxo de pesquisa de artigo no blog Agi', function() {
    it('CE01: Realizar pesquisa de artigo no blog Agi com a palavra-chave: mercado', function(){
        searchAgi.acessaSite();
        searchAgi.realizaPesquisa();
        searchAgi.resultadoPesquisa();
    })

    it('CE02: Realizar pesquisa de artigo no blog Agi com a palavra-chave inválida ou não existente', function(){
        searchAgi.acessaSite();
        searchAgi.realizaPesquisaInvalida();
        searchAgi.resultadoPesquisaInvalida();
    })

    it('CE03: Realizar pesquisa de artigo no blog Agi com a palavra-chave vazia', function(){
        searchAgi.acessaSite();
        searchAgi.realizaPesquisaVazia();
        searchAgi.resultadoPesquisaVazia();
    })
})

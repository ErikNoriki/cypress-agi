import searchAgi from "../pages/searchAgi"

describe('Fluxo de pesquisa de artigo no blog Agi', function() {
    it('CE01: Realiza pesquisa de artigo no blog Agi com a palavra-chave: mercado', function(){
        searchAgi.accessAgi();
        searchAgi.doSearch();
        searchAgi.searchResult();
    })

    it('CE02: Realiza pesquisa de artigo no blog Agi com a palavra-chave inválida ou não existente', function(){
        searchAgi.accessAgi();
        searchAgi.doInvalidSearch();
        searchAgi.searchInvalidResult();
    })

    it('CE03: Realiza pesquisa de artigo no blog Agi com a palavra-chave vazia', function(){
        searchAgi.accessAgi();
        searchAgi.doEmptyFieldSearch();
        searchAgi.searchEmptyFieldResult();
    })
})

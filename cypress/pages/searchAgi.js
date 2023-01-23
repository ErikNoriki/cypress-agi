import searchElements from '../pages/searchElementsAgi'
const url = Cypress.config("baseUrl")
var date = new Date();
var month = String(date.getMonth() + 1).padStart(2, '0');
var year = date.getFullYear();
var monthYearNow = month + '/' + year;

class realizaPesquisa {
    acessaSite(){
        cy.visit(url);
    }

    realizaPesquisa(){
        cy.get(searchElements.SEARCH_BUTTON).first().click();
        cy.get(searchElements.SEARCH_FIELD).first().focus().type('mercado');
        cy.get(searchElements.SEARCH_SUBMIT).first().click();
    }

    realizaPesquisaInvalida(){
        cy.get(searchElements.SEARCH_BUTTON).first().click();
        cy.get(searchElements.SEARCH_FIELD).first().focus().type('%%%%');
        cy.get(searchElements.SEARCH_SUBMIT).first().click();
    }

    realizaPesquisaVazia(){
        cy.get(searchElements.SEARCH_BUTTON).first().click();
        cy.get(searchElements.SEARCH_SUBMIT).first().click();
    }

    resultadoPesquisa(){
        cy.get(searchElements.RESULT_TITLE).should('have.text', 'Resultados da busca por: mercado')
        cy.get(searchElements.SEARCH_RESULTS).should('contain', 'mercado');
    }

    resultadoPesquisaInvalida(){
        cy.get(searchElements.INVALID_RESULT_TITLE).should('have.text', 'Nenhum resultado')
        cy.get(searchElements.SEARCH_INVALID_RESULTS).should('contain', 'Não encontramos nada para estes termos de busca. Tente novamente com palavras-chave diferentes.');
    }

    resultadoPesquisaVazia(){
        cy.get(searchElements.RESULT_TITLE).should('have.text', 'Resultados da busca por: ')
        cy.get(searchElements.SEARCH_EMPTY_RESULTS).invoke('text').should('contain', monthYearNow);
    }
}

export default new realizaPesquisa();
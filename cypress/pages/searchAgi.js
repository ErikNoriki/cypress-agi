import searchElements from '../pages/searchElementsAgi'
const url = Cypress.config("baseUrl")
var date = new Date();
var month = String(date.getMonth() + 1).padStart(2, '0');
var year = date.getFullYear();
var monthYearNow = month + '/' + year;

class realizaPesquisa {
    accessAgi(){
        cy.visit(url);
    }

    doSearch(){
        cy.get(searchElements.SEARCH_BUTTON).first().click();
        cy.get(searchElements.SEARCH_FIELD).first().focus().type('mercado');
        cy.get(searchElements.SEARCH_SUBMIT).first().click();
    }

    doInvalidSearch(){
        cy.get(searchElements.SEARCH_BUTTON).first().click();
        cy.get(searchElements.SEARCH_FIELD).first().focus().type('%%%%');
        cy.get(searchElements.SEARCH_SUBMIT).first().click();
    }

    doEmptyFieldSearch(){
        cy.get(searchElements.SEARCH_BUTTON).first().click();
        cy.get(searchElements.SEARCH_SUBMIT).first().click();
    }

    searchResult(){
        cy.url().should('include', '?s=mercado')
        cy.get(searchElements.RESULT_TITLE).should('have.text', 'Resultados da busca por: mercado')
        cy.get(searchElements.SEARCH_RESULTS).should('contain', 'mercado');
    }

    searchInvalidResult(){
        cy.url().should('include', '?s=%25%25%25%25')
        cy.get(searchElements.INVALID_RESULT_TITLE).should('have.text', 'Nenhum resultado')
        cy.get(searchElements.SEARCH_INVALID_RESULTS).should('contain', 'Não encontramos nada para estes termos de busca. Tente novamente com palavras-chave diferentes.');
    }

    searchEmptyFieldResult(){
        cy.url().should('include', '?s=')
        cy.get(searchElements.RESULT_TITLE).should('have.text', 'Resultados da busca por: ')
        cy.get(searchElements.SEARCH_RESULTS).should('contain', monthYearNow);
    }
}

export default new realizaPesquisa();
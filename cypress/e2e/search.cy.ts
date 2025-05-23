describe('search products', () => {
    beforeEach(() => {
       
    })
    it('should be able to search for a product', () => {
        cy.visit('/')
        cy.get('input[name=q]').type('moletom').parent('form').submit()
    
        cy.location('pathname').should('include', '/search')
    
       cy.location('search').should('include', 'q=moletom')
        cy.get('a[href^="/product"').should('exist')
    })
    
    it('should not be able to visit search page without a search query', () => {
        cy.visit('/search')
    
        cy.location('pathname').should('eq', '/')
    
        cy.get('input[name=q]').type('moletom').parent('form').submit()
    
        cy.location('pathname').should('include', '/search')
    
        cy.location('search').should('include', 'q=moletom')
        cy.get('a[href^="/product"').should('exist') 
    })
    })
describe('toDo app', () => {
	beforeEach(() => {
		cy.visit('https://todomvc.com/examples/react/dist/')
	})
	it('open page', () => {
		cy.visit('https://todomvc.com/examples/react/dist/')
	})

	it('add new task and verify', () => {
		const randomText = Math.random().toString(36).substring(2, 12)
		cy.get('[data-testid="text-input"]').type(`${randomText}{enter}`)
		cy.get('[data-testid="todo-item-label"]').invoke('text').should('eq', randomText)
		cy.wait(300)
	})
	it('editing already existing task', () => {
		const randomText = Math.random().toString(36).substring(2, 12)
		cy.get('[data-testid="text-input"]').type(`${randomText}{enter}`)
		cy.get('[data-testid="text-input"]').type(`${randomText}{enter}`)
	})
	it.only('mark as completed', () => {
		const randomText = Math.random().toString(36).substring(2, 12)
		cy.get('[data-testid="text-input"]').type(`${randomText}{enter}`)
		cy.get('[data-testid="text-input"]').type(`${randomText}{enter}`)
		cy.get(':nth-child(2) > .view > [data-testid="todo-item-toggle"]').click()
		cy.get('[data-testid="footer-navigation"] > :nth-child(3) > a').click()
		cy.get('[data-testid="todo-item-label"]').should('have.css', 'text-decoration').and('include', 'line-through')
	})
})

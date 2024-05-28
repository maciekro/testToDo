describe('toDo app', () => {
	it('open page', () => {
		cy.visit('https://todomvc.com/examples/react/dist/')
	})

	it('add new task and verify', () => {
		const randomText = Math.random().toString(36).substring(2, 12)
		cy.visit('https://todomvc.com/examples/react/dist/')
		cy.get('[data-testid="text-input"]').type(`${randomText}{enter}`)
		cy.get('[data-testid="todo-item-label"]').invoke('text').should('eq', randomText)
	})
})

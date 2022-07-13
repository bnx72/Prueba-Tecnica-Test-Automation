import HomePokemonPage from '../../PageObject/HomePokemonPage'
import DetailAbility from '../../PageObject/DetailAbility'

const DTH3 = require('../../fixtures/DataTestH3')

describe('Search Ability protean in the option Shearch', () => {
  beforeEach(() => {

    cy.visit('https://dex.pokemonshowdown.com/')
  })

  DTH3.forEach(test =>{

  it('Verify that '+test.pokemon.name+' is displayed in the result', ()=>{
    
    HomePokemonPage.SearchAbility('Protean');
    HomePokemonPage.SelectAbility();
    DetailAbility.ValidatePokemosByAbilities(test.pokemon.name)
    
  })
})

})

describe('Search Ability protean in the option Pokemon', () => {
  beforeEach(() => {

    cy.visit('https://dex.pokemonshowdown.com/pokemon')
  })

  DTH3.forEach(test =>{

  it('Verify that '+test.pokemon.name+' is displayed in the result', ()=>{
    
    HomePokemonPage.SearchAbility('Protean');
    HomePokemonPage.SelectAbility();
    DetailAbility.ValidatePokemosByAbilities(test.pokemon.name)
    
  })
})
})


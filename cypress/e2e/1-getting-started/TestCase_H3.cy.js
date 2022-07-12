import HomePokemonPage from '../../PageObject/HomePokemonPage'
import DetailAbility from '../../PageObject/DetailAbility'

const DTH3 = require('../../fixtures/DataTestH3')

describe('Search Ability protean in the opcion Shearch', () => {
  beforeEach(() => {

    cy.visit('https://dex.pokemonshowdown.com/')
  })

  DTH3.forEach(test =>{

  it(test.pokemon.name, ()=>{
    HomePokemonPage.ClicTapGeneralBtn();
    HomePokemonPage.Searchability('Protean');
    HomePokemonPage.SelectAbility();
    DetailAbility.ValidatePokemosByAbilities(test.pokemon.name)
    
  })
})

})

describe('Search Ability protean in the opcion Pokemon', () => {
  beforeEach(() => {

    cy.visit('https://dex.pokemonshowdown.com/pokemon')
  })

  DTH3.forEach(test =>{

  it(test.pokemon.name, ()=>{
    
    HomePokemonPage.Searchability('Protean');
    HomePokemonPage.SelectAbility();
    DetailAbility.ValidatePokemosByAbilities(test.pokemon.name)
    
  })
})
})

describe('Search Ability protean in the opcion Pokemon', () => {
  beforeEach(() => {

    cy.visit('https://dex.pokemonshowdown.com/moves')
  })

  DTH3.forEach(test =>{

  it(test.pokemon.name, ()=>{
    
    HomePokemonPage.Searchability('Protean');
    HomePokemonPage.SelectAbility();
    DetailAbility.ValidatePokemosByAbilities(test.pokemon.name)
    
  })
})
})

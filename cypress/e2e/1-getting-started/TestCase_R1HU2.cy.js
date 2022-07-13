import HomePokemonPage from '../../PageObject/HomePokemonPage'
import DetailMoves from '../../PageObject/DetailMoves'

const DTH2 = require('../../fixtures/DataTestH2.json')

describe('Search Moves in the option Shearch', () => {
  beforeEach(() => {

    cy.visit('https://dex.pokemonshowdown.com/')
  })

  DTH2.forEach(test => {

    it(test.testCase+'-'+test.moves, ()=>{
      
      HomePokemonPage.Search(test.moves)
      HomePokemonPage.SelectMoves();
      DetailMoves.ValidateAccuracy(test.Accuracy)
      DetailMoves.ValidatePP(test.PP)

    })
  })
  it('Search for a non-existing move - lalalala', ()=>{

    HomePokemonPage.Search('lalalala')
    HomePokemonPage.VerifyMsjNoExist()


  })

})
describe('Search Moves in the option Moves', () => {
  beforeEach(() => {

    cy.visit('https://dex.pokemonshowdown.com/moves/')
  })

  DTH2.forEach(test => {

    it(test.testCase+'-'+test.moves, ()=>{
  
      HomePokemonPage.Search(test.moves)
      HomePokemonPage.SelectMoves();
      DetailMoves.ValidateAccuracy(test.Accuracy)
      DetailMoves.ValidatePP(test.PP)

    })
  })
  it('Search for a non-existing move - lalalala', ()=>{

    
    HomePokemonPage.Search('lalalala')
    HomePokemonPage.VerifyMsjNoExist()


  })

})

import HomePokemonPage from '../../PageObject/HomePokemonPage'
import DetailMoves from '../../PageObject/DetailMoves'

const DTH2 = require('../../fixtures/DataTestH2.json')

describe('Search Moves in the option Shearch', () => {
  beforeEach(() => {

    cy.visit('https://dex.pokemonshowdown.com/')
  })

  DTH2.forEach(test => {

    it(test.testCase+'-'+test.moves, ()=>{
      
      HomePokemonPage.SearchMovesability(test.moves)
      HomePokemonPage.SelectMoves();
      DetailMoves.ValidateAccuracy(test.Accuracy)
      DetailMoves.ValidatePP(test.PP)

    })
  })
  it('Search for a non-existing move - lalalala', ()=>{

    HomePokemonPage.SearchMovesability('lalalala')
    HomePokemonPage.VerifyMsjNoExist()


  })

})
describe('Test Execution Pokemonshowdown', () => {
  beforeEach(() => {

    cy.visit('https://dex.pokemonshowdown.com/moves/')
  })

  DTH2.forEach(test => {

    it(test.testCase+'-'+test.moves, ()=>{
  
      HomePokemonPage.SearchMovesability(test.moves)
      HomePokemonPage.SelectMoves();
      DetailMoves.ValidateAccuracy(test.Accuracy)
      DetailMoves.ValidatePP(test.PP)

    })
  })
  it('Search for a non-existing move - lalalala', ()=>{

    
    HomePokemonPage.SearchMovesability('lalalala')
    HomePokemonPage.VerifyMsjNoExist()


  })

})

import HomePokemonPage from '../../PageObject/HomePokemonPage'
import PokemonProfile from '../../PageObject/PokemonProfile'

const DTH1 = require('../../fixtures/DataTestH1.json')

describe('Search Pokemon in the option pokemon', () => {
  beforeEach(() => {

    cy.visit('https://dex.pokemonshowdown.com/pokemon/')
  })

  DTH1.forEach(test => {

    it(test.testCase+'-'+test.Pokemon, ()=>{

      HomePokemonPage.SearchPokemon(test.Pokemon)
      HomePokemonPage.SelectPokemon();    
      PokemonProfile.ValidateStatsHD(test.HP)
      PokemonProfile.ValidateStatsAttack(test.Attack)
      PokemonProfile.ValidateStatsDefense(test.Defense)
      PokemonProfile.ValidateStatsSpAtk(test.Sp_Atk)
      PokemonProfile.ValidateStatsSpDef(test.Sp_Def)
      PokemonProfile.ValidateAbilities(test.Ability1)
      PokemonProfile.ValidateAbilities(test.Ability2)
    } )

  } )
  it('Search for a non-existing Pokemon - changoleon', ()=>{

    HomePokemonPage.ClicTapPokemon();
    HomePokemonPage.SearchPokemon('changoleon')
    HomePokemonPage.VerifyMsjNoExist()

  })

})

describe('Search Pokemon in the option ‘Search’', () => {
  beforeEach(() => {

    cy.visit('https://dex.pokemonshowdown.com/')
  })

  DTH1.forEach(test => {

    it(test.testCase+'-'+test.Pokemon, ()=>{

      HomePokemonPage.SearchPokemon(test.Pokemon)
      HomePokemonPage.SelectPokemon();    
      PokemonProfile.ValidateStatsHD(test.HP)
      PokemonProfile.ValidateStatsAttack(test.Attack)
      PokemonProfile.ValidateStatsDefense(test.Defense)
      PokemonProfile.ValidateStatsSpAtk(test.Sp_Atk)
      PokemonProfile.ValidateStatsSpDef(test.Sp_Def)
      PokemonProfile.ValidateAbilities(test.Ability1)
      PokemonProfile.ValidateAbilities(test.Ability2)
    } )

  } )
  it('Search for a non-existing Pokemon - Changoleon', ()=>{

    HomePokemonPage.SearchPokemon('changoleon')
    HomePokemonPage.VerifyMsjNoExist()


  })

})

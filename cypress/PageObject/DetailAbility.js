
class DetailAbility{

element = {
Abilitis:  () =>  cy.get('.result')

}

    
    ValidatePokemosByAbilities(EnterPokemon){
        this.element.Abilitis().contains(EnterPokemon, {matchCase:false});
        
    }
     

}
module.exports = new DetailAbility()
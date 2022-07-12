
class PokemonProfile{

    element = {
HP:      () => cy.get(':nth-child(2) > .stat'),
Attack:  () => cy.get(':nth-child(3) > .stat'),
Defense: () => cy.get(':nth-child(4) > .stat'),
SpAtk:  () => cy.get(':nth-child(5) > .stat'),
SpDef:  () => cy.get(':nth-child(6) > .stat'),
Speed:   () => cy.get(':nth-child(7) > .stat'),
Abilities:   () => cy.get('.imgentry'),  

    }

    //Historia 1
    ValidateStatsHD(EnterHD){
        this.element.HP().should('contain',EnterHD)
    }
    ValidateStatsAttack(EnterAttrack){
        this.element.Attack().should('contain',EnterAttrack)
    }
    ValidateStatsDefense(EnterDefense){
         this.element.Defense().should('contain',EnterDefense)
    }
    ValidateStatsSpAtk(EnterSpAtk){
         this.element.SpAtk().should('contain',EnterSpAtk)
    }
    ValidateStatsSpDef(EnterSpDef){
         this.element.SpDef().should('contain',EnterSpDef)
    }
    ValidateStatsSpeed(EnterSpeed){
         this.element.Speed().should('contain',EnterSpeed)
    }
    ValidateAbilities(EnterAbilitys){
        this.element.Abilities().should('contain',EnterAbilitys)
    }
    
   

 
  

}
module.exports = new PokemonProfile()
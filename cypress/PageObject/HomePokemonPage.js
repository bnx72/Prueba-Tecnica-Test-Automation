
class HomePokemonPage{

    element = {
SearchInput: ()=> cy.get('.textbox'),
ResultPokemon: ()=>cy.get('.active > .pokemonnamecol > b'),
ResultMove: () => cy.get('.active > .movenamecol > b'),
ResultAbility: () => cy.get('b'),
MsjPokemonNoExist: () => cy.get(':nth-child(1) > em')
    }

    //HU1
    Search(enterData){
        this.element.SearchInput().type(enterData)
    }
    SelectPokemon(){
        this.element.ResultPokemon().click();
    }   
    //HU2
    SelectMoves(){
        this.element.ResultMove().click();
    }
    //HU3
    SelectAbility(){
        this.element.ResultAbility().click();
    }

    VerifyMsjNoExist(){
        this.element.MsjPokemonNoExist().should('contain','No exact match found. The closest matches alphabetically are:')
    } 
    

}
module.exports = new HomePokemonPage()
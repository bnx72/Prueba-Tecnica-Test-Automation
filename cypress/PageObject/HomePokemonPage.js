
class HomePokemonPage{

    element = {
TapPokemon: () => cy.get('.tabbar > :nth-child(2) > .button'),
TapGeneral: () => cy.get('.tabbar > :nth-child(1) > .button'),
TapMoves: () => cy.get('.tabbar > :nth-child(3) > .button'),
SearchInput: ()=> cy.get('.textbox'),
ResultPokemon: ()=>cy.get('.active > .pokemonnamecol > b'),
ResultMove: () => cy.get('.active > .movenamecol > b'),
ResultAbility: () => cy.get('b'),
MsjPokemonNoExist: () => cy.get(':nth-child(1) > em')
    }

    //Historia 1
    ClicTapPokemon(){
        this.element.TapPokemon().click();
    }
    SearchPokemon(enterpokemon){
        this.element.SearchInput().type(enterpokemon)
    }
    SelectPokemon(){
        this.element.ResultPokemon().click();
    }
    VerifyMsjNoExist(){
        this.element.MsjPokemonNoExist().should('contain','No exact match found. The closest matches alphabetically are:')
    }    
    

    //Historia 2
    ClicTapMoves(){
        this.element.TapMoves().click();
    }
    SearchMovesability(EnterMoves){
        this.element.SearchInput().type(EnterMoves)
    }
    SelectMoves(){
        this.element.ResultMove().click();
    
    }
    
    //Historia 3

    ClicTapGeneralBtn(){
        this.element.TapGeneral().click();
    }
    Searchability(Enterability){
        this.element.SearchInput().type(Enterability)
    }
    SelectAbility(){
        this.element.ResultAbility().click();
    
    }
    

 
  

}
module.exports = new HomePokemonPage()
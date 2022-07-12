
class DetailMoves{

    element = {
Accuracy:  () => cy.get('.accuracyentry > dd'),
PP:        () => cy.get('.ppentry > dd') 

    }

    //Historia 1
    ValidateAccuracy(EnterAccuracy){
        this.element.Accuracy().should('contain',EnterAccuracy)
    }
    ValidatePP(EnterPP){
        this.element.PP().should('contain',EnterPP)
    }
     

}
module.exports = new DetailMoves()
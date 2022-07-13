
class MortgageCalculator{

element = {
HomePrice:      () =>   cy.get('#purchasePrice'),
BtnCoverage:    () =>    cy.get('#buttonPercent'),
ValueCovege:    () =>    cy.get('#downPaymentPercent'),
ListYears:      () =>   cy.get('#term'),
rate:           () =>    cy.get('#rate'),
Zcode:          () =>    cy.get('#zip'),
CBIncludeTaxN:  () =>    cy.get('#includeTaxesNLabel'),
CBIncludeTaxY:  () =>    cy.get('#includeTaxesYLabel'),
TotalPayment:   () =>    cy.get('.phfc-b-TypeDisplayFive > span'),
                         
CalculateBtn:   () =>     cy.get('#calculateButton')
}

EnterHomePrice(Amount){
    this.element.HomePrice().clear().type(Amount)
    
}
SelectDownPayment(){
    this.element.BtnCoverage().click();
} 

EnterCoverage(Coverage){
    this.element.ValueCovege().clear().type(Coverage)
}
SelectYears(Years){
this.element.ListYears()
}
EnterRate(rate){
    this.element.rate().clear().type(rate)
}
EnterZcode(ZC){
    this.element.Zcode().clear().type(ZC)
}
SelectIncludeTax(){
this.element.CBIncludeTaxN().click();
}
ClicInCalculate(){
    this.element.CalculateBtn().click();
}
ValidatePayment(ExpectedPayment){
    this.element.TotalPayment().should('contain', ExpectedPayment)
}

CalculateExpected(years, rate1, homeprice){
    var rate = (rate1/100)/12   
    var cuota = (homeprice-(homeprice*0.20))*((rate*(Math.pow((1+rate),years)))/((Math.pow((1+rate),years))-1));
    return cuota.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}
}
module.exports = new MortgageCalculator()
import MortgageCalculator from '../../PageObject1/MortagageCalculator'
const DTR2 = require('../../fixtures/DataTest_R2.json')

describe('Test Suit Calculadora', () => {
    beforeEach(() => {
  
      cy.visit('https://www.rocketmortgage.com/calculators/mortgage-calculator?qlsource=RMTextLink')
})
DTR2.forEach(test => {
      
it(test.TestCase, ()=>{
   
        const Paymentexpecte = MortgageCalculator.CalculateExpected(test.Years, test.Rate, test.HomePrice)
        cy.log(Paymentexpecte)
        MortgageCalculator.EnterHomePrice(test.HomePrice)
        MortgageCalculator.SelectDownPayment()
        MortgageCalculator.EnterCoverage(test.coverage)
        MortgageCalculator.EnterRate(test.Rate)
        MortgageCalculator.EnterZcode(test.ZCode)
        MortgageCalculator.SelectIncludeTax();
        MortgageCalculator.ClicInCalculate()
        cy.get('.phfc-b-TypeDisplayFive > span').contains(Paymentexpecte)
        //MortgageCalculator.ValidatePayment(Paymentexpecte)

            
      })
  
    } )
  })
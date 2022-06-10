var customerName ="bob" ;
const leastFavoriteCustomer  = "ann"
function upperCaseCustomerName() { customerName= customerName.toUpperCase();}
function setBestCustomer(){
    window.bestCustomer = 'not bob';
}
function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer ="jay";
}
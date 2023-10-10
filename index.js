function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2);
}
function returnLastTwoDrivers(drivers){
    return drivers.slice(-2)};

const selectingDrivers = [
returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiply){
    return function(fare){
        return (multiply*fare);
    }
}
function fareDoubler(fare){
    return fare*2;
}
function fareTripler(fare){
    return fare*3;
}
function selectDifferentDrivers(arrayOfDrivers, selectorFunction){
    return selectorFunction(arrayOfDrivers)
}
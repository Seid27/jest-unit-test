export function leapYear(year){
    if (year % 4 == 0){
        return true;
    }
    else if(year % 100 == 0 & year % 400 == 0){
        return true;
    }
    return false;
}
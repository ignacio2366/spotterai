
export const concatCityState = (address) =>{
    const {city, state} = address
    return `${city} ${state}`;
}

export const roundUpTwoDigits=(age)=>{
    const roundOff = Number(Math.round(age));
    return `${roundOff.toString().slice(0,2)}m`
}
export const convertDateToDateFormat = (date) => {
    const newDate = new Date(date)
    return newDate.toDateString();
}
export const convertTrailertoInitial= (trailer) => {
    trailer.map(item => `${item.slice(0,2).toUpperCase()}`);
    return trailer.map(item => `${item.slice(0,2).toUpperCase()}`).join(',')
}

export const addDecimalNumber = (weight) =>{
    return Number(weight).toLocaleString();
}
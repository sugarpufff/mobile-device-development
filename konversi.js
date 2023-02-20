const celsius = {
    celcius : 37.33,
};
const display = ({celcius}) => {
    console.log(`fahrenheit ${celcius * 9/5 + 32} sama dengan ${celcius} celsius`);
};

export {celsius, display};
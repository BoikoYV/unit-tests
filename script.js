const CONTINENTS = {
    NA: 'North America',
    EU: 'Europe',
    AS: 'Asia'
}

const COUNTRIES = [
    {
        code: 'US',
        name: 'United States',
        capital: 'Washington',
        area: 9_629_091,
        continent: 'NA'
    },
    {
        code: 'DE',
        name: 'Germany',
        capital: 'Berlin',
        area: 3_570_210,
        continent: 'EU'
    },
    {
        code: 'DK',
        name: 'Denmark',
        capital: 'Copenhagen',
        area: 430_940,
        continent: 'EU'
    },
    {
        code: 'UA',
        name: 'Ukraine',
        capital: 'Kyiv',
        area: 603_700,
        continent: 'EU'
    },
    {
        code: 'CN',
        name: 'China',
        capital: 'Beijing',
        area: 9_596_960,
        continent: 'AS'
    },
    {
        code: 'GB',
        name: 'United Kingdom',
        capital: 'London',
        area: 244_820,
        continent: 'EU'
    },
    {
        code: 'IN',
        name: 'India',
        capital: 'New Delhi',
        area: 3_287_590,
        continent: 'AS'
    }
];

// return country obj
function getCountry(code) {
    const country = COUNTRIES.find(country => country.code === code);
    return country
}

// return country obj without code prop
function getCountryByCode(code) {
    const { code: id, ...restCountry } = getCountry(code);
    return restCountry
}


function getCapitalByName(code) {
    const country = getCountry(code)
    const { capital, name } = country
    return { capital, name }
}
// console.log(getCapitalByName("UA"))


function getContinentByCode(code) {
    const { continent } = getCountry(code)
    return CONTINENTS[continent]
}
// console.log(getContinentByCode("DE"))


function getContinentData(continentCode) {
    const countriesArr = COUNTRIES.filter(({ continent }) => continent === continentCode)

    const countries = countriesArr.map(({ name }) => name)
    const area = countriesArr.reduce((acc, { area: countryArea }) => {
        acc += countryArea;
        return acc;
    }, 0)

    return { area, countries };
}

// console.log(getContinentData('EU'));

exports.getCountryByCode = getCountryByCode;
exports.getCountry = getCountry;
exports.getCapitalByName = getCapitalByName;
exports.getContinentByCode = getContinentByCode;
exports.getContinentData = getContinentData;
const { expect } = require('@jest/globals');
const { getCountry, getCountryByCode, getCapitalByName, getContinentByCode, getContinentData } = require('./script');


describe('get country information', () => {

    test('get country obj with code prop', () => {

        expect(getCountry('US')).toEqual({
            code: 'US',
            name: 'United States',
            capital: 'Washington',
            area: 9_629_091,
            continent: 'NA'
        });

    });

    test('get country obj without code prop', () => {
        expect(getCountryByCode('US')).toEqual({
            name: 'United States',
            capital: 'Washington',
            area: 9629091,
            continent: 'NA'
        });
    })

    test('get obj with country name and capital', () => {
        expect(getCapitalByName('UA')).toEqual({ capital: 'Kyiv', name: 'Ukraine' });
    })

    test('get country continent', () => {
        expect(getContinentByCode('UA')).toBe('Europe');
    })

    test('get info about continent: area and array of countries', () => {
        expect(getContinentData('EU')).toEqual({
            area: 4849670,
            countries: ['Germany', 'Denmark', 'Ukraine', 'United Kingdom']
        });

        const continentDataObj = getContinentData('EU');
        expect(continentDataObj.area).toBeGreaterThan(0);
        expect(continentDataObj.countries.length).toBeGreaterThan(0);

    })




})
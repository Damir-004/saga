export type CountryModel = {
    name: {
        common: string,
        official: string,
        nativeName: {
            ara: {
                official: string
                common: string
            }
        }
    },
    tld: string[],
    cca2: string,
    ccn3: string,
    cca3: string,
    cioc: string,
    independent: boolean,
    status: string,
    unMember: boolean,
    currencies: {
        JOD: {
            name: string,
            symbol: string
        }
    },
    idd: {
        root: string,
        suffixes: string[]
    },
    capital: string[],
    altSpellings: string[],
    region: string,
    subregion: string,
    languages: {
        ara: string
    },
    translations: {
        ara: {
            official: string
            common: string
        }
    },
    latlng: number[],
    landlocked: boolean,
    borders: string[],
    area: number,
    demonyms: {
        eng: {
            f: string,
            m: string
        }
    },
    flag: string,
    maps: {
        googleMaps: string,
        openStreetMaps: string
    },
    population: number,
    gini: {
        2010: number
    },
    fifa: string,
    car: {
        signs: string[],
        side: string
    },
    timezones: string[],
    continents: string[],
    flags: {
        png: string,
        svg: string,
        alt: string
    },
    coatOfArms: {
        png: string,
        svg: string
    },
    startOfWeek: string,
    capitalInfo: {
        latlng: number[]
    },
    postalCode: {
        format: string,
        regex: string
    }
}

export type CountryShortModel = {
    name: string,
    flag: string
    capital: string[],
    population: number,
    area: number,
    map: string,
    latitude: number,
    longitude: number

}
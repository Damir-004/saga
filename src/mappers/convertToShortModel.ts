import {CountryModel, CountryShortModel} from "../models/Country";

export function convertToShortModel(src: CountryModel[]): CountryShortModel[] {
    return src.map((item: CountryModel)=>{
        return {
            name: item.name.common,
            capital: item.capital,
            flag: item.flags.png,
            population: item.population,
            area: item.area,
            map: item.maps.googleMaps,
            latitude: item.latlng[0],
            longitude: item.latlng[1]

        }
    })
}
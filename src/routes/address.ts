import axios from 'axios';
import Auth from './index';

class userAddress {
    async getUserAddress(latitude: number, longitude: number) {
        try {
            const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${process.env.MAPS_API_KEY}`);
            const address = response.data.results[0].address_components;

            const cep = address.find(component => component.types.includes('postal_code')).long_name;
            const route = address.find(component => component.types.includes('route')).long_name;
            const sublocality = address.find(component => component.types.includes('sublocality')).long_name;
            const country = address.find(component => component.types.includes('country')).long_name;

            return {
                cep,
                route,
                sublocality,
                country
            };
        } catch (ex: any) {
            return ex.message;
        }
    }
}

export default new userAddress();
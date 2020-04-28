import axios from 'axios';
import { PepperestWebServices } from '../../../libs/constants';

const PepperestAxios = axios.create({
    baseURL: PepperestWebServices.HOST
});

PepperestAxios.defaults.headers.common['Content-Type'] = 'application/json';

export default PepperestAxios;
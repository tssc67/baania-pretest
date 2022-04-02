import Axios from 'axios';

export const api = Axios.create({
    baseURL: '',
    validateStatus: () => true,
});

export type Postcode = {
    post_code: string;
}

export type House = {
    id: number;
    name: string;
    desc: string;
    price: string;
    post_code: string;
}

export const getPostcodes = async (): Promise<Postcode[]> => {
    const res = await api.get('/postCode')
    if (res.status !== 200) {
        throw new Error('Connection Error');
    }
    return res.data.payload;
}

export const getPostcodeDetail = async (postcode: string): Promise<[number, number]> => {
    const res = await api.get(`/postCode/${postcode}`);
    const {average, median} = res.data.payload;
    return [average, median];
}

export const getHouselist = async (skip: number, take: number): Promise<[number, House[]]> => {
    const res = await api.get('/home', {
        params: {
            skip,
            take,
        }
    })
    if (!res.data.payload) {
        throw new Error('Connection Error');
    }
    return [res.data.count, res.data.payload];
}

export const createHouse = async (house: House): Promise<boolean> => {
    const res = await api.post('/home', house);
    if (res.status === 200) return true;
    return false;
}
 
export const patchHouse = async (house: House): Promise<boolean> => {
    const res = await api.patch(`/home/${house.id}`, house);
    if (res.status === 200) return true;
    return false;
}   

export const deleteHouse = async (houseId: number): Promise<boolean> => {
    const res = await api.delete(`/home/${houseId}`);
    if (res.status === 200) return true;
    return false;
}
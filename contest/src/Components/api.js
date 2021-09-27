import axios from 'axios';

export const getList = async () =>{
    const { result } = await axios.get('http://localhost:3100/api/log/list');

    return result;
}

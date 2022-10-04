export const BASE_URL = 'https://6ef49ed0-8fa3-4a2b-8ebe-9213576534a6.mock.pstmn.io';

export const fetchData = async (path) => {
    try {
        const response = await fetch(`${BASE_URL}${path}`);
        return await response.json();   
    } catch (error) {
        console.log(error);
    }
}

import { toValue } from 'vue'
import { store } from './token'

export async function useFetch(api, requestContent, msg409) {

    try {
        const response = await fetch(`http://localhost:8080/${toValue(api)}`, toValue(requestContent));

        if (response.ok) {
            return await response.json();
        }else{ 
            store.remove();
        }

    } catch (error) {
        msg409.value = "Ошибка подключения к серверу";
    }
    return null;
}
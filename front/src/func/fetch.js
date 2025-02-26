import { toValue } from 'vue'
import { token_storage } from './token'

export async function useFetch(api, requestContent, msg409) {

    while(true){
        try {
            const response = await fetch_localhost(api, requestContent);
            
            if (response.ok) {
                return await response.json();
            }else if(token_storage.is_auth()){ 
                let answ = await refresh_token()

                if(answ !== null){
                    token_storage.set_access_token(answ.access_token);
                    token_storage.set_refresh_token(answ.refresh_token);

                    requestContent.headers["Authorization"] = `Bearer ${answ.access_token}`;
                } else {
                    token_storage.remove_access_token();
                    token_storage.remove_refresh_token();
                }

            }else{
                window.location.hash = '#/login';
                return null;
            }

        } catch (error) {
            msg409.value = "Ошибка подключения к серверу";
            return null;
        }
    }

}

async function refresh_token() {
    const refreshContent = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            refresh_token: token_storage.get_refresh_token(),
        }),
    };

    const response = await fetch_localhost("api/refresh", refreshContent);

    if(response.ok){
        return await response.json();
    }

    return null;
}

export async function logout_token() {
    const logoutContent = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            refresh_token: token_storage.get_refresh_token(),
        }),
    };

    const response = await fetch_localhost("api/logout", logoutContent);

    if(response.ok){
        return await response.json();
    }

    return null;
}

async function fetch_localhost(api, requestContent) {
    return fetch(`http://localhost:8080/${toValue(api)}`, toValue(requestContent));
}
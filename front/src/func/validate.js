import { toValue } from 'vue'

export function is_valid(x,y,r){
    const rValue = [1, 2, 3, 4];
    
    if( !(-5<=toValue(x) && toValue(x)<=5) ){
        return "x должно быть от -5 до 5";
    }
    
    if( !(-5<=toValue(y) && toValue(y)<=5) ){
        return "y должно быть от -5 до 5";
    }

    if( !(rValue.includes(toValue(r))) ){
        return "r должно принадлежать {1, 2, 3, 4}";
    }

    return null;
}
export function verify (entrada){
    if (entrada !== null && entrada.length === (entrada.replace(/\s+/g, '')).length){
        if (entrada.length >= 10){
            return 3  
        }
        else {return 1}
    }
    else {return 0}
}
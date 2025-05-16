import httpClient from "../../APIs/PathCarrerAPI/PathCarrer";

export function verify (entrada){
    if (entrada !== null && entrada.length === (entrada.replace(/\s+/g, '')).length){
        if (entrada.length >= 10){
            return 3  
        }
        else {return 1}
    }
    else {return 0}
}

export async function CreateNewAccount(NewuserName, NewPassword) {
        try {
          const response = await httpClient.post('Login/NewUser', {
            userName: NewuserName,
            password: NewPassword,
          });
        } catch (error) {
          return null
        }
}

export async function LoginCall(userNameX,PasswordY) {
        try {
        const response = await httpClient.post('Login',
        {
            userName:userNameX,
            password:PasswordY
        })

        const token = response.data.Token;

        localStorage.clear();
        localStorage.setItem("UserName",userNameX)
        localStorage.setItem("Token",response)
        return token
               
        } catch (error) {
          return null
        }
        
}
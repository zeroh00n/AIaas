import {create} from 'zustand'

export const useGloval = create((set)=>({
    userid: '',
    serverPath:'http://127.0.0.1:8000/',
    setUserid : (x) =>set({userid:x}),
    setserverPaath : (x) =>set({serverPath:x})
}))
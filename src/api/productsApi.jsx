import { axiosInstance } from "../config/axiosInstance";

 export let productsFetchApi = async ()=>{
        try {
             let res = await axiosInstance.get('/products')
            console.log(res.data.products);
            let data = res.data.products;
            return data;
            
        } catch (error) {
            console.log(error);
            
        }
        
    }
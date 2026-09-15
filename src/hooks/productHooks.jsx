import { useQuery } from '@tanstack/react-query';
import {  productsFetchApi } from '../api/productsApi';
export const useProductApi = ()=>{
    let {data,isPending,error} = useQuery({
    queryKey: ["products"],
    queryFn: productsFetchApi,
    staleTime: 5000
})


return {
    data,isPending,error
}
}
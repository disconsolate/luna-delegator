/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery, type UseQueryOptions, useInfiniteQuery, type UseInfiniteQueryOptions } from "@tanstack/vue-query";
import { useClient } from '../useClient';
import type { Ref } from 'vue'

export default function useLunadelegatorDelegator() {
  const client = useClient();
  const QueryParams = ( options: any) => {
    const key = { type: 'QueryParams',  };    
    return useQuery([key], () => {
      return  client.LunadelegatorDelegator.query.queryParams().then( res => res.data );
    }, options);
  }
  
  const QuerySentDelegation = (id: string,  options: any) => {
    const key = { type: 'QuerySentDelegation',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.LunadelegatorDelegator.query.querySentDelegation(id).then( res => res.data );
    }, options);
  }
  
  const QuerySentDelegationAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QuerySentDelegationAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.LunadelegatorDelegator.query.querySentDelegationAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryNotSentDelegation = (id: string,  options: any) => {
    const key = { type: 'QueryNotSentDelegation',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.LunadelegatorDelegator.query.queryNotSentDelegation(id).then( res => res.data );
    }, options);
  }
  
  const QueryNotSentDelegationAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryNotSentDelegationAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.LunadelegatorDelegator.query.queryNotSentDelegationAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  const QueryDelegation = (id: string,  options: any) => {
    const key = { type: 'QueryDelegation',  id };    
    return useQuery([key], () => {
      const { id } = key
      return  client.LunadelegatorDelegator.query.queryDelegation(id).then( res => res.data );
    }, options);
  }
  
  const QueryDelegationAll = (query: any, options: any, perPage: number) => {
    const key = { type: 'QueryDelegationAll', query };    
    return useInfiniteQuery([key], ({pageParam = 1}: { pageParam?: number}) => {
      const {query } = key

      query['pagination.limit']=perPage;
      query['pagination.offset']= (pageParam-1)*perPage;
      query['pagination.count_total']= true;
      return  client.LunadelegatorDelegator.query.queryDelegationAll(query ?? undefined).then( res => ({...res.data,pageParam}) );
    }, {...options,
      getNextPageParam: (lastPage, allPages) => { if ((lastPage.pagination?.total ?? 0) >((lastPage.pageParam ?? 0) * perPage)) {return lastPage.pageParam+1 } else {return undefined}},
      getPreviousPageParam: (firstPage, allPages) => { if (firstPage.pageParam==1) { return undefined } else { return firstPage.pageParam-1}}
    }
    );
  }
  
  return {QueryParams,QuerySentDelegation,QuerySentDelegationAll,QueryNotSentDelegation,QueryNotSentDelegationAll,QueryDelegation,QueryDelegationAll,
  }
}
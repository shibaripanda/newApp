import React, { useMemo } from "react";
import { TableReviews } from "../components/Table/TableReviews.tsx";
import { LoaderItem } from "../components/Loader/LoaderItem.tsx";

export const ServiceScreen = (props) => {
  
  const filteringOrders = useMemo(() => {
    if(props.textFilter){
      return (props.orders).filter(order => Object.values(order).join().toLowerCase().includes(props.textFilter.toLowerCase()))
    }
    return (props.orders.filter(item => props.newSet.includes(item.status) && props.filter.includes(item.title)))
    }, [props]
  )

  if(props.orders.length){
    return (
      <TableReviews setOrders={props.setOrders} getOrders={props.getOrders} filteringOrders={filteringOrders} serviceSettings={props.serviceSettings}/>
    )
  }
  else if(props.orders.length === 0){
    return (
    <div className={'mainScreenLoader'}>{props.text.youDontHaveOrders}</div>
    )
  }
  return (
    <div className={'mainScreenLoader'}><LoaderItem/></div>
  )

}
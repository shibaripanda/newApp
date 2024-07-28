import React, { useMemo } from "react";
import { TableReviews } from "../components/Table/TableReviews.tsx";
import { LoaderItem } from "../components/Loader/LoaderItem.tsx";

export const ServiceScreen = (props) => {
  
  const filteringOrders = useMemo(() => {
    
    console.log(props.filter)

    let res = props.orders
    res = res.filter(order => ['new', 'ready'].includes(order.status))
    res = res.filter(order => Object.values(order).join().toLowerCase().includes(props.filter.toLowerCase()))

    return (
      res
    )
    }, [props.filter, props.orders]
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
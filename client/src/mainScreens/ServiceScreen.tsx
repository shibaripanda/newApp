import React, { useEffect, useMemo, useState } from "react";
import { TableReviews } from "../components/Table/TableReviews.tsx";
import { fixOrders } from "../fix/fixOrders.js";
import { LoaderItem } from "../components/Loader/LoaderItem.tsx";

export const ServiceScreen = (props) => {

  const [orders, setOrders] = useState([])
  
  useEffect(() => {
    setTimeout(() => getOrders(), 1500)
  },[])

  const getOrders = async () => {
    const res = await fixOrders()
    setOrders(res)
  }

  const filteringOrders = useMemo(() => {
    return orders.filter(order => Object.values(order).join().toLowerCase().includes(props.filter.toLowerCase()))
    }, [props.filter, orders]
  )

  if(orders.length){
    return (
      <TableReviews data={filteringOrders}/>
    )
  }
  return (
    <div className={'mainScreenLoader'}><LoaderItem/></div>
  )

}
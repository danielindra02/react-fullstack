import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import Product from './Product'
import { ShopContext } from '../Context/ShopContext'

export const ShopCategory = (props) => {
  const {all_Product} = useContext(ShopContext);
  
  return (
    <div className='ShopCategory'>
      <img src={props.banner} alt="" />
    </div>
  )
}

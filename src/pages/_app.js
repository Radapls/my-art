/**
 * RADAPLS PROJECTS
 * ------------------
 * Copyright (C) 2023 Juan Felipe Rada - All Rights Reserved.
 *
 * This file, project or its parts can not be copied and/or distributed without
 * the express permission of Juan Felipe Rada.
 *
 * @file _app.js
 * @author Juan Felipe Rada <radapls8@gmail.com>
 * @date Wednesday, 22nd February 2023
 */

import { useState } from "react";
import '../styles/globals.css';

export default function App({ Component, pageProps })
{

  const [ cart, setCart ] = useState([])

  const addToCart = art =>
  {
    if (cart.some(artState => artState.id === art.id))
    {
      const newCart = cart.map(artState =>
      {
        if (artState.id === art.id)
        {
          artState.quantity = art.quantity;
        }
        return artState;
      });
      setCart([ ...newCart ]);
      localStorage.setItem('cart', JSON.stringify(cart));
    } else
    {
      setCart([ ...cart, art ]);
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }

  const deleteProduct = id =>
  {
    const newCart = cart.filter(product => product.id != id)
    setCart(newCart)
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }

  const updateQuantity = art =>
  {
    const newCart = art.map(artState =>
    {
      if (artState.id === art.id)
      {
        artState.quantity = parseInt(art.quantity)
      }
      return artState
    })
    setCart(newCart)
    window.localStorage.setItem('cart', JSON.stringify(cart));
  }

  return <Component {...pageProps}
    cart={cart}
    addToCart={addToCart}
    deleteProduct={deleteProduct}
    updateQuantity={updateQuantity} />
}

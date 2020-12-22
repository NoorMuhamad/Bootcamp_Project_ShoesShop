import React from 'react'
import { useParams } from 'react-router-dom'
import Shoes from './Data.json'





const Upcomingproduct = () => {
    const style = {
        color: 	'#000000',
        fontSize: 30,
        textAlign: 'center',
        padding:20,
      };
      const styleimg = {
        height:500,
        width:750,
        borderBottom: '10px solid black',
      };

    const { id } = useParams();
    const shoe = Shoes[id];
    if (!shoe)
        return <h2>Product not Found</h2>
    return (

        <div style={style}>
            <h1>Welcome to Product Item</h1>
            <div className="link">
                <h4>{shoe.name}</h4>
                <img src={shoe.img} style={styleimg} alt="shoe" />
            </div>
        </div>
    )
}

export default Upcomingproduct

import React from 'react'
import shoes from './Data.json'
import {Link} from 'react-router-dom'

const Upcoming = () => {
    console.log(shoes)
    const style = {
        color: 'black',
        fontSize: 30,
        textAlign: 'center',
        padding:20
      };
      const linkclass={
        color:'black',
        margin:40,
        textAlign: 'center',
        textDecoration:'none',
        borderBottom: '5px solid black',
      }
      

    return (
        <>
        <h1 style={style}>MEN SHOES</h1>
        <div className="imgDesign"> 
            {
                Object.keys(shoes).map(keyName=>{
                    const shoe = shoes[keyName];
                    return(
                        <Link  style={linkclass} key={shoe.name} to={`/product/${keyName}`}>
                            <h4 >{shoe.name}</h4>
                            <img src={shoe.img} height={500} alt="shoe" />
                        </Link>
                    )
                })
            }
        </div>
        </>
    )
}

export default Upcoming

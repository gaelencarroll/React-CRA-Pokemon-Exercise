import React from 'react'
import './Pokecard.css'

const pokeSource = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

function Pokecard(props){
    let imgSource = `${pokeSource}${props.id}.png`
    return(
        <section className='whole-pokecard'>
            <p className='poke-name'>{props.name}</p>
            <img className='poke-img' src={imgSource}/>
            <p className='poke-info'>Type: {props.type}</p>
            <p className='poke-info'>EXP: {props.exp}</p>
        </section>
    )
}

export default Pokecard;
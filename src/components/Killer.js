import React from 'react'
import React, { Component } from 'react'

export default class Killer extends Component {
    render() {
        return (
            <div className="killers">
                <div className='avatar'>
               <img className='killerImage' src={this.props.image} alt={this.props.name}/>
               <p className='rating'>{this.props.rating}</p>
               </div>
               <div className='description'>
                   <h3 className='killerName'>{this.props.name}</h3>
                   <p className='killerDescription'>{this.props.description}</p>
                   <p className='killerQuote'>{this.props.quote}</p>
                   <div className='killerPrice'>{this.props.price}</div>
               </div>
            </div>
        )
    }
}














export default Killer
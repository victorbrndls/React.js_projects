import React, { Component } from 'react'

class Person extends Component {
    render(props) {
        const { img, name, job, children} = this.props

        return (
            <div className='person'>
                <img src={img} alt='person'/>
                <h3>{name}</h3>
                <h4>{job}</h4>
                <p>{children}</p>
            </div>
        )
    }
}

export default Person

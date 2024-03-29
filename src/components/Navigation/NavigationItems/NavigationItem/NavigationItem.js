import React from 'react'

const NavigationItem = (props) => {
    return (
        <li className='NavigationItem'>
            <a
                href={props.link}
                className={props.active ? 'active' : null}>{props.children}</a>
        </li>
    )
}

export default NavigationItem

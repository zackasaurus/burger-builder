import React from 'react'

const Backdrop = (props) => {


    let attachedClasses = ['Backdrop', 'Backdrop--Off']

    if (props.show) {
        attachedClasses = ['Backdrop', 'Backdrop--On']
    }
    return (
        props.show ? <div
            className={attachedClasses.join(' ')}
            onClick={props.clicked}
        ></div> : null


    )

}

export default Backdrop

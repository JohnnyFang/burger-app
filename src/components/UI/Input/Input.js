import React from 'react'
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null
    
    switch( props.elementType) {
        case ('input'):
            inputElement = <input 
                className={classes.InputElement} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />
            break
        case('textArea'):
            inputElement = <textarea 
            className={classes.InputElement} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />
            break
        case('select'):
            inputElement = (
                <select 
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(element => (
                        <option key={element.value} value={element.value}>
                            {element.displayValue }
                        </option>
                    ))}
                </select>
            )
            break
        default:
            inputElement = <input 
                className={classes.InputElement} 
                {...props.elementConfig} 
                value={props.value}
                onChange={props.changed} />
    }

    return (
        <div>
        <label className={classes.Label} >{props.label}</label>
        {inputElement}

    </div>
    )
}


export default input
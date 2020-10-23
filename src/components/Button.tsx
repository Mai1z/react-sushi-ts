import React from 'react'
import classNames from 'classnames'

type ButtonCart = {
    outline: boolean;
    className: string;
}

export const Button:React.FC<ButtonCart> = ({outline, className, children}) => {
    return (
        <button className={classNames('button', className, {
            'button--outline' : outline,
        })}>
            {children}
        </button>
    )
}
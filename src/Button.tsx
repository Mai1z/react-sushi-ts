import React from 'react'
import classNames from 'classnames'

export const Button:React.FC<{outline: boolean}> = ({outline, children}) => {
    return (
        <button className={classNames('button', {
            'button--outline' : outline,
        })}>
            {children}
        </button>
    )
}
import React, {useState} from 'react'


export const Categories:React.FC<{items:string[]}> = ({items}) => {
    const [activeItem, setActiveItem] = useState<number | null>(null)

    return (
        <div className='categories'>
            <ul>
                <li
                    className={activeItem === null ? 'active' : ''}
                    onClick={() => setActiveItem(null)}
                >
                    Все
                </li>
                {items &&
                    items.map((name, index) => (
                        <li
                            onClick={() => setActiveItem(index)}
                            className={activeItem === index ? 'active' : ''}
                            key={`${name}_${index}`}
                        >
                            {name}
                        </li>
                ))}
            </ul>
        </div>
    )
}
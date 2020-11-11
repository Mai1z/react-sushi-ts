import {Categories} from '../components/Categories'
import {SortPopup} from '../components/SortPopup'
import React from 'react'
import {SushiBlock} from '../components/SushiBlock'

export const Home:React.FC<{sushi:string[]}> = ({sushi}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={['Сеты', 'Роллы', 'Горячие']}
                />
                <SortPopup items={['Популярности', 'Цене', 'Алфавит']}/>
            </div>
            <h2 className="content__title">Все суши</h2>
            <div className="content__items">
                {
                    sushi.map((obj: any) => (
                        <SushiBlock
                            key={obj.id}
                            {...obj}
                        />
                    ))
                }
            </div>
        </div>
    )
}
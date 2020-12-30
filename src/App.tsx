import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import {Home} from './pages/Home'
import {Route} from 'react-router-dom'
import {ShopCart} from './pages/ShopCart'

const App:React.FC = () => {
    const [item, setItem] = useState([])

    useEffect(()=> {
        fetch('http://localhost:3000/db.json').then((resp) => resp.json().then(json => {
            setItem(json.sushi)
        }))
    }, [])

    console.log(item)
    return (
    <div>
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Route path='/' render={() => <Home sushi={item}/>} exact />
                <Route path='/cart' component={ShopCart}/>
            </div>
        </div>
    </div>
    );
}

export default App;

import { type } from 'os'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {Content} from './Content'
import Title from './Title'


function App() {
    return (
        <>
            <Title text='React' />
            <Title text='TS' />
            <Content 
            text1='saepe sit voluptates minima voluptate illo sed, necessitatibus earum animi totam error eveniet.' 
            text2='saepe sit voluptates minima voluptate illo sed, necessitatibus earum animi totam error eveniet.' 
            year={2023}/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

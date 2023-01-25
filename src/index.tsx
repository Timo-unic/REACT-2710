import React from 'react'
import ReactDOM from 'react-dom/client'

const h1 = React.createElement('h1', { id: 'title' }, 'Hello React')
console.log(h1)

const list = React.createElement(
    'ul',
    null,
    React.createElement('li', null, 'list item 1'),
    React.createElement('li', null, 'list item 2'),
    React.createElement('li', null, 'list item 3')
)

const content = (
    <div>
        {h1}
        {list}
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)

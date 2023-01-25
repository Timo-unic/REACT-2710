import React from 'react'
import ReactDOM from 'react-dom/client'

// React component (Function)
const Title = () => {
    return <h1>Hello App.js</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit illum asperiores blanditiis accusantium nesciunt
                quisquam voluptatibus laudantium? Porro totam obcaecati omnis
                ipsum rem, ut deserunt fugiat eligendi accusantium commodi ex.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aperiam atque ipsum sequi omnis obcaecati eveniet quasi illo
                soluta voluptas cum! Pariatur officiis laborum enim qui quis
                minima itaque rem sed!
            </p>
        </React.Fragment>
    )
}

function App() {
    return (
        <>
            <Title />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

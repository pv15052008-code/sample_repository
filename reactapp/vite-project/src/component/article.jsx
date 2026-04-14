import React from 'react'

function article(props) {
    const [count , setCount]=React.useState(0)
    const handleIncrement=()=>{
        setCount(count+1)
    }
  return (
    <div>
        <h1>article</h1>
         <h3> {props.title}</h3>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In distinctio nam molestias obcaecati libero? Rerum distinctio laboriosam libero eaque ut dicta tempore cupiditate et nam. Aliquid numquam quaerat fuga quam?</p>
         <h2>{count}</h2>
         <button onClick={handleIncrement}> increment</button>
        </div>
  )
}

export default article
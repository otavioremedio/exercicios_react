import React from 'react'

export default (children, props) => React.Children.map(props.children, 
    child => React.cloneElement(child, {...props})
)
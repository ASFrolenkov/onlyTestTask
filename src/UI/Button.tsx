import React from 'react'
import styled from 'styled-components'

const Button = ({children}: {children: string}) => {
    const Button = styled.button`
        background: red;
        margin-top: 100px;
    `

    return (
        <Button>{children}</Button>
    )
}

export default Button
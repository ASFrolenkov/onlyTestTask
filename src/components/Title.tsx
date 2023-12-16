import React from 'react'
import styled from 'styled-components'

const TitleComponent = styled.h1`
	position: relative;

	font-size: 56px;
	line-height: 65px;
	color: #42567a;

	width: 353px;

	&:before {
		content: '';
		position: absolute;
		top: 7px;
		left: -81px;

		border-left: 6px solid #3877EE;
		border-image: linear-gradient(180deg, #3877EE, #EF5DA8);
		border-image-slice: 1;

		height: 120px;
	}
`

const Title = ({children}: {children: string}) => {
  return (
    <TitleComponent>{children}</TitleComponent>
  )
}

export default Title
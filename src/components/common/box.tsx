import React from 'react'
import styled from 'styled-components'

import { IBox } from '../../types/types'

interface IProps {
  box: IBox
}

function Box({ box }: IProps)
{
  return <Container>{box.value ? box.value : ''}</Container>
}

export default Box

const Container = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 4px;
  color: black;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: calc((100vh * 9 / 16 - 16px) / 11 - 8px);
  justify-content: center;
  width: calc((100vh * 9 / 16 - 16px) / 11 - 8px);
`

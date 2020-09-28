import React from 'react'

import styled from 'styled-components/native'

export const Main = styled.View`
min-height: 100%;
height: 100%;

`
export const Titulo = styled.Text`
color: black;
font-size: 22px;
align-self: center;
margin-top: 13%;

`
export const Linha = styled.View`
background-color: black;
width: 100%;
height: 2px;
margin-top: 3%;
`
export const Texto = styled.Text`
font-size: 19px;
margin-bottom: 12px;
margin-top: 12px;
`

export const Navbar = styled.View`
background-color: black;
width: 100%;
height: 14%;

`

export const BtnAddTemplate = styled.TouchableOpacity`

`
export const TemplateHome = styled.View`
border-radius: 20px;
`
export const TemplateHomeElements = styled.View`
flex-direction: row;
`
export const BtnDelete = styled.TouchableOpacity`
width: 36px;
height: 40px;

margin-top: 0%;
`

export const Footer = styled.View`
align-items: center;
margin-top: auto;
background-color: black;
width: 100%;
height: 12%;
flex-direction: row;
`
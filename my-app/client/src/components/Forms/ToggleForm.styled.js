import styled from "styled-components";

export const UserContainer = styled.div`
width: 66%;
border: 2px solid #4A5655;
border-radius: 20px;
padding: 2px 5px 2px 5px;
margin:30px;
background-color: white;
box-shadow: 0 4px 8px 0 #E0B9B9, 0 6px 20px 0 #E0B9B9;
`

export const UserContainerWide = styled.div`
width: 92%;
height: 25%;
border-radius: 20px;
padding: 2px 5px 2px 5px;
margin:30px;
background-color: white;
border-right:${({ theme }) => theme.colors.lightpurple} 10px solid;
border-bottom:${({ theme }) => theme.colors.lightpurple} 10px solid;
`

export const UserContainerLong = styled.div`
width: 92%;
height: 60%;
border-radius: 20px;
padding: 2px 5px 2px 5px;
margin:30px;
background-color: white;
border-right:${({ theme }) => theme.colors.lightpurple} 10px solid;
border-bottom:${({ theme }) => theme.colors.lightpurple} 10px solid;
`

export const UserContainerBorder = styled.div`
border-left: 3px solid #4A5655;
border-right: 3px solid #4A5655;
border-radius: 20px;
`

export const UserContainerBorderThick = styled.div`
border: 2px solid #4A5655;
border-radius: 20px;
padding:20px;
`
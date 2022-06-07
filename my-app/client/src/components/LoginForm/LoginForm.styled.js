import styled from "styled-components";

export const UserContainer = styled.div`
  width: 50%;
  border: 2px solid #4A5655;
  border-radius: 20px;
  padding: 2px 5px 2px 5px;
  margin:30px;
  background-color: white;
  box-shadow: 0 4px 8px 0 #E0B9B9, 0 6px 20px 0 #E0B9B9;
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

export const StyledLoginForm = styled.form`
label{
    font-size:20px;
    color:#666666;
}
input[type=text], select {
  color:#666666;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: block;
  border: none;
  border-radius: 10px;
  background-color: #E9E9E9;
  box-sizing: border-box;
};
input[type=password], select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: none;
  display: block;
  border-radius: 10px;
  background-color: #E9E9E9;
  box-sizing: border-box;
}

`
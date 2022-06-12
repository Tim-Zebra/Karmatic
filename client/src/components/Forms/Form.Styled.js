import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

label{
    font-size:20px;
    color:#666666;
    align-self: flex-start;
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

& a{
  display:flex;
  padding:10px;
  flex-wrap:nowrap;
}

`

export const OrDiv = styled.div`
  display: flex;
  width: 100%;
`
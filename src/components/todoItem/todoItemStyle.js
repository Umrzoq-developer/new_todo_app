import styled from "styled-components";

export const TodoItemDiv = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  box-shadow: 1px 5px 5px rgba(0, 0, 0, 0.4);
  padding: 10px;
  line-height: 10px;
  margin-top: 10px;
  text-align: center;
`;

export const CheckBox = styled.input`
  margin-top: 5px;
  height: 20px;
  width: 20px;
`;

export const TodoText = styled.p`
  font: normal 20px Calibri;
  margin-top: 5px;
  margin-right: 40px;
  margin-left: 10px;
  width: 60%;
  text-align: left;
`;

export const EditIcon = styled.button`
 color: white;
 width: 80px;
 height: 30px;
 background-color: #ffc11e; 
 margin-right: 10px;
 margin-left: 10px;
 margin-top: 5px;
 padding: 5px;
 border: none;
 outline: none;
 border-radius: 5px;
 justify-content: flex-end;
 
 &:hover{
   background-color: #ffd22e; 
 }
`;

export const DeleteIcon = styled.button`
 color: white;
 width: 80px;
 height: 30px;
 background-color: #ff081c;
 margin-top: 5px;
 padding: 5px;
 border: none;
 border-radius: 5px;
 outline: #6fb3ff;
 
 &:hover{
   background-color: #ff5628;
 }
`;

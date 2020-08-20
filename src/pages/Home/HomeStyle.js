import styled from "styled-components";

export const HomeDiv = styled.div`
    width: 60%;
    margin: 5% 15%;
    transform: translate(30%, 0);
`;

export const FormDiv = styled.form`
  display: flex;
  flex-direction: row;
  margin: 0 10px;
`;

export const FormButton = styled.button`
  width: 120px;
  height: 44px;
  padding: 5px;
  margin-left: 10px;
  background-color: #0e7eff;
  border-radius: 5px;
  color: white;
  border: none;
  
  &:hover {
     background-color: #18abff;
  }
`;

import styled from "styled-components";
import {Link} from "react-router-dom";

export const MainSide = styled.div`
  width: 80%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  margin: 0 10%;
  padding: 10px;
`;

export const Header = styled.div`
  width: 70%;
`;

export const Sider = styled.div`
  
`;

export const List = styled.ul`
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  text-decoration: none;
  list-style: none;
  margin-left: 10px;  
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
  
  &:hover{
    color: red;
  }
`;

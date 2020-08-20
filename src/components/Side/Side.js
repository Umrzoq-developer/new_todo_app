import React from "react";
import {Header, LinkItem, List, ListItem, MainSide, Sider} from "./SideStyle";


const Side = () => {
    return(
        <MainSide>
            {/*header*/}
            <Header>
                <h2>My own Todo application</h2>
            </Header>
            <Sider>
                <List>
                    <ListItem><LinkItem to='/'>All</LinkItem></ListItem>
                    <ListItem><LinkItem to='/done'>Done</LinkItem></ListItem>
                    <ListItem><LinkItem to='/undone'>Undone</LinkItem></ListItem>
                </List>
            </Sider>
        </MainSide>
    )
};


export default Side

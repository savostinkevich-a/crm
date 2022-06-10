import React from 'react';
import './App.css';

import {Layout, Row} from 'antd';
import AppRouter from "./router/router";
import HeaderMenuContainer from "./components/HeaderMenu/HeaderMenuContainer";
const {Header, Content, Footer} = Layout;

function App() {
    return (
        <Layout className="layout">
            <Header>
                <Row justify={"space-between"}>
                    <div className="logo"/>
                    <HeaderMenuContainer/>
                </Row>

            </Header>
            <Content style={{padding: '0 50px', marginTop: 50}}>
                <div className="site-layout-content">
                    <AppRouter/>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default App;



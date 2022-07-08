import React from 'react';
import './App.css';

import {Layout} from 'antd';
import SiteHeader from "./layout/SiteHeader/SiteHeader";
import SiteFooter from "./layout/SiteFooter/SiteFooter";
import AppRouter from "./router/AppRouter";

function App() {

    return (
        <Layout>
            <SiteHeader/>
            <Layout className="site-layout">
                <AppRouter/>
            </Layout>
            <SiteFooter/>
        </Layout>
    );
}

export default App;



import React from 'react';
import {Layout} from "antd";
import TaskList from "../../components/Task/List/TaskList";

const DashboardPage = () => {
    return (
        <Layout.Content className="site-layout-content">
            <div>
                <TaskList/>
            </div>
        </Layout.Content>
    );
};

export default DashboardPage;
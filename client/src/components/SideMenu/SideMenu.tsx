import React from 'react';
import {
    AppstoreOutlined,
    CalendarOutlined,
    MailOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import {Menu} from "antd";
import createMenuItem, {MenuItem} from "../../helpers/createMenuItem";

const items: Array<MenuItem> = [
    createMenuItem('Navigation One', '1', <MailOutlined/>),
    createMenuItem('Navigation Two', '2', <CalendarOutlined/>),
    createMenuItem('Navigation Two', 'sub1', <AppstoreOutlined/>, [
        createMenuItem('Option 3', '3'),
        createMenuItem('Option 4', '4'),
        createMenuItem('Submenu', 'sub1-2', null, [
            createMenuItem('Option 5', '5'),
            createMenuItem('Option 6', '6')
        ]),
    ]),
    createMenuItem('Navigation Three', 'sub2', <SettingOutlined />, [
        createMenuItem('Option 7', '7'),
        createMenuItem('Option 8', '8'),
        createMenuItem('Option 9', '9'),
        createMenuItem('Option 10', '10'),
    ]),
]

const SideMenu = () => {


    return (
        <Menu

            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode={"inline"}
            theme={"light"}
            items={items}
        >

        </Menu>
    );
};

export default SideMenu;
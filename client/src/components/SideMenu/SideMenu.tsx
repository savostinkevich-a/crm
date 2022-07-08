import React from 'react';
import {
    CalendarOutlined,
    MailOutlined,
} from '@ant-design/icons';
import {Menu} from "antd";
import createMenuItem, {MenuItem} from "../../helpers/createMenuItem";
import {Link} from "react-router-dom";

const items: Array<MenuItem> = [
    createMenuItem('Tasks', '1', <Link to={"/dashboard"}><CalendarOutlined/></Link>),
    createMenuItem('Chat', '2', <Link to={"/chat"}><MailOutlined/></Link>),
    // createMenuItem('Navigation Two', 'sub1', <AppstoreOutlined/>, [
    //     createMenuItem('Option 3', '3'),
    //     createMenuItem('Option 4', '4'),
    //     createMenuItem('Submenu', 'sub1-2', null, [
    //         createMenuItem('Option 5', '5'),
    //         createMenuItem('Option 6', '6')
    //     ]),
    // ]),
    // createMenuItem('Navigation Three', 'sub2', <SettingOutlined />, [
    //     createMenuItem('Option 7', '7'),
    //     createMenuItem('Option 8', '8'),
    //     createMenuItem('Option 9', '9'),
    //     createMenuItem('Option 10', '10'),
    // ]),
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
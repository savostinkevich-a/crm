import React, {FC} from 'react';
import {Avatar, Layout, Menu, Row} from "antd";
import {useAppSelector} from "../../hooks/useAppSelector";

const SiteHeader: FC = () => {

    const user = useAppSelector(state => state.auth.user)

    return (
        <Layout.Header>
            <Menu theme={"dark"} mode={"horizontal"}>
                {
                    user._id &&
                    <Menu.Item style={{marginLeft: "auto"}}>
                        <Avatar>
                            {user.firstName && user.firstName[0]}
                            {user.lastName && user.lastName[0]}
                        </Avatar>
                    </Menu.Item>
                }
            </Menu>


        </Layout.Header>
    );
};

export default SiteHeader;
import React from 'react';
import IUser from "../../models/IUser";
import {Avatar, Menu} from "antd";

interface HeaderMenuProps {
    user: IUser
    isAuth: boolean
    logout: () => void
}

const HeaderMenu = (props: HeaderMenuProps) => {
    return (
        <>
            <Menu theme={'dark'} mode={"horizontal"} selectable={false}>
                {
                    props.user._id ?
                        <>
                            <Menu.Item key={1}>
                                        <span style={{marginRight: 16, fontWeight: "bold", color: "white"}}>
                                            {props.user.login}
                                        </span>

                                <Avatar style={{
                                    verticalAlign: "middle",
                                    textTransform: "uppercase",
                                    background: "lightcoral"
                                }}>
                                    {props.user.login[0]}
                                </Avatar>
                            </Menu.Item>
                            <Menu.Item onClick={props.logout}>
                                Sign out
                            </Menu.Item>
                        </>
                        :
                        <>
                            <Menu.Item>
                                Sign in
                            </Menu.Item>
                            <Menu.Item>
                                Sign up
                            </Menu.Item>
                        </>
                }
            </Menu>
        </>
    );
};

export default HeaderMenu;
import React, {useEffect} from 'react';
import {useAppDispatch} from "../../../hooks/useAppDispatch";
import ChatThunks from "../../../redux/chat/thunks";
import {useAppSelector} from "../../../hooks/useAppSelector";
import {Avatar, List} from "antd";
import moment from "moment";

const ChatList = () => {

    const dispatch = useAppDispatch()
    const userList = useAppSelector(state => state.chat.users)
    console.log(userList)

    useEffect(() => {
        dispatch(ChatThunks.getChatUserList())
    }, [])

    return (
        <List
            itemLayout="horizontal"
            dataSource={userList}
            renderItem={user => (
                <List.Item
                    extra={[
                        `${moment().calendar()}`
                    ]}
                >
                    <List.Item.Meta
                        avatar={<Avatar>
                            {user.firstName && user.firstName[0]}
                            {user.lastName && user.lastName[0]}
                        </Avatar>}
                        title={user.firstName + " " + user.lastName}
                        description="Last message"
                    />
                </List.Item>
            )}
        />
    );
};

export default ChatList;
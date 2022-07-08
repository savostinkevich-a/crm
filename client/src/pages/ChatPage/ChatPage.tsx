import React from 'react';
import {Layout} from "antd";
import ChatList from "../../components/Chat/List/ChatList";

const ChatPage = () => {
    return (
        <Layout.Content className="site-layout-content">
            <div>
                <ChatList/>
            </div>
        </Layout.Content>
    );
};

export default ChatPage;
import type {MenuProps} from 'antd/es/menu';
import React from "react";

export type MenuItem = Required<MenuProps>['items'][number];

const createMenuItem = (
    label: React.ReactNode, key?: React.Key | null,
    icon?: React.ReactNode, children?: MenuItem[],
): MenuItem => {
    return {key, icon, children, label,} as MenuItem;
}

export default createMenuItem
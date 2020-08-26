import styled from 'styled-components';

import { Menu } from 'antd';

export const Brand = styled.div`
    font-family: 'Berkshire Swash', cursive;
    text-align: left;
    font-size: 26px;
`;

export const MenuItem = styled(Menu.Item)`
    cursor: pointer;

    border-bottom: none !important;
`;

export const RightMenuItem = styled(MenuItem)`
    float: right !important;
`;

export const Img = styled.img`
    margin-right: 15px;
    margin-bottom: 6px;
`;

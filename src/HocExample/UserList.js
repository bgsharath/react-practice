import React from 'react';
import HOC from './HOC';

function UserList({ dataList }) {
    return (
        <div>
            {dataList.map((item) => (
                <div>{item.name}</div>
            ))}
        </div>
    );
}
const WrapHocWithUserList = HOC(UserList, "users");

export default WrapHocWithUserList;
import React from 'react';
import WrapHocWithTodoList from './TodoList';
import WrapHocWithUserList from './UserList';

function HocComponent() {
    return (
        <div style={{ display: 'flex' }}>
            <WrapHocWithTodoList />
            <WrapHocWithUserList />
        </div>
    );
}

export default HocComponent;
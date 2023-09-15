import React from 'react';
import HOC from './HOC';

function TodoList({ dataList }) {
    return (
        <div>
            {dataList.slice(0, 10).map((item) => (
                <div>{item.title}</div>
            ))}
        </div>
    );
}

const WrapHocWithTodoList = HOC(TodoList, "todos");

export default WrapHocWithTodoList;
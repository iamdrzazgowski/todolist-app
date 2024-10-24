import TodoItem from './TodoItem';

function TodoList({ items, delItem }) {
    console.log(items);
    return (
        <div className='todolist-container'>
            <ul className='todolist'>
                {items.map((item) => (
                    <TodoItem item={item} key={item.id} delItem={delItem} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

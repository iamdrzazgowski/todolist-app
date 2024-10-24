function TodoItem({ item, delItem }) {
    return (
        <li>
            <div className='todo-item'>
                <p className={`item-text ${item.disable ? 'disable' : ''}`}>
                    {item.text}
                </p>
                <button className='del-item' onClick={() => delItem(item.id)}>
                    X
                </button>
            </div>
        </li>
    );
}

export default TodoItem;

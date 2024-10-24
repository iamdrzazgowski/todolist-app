import { useState } from 'react';

function TodoForm({ addItem }) {
    const [newItem, setNewItem] = useState('');

    const handleItem = (e) => {
        e.preventDefault();

        if (newItem === '') return;

        addItem(newItem);
        setNewItem('');
    };

    return (
        <form onSubmit={handleItem} action='#' className='todo-form'>
            <input
                type='text'
                className='todo-input'
                placeholder='Add a new todo'
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button className='add-item'>Add</button>
        </form>
    );
}

export default TodoForm;

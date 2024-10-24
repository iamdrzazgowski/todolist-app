import { useEffect, useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './assets/styles/style.css';

function App() {
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('todo') || '[]');
    });

    const addItem = (title: string) => {
        const updatedItems = [
            ...todos,
            { id: crypto.randomUUID(), text: title, disable: false },
        ];

        localStorage.setItem('todo', JSON.stringify(updatedItems));
        setTodos(updatedItems);
    };

    const delItem = (id: string | number) => {
        localStorage.setItem('todo', JSON.stringify(todos));

        const updatedItems = todos.filter((item) => item.id !== id);

        localStorage.setItem('todo', JSON.stringify(updatedItems));
        setTodos(updatedItems);
    };

    return (
        <main className='todo'>
            <div className='todo-header'>
                <h1>Todo List</h1>

                <TodoForm addItem={addItem} />
            </div>
            <TodoList items={todos} delItem={delItem} />
        </main>
    );
}

export default App;

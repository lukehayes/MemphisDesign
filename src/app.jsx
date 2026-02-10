import { useState } from 'preact/hooks';
import {signal } from '@preact/signals';
import preactLogo from './assets/preact.svg';
import viteLogo from '/vite.svg';
import Tag from './Components/Tag';
import Container from './Components/Container';
import TopBar from './Components/TopBar.jsx';
import './app.css';

const todos = signal([
	{text: 'I am awesome' },
	{text: 'I am even more awesome!' },
	{text: 'Damn I\'m good!' },
]);

const todoCount = signal(todos.value.length);

const text = signal('');

function TodoItem(props)
{
	return (
		<li class='bg-zinc-100 p-4 my-2'>
			<p onClick={removeTodo}>{props.text} </p>
		</li>
	)
}

function List()
{
	const items = todos.value.map( (item) => <TodoItem text={item.text} /> );
	return(
		<div>{items}</div>
	)
}

function TodoList()
{
	const onInput = event => (text.value = event.currentTarget.value);

	return(
		<div>
			<h2>TODO LIST: ({todos.value.length})</h2>
			<input value={text.value} onInput={onInput} class='border'/>
			<button onclick={addTodo} class='bg-zinc-200 rounded p-2'>Add Todo</button>
			<ul>
				<List/>
			</ul>
		</div>
	)

}

function addTodo()
{
	console.log("Adding New Todo...");
	if(text.value != '')
	{
		todos.value = [...todos.value, {text: text.value }];
		text.value = '';
	}
}

function removeTodo(todo)
{
	console.log("Removing ", todo);
	todos.value = todos.value.map(t => { console.log(t,t !== todo ) });
}

console.log(todos, todos.value);

text.value = 'I build the most awesome software!!!';


addTodo();
removeTodo('I am awesome');

console.log("After");
console.log(todos, todos.value);
console.log(text, text.value);


export function App()
{
	return (
		<div class='container mx-auto'>
			<TodoList/>
		</div>
	)
}

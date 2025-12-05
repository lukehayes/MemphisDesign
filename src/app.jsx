import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import Tag from './tag'
import './app.css'



function Header(props)
{
	let name = 'Test Name Not Prop';


	return (
		<div class='container mx-auto'>
			<h1 class='px-4 py-2 bg-zinc-200 my-8 rounded-lg text-zinc-800 font-bold'>{props.text}</h1>
			<Tag text='React Component' />
		</div>
	)
}


export function App()
{
	return (
		<div>
			<Header text='Hello' />
			<Header text='Hallo' />
			<Header text='Gutentarg' />
			<Header text='Bounjour' />
		</div>
	)
}




export function Appp() {
	const [count, setCount] = useState(0)

	return (
		<>
			<h1>Elite Developer</h1>


			<div class="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
			</div>

		</>
	)
}

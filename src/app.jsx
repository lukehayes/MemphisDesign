import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import Tag from './tag'
import './app.css'

function Element(props)
{
	let name = 'Test Name Not Prop';

	return (
		<div class='container mx-auto'>
			<h1 class='px-4 py-2 bg-zinc-200 my-8 rounded-lg text-zinc-800 font-bold'>{props.text}</h1>
			<Tag text='PREeact Component' />
		</div>
	)
}

export function App()
{
	return (
		<div>
			<Element text='Hello' />
		</div>
	)
}

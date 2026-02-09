import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import Tag from './Components/Tag'
import Container from './Components/Container'
import TopBar from './Components/TopBar.jsx'
import './app.css'

export function App()
{
	return (
		<div>
			<TopBar />
			<Container>
			</Container>
		</div>
	)
}

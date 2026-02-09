import Container from './Container'
import NavLink from './Nav/NavLink.jsx'

function TopBar(props)
{
	return(
		<div class='bg-white border-b border-zinc-100 py-4'>
			<Container>
				<div class='flex flex-row justify-between'>
					<h2 class='font-bold'>Memphis Designer</h2>
					<nav class='' >
						<NavLink text='New' />
						<NavLink text='View Creations' />
						<NavLink text='Saved Palettes' />
					</nav>
				</div>
			</Container>
		</div>
	)
}

export default TopBar;

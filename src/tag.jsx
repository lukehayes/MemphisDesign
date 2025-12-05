import { useState } from 'preact/hooks'

function Tag(props)
{

	const [color, setColor] = useState('#00FFFF');

	return(
		<div class='text-sm rouned-md flex flex-col ' style='background-color: {color}; ' >
		<p class='p-4 flex flex-row text-normal' style='background-color: {{ color }};'>{props.text}</p>

		<button onClick={() => setColor((color) => '#F00F0F')}>
			color is {color}
		</button>


		</div>
	)
}

export default Tag;

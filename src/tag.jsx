
function Tag(props)
{

	const color = '#ff00ff';

	return(
		<div class='text-sm rouned-md flex flex-col ' style='background-color: {color}; ' >
		<p class='flex flex-row bg-orange-400 text-normal'>{props.text}</p>
			<p>{ color }</p>

			<input type="range" class='' />

		</div>
	)
}

export default Tag;

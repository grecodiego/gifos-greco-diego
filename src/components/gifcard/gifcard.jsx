import './gifcard.scss'

export function GifCard(props) {
	return (
		<div className='gifCard'>
			<img
				className='gifImg'
				src={props.gifurl}
				alt='gif'
				height='auto'
				width='100%'
			/>
		</div>
	)
}

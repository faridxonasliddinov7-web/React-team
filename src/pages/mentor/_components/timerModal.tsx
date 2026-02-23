interface IProps {
	onClose: () => void
	second: number
}

const TimerModal = ({ onClose, second }: IProps) => {
	return (
		<div className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2  w-1/3 h-1/3 border-2 rounded-2xl bg-teal-400 flex items-center justify-center '>
			<button
				onClick={() => onClose()}
				className='absolute top-0 right-1 rounded-sm border-2 py-2 px-1 m-1 bg-amber-500'
			>
				Yopish
			</button>
			<h1 className='text-2xl'>{second}sekund vaqt qoldi</h1>
		</div>
	)
}

export default TimerModal

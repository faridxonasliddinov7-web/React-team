import StudentList from './student-list'

interface IModalProps {
	onClose: () => void
}

function Modal({ onClose }: IModalProps) {
	return (
		<div className='absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2  w-1/3 h-1/3 border-2 rounded-2xl bg-sky-400 flex items-center justify-center'>
			<StudentList />
			<button
				onClick={onClose}
				className='absolute right-0 top-0 border-2 bg-amber-500 m-2 px-4 py-2 rounded-xl'
			>
				Close
			</button>
		</div>
	)
}
export default Modal

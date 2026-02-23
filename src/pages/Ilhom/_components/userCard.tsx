// interface ICard {
// 	firstname: string
// 	lastname: string
// 	age: number
// 	phone: string
// 	email: string
// 	isStudent: 'Mentor' | 'Student'
// 	imageUrl: string
// }

// import { useEffect, useState } from 'react'

// export default function TimerModal() {
// 	const [isOpen, setIsOpen] = useState(false)
// 	const [openCount, setOpenCount] = useState<number>(0)
// 	const [timer, setTimer] = useState<number>(10)

// 	useEffect(() => {
// 		let interval: number

// 		if (isOpen) {
// 			setOpenCount(prev => prev + 1)
// 			setTimer(10)
// 			document.body.style.backgroundColor = '#f0f8ff'

// 			interval = setInterval(() => {
// 				setTimer(prev => prev - 1)
// 			}, 1000)

// 			console.log('Modal ochildi')
// 		} else {
// 			document.body.style.backgroundColor = '#fff'
// 			console.log('Modal yopildi')
// 		}

// 		return () => {
// 			clearInterval(interval)
// 		}
// 	}, [isOpen])

// 	useEffect(() => {
// 		if (timer === 0 && isOpen) {
// 			const audio = new Audio('/alarm.mp3')
// 			audio.play()
// 			console.log('Vaqt tugadi! Audio aytadi')
// 		}
// 	}, [timer, isOpen])

// 	return (
// 		<div className='p-10'>
// 			<button
// 				className='px-4 py-2 bg-blue-500 text-white rounded'
// 				onClick={() => setIsOpen(true)}
// 			>
// 				Modalni och
// 			</button>

// 			<p className='mt-4'>Modal ochilishlar soni: {openCount}</p>

// 			{isOpen && (
// 				<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
// 					<div className='bg-white p-6 rounded shadow-md w-80 text-center'>
// 						<h2 className='text-xl font-bold mb-4'>Timer Modal</h2>
// 						<p className='text-2xl font-mono mb-4'>{timer} soniya qoldi</p>
// 						<button
// 							className='px-4 py-2 bg-red-500 text-white rounded'
// 							onClick={() => setIsOpen(false)}
// 						>
// 							Yopish
// 						</button>
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	)
// }

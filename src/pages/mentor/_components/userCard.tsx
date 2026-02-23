import { Mail, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '../../../components/ui/button'
import LikeDisplay from './LikeDisplay'
import Modal from './modal'
import TimerModal from './timerModal'

interface ICard {
	firstname: string
	lastname: string
	age: number
	phone: string
	email: string
	isStudent: 'Mentor' | 'Student'
	imageUrl: string
}

function UserCard({
	age,
	firstname,
	imageUrl,
	lastname,
	email,
	phone,
	isStudent,
}: ICard) {
	const isMentor = isStudent === 'Mentor'
	const [open, setOpen] = useState(false)
	const [timerModalOpen, setTimerModalOpen] = useState<boolean>(false)
	const [timer, setTimer] = useState<number>(15)
	const audio = new Audio('/audio.wav')
	const audio10 = new Audio('/audio10.wav')

	useEffect(() => {
		let interval: number
		if (timerModalOpen) {
			interval = setInterval(() => {
				setTimer(oldingi => {
					if (oldingi === 10) {
						audio10.play()
						return oldingi - 1
					} else if (oldingi <= 0) {
						clearInterval(interval)
						audio.play()
						return 0
					}
					return oldingi - 1
				})
			}, 1000)
		}

		return () => {
			clearInterval(interval)
		}
	}, [timerModalOpen])

	return (
		<div className='max-w-sm mx-auto  bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300'>
			<div className='relative '>
				{/* Background gradient based on role */}
				<div
					className={`h-2 ${isMentor ? 'bg-linear-to-r from-blue-500 to-purple-600' : 'bg-linear-to-r from-green-400 to-teal-500'}`}
				></div>

				{/* Profile image and basic info */}
				<div className='flex flex-col items-center p-6 -mt-4'>
					<div className='relative'>
						<img
							src={imageUrl}
							alt={`${firstname} ${lastname}`}
							className='w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover'
						/>
						{/* Role badge */}
						<div
							className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white text-sm font-semibold shadow-md ${isMentor ? 'bg-blue-600' : 'bg-green-500'}`}
						>
							{isStudent}
						</div>
					</div>

					{/* Name and age */}
					<div className='mt-8 text-center'>
						<h2 className='text-2xl font-bold text-gray-800'>
							{firstname} {lastname}
						</h2>
						<p className='text-gray-600 mt-1'>{age} years old</p>
					</div>
				</div>
			</div>

			{/* Contact information */}
			<div className='px-6 pb-6'>
				<div className='space-y-4'>
					{/* Email */}
					<div className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'>
						<div className='shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center'>
							<Mail />
						</div>
						<div className='flex-1 min-w-0'>
							<p className='text-sm font-medium text-gray-900'>Email</p>
							<a
								href={`mailto:${email}`}
								className='text-sm text-blue-600 hover:text-blue-800 truncate block'
							>
								{email}
							</a>
						</div>
					</div>

					{/* Phone */}
					<div className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors'>
						<div className='shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center'>
							<Phone />
						</div>
						<div className='flex-1 min-w-0'>
							<p className='text-sm font-medium text-gray-900'>Phone</p>
							<a
								href={`tel:${phone}`}
								className='text-sm text-green-600 hover:text-green-800'
							>
								{phone}
							</a>
						</div>
					</div>
				</div>

				{/* Action buttons */}
				<div className='mt-6 flex space-x-3'>
					<button
						className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${isMentor ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-500 hover:bg-green-600'} text-white`}
						onClick={() => setOpen(true)}
					>
						My Friends
					</button>
					{open && <Modal onClose={() => setOpen(false)} />}
					<button
						className='flex-1 py-3 px-4 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors'
						onClick={() => setTimerModalOpen(true)}
					>
						View Profile
					</button>
					{timerModalOpen && (
						<TimerModal
							onClose={() => setTimerModalOpen(false)}
							second={timer}
						/>
					)}
				</div>
			</div>
			<div className='flex flex-col justify-center items-center px-6 pb-6'>
				<LikeDisplay />
			</div>
			<div>
				<Button>Tugma</Button>
			</div>
		</div>
	)
}

export default UserCard

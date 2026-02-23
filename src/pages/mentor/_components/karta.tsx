import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	title: string
	icon: string
}

const Karta = ({ children, icon, title }: Props) => {
	return (
		<>
			<section className='relative shadow-2xl ring-1 rounded-2xl w-90 h-100 bg-gray-400 hover:bg-teal-300 transition-all duration-1000'>
				<h1 className='absolute top-[50%] left-7'>{title}</h1>
				<p className='text-green-500'>{icon}</p>
				<button className='bg-amber-400 rounded-3xl py-2 px-3 ring-1'>
					{children}
				</button>
			</section>
		</>
	)
}

export default Karta

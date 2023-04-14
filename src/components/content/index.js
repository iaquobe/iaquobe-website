import Image from 'next/image';
import Link from 'next/link';

export const Content = ({ title="$title", banner='/images/banners/shika.gif', content }) => {
	return (
		<>
		<div className="w-[50%] min-w-[800px] bg-powderblue text-purple">
		<h1>{title}</h1>
		<img src={banner} className='w-full' alt='banner'/>
		hello this it the content page: 
		{content}
		</div>
		</>
	)
}

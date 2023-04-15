
export const EOF = ({gif='/eof/statue4.gif'}) => {
	return (
		<>
		<div className="flex flex-row justify-center p-8">
			<img src={gif} width='10%' className="-rotate-6"/>
			<div className="flex font-p2p text-4xl items-center p-4">
				EOF
			</div>
			<img src={gif} width='10%' className='rotate-6 rotate -scale-x-100'/>
		</div>
		</>
	)
}


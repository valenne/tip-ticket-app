import DollarIcon from './icons/DollarIcon';

function calculateTotalAndTipToPerson({
	bill,
	countPersons,
	tip
}: {
	bill: number;
	tip: number;
	countPersons: number;
}) {
	if (!bill && !countPersons && !tip) {
		return {
			totalToPerson: '0.00',
			tipToPerson: '0.00'
		};
	}

	if (bill && countPersons && tip) {
		return {
			totalToPerson: ((bill * (1 + tip / 100)) / countPersons).toFixed(2),
			tipToPerson: ((bill * (1 + tip / 100) - bill) / countPersons).toFixed(2)
		};
	}

	return {
		totalToPerson: '0.00',
		tipToPerson: '0.00'
	};
}

function ResultsBox({
	bill,
	tip,
	countPersons,
	onClickReset
}: {
	bill: number;
	tip: number;
	countPersons: number;
	onClickReset: any;
}) {
	const { tipToPerson, totalToPerson } = calculateTotalAndTipToPerson({ bill, tip, countPersons });

	return (
		<div className='flex flex-col gap-5 bg-[#00494D] p-8 rounded-2xl'>
			<div className='flex flex-row gap-2 justify-between'>
				<div className='w-full flex flex-col gap-1 '>
					<p className='text-[#FFFFFF]'>Tip Amount</p>
					<p className='text-[#7F9C9F] text-sm'>/ person</p>
				</div>
				<div className='w-full h-full text-right flex flex-row gap-1 justify-end text-[#26C0AB] place-items-center'>
					<i className='block'>
						<DollarIcon
							color='#26C0AB'
							scale='scale-[1.3]'
						/>
					</i>
					<span className='block text-4xl font-bold '>{tipToPerson ? tipToPerson : '0.00'}</span>
				</div>
			</div>
			<div className='flex flex-row gap-2 justify-between'>
				<div className='w-full flex flex-col gap-1 '>
					<p className='text-[#FFFFFF]'>Total</p>
					<p className='text-[#7F9C9F] text-sm'>/ person</p>
				</div>
				<div className='w-full h-full text-right flex flex-row gap-1 justify-end text-[#26C0AB] place-items-center'>
					<i className='block'>
						<DollarIcon
							color='#26C0AB'
							scale='scale-[1.3]'
						/>
					</i>
					<span className='block text-4xl font-bold '>
						{totalToPerson ? totalToPerson : '0.00'}
					</span>
				</div>
			</div>
			<div className='w-full text-center  -tracking-tighter'>
				<button
					onClick={onClickReset}
					className='w-full h-full p-4  text-[#00494D] uppercase text-2xl font-extrabold cursor-pointer bg-[#26C0AB] hover:bg-[#C5E4E7] transition-colors duration-150 ease-in rounded-lg'>
					Reset
				</button>
			</div>
		</div>
	);
}

export default ResultsBox;

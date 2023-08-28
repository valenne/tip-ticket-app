'use client';
import DollarIcon from './icons/DollarIcon';
import PersonIcon from './icons/PersonIcon';

type InputProps = {
	id: string;
	parameters?: 'bill' | 'people';
	type: 'button' | 'number';
	label?: string;
	value?: string;
	getBill?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	getTip?: ((e: React.MouseEvent<HTMLElement>) => void) | undefined;
	getPeople?: ((e: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
	onClick?: any;
	isActive?: boolean;
};

export function ReactInput({ label, id, parameters, type, getBill, getPeople }: InputProps) {
	return (
		<div
			id={`${id}input`}
			className='w-full flex flex-col gap-2 font-bold text-lg'>
			<label>{label}</label>
			<div className='w-full relative'>
				<i className='w-fit h-fit absolute top-0 translate-y-3 translate-x-3 z-10 font-bold'>
					{parameters === 'bill' && <DollarIcon />}
					{parameters === 'people' && <PersonIcon />}
				</i>
				<input
					className=' min-w-full bg-[#F4FAFA] dark:bg-[#637274] dark:text-[#C5E4E7] text-2xl font-extrabold text-right tracking-wide text-[#00494D] py-2 px-4 rounded-lg caret-[#26C0AB] dark:caret-[#C5E4E7] focus:outline-[#26C0AB] dark:outline-[#C5E4E7]'
					type={type}
					onChange={parameters === 'bill' ? getBill : getPeople}
				/>
			</div>
		</div>
	);
}

export function ReactInputTip({
	id,
	type,
	value,
	getTip,
	onClick,
	isActive
}: Pick<InputProps, 'id' | 'type' | 'value' | 'getTip' | 'onClick' | 'isActive'>) {
	return (
		<div
			className={`w-full rounded-lg cursor-pointer  transition-all duration-150 ease-in ${
				isActive ? 'bg-[#26C0AB]' : 'bg-[#00494D] dark:bg-[#94ABAD]'
			}`}
			key={value}
			id={id}
			onClick={onClick}>
			<span
				className={`inputTip w-full block text-2xl font-extrabold text-center text-centertracking-wide text-[#FFFFFF] dark:text-[#000] p-4  caret-[#26C0AB] `}
				aria-valuetext={type === 'button' ? value : ''}
				onClick={getTip}>
				{value}
			</span>
		</div>
	);
}

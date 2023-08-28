'use client';
import { ReactInput, ReactInputTip } from '../components/ReactInput';
import ResultsBox from '../components/ResultsBox';
import { useGetTicket } from '../hooks/useGetTicket';

export default function Home() {
	const {
		handleChangeBillToPay,
		handleSavedPersons,
		handleSelectOnClickTip,
		isTipId,
		resetTicket,
		ticket,
		setIsTipId,
		tipsArray
	} = useGetTicket();

	return (
		<section
			id='section-form'
			className='mx-5 grid place-content-center h-screen'>
			<div className='w-full my-10 relative'>
				<h1 className='text-3xl font-extrabold text-center uppercase dark:text-[#C5E4E7]'>
					Tip Calculator 💁‍♂️
				</h1>
			</div>
			<div className='bg-[#FFFFFF] dark:bg-[#31393A] dark:text-[#C5E4E7] rounded-2xl p-8 text-[#5E7A7D]'>
				<form>
					<div className='mb-10'>
						<ReactInput
							id='bill'
							parameters='bill'
							type='number'
							label='Bill'
							getBill={handleChangeBillToPay}
						/>
					</div>
					<div className='flex flex-col gap-2 w-full'>
						<label>Select Tip %</label>
						<div className='grid grid-cols-2 lg:grid-cols-3 gap-4'>
							{tipsArray.map((tip) => (
								<div key={`key-${tip}`}>
									<ReactInputTip
										id={tip}
										type='button'
										value={tip}
										getTip={handleSelectOnClickTip}
										onClick={() => setIsTipId(tip)}
										isActive={tip === isTipId}
									/>
								</div>
							))}
							<div className='w-full font-bold text-lg text-center py-2 mb-10'>
								<input
									type='number'
									placeholder='Custom'
									className='w-full text-right bg-[#F4FAFA] dark:bg-[#637274] dark:text-[#C5E4E7] text-2xl font-extrabold text-centertracking-wide text-[#00494D] p-4 rounded-lg transition-colors duration-150 ease-in caret-[#26C0AB] dark:caret-[#C5E4E7] focus:outline-[#26C0AB] dark:outline-[#C5E4E7] dark:placeholder:text-[#C5E4E7] dark:placeholder:opacity-40'
									onChange={handleSelectOnClickTip}
								/>
							</div>
						</div>

						<div className='mb-10'>
							<ReactInput
								id='people'
								parameters='people'
								label='Number of People'
								type='number'
								getPeople={handleSavedPersons}
							/>
						</div>
					</div>
				</form>
				<section id='section-results'>
					<ResultsBox
						bill={ticket.bill}
						tip={ticket.tip}
						countPersons={ticket.countPersons}
						onClickReset={() => resetTicket()}
					/>
				</section>
			</div>
		</section>
	);
}

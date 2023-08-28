import React, { useState } from 'react';
import { Tips } from '../types/constans/main-constanst';

export function useGetTicket() {
	const tips = Tips;
	const tipsArray = Object.values(tips);

	const [ticket, setTicket] = useState<{ bill: number; tip: number; countPersons: number }>({
		bill: 0,
		tip: 0,
		countPersons: 0
	});
	const [isTipId, setIsTipId] = useState<string>('');

	const handleChangeBillToPay = (e: React.ChangeEvent<HTMLInputElement>) => {
		const billToPay = Number(e.target.value);
		setTicket({ ...ticket, bill: billToPay });
	};

	const handleSelectOnClickTip = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const selectedTip =
			Number(e.currentTarget.textContent?.replace('%', '')) ||
			Number(e.target.value.replace('%', ''));

		setTicket({ ...ticket, tip: selectedTip });
	};

	const handleSavedPersons = (e: React.ChangeEvent<HTMLInputElement>) => {
		const personsToDivideBill = Number(e.target.value);
		setTicket({ ...ticket, countPersons: personsToDivideBill });
	};

	const resetTicket = () => {
		setTicket({ bill: 0, countPersons: 0, tip: 0 });
		setIsTipId('');
		window.location.reload();
	};

	return {
		isTipId,
		handleChangeBillToPay,
		handleSelectOnClickTip,
		handleSavedPersons,
		resetTicket,
		ticket,
		setIsTipId,
		tipsArray
	};
}

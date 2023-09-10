import dayjs from 'dayjs';

export const formatDate = (date: Date | null) => {
	return `${dayjs(date).format('DD/MM/YYYY')}`;
};

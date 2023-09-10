import { Button } from '@material-ui/core';

type ButtonProps = {
	style?: string;
	title: string;
	onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
	fullWidth?: boolean;
};

export default function CustomButton(props: ButtonProps) {
	const { style, title, onClick, fullWidth = false } = props;

	return (
		<Button
			fullWidth={fullWidth}
			variant='contained'
			size='small'
			className={style}
			onClick={onClick}>
			{title}
		</Button>
	);
}

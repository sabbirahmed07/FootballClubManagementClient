import { Typography } from '@material-ui/core';

type TextProps = {
	data: string;
	styles?: string;
};

export default function Text(props: TextProps) {
	return <Typography className={props.styles}>{props.data}</Typography>;
}

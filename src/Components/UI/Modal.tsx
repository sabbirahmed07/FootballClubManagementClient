import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { modalStyles } from '../../styles/Modal';

type ModalProps = {
	open: boolean;
	title: string;
	actions: React.ReactNode;
};

export default function Modal(props: ModalProps) {
	const classes = modalStyles();
	const { open, title, actions } = props;
	return (
		<>
			<Dialog open={open} maxWidth='sm' fullWidth>
				<DialogTitle className={classes.title}>{title}</DialogTitle>

				<DialogActions>{actions}</DialogActions>
			</Dialog>
		</>
	);
}

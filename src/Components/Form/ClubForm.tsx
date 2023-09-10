import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import CustomTextFields from '../UI/TextField';
import CustomDatePicker from '../UI/DatePicker';
import UploadFile from '../UI/Upload';
import { ClubType } from '../../states/clubTypes';
import Submit from './Submit';

import { RootState } from '../../store/reducers';
import { clubActionCreators } from '../../store';

export default function ClubForm() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [club, setClub] = useState<ClubType>({
		_id: '',
		name: '',
		chairman: '',
		clubLogoUrl: [],
		description: '',
		establishedAt: new Date(),
		manager: '',
		owner: '',
		venue: '',
		errors: {},
	});

	const { club: clubState, errors: clubErrors } = useSelector(
		(state: RootState) => state.clubState
	);
	const { createClub, editClub, clearClub } = bindActionCreators(
		clubActionCreators,
		dispatch
	);

	const redirect = () => navigate('/clubs', { replace: true });

	const onSubmit = () => {
		const fd = new FormData();

		fd.append('image', club.clubLogoUrl[0]);
		fd.append('name', club.name);
		fd.append('venue', club.venue);
		fd.append('manager', club.manager);
		fd.append('chairman', club.chairman);
		fd.append('owner', club.owner);
		fd.append('description', club.description);
		fd.append(
			'establishedAt',
			club.establishedAt ? `${club.establishedAt}` : ''
		);

		if (club._id) {
			editClub(club._id, fd, redirect);
		} else {
			createClub(fd, redirect);
		}
	};

	useEffect(() => {
		if (clubState) {
			setClub((prev) => ({
				...prev,
				...clubState,
			}));
		}
		return () => {
			clearClub();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (clubErrors) {
			setClub((prev) => ({
				...prev,
				errors: {
					...prev.errors,
					...clubErrors,
				},
			}));
		}
	}, [clubErrors]);

	return (
		<>
			<Grid container spacing={2} alignItems='center'>
				<Grid item md={4} xs={12} sm={6}>
					<CustomTextFields
						value={club.name}
						label='Club Name'
						onChange={(e) => {
							if (club.errors.name) {
								setClub((prev) => ({
									...prev,
									name: e.target.value,
									errors: {
										...prev.errors,
										name: '',
									},
								}));
							} else {
								setClub((prev) => ({
									...prev,
									name: e.target.value,
								}));
							}
						}}
						error={club.errors.name ? true : false}
						errorText={club.errors.name}
						required={true}
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={6}>
					<CustomDatePicker
						value={club.establishedAt}
						label='Establised Date'
						onChange={(e) => {
							if (club.errors.establishedAt) {
								setClub((prev) => ({
									...prev,
									establishedAt: e,
									errors: {
										...prev.errors,
										establishedAt: '',
									},
								}));
							} else {
								setClub((prev) => ({
									...prev,
									establishedAt: e,
								}));
							}
						}}
						required={true}
						error={club.errors.establishedAt ? true : false}
						errorText={club.errors.establishedAt}
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={6}>
					<CustomTextFields
						value={club.owner}
						label='Owner'
						onChange={(e) => {
							if (club.errors.owner) {
								setClub((prev) => ({
									...prev,
									owner: e.target.value,
									errors: {
										...prev.errors,
										owner: '',
									},
								}));
							} else {
								setClub((prev) => ({
									...prev,
									owner: e.target.value,
								}));
							}
						}}
						error={club.errors.owner ? true : false}
						errorText={club.errors.owner}
						required={true}
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={6}>
					<CustomTextFields
						value={club.chairman}
						label='Chairman'
						onChange={(e) => {
							if (club.errors.chairman) {
								setClub((prev) => ({
									...prev,
									chairman: e.target.value,
									errors: {
										...prev.errors,
										chairman: '',
									},
								}));
							} else {
								setClub((prev) => ({
									...prev,
									chairman: e.target.value,
								}));
							}
						}}
						error={club.errors.chairman ? true : false}
						errorText={club.errors.chairman}
						required={true}
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={6}>
					<CustomTextFields
						value={club.manager}
						label='Manager'
						onChange={(e) => {
							if (club.errors.manager) {
								setClub((prev) => ({
									...prev,
									manager: e.target.value,
									errors: {
										...prev.errors,
										manager: '',
									},
								}));
							} else {
								setClub((prev) => ({
									...prev,
									manager: e.target.value,
								}));
							}
						}}
						error={club.errors.manager ? true : false}
						errorText={club.errors.manager}
						required={true}
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={6}>
					<CustomTextFields
						value={club.venue}
						label='Venue'
						onChange={(e) => {
							if (club.errors.venue) {
								setClub((prev) => ({
									...prev,
									venue: e.target.value,
									errors: {
										...prev.errors,
										venue: '',
									},
								}));
							} else {
								setClub((prev) => ({
									...prev,
									venue: e.target.value,
								}));
							}
						}}
						error={club.errors.venue ? true : false}
						errorText={club.errors.venue}
						required={true}
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={6}>
					<CustomTextFields
						value={club.description}
						label='Moto'
						onChange={(e) => {
							if (club.errors.description) {
								setClub((prev) => ({
									...prev,
									description: e.target.value,
									errors: {
										...prev.errors,
										description: '',
									},
								}));
							} else {
								setClub((prev) => ({
									...prev,
									description: e.target.value,
								}));
							}
						}}
						error={club.errors.description ? true : false}
						errorText={club.errors.description}
						required={true}
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={6}>
					<UploadFile
						onChange={(e: any) => {
							if (club.errors.clubLogoUrl) {
								setClub((prev) => ({
									...prev,
									clubLogoUrl: e.target.files,
									errors: {
										...prev.errors,
										clubLogoUrl: '',
									},
								}));
							} else {
								setClub((prev) => ({
									...prev,
									clubLogoUrl: e.target.files,
								}));
							}
						}}
						error={club.errors.clubLogoUrl ? true : false}
						errorText={club.errors.clubLogoUrl}
					/>
				</Grid>
			</Grid>
			<Submit
				onSubmit={onSubmit}
				onCancel={redirect}
				submitTitle='Submit'
				cancelTitle='Cancel'
			/>
		</>
	);
}

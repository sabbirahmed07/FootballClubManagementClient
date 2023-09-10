import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import CustomTextFields from '../UI/TextField';
import CustomDatePicker from '../UI/DatePicker';
import CustomSelect from '../UI/Select';
import UploadFile from '../UI/Upload';
import { MemberType } from '../../states/memberTypes';
import Submit from './Submit';

import { RootState } from '../../store/reducers';
import { memberActionCreators } from '../../store';

export default function MemberForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [member, setMember] = useState<MemberType>({
		_id: '',
		userName: '',
		firstName: '',
		lastName: '',
		dateOfBirth: new Date(),
		imageUrl: [],
		wage: '',
		clubId: {
			_id: '',
			name: '',
		},
		country: '',
		errors: {},
	});

	const {
		member: memberState,
		errors: memberErrors,
		clubs,
	} = useSelector((state: RootState) => state.memberState);
	const { createMember, editMember } = bindActionCreators(
		memberActionCreators,
		dispatch
	);

	const redirect = () => navigate('/members', { replace: true });

	const onSubmit = () => {
		const fd = new FormData();

		fd.append('image', member.imageUrl[0]);
		fd.append('userName', member.userName);
		fd.append('firstName', member.firstName);
		fd.append('lastName', member.lastName);
		fd.append('wage', member.wage);
		fd.append('clubId', member.clubId._id);
		fd.append('dateOfBirth', `${member.dateOfBirth}`);
		fd.append('country', `${member.country}`);

		if (member._id) {
			editMember(member._id, fd, redirect);
		} else {
			createMember(fd, redirect);
		}
	};

	useEffect(() => {
		if (memberState) {
			setMember((prev) => ({
				...prev,
				...memberState,
			}));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (memberErrors) {
			setMember((prev) => ({
				...prev,
				errors: {
					...prev.errors,
					...memberErrors,
				},
			}));
		}
	}, [memberErrors]);

	return (
		<>
			<Grid container spacing={2} alignItems='center'>
				<Grid item md={4} xs={12} sm={6}>
					<CustomTextFields
						value={member.userName}
						label='Username'
						onChange={(e) => {
							if (member.errors.userName) {
								setMember((prev) => ({
									...prev,
									userName: e.target.value,
									errors: {
										...prev.errors,
										userName: '',
									},
								}));
							} else {
								setMember((prev) => ({
									...prev,
									userName: e.target.value,
								}));
							}
						}}
						error={member.errors.userName ? true : false}
						errorText={member.errors.userName}
						required={true}
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={6}>
					<CustomTextFields
						value={member.firstName}
						label='First Name'
						onChange={(e) => {
							if (member.errors.firstName) {
								setMember((prev) => ({
									...prev,
									firstName: e.target.value,
									errors: {
										...prev.errors,
										firstName: '',
									},
								}));
							} else {
								setMember((prev) => ({
									...prev,
									firstName: e.target.value,
								}));
							}
						}}
						error={member.errors.firstName ? true : false}
						errorText={member.errors.firstName}
						required={true}
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={6}>
					<CustomTextFields
						value={member.lastName}
						label='Last Name'
						onChange={(e) => {
							if (member.errors.lastName) {
								setMember((prev) => ({
									...prev,
									lastName: e.target.value,
									errors: {
										...prev.errors,
										lastName: '',
									},
								}));
							} else {
								setMember((prev) => ({
									...prev,
									lastName: e.target.value,
								}));
							}
						}}
						error={member.errors.lastName ? true : false}
						errorText={member.errors.lastName}
						required={true}
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={6}>
					<CustomDatePicker
						value={member.dateOfBirth}
						label='Date Of Birth'
						onChange={(e) => {
							if (member.errors.dateOfBirth) {
								setMember((prev) => ({
									...prev,
									dateOfBirth: e,
									errors: {
										...prev.errors,
										dateOfBirth: '',
									},
								}));
							} else {
								setMember((prev) => ({
									...prev,
									dateOfBirth: e,
								}));
							}
						}}
						error={member.errors.dateOfBirth ? true : false}
						errorText={member.errors.dateOfBirth}
						required={true}
					/>
				</Grid>

				<Grid item md={4} xs={12} sm={6}>
					<CustomTextFields
						value={member.wage}
						label='Wage'
						onChange={(e) => {
							if (member.errors.wage) {
								setMember((prev) => ({
									...prev,
									wage: e.target.value,
									errors: {
										...prev.errors,
										wage: '',
									},
								}));
							} else {
								setMember((prev) => ({
									...prev,
									wage: e.target.value,
								}));
							}
						}}
						error={member.errors.wage ? true : false}
						errorText={member.errors.wage}
						required={true}
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={6}>
					<CustomTextFields
						value={member.country}
						label='Country'
						onChange={(e) => {
							if (member.errors.country) {
								setMember((prev) => ({
									...prev,
									country: e.target.value,
									errors: {
										...prev.errors,
										country: '',
									},
								}));
							} else {
								setMember((prev) => ({
									...prev,
									country: e.target.value,
								}));
							}
						}}
						error={member.errors.country ? true : false}
						errorText={member.errors.country}
						required={true}
					/>
				</Grid>
				<Grid item md={4} xs={12} sm={6}>
					<CustomSelect
						value={member.clubId.name}
						label='Club'
						onChange={(e) => {
							if (member.errors.clubId) {
								const findClub = clubs.find(
									(item) => item.name === e.target.value
								);
								if (findClub) {
									setMember((prev) => ({
										...prev,
										clubId: {
											...prev.clubId,
											_id: findClub._id,
											name: findClub.name,
										},
										errors: {
											...prev.errors,
											clubId: '',
										},
									}));
								} else {
									setMember((prev) => ({
										...prev,
										clubId: {
											_id: '',
											name: '',
										},
										errors: {
											...prev.errors,
											clubId: '',
										},
									}));
								}
							} else {
								setMember((prev) => ({
									...prev,
									clubId: {
										_id: '',
										name: '',
									},
								}));
							}
						}}
						error={member.errors.clubId ? true : false}
						errorText={member.errors.clubId}
						options={clubs}
						required={true}
					/>
				</Grid>

				<Grid item md={4} xs={12} sm={6}>
					<UploadFile
						onChange={(e: any) => {
							if (member.errors.imageUrl) {
								setMember((prev) => ({
									...prev,
									imageUrl: e.target.files,
									errors: {
										...prev.errors,
										imageUrl: '',
									},
								}));
							} else {
								setMember((prev) => ({
									...prev,
									imageUrl: e.target.files,
								}));
							}
						}}
						error={member.errors.imageUrl ? true : false}
						errorText={member.errors.imageUrl}
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

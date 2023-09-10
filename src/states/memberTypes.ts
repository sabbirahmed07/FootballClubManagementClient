import { Merge } from './mergeTypes';

export type MemberErrorType = {
	userName?: string;
	firstName?: string;
	lastName?: string;
	dateOfBirth?: string;
	wage?: string;
	clubId?: string;
	imageUrl?: string;
	country?: string;
};

export type memberType = {
	_id: string;
	userName: string;
	firstName: string;
	lastName: string;
	dateOfBirth: Date | null;
	wage: string;
	clubId: {
		_id: string;
		name: string;
	};
	country: string;
};

export type MemberType = Merge<
	memberType,
	{
		imageUrl: Blob[];
		errors: MemberErrorType;
	}
>;

export type AllMembers = Merge<
	memberType,
	{
		imageUrl: string;
	}
>;

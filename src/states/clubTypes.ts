import { Merge } from './mergeTypes';
export type ClubErrorType = {
	name?: string;
	owner?: string;
	establishedAt?: string;
	manager?: string;
	venue?: string;
	chairman?: string;
	description?: string;
	clubLogoUrl?: string;
};

export type clubType = {
	_id: string;
	name: string;
	owner: string;
	establishedAt: Date | null;
	manager: string;
	venue: string;
	chairman: string;
	description: string;
};

export type ClubType = Merge<
	clubType,
	{
		clubLogoUrl: Blob[];
		errors: ClubErrorType;
	}
>;

export type AllClubs = Merge<
	clubType,
	{
		clubLogoUrl: string;
	}
>;

export type clubOptions = {
	_id: string;
	name: string;
};

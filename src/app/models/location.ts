export interface Location {
	deparment: string;
	province: string;
	district: string;
}
export interface Department {
	currentCode: string;
	currentName: string;
}
export interface Province {
	currentCode: string;
	currentName: string;
	parentCode: string;
	parentName: string;
}
export interface District {
	currentCode: string;
	currentName: string;
	parentCode: string;
	parentName: string;
}
import { atom } from 'recoil';

const defaultObject = {
	token: '',
	username: '',
};

export const authState = atom({
	key: 'authState',
	default: defaultObject,
});

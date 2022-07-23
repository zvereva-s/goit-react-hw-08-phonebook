
import { createOperation } from 'shared/services/utils/utils';
import {signup, login, logout}  from 'shared/services/API/auth';

export const signupRequest = createOperation('auth/signup', signup);
export const loginRequest = createOperation('auth/login', login);
export const logoutRequest = createOperation('auth/logout', logout);
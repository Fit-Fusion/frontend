import { Role } from '../abstracts/Enum';
import { State } from './types';

const state: State = {
    user: {
        id: 0,
        firstname: '',
        lastname: '',
        email: '',
        phone_number: '',
        date_of_birth: '',
        areas_of_concentration: '',
        weight: '',
        height: '',
        plan_id: '',
        role: Role.client,
        gender: '',
        password: ''
    },
    isLoggedIn: false
}

export default state;
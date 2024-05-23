import { Role } from '../abstracts/Enum';
import { State } from './types';

const state: State = {
    user: {
        id: 0,
        firstname: '',
        lastname: '',
        email: '',
        phone_number: '',
        age: 0,
        area_of_concentration: '',
        weight: 0,
        height: 0,
        plan_id: '',
        role: Role.client,
        gender: '',
        password: ''
    },
    isLoggedIn: false,
    lastUserInteraction: 0
}

export default state;
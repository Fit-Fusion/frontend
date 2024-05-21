import { DbUser } from '../abstracts/Interfaces';
import { State } from './types';
import { Role } from '../abstracts/Enum';

const mutations = {
    setUser(state: State, user: DbUser) {
        state.user = user;
    },
    setIsLoggedIn(state: State, isLoggedIn: boolean) {
        state.isLoggedIn = isLoggedIn;
    },
    
    clearUser(state: State) {
        state.user = {
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
        };
    },

    initializeStore(state: State) { 
        const user = localStorage.getItem('user');
        
        if (user) {
            state.user = JSON.parse(user);
            state.isLoggedIn = true;
        }
    }
}

export default mutations;
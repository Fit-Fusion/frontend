
import { Role } from '../abstracts/Enum';
import { State } from './types';

const getters = {
    user(state: State) {
        return state.user;
    },

    isLoggedIn(state: State) {
        return state.isLoggedIn;
    },

    userId(state: State) {
        return state.user.id;
    },

    userRole(state: State) {
        return state.user.role;
    },

    userIsNotAdmin(state: State) {
        return state.user.role != Role.admin;
    }
}

export default getters;
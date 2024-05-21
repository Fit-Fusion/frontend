
import { State } from './types';

const getters = {
    user(state: State) {
        return state.user;
    },

    isLoggedIn(state: State) {
        return state.isLoggedIn;
    },

    loggedInUserId(state: State) {
        return state.user.id;
    }
}

export default getters;
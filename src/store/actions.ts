import { ActionTree } from 'vuex';
import LocalStorage from '../LocalStorage';
import { State } from './types';

const actions: ActionTree<State, any> = {
    async loadStore({ dispatch, state }) {
        const localState = LocalStorage.getStore();

        if(localState) {
            return this.replaceState(
                Object.assign({}, state, localState)
            );
        }

        // dispatch('refreshTemplates');
    },

    async loginUser({ commit }, user) {
        // localStorage.setItem('user', JSON.stringify(user));
        
        commit('setUser', user);
        commit('setIsLoggedIn', true);
    },

    async logout({ commit }) {
        //logout logic
        
        commit('clearUser');
        commit('setIsLoggedIn', false);

    }
}

export default actions;
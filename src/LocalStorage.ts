import { State } from './store/types';

export default class LocalStorage {
    static storeKey = 'store';

    static setStore(state: State) {
        try {
            localStorage.setItem(this.storeKey, JSON.stringify(state));
        } catch (error) {
            console.error('Error setting store in localStorage:', error);
        }
    }

    static getStore(): State | null {
        try {
            const templates = localStorage.getItem(this.storeKey);

            if (!templates) {
                return null;
            }

            return JSON.parse(templates);
        } catch (error) {
            console.error('Error getting store from localStorage:', error);
            return null;
        }
    }
}
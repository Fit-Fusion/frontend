import { DbUser } from '../abstracts/Interfaces';

export interface State {
    user: DbUser,
    isLoggedIn: boolean
}
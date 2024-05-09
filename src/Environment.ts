import dotenv from 'dotenv';
dotenv.config();

export default class Environment {
    public static getServerEndpoint(): string  {
        return process.env.DB_HOST as string;
    }
}
import conf from '../conf/conf.js'
import { Client, Account, ID } from "appwrite";
// Authorization

export class AuthService {
    // 2 properties
    client = new Client();
    account;

    // whenever a object is made this will be called
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create
                (ID.unique(), email, password, name);
            if (userAccount) {
                // call another method
                return this.login(email, password)
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}

// object created so user can directly use the methods
const authService = new AuthService();

export default authService;
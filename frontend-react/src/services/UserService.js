import axios from 'axios';

const USER_REST_API_URL = "http://localhost:8080/api/users";

class UserService {

    // Using axious library to call backend rest api
    getUsers() {
        return axios.get(USER_REST_API_URL);
    }

}

export default new UserService();

import axios from 'axios';

export default axios.create({
    baseURL: 'https://react-quiz-34fa7.firebaseio.com/'
})
import axios from 'axios';
const KEY = 'AIzaSyAZ4qLzlHxUMaiaTg8UIgor3iCxIjB_dww';

export default axios.create({
    baseURl : 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResulsts: 5,
        key: KEY
        
    }
});
import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component{
    onTermSubmit = (term)=>{
    youtube.get('https://www.googleapis.com/youtube/v3/search',{
           params:{
               q: term
           }

       })   
    }
    render(){
        return(
            <div className = "ui container">
                <SearchBar onFormSubmit = {this.onTermSubmit}/>
            </div>

        ) 
    };
}

export default App;
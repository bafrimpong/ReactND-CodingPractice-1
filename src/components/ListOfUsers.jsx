import React, { Component } from 'react';

class ListOfUsers extends Component {
  render(){
    return (
      <ol>
        {
          this.props.profiles.map( profile => 
          <li key={profile.userID}>
               <p>
                 {this.props.users[profile.userID].name}'s favorite movie is {this.props.movies[profile.favoriteMovieID].name}.
               </p>
          </li>
        )}
		</ol>
    )
  }
}

export default ListOfUsers;
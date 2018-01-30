import React from 'react'
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import ResolutionForm from './ResolutionForm';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';




const App = ({ loading, resolutions }) => {
  
  if ( loading) return null;
  return(
    <div>
      <RegisterForm />
      <LoginForm />
      <ResolutionForm />
      <button onClick={ () => Meteor.logout() } >Log Out</button>
      <ul>
        {
          resolutions.map(resolution => (
            <li>{resolution.name}</li>
          ))
        }
      </ul>
    </div>
    );
};

const resolutionsQuery = gql`
query Resolutions {
  hi,
  resolutions {
    _id,
    name
  }
}
`;






export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })  // I used this to access easily in component.   data.loading ->   loading   ....
})(App);
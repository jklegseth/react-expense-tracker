// higher order component - HOC
// just a component (HOC) that renders a component (regular component), can be multiple
// goal is
// reuse
// render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>this is props: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  // this will be the HOC
  return (props) => (
    <div>
      { props.isAdmin && <p>This is private info. Please don't share.</p> }
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
      <div>
        { props.isAuthenticated ? (
          <WrappedComponent {...props} />
        ) : (
           <p>Please log in to see the info</p>
        )}
      </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="here are your props" />, document.getElementById('app'));

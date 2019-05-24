import React from 'react';

// import Submit from './Submit/submit.jsx';
import Userlist from './Userlist/Userlist.jsx';

class App extends React.Component {
  render() {
  return (
    <div className="App">
     <Userlist />
    </div>
     // <Usercard
     //          image = 'https://avatars2.githubusercontent.com/u/8601733?s=200&amp;v=4'
     //          login = 'Thinkster'
     //          repo =  'realworld'
     //          description = '"The mother of all demo apps" — Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more'
     //          language = 'JavaScript'
     //          star = '25.948'
     //          fork = '1.742'
     //          update = '14 hours ago'/>
  );
 }
}

export default App;

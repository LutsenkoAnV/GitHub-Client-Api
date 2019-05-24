import React from 'react';
// import ixhr from '../i/XHR/ixhr.jsx';
// import PromiseXHR from '../i/XHR/PromiseXHR.js';

import iFetch from '../i/XHR/iFetch.js';
import Repocard from '../Repocard/Repocard.jsx';
import Usercard from '../Usercard/Usercard.jsx';

export default class Userlist extends React.Component {
  constructor(props) {
      super(props);
      this.state = {userList: [],
                    userData: {},
                    value: '',
                    urllink: 'https://api.github.com/users/bcherepakha/repos'
                   };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

   // componentWillMount = this.componentWillMount.bind(this);

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      const {value} = this.state;
      this.setState({urllink: 'https://api.github.com/users/' + value + '/repos'});
      console.log(this.state.urllink);
      event.preventDefault();
    }

  componentWillMount() {
    var {urllink} = this.state;
    iFetch({
      method: 'GET',
      url: urllink
    })
    .then(this.getReposSuccess)
    .catch(this.getReposError);

    iFetch({
      method: 'GET',
      url: 'https://api.github.com/users/LutsenkoAnV'
    })
    .then(this.getUserSuccess)
    .catch(this.getUserError);
  }

  getReposSuccess = data => {
    this.setState({userList: data});
  }

  getReposError = response => {
    console.log({response})
  }

  getUserSuccess = datauser => {
    this.setState({userData: datauser});;
  }

  getUserError = responseuser => {
    console.log({responseuser})
  }

  render() {
    let {userList} = this.state;
    let {userData} = this.state;
    // console.log({userList});
    // console.log({userData});
    // const {searched} = this.props;
    return <div className='user-list'>
              <form
                         onSubmit={this.handleSubmit}
                         className='add-owner'>
                  <input
                    type='text'
                    value={this.state.value}
                    onChange={this.handleChange}
                    className='add-owner__input'/>
                  <input className='add-owner__submit' type='submit' />
                  <span className='add-owner__descr'>Enter owner's name</span>
              </form>;
              <Usercard
                      key = {userData.id}
                      id = {userData.id}
                      image = {userData.avatar_url}
                      login = {userData.login}/>
             {userList.map(userInfo =>
              <Repocard
                       key={userInfo.id}
                       id={userInfo.id}
                       repo =  {userInfo.name}
                       description = {userInfo.description}
                       language = {userInfo.language}
                       star = {userInfo.stargazers_count}
                       fork = {userInfo.forks_count}
                       update = {userInfo.updated_at}/>)}
           </div>;
  }
}

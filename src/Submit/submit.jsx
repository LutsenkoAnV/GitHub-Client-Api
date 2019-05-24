import React from 'react';

import "./submit.css";

class Submit extends React.Component {

  constructor(props) {
      super(props);
      this.state = {value: '',
                    urllink: ''
                   };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      this.setState({urllink: 'https://api.github.com/users/' + this.state.value + '/repos'});
      event.preventDefault();
      console.log(this.state.urllink);
    }

  render() {
  return <form
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
 }
}

export default Submit;

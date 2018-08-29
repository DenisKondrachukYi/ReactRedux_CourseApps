import React, {Component} from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};

        this.inputOnChange = this.inputOnChange.bind(this);
        this.onFromSubmit = this.onFromSubmit.bind(this);
    }

    inputOnChange(event) {
        this.setState({term: event.target.value})
    }

    onFromSubmit(event) {
        event.preventDefault()
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
      return (        
          <form onSubmit={this.onFromSubmit} className="input-group">
            <input placeholder="Get a five-day forecast in your favourite cities." 
                   className="form-control" 
                   value={this.state.term} 
                   onChange={this.inputOnChange} />
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">
                    Submit
                </button>
            </span>
          </form>
      );
    }
  }
  

  function mapsDispatchToProps(dispatch) {
      return bindActionCreators({fetchWeather}, dispatch);
  }

  export default connect(null, mapsDispatchToProps)(SearchBar);
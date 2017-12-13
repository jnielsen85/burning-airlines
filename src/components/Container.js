import React, { PureComponent as Component } from 'react';
import FlightsSearch from './FlightsSearch';
import ReservationForm from './ReservationForm';

class Container extends Component {
  constructor() {
    super();
    this.state = {
      flight_id: '',
      prev_flight_id: ''
    }
  }

  resetFlightId = () => {
    this.setState({
      flight_id: ''
    });
  }

  storeFlightId = (flight_id) => {
    this.setState({
      prev_flight_id: this.state.flight_id,
      flight_id: flight_id
    });
  }

  clicking(e){
    e.preventDefault();
    window.location.href = "http://localhost:3000/home/";
  }


  render() {
        return (
          <div>

          <form onSubmit = {this.clicking}>
            <div>
              <button>
                Sign Out
              </button>
            </div>
          </form>

            <FlightsSearch storeFlightId={ this.storeFlightId } resetFlightId={ this.resetFlightId } />
            { this.state.flight_id !== '' ? <ReservationForm user_id={this.props.user_id} flightId={ this.state.flight_id } /> : null }
          </div>
        );

  }
}

export default Container;

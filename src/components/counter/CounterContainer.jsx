import React, { Component, PropTypes } from 'react'
import Counter from './Counter'

class CounterContainer extends Component{
  render(){
    const { count,onIncrement,onDecrement } = this.props;

    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Blank page
            <small>it all starts here</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
          </ol>
        </section>

        <section className="content">
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Title</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                  <i className="fa fa-minus"></i></button>
                <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip" title="Remove">
                  <i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              <Counter
                value={count}
                onIncrement={onIncrement}
                onDecrement={onDecrement}
              />
            </div>
            <div className="box-footer">
              Footer
            </div>
          </div>
        </section>
      </div>
    )
  }
}

import { onIncrement, onDecrement } from '../../redux/actions'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  console.log(state);
  return {
    count: state.counter
  }
}

export default connect(
  mapStateToProps,
  { onIncrement, onDecrement }
)(CounterContainer);

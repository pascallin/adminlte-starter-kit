import React,{ Component } from 'react'
import { appStartAsync } from '../redux/actions'

class HomeContainer extends Component{
  componentWillMount(){
    this.props.dispatch(appStartAsync())
  }
  render() {
    const { text } = this.props;

    return (
      <div className="content-wrapper">
        <section className="content-header">
          <h1>
            Blank page
            <small>it all starts here</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Examples</a></li>
            <li className="active">Blank page</li>
          </ol>
        </section>
        <section className="content">
          <div className="box">
            <div className="box-header with-border">
              <h3 className="box-title">Title</h3>
              <div className="box-tools pull-right">
                <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip"
                        title="Collapse">
                  <i className="fa fa-minus"></i></button>
                <button type="button" className="btn btn-box-tool" data-widget="remove" data-toggle="tooltip"
                        title="Remove">
                  <i className="fa fa-times"></i></button>
              </div>
            </div>
            <div className="box-body">
              { text }
            </div>
            <div className="box-footer">
              Footer
            </div>
          </div>
        </section>
      </div>
    );
  }
}

import { connect } from 'react-redux'

function mapStateToProps(state) {
  console.log(state);
  return {
    text: state.home
  }
}

export default connect(mapStateToProps)(HomeContainer);

import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import './Spinner.scss'

const Spinner = ({ isFetching }) =>
  isFetching ? 
    <div className="spinner">
      <div className="wheel"></div>
    </div> :
    <div></div>

Spinner.propTypes = {
  isFetching: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isFetching: state.Fetch.isFetching || false
})

export default withRouter(connect(mapStateToProps)(Spinner))
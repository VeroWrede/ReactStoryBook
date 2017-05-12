import React from 'react';
import { connect } from 'react-redux';

import danceTeacher from '../DanceTeacher.jsx';
import {switchPage} from '../../actions/simpleActionCreator.js';
import pages from '../../constants/pages.js';

const mapStateToProps = function (state) {
  return {
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    onBackClick: () => dispatch(switchPage(pages.DancingQueen))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(danceTeacher);

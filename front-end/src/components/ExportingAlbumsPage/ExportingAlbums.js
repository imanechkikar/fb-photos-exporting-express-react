/**
 * Created by IMANE on 24/07/2017.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {browserHistory} from 'react-router';
import LinkFbFormContainer from './LinkFb/LinkFbFormContainer'
import AlbumsListContainer from './Albums/AlbumsListContainer'
import styles from '../../css/styles.css';

class ExportingAlbumsPage extends Component{

    componentDidMount(){
        const {logged} = this.props;
        if(!logged) browserHistory.push("/");
    }

    render(){
        const {status} = this.props;
        return (
            <div style={styles.container}>
                <LinkFbFormContainer/>
                {(status==='connected')?<AlbumsListContainer/>:null}
            </div>
        )
    }

};

ExportingAlbumsPage.propTypes = {
    status : PropTypes.string.isRequired,
    logged : PropTypes.bool.isRequired
};

export default ExportingAlbumsPage;
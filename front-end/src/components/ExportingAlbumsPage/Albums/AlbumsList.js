/**
 * Created by IMANE on 03/10/2017.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {List, ListItem} from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {blue500} from 'material-ui/styles/colors';
import styles from '../../../css/styles.css';

class AlbumsList extends React.Component{

    componentDidMount() {
        this.props.onFetchAlbums() ;
    }

    render(){
        const {albums}=this.props;
        return(
            <div style={styles.container}>
                {
                    (albums.length === 0) ?
                        <h4> you haven't any album :( </h4> :
                        <List style={styles.list}>
                            {
                                albums.map(album => <ListItem key={album.id} primaryText={album.name}
                                                              leftIcon={<ActionGrade color={blue500}/>}/>)
                            }
                        </List>
                }
            </div>
        );
    }

}

AlbumsList.propTypes={
    onFetchAlbums : PropTypes.func.isRequired,
    albums : PropTypes.arrayOf(PropTypes.shape({
        name:PropTypes.string.isRequired,
    }).isRequired).isRequired,
};

export default AlbumsList;
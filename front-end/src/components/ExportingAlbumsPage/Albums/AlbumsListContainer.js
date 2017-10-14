/**
 * Created by IMANE on 03/10/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import {fetchAlbums} from '../../../actions/ExportingActions';
import AlbumsList from './AlbumsList';

function AlbumsListContainer ({onFetchAlbums,albums}){
    return <AlbumsList onFetchAlbums={onFetchAlbums} albums={albums}/>;
}

const mapDispatchToProps = {
    onFetchAlbums:fetchAlbums,
};

const  mapStateToProp = (state)=>{
    return {albums : state.exporting.albums};
};

export default connect(mapStateToProp,mapDispatchToProps)(AlbumsListContainer);
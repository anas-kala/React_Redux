import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content' onClick={() => this.props.selectSong(song)}>
                        <button className='ui button primary'>
                            select
                        </button>
                    </div>
                    <div className='content'>{song.title}</div>
                </div>
            );
        });
    }

    render() {
        // this.props={songs} according to how we defined it in the mapStateToProps method
        return (
            <div className='ui divided list'>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { songs: state.songs };
}

// the first argument in the connect method is the props that are going to be passed to this component.
// the second argument is the action that is going to be passed to the dispatcher which will update the state in the reducer.
export default connect(mapStateToProps, {
    selectSong: selectSong
})(SongList);
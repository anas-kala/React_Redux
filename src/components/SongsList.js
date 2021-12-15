import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className='item' key={song.title}>
                    <div className='right floated content'>
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

export default connect(mapStateToProps)(SongList);
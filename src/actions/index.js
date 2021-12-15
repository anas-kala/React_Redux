// Action creator
// note that we did not use export default here, but rather a "name export". which means that importing this function in another component will be through {selectSong}
export const selectSong = (song) => {
    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    }
}


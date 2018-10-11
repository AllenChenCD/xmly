import * as types from './mutation-types'

const mutations = {
    [types.SET_FULLSCREEN](state,fullScreen){
        state.fullScreen = fullScreen 
    },
    [types.SET_PLAYLIST](state,playList){
        state.playList = playList 
    },
    [types.SET_CURRENTSONG](state,currentSong){
        state.currentSong = currentSong 
    }
}
export default mutations
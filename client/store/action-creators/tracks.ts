import {Dispatch} from "react";
import {TrackActionTypes, TTrackAction} from "../../types/track";
import axios from "axios";


export const fetchTracks = () => {
    return async (dispatch: Dispatch<TTrackAction>) => {
        try {
            const response = await axios.get('http://localhost:5000/tracks')
            dispatch({type: TrackActionTypes.FETCH_TRACKS, payload: response.data})
        } catch (e) {
            dispatch({type: TrackActionTypes.FETCH_TRACKS_ERROR, payload: 'Oups, something went wrong'})
        }
    }
}
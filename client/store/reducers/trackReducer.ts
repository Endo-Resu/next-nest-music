import {ITrackState, TrackActionTypes, TTrackAction} from "../../types/track";

const initialState: ITrackState = {
    tracks: [],
    error: '',
}

export const trackReducer = (state = initialState, action: TTrackAction): ITrackState => {
    switch (action.type) {
        case TrackActionTypes.FETCH_TRACKS:
            return {
                error: '', tracks: action.payload
            }

        case TrackActionTypes.FETCH_TRACKS_ERROR:
            return {
                ...state, error: action.payload
            }

        default:
            return state
    }
}
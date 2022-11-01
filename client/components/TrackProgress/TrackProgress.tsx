import React, {FC} from 'react';

interface ITrackProgressProps {
    left: number;
    right: number;
    onChange: () => void;
}

const TrackProgress: FC<ITrackProgressProps> = ({left, right, onChange}) => {
    return (
        <div style={{display: 'flex'}}>
            <input
                type="range"
                min={left}
                max={right}
                value={left}
                onChange={onChange}
            />
            <div>{left} / {right}</div>
        </div>
    );
};

export default TrackProgress;
import React from 'react';
import './Headline.scss';
import {Button, ButtonGroup, Divider} from "@blueprintjs/core";
import {INTENT_DANGER} from "@blueprintjs/core/lib/esnext/common/classes";

export default function Headline(props) {
    return (
        <div className="headline">
            <div>
                <h1>{props.headline}</h1>
            </div>
            <div>
                <div>clientId: <span>clientId</span></div>
                <div>
                    <ButtonGroup minimal={true}>
                        <Button text="5" icon="pause" intent='danger'/>
                        <Divider />
                        <Button text="2" icon="play" intent='warning'/>
                        <Divider />
                        <Button text="12" icon="tick" intent='success'/>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
}
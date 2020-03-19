import React, { Fragment, useState } from "react";
import { BoolSwitch } from "../components/BoolSwitch";
import { DiseasesHooks } from "../components/diseases/DiseasesHooks";
import { DiseasesLifeCycle } from "../components/diseases/DiseasesLifeCycle";

export const DiseasesIndex = () => {
    const [showHooks, setShowHooks] = useState(true);
    return <Fragment>
        <div>
            <BoolSwitch value={showHooks} label="Show Hooks Version" onChange={(value) => (setShowHooks(value))} />
        </div>
        {showHooks ? <DiseasesHooks /> : <DiseasesLifeCycle />}
    </Fragment>;
};
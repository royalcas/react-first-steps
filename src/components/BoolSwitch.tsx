import React from "react";
import './BoolSwitch.css';

export const BoolSwitch = (props: { onChange: (value: boolean) => void, value: boolean, label: string }) => {

    return <div className="bool-switch" onClick={() => props.onChange(!props.value)}>
        <div className={!props.value ? "bool-switch-slide-toggle" : "bool-switch-slide-toggle active"}></div>
        <input type="checkbox" className="hidden" />
        {props.label && <label>{props.label}</label>}
    </div>;
}
import React, { useState } from "react";

export const HooksDemo = (props: any) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    setInterval(() => { setCurrentDate(new Date()) }, 1000);
    return <div>Current Date: {currentDate.toLocaleString()}</div>;

}
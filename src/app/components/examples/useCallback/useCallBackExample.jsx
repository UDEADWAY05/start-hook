import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withOutCallback = useRef(0);
    const outCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData(prevState => ({ ...prevState, [target.name]: target.value }));
    };

    // without Callback

    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withOutCallback.current++;
    }, [validateWithOutCallback]);

    const withCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        validateWithOutCallback(data);
        withCallback(data);
    }, [data]);

    useEffect(() => {
        outCallback.current++;
    }, [withCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render wirhOutCallback: {withOutCallback.current} </p>
            <p>Render outCallback: {outCallback.current} </p>
            <label htmlFor="email" className="form-label"> Email </label>
            <input onChange={handleChange} value={data.email || ""} name="email" type="email" className="form-control" id="email" />
        </CardWrapper>
    );
};

export default UseCallBackExample;

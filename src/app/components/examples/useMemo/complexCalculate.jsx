import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
};
function runReal(n) {
    console.log("run factorial");
    return factorial(n);
};

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const buttonColor = useMemo(() =>
        ({ value: otherState ? "primary" : "secondary" }), [otherState]);
    useEffect(() => {
        console.log("render");
    }, [buttonColor]);
    const fact = useMemo(() => runReal(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value }</p>
                <p>Result fact: {fact}</p>
                <button className="btn btn-primary ms-md-2" onClick={() => setValue(prevState => prevState + 10)}>Incriment</button>
                <button className="btn btn-primary ms-md-2" onClick={() => setValue(prevState => prevState - 10)} >Dectement</button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button className={"btn ms-md-2 btn-" + buttonColor.value} onClick={() => setOtherState((prevState) => !prevState)}>
                Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;

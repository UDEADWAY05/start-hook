import React from "react";
import CardWrapper from "../../common/Card";
import TextField from "../../common/form/textField";
import SmallTitle from "../../common/typografy/smallTitle";
const CloneElementExample = () => {
    const field = <TextField label="email" name="email" />;
    const hanleChange = (target) => {
        console.log("cannge:", target);
    };
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {React.cloneElement(field, { onChange: hanleChange, label: "cloneEmail" })}
        </CardWrapper>
    );
};

export default CloneElementExample;

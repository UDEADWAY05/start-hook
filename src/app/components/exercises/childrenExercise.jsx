import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";

const ExerciveComponent = ({ children }) => {
    const childNum = useRef(0);
    return React.Children.map(children, (child) => {
        console.log(child);
        childNum.current++;
        return <div className="d-flex flex-row">{childNum.current}. {child}</div>;
    });
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ExerciveComponent>
                <Component />
                <Component />
                <Component />
            </ExerciveComponent>
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;

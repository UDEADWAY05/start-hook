import React, { useRef, useEffect } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const styleRef = useRef();
    useEffect(() => {
        console.log(styleRef.current);
    }, [styleRef]);
    const handleStyle = () => {
        styleRef.current.style.height = "80px";
        styleRef.current.style.width = "150px";
        styleRef.current.children[0].textContent = "text";
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div ref={styleRef}
                className="bg-primary mb-2 d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <button className="btn btn-primary" onClick={handleStyle}>Изменить блок</button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;

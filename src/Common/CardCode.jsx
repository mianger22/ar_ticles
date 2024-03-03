import { useState, useEffect } from "react";
import Code from "./Code";
import CopyButton from "./CopyButton";

function CardCode({ set_codes }) {
    // создаю массив для того, чтобы потом в него залить весь код из отправленного сюда объекта
    const [AllCode, SetAllCode] = useState([]);

    useEffect(() => {
        // перебираю значения объекта и сохраняю их в созданный ранее массив
        SetAllCode(Object.values(set_codes).flat(Infinity).join(" "));
    })

    return (
        <div className="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-margin-medium-bottom">
            <CopyButton codes={AllCode} />
            <p>
                {Object.keys(set_codes).map(
                    (key) => key === "comments" ? <b><Code content={set_codes[key]} /></b> : <Code content={set_codes[key]} />
                )}
            </p>
        </div>
    )
}

export default CardCode;
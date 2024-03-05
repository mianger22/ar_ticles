import { useState } from "react";

function CopyButton({ codes }) {
    const [copied, setCopied] = useState(false);

    const copy = () => {
        // копируем код
        navigator.clipboard.writeText(codes);
        // меняем значок, чтобы показать, что операция выполнена успешно
        setCopied(true);

        setTimeout(() => {
            setCopied(false);
        }, 3000);
    }
        
    return (
        <div className="uk-card-badge uk-background-default">
            <button onClick={copy}>
                {
                    copied ? <img width="32" height="32" src="https://img.icons8.com/fluency/48/ok--v1.png" alt="success copied icon"/>
                    : <img width="20" height="20" src="https://img.icons8.com/ios/50/copy--v1.png" alt="copy icon" />
                }
            </button>
        </div>
    )
}

export default CopyButton;
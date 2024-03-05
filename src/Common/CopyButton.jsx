function CopyButton({ codes }) {
    return (
        <div className="uk-card-badge uk-background-default">
            <button onClick={() => {navigator.clipboard.writeText(codes)}}>
                <img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/copy.png" alt="copy code" />
            </button>
        </div>
    )
}

export default CopyButton;
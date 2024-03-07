function Picture({ picture_path, picture_alt }) {
    return (
        <p>
            <div className="flex items-center justify-center my-6">
                <img 
                    src={picture_path} 
                    alt={picture_alt}
                />
            </div>
        </p>
    )
}

export default Picture;
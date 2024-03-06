function Link({ link_name, link_path }) {
    return (
        <a href={link_path} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{link_name}</a>
    )
}

export default Link;
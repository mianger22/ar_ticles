function Comment({ user_name, time_comment_creation, comment }) {
    return (
        <article className="uk-comment uk-comment-primary" role="comment">
            <header className="uk-comment-header">
                <div className="uk-grid-medium uk-flex-middle" uk-grid>
                    <div className="uk-width-auto">
                        <img className="uk-comment-avatar" src="https://getuikit.com/docs/images/avatar.jpg" width="80" height="80" alt="" />
                    </div>
                    <div className="uk-width-expand">
                        <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">{user_name}</a></h4>
                        <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                            <li><a href="#">{time_comment_creation}</a></li>
                            <li><a href="#">Ответить</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="uk-comment-body">
                <p>{comment}</p>
            </div>
        </article>
    )
}

export default Comment;
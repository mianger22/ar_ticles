import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";

function Comments() {
    const [user_name, set_user_name] = useState("");
    const [comment, set_comment] = useState("");
    const [time_comment_creation, set_time_comment_creation] = useState("");

    useEffect(() => {
              
    });

    return (
        <article className="uk-article uk-margin-large-bottom">
            <Formik
                initialValues={{ user_name: "", comment: "" }}
                onSubmit={({ setSubmitting, user_name, comment }) => {
                    // сохраняем имя пользователя, его комментарий и время создания комментария
                    set_user_name(user_name);
                    set_comment(comment);
                    set_time_comment_creation(JSON.stringify(new Date(2011, 0, 1, 0, 0, 0, 0)));

                    // отменяем отправку
                    setSubmitting(false);
                }}
            >
                {() => (
                    <Form className="uk-margin-medium-top uk-margin-medium-bottom">
                        <fieldset className="uk-fieldset">
                            <legend className="uk-legend">Ваш комментарий</legend>

                            <div className="form-group uk-margin">
                                <input className="" type="text"  />
                                <Field
                                    type="text"
                                    name="user_name"
                                    className="form-control uk-input"
                                    placeholder="Ваше имя" 
                                    aria-label="user_name"
                                />
                            </div>

                            <div className="form-group uk-margin">
                                <Field
                                    type="textarea"
                                    name="comment"
                                    className="form-control uk-textarea"
                                    rows="5" 
                                    placeholder="Ваш комментарий" 
                                    aria-label="comment"
                                />
                            </div>
                        </fieldset>
                        <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Ответить</button>
                    </Form>
                )}
            </Formik>          

            {user_name && <article className="uk-comment uk-comment-primary" role="comment">
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
            </article>}
        </article>
    )
}

export default Comments;
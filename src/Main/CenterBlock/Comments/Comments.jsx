import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import Comment from "./Comment";
const axios = require('axios');
const url_resourse = "http://localhost:80/comments";

function Comments() {
    const [comments_list, set_comments_list] = useState([]);

    useEffect(() => {    
        // Want to use async/await? Add the `async` keyword to your outer function/method.
        async function getComments() {
            try {
                await axios.get(url_resourse)
                    .then(function (response) {
                        // Полученные комментарии с сервера сохраняем в переменную comments_list, 
                        // в следствие чего пользователь увидит все комментарии сайта
                        set_comments_list(response)
                    })
                    .catch(function (error) {
                        console.log(` Ошибка обращения по адресу: ${error} `);
                    })
                    .finally(function () {
                        // always executed
                    });  
            } catch (error) {
                console.error(error);
            }
        };

        getComments();
    })

    return (
        <article className="uk-article uk-margin-large-bottom">
            <Formik
                initialValues={{ user_name: "", comment: "" }}
                onSubmit = {(values, { resetForm }) => {
                    // сохраняем текущую дату
                    const currentDate = JSON.stringify(new Date(2011, 0, 1, 0, 0, 0, 0));

                    // сохраняем имя пользователя, его комментарий и время создания комментария
                    set_comments_list([...comments_list, {
                        id: comments_list.length + 1,
                        user_name: values.user_name, 
                        time_comment_creation: currentDate,
                        comment: values.comment
                    }]);

                    // сохраняем в Базу Данных новый комментарий
                    async function saveComment() {
                        try {
                            await axios.post(url_resourse, {
                                "user_name": values.user_name, "comment": values.comment, "date_creation": currentDate
                            })
                                .then(function (response) {
                                    // Показываем сообщение об успехе
                                    alert(response);
                                })
                                .catch(function (error) {
                                    alert("Ошибка! Детали - в консоли");
                                    console.clear();
                                    console.log(` Ошибка обращения по адресу: ${error} `);
                                })
                                .finally(function () {
                                    // always executed
                                });  
                        } catch (error) {
                            console.error(error);
                        }
                    };
            
                    saveComment();

                    // очищаем поля
                    resetForm({});
                }}
            >
                {() => (
                    <Form className="uk-margin-medium-top uk-margin-medium-bottom">
                        <fieldset className="uk-fieldset">
                            <legend className="uk-legend">Ваш комментарий</legend>

                            <div className="form-group uk-margin">
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

            {comments_list.map(
                data_comment => <Comment 
                    key={data_comment.id}
                    user_name={data_comment.user_name}
                    time_comment_creation={data_comment.time_comment_creation}
                    comment={data_comment.comment}
                />
            )}
        </article>
    )
}

export default Comments;
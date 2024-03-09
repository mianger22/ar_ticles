import { Formik, Form, Field } from "formik";
import { useEffect, useState } from "react";
import Comment from "./Comment";
import axios from "axios";

const url_resourse = "http://localhost:80/comments";

function Comments() {
    const [comments_list, set_comments_list] = useState([]);

    useEffect(() => {    
        // Want to use async/await? Add the `async` keyword to your outer function/method.
        async function getComments() {
            try {
                await axios.get(url_resourse)
                    .then(function (response) {
                        // Полученные комментарии с сервера сортируем и сохраняем в переменную comments_list, 
                        // в следствие чего пользователь увидит все комментарии сайта
                        const server_comments_list = response.data.sort((a, b) => b.id_comment - a.id_comment);
                        set_comments_list(server_comments_list);
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
    }, []);

    return (
        <article className="uk-article uk-margin-large-bottom">
            <Formik
                initialValues={{ user_name: "", comment: "" }}
                onSubmit = {(values, { resetForm }) => {
                    // получаем объект даты
                    const current_date_obj = new Date(); 

                    const current_day = current_date_obj.getDate();
                    const current_month = Number(current_date_obj.getMonth()) + 1;
                    const year = current_date_obj.getFullYear();
                    const current_hour = current_date_obj.getHours();
                    const current_minute = current_date_obj.getMinutes()

                    // разделяем его на нужные нам составляющие
                    const day = current_day < 10 ? "0" + current_day : current_day;
                    const month = current_month < 10 ? "0" + current_month : current_month;
                    const hour = current_hour < 10 ? "0" + current_hour : current_hour;
                    const minute = current_minute < 10 ? "0" + current_minute : current_minute;

                    // сохраняем текущую дату
                    const current_date_and_time = `${hour}:${minute} ${day}.${month}.${year}`;

                    // формируем объект данных нового комментария
                    const data_new_comment = {
                        id: comments_list.length === undefined ? 1 : comments_list.length + 1,
                        user_name: values.user_name, 
                        date_creation: current_date_and_time,
                        comment: values.comment,
                        user_mail: values.user_mail
                    }

                    // сохраняем данный объект
                    set_comments_list([data_new_comment, ...comments_list]);

                    // сохраняем в Базу Данных новый комментарий
                    async function saveComment() {
                        try {
                            await axios.post(url_resourse, {
                                "user_name": values.user_name, "comment": values.comment, "date_creation": current_date_and_time
                            })
                                .then(function (response) {

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
                            console.error(`Ошибка сохранения комментария: ${error}`);
                        }
                    };
            
                    saveComment();

                    // очищаем поля
                    resetForm({});
                }}
            >
                {() => (
                    <Form className="uk-margin-medium-top uk-margin-medium-bottom">
                        <fieldset className="uk-fieldset uk-margin-small-bottom">
                            <div className="uk-text-large flex items-center justify-center uk-margin-medium-bottom">
                                <legend>
                                    Если что-то непонятно, спрашивайте - помогу
                                </legend>
                            </div>

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
                                    type="email"
                                    name="user_mail"
                                    className="form-control uk-input"
                                    placeholder="Ваша почта" 
                                    aria-label="user_mail"
                                />
                            </div>

                            <div className="form-group uk-margin">
                                <Field
                                    type="textarea"
                                    name="comment"
                                    className="form-control uk-textarea"
                                    rows="5" 
                                    placeholder="Ваш вопрос" 
                                    aria-label="comment"
                                />
                            </div>
                        </fieldset>

                        <button class="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">Ответить</button>
                    </Form>
                )}
            </Formik>         

            {comments_list.length > 0 ? comments_list.map(
                data_comment => <Comment 
                    key={data_comment.id_comment}
                    user_name={data_comment.user_name}
                    time_comment_creation={data_comment.date_creation}
                    comment={data_comment.comment}
                />
            ) : <p className="uk-text-lighter italic flex items-center justify-center mb-6">
                Будьте первым, кто оставит комментарий
            </p>}
        </article>
    )
}

export default Comments;
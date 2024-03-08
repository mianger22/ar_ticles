import BoldCode from "../../Common/BoldCode";
import create_repository from "../../Pictures/create_repository.jpg";
import click_by_button_code from "../../Pictures/click_by_button_code.jpg";
import copy_url from "../../Pictures/copy_url.jpg";
import open_gitbash from "../../Pictures/open_gitbash.jpg";
import success_push from "../../Pictures/success_push.jpg";
import opening_project_settings from "../../Pictures/opening_project_settings.jpg";
import opening_pages_tab from "../../Pictures/opening_pages_tab.jpg";
import changing_GitHub_Pages_parameters from "../../Pictures/changing_GitHub_Pages_parameters.jpg";
import CardCode from "../../Common/CardCode";
import Link from "../../Common/Link";
import Picture from "../../Common/Picture";

// import { 
//     Article,
// } from 'uikit-react';

// Что такое AR и для чего он нужен

// В чём преимущества WEBAR или почему стоит писать на AR js 

// Всем привет. Поначалу, когда я только решил влезть в ар-разработку, я выбрал ЮНИТИ, потому что функционал там впечатляющ, но затем смекнул...

const Codes = {
    "head_code": `<!DOCTYPE html>
        <html lang="ru">
            \u00a0\u00a0\u00a0<head>
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta charset="UTF-8">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta http-equiv="X-UA-Compatible" content="ie=edge">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<title>My first AR application</title>
            \u00a0\u00a0\u00a0</head>
            \u00a0\u00a0\u00a0<body>`,
    "comments": {
        "code": `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// Тут будет наш код`,
        "connect": `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// Мы подключили библиотеку AR.js`
    },
    "correct_meta": `
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

    `,
    "uncorrect_meta": `
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    `,
    "connect_AR": `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>`,
    "end_code": `\u00a0\u00a0\u00a0</body>
        </html>`,
    "body_AR": `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-scene embedded arjs>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-marker preset="hiro">
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-text value="My first AR application" color="blue" scale="2 2 1"></a-text>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</a-marker>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-entity camera></a-entity>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</a-scene>`,
    "git_commands": 
        `git add --all
        git commit -m "my first commit"
        git push`,
    "another_version_ar_text": `<a-entity text="value: My first AR application"></a-entity>`
}

function CenterBlock() {
  return (
    <div>
        <div className="flex items-center justify-center my-6">
            <h1 className="uk-heading-small">Создание первого AR-приложения с помощью AR.js</h1>
        </div>
        <Picture picture_path="https://images.firstpost.com/wp-content/uploads/2019/02/Google-Maps-AR.jpg" picture_alt='AR' />
        <div className="italic flex items-center justify-center mb-6">
            Всё просто.
        </div>
        <article className="uk-article">
            <p className="uk-text-lead">1. Достаём инструменты, без которых ничего не получится</p>
            <p>
                Привет всем! Итак, начнём мы с установки необходимых инструментов или обозначения установленных, их заменяющих. 
            </p>
            <p>
                1.1. Нам понадобится любая среда разработки: VSCode, WebStorm или что-нибудь другое. 
            </p>
            <p>
                1.2. GIT - обязательно. И желательно <Link link_name='Git Bash' link_path='' />. Иначе придётся делать в командной строке.  Мне нравится Git Bash за удобство работы с GIT.
            </p>
        </article>
        <article className="uk-article">
            <p className="uk-text-lead">2. Создаём стандартный html-файл</p>
            <CardCode 
                set_codes={
                    {
                        "head": Codes.head_code,
                        "comments": Codes.comments.code,
                        "end": Codes.end_code
                    }
                }
            />
            <p>
                <b>Attention!</b> Мы пишем <BoldCode content={Codes.correct_meta} /> 
                    вместо <BoldCode content={Codes.uncorrect_meta} /> для того, чтобы камера была без неприятного и неудобного увеличения
            </p>
        </article>
        <article className="uk-article">
            <p className="uk-text-lead">3. Подключаем библиотеку AR.js</p>
            <p>Прописываем подключение в разделе body:</p>
            <CardCode 
                set_codes={
                    {
                        "head": Codes.head_code,
                        "connect": Codes.connect_AR,
                        "comments": Codes.comments.connect,
                        "end": Codes.end_code
                    }
                }
            />
        </article>
        <article className="uk-article">
            <p className="uk-text-lead">4. Пишем AR-код</p>
            <CardCode 
                set_codes={
                    {
                        "body_ar": Codes.body_AR,
                    }
                }
            />
            <p>
                Что делает данный код?
            </p>
            <p>
                Во-первых, <b>a-scene</b> создаёт сцену
            </p>
            <p>
                Во-вторых, <b>a-marker</b> ищет маркер наведённой камерой. Его аттрибут <b>preset="hiro"</b> позволяет программе понять - какой маркер ей искать
                Всё, что внутри - выводит нужное нам содержимое над маркеромю. У нас это текст
            </p>
            <p>
                Внимание! Я использовал <b>a-text</b> вместо <b>a-entity</b>, для того чтобы текст был крупнее. Вы же можете использовать его: 
            </p>
            <CardCode 
                set_codes={
                    {
                        "ar_text": Codes.another_version_ar_text,
                    }
                }
            />
            <p>
                <b>Примечание</b>. Что такое <b>a-entity text ...</b> и откуда я взял <b>a-text</b> читайте <Link link_name="здесь" link_path="https://aframe.io/docs/1.0.0/components/text.html#sizing" />
            </p>
            <p>
                В итоге получился следующий код нашего первого AR-приложения:
            </p>
            <CardCode 
                set_codes={
                    {
                        "head": Codes.head_code,
                        "connect": Codes.connect_AR,
                        "ar": Codes.body_AR,
                        "end": Codes.end_code
                    }
                }
            />
        </article>
        <article className="uk-article">
            <p className="uk-text-lead uk-margin-medium-bottom">5. Запускаем приложение</p>
            <p className="uk-margin-small-bottom">5.1. Для этого создаём репозиторий на гитхабе</p>
            <p>
                <p>
                    Переходим по ссылке <Link link_name="https://github.com/new" link_path="https://github.com/new" />. Заполняем <i>Repository name</i> (это название Вашего репозитория), 
                    ставим галочку на <i>Add a readme file</i> (она упростит клонирование репозитория) и нажимаем <i>Create repository</i>.
                    В итоге Вы создали пустой репозиторий для запуска Вашего AR-приложения.
                </p>
                <Picture picture_path={create_repository} picture_alt='Создание репозитория' />
            </p>
            <p className="uk-margin-small-bottom">5.2. Клонируем репозиторий на свой ПК</p>
            <p>
                <p>
                    Попав на страницу репозитория, жмём по зелёной кнопке <i>Code</i> и копируем значение из поля строки, кликнув по иконке сбоку.
                </p>
                <Picture picture_path={click_by_button_code} picture_alt='Нажатие кнопки Code' />
                <Picture picture_path={copy_url} picture_alt='Копирование url' />
            </p>
            <p>5.3. Теперь открываем диск С, ищем место, где будет лежать наш склонированный проект</p>
            <p>
                <p>
                    Если решили воспользоваться Git Bash, то кликаете в выбранном месте правой кнопкой, выбираете <i>Open Git Bash here</i>, запускаете. Если же остановились на командной строке, то, кликнув правой кнопкой мыши, выбираете <i>Открыть в терминале</i>.
                </p>
                <p>
                    Вводите <i>git clone</i> и нажимаете комбинацию Shift+Insert, чтобы вставилась скопированная строка с github`a, затем - Enter.
                </p>
                <p>
                    <u>* Открытый терминал не закрывайте!</u>
                </p>
                <Picture picture_path={open_gitbash} picture_alt='Открытие Git Bash' />
            </p>
            <p>5.4. Теперь нужно залить наш index.html на GitHub</p>
            <p className="mb-6">
                <p>
                    Для этого вводим <u><b>cd</b> наименование Вашей склонированной папки</u>, в следствие чего Вы попадёте в склонированную папку. Затем бросаем в неё наш index.html.
                </p>
                <p>
                    Теперь копируете в терминал следующие команды и нажимаете Enter:
                </p>
                <CardCode 
                    set_codes={
                        {
                            "git": Codes.git_commands,
                        }
                    }
                />
                <Picture picture_path={success_push} picture_alt='Успешное сохранение проекта на GitHub`е' />                
                <p className="uk-margin-small-bottom">
                    Что они делают?
                </p>
                <p className="uk-margin-small-bottom">
                    <ul>
                        <li>
                            а) <b>git add --all</b> добавляет все изменения в отслеживаемые
                        </li>
                        <li>
                            б) <b>git commit -m "my first commit"</b> сохраняет теперь уже отслеживаемые изменения
                        </li>
                        <li>
                            в) <b>git push</b> отправляет (сохраняет) изменения (наш код) на GitHub 
                        </li>
                    </ul>
                </p>
                <p className="uk-margin-small-bottom">
                    Ура! Наш код сохранён. И мы его не потеряем в случае утраты компьютера. 
                </p>
            </p>
            <p className="uk-margin-small-bottom">5.5. Теперь запускаем наш проект, включив GitHub Pages</p>
            <p>
                <p>Для этого:</p>
                <p>а) Заходим в настройки проекта</p>
                <Picture picture_path={opening_project_settings} picture_alt='Открытие настроек проекта' />
                <p>б) Открываем в левом блоке вкладку Pages</p>
                <Picture picture_path={opening_pages_tab} picture_alt='Открытие вкладки Pages' />
                <p>в) Меняем branch с none на main и нажимаем save</p>
                <Picture picture_path={changing_GitHub_Pages_parameters} picture_alt='Изменение параметров GitHub Pages' />
            </p>
        </article>
        <article className="uk-article">
            <p className="uk-text-lead uk-margin-medium-bottom">6. Наслаждаемся результатом</p>
            <p>
                Для этого 
            </p>
            <p>
                6.1. создаём адрес в соответствие с шаблоном - - , где это - ваш ник на гитхаб, а это - имя репозитория. Сохраняем данный адрес, заливаем его в мессенджер, используемый Вами. Например, в телеграмм. 
            </p>
            <p>
                6.2. Заходим с телефона по нему. Вуаля! <b>Наше приложение запущено!</b> тут анимация или смайл
            </p>
            <p className="uk-margin-medium-bottom">
                6.3. Теперь наводим камерой на следующий маркер (мы его указывали в коде командой ..)
            </p>
            <Picture picture_path="https://leonardo.osnova.io/af634cb0-038a-5245-8169-385adf3fb9ad/-/preview/1000/-/format/webp/" picture_alt='AR-метка' />
            <p className="uk-margin-medium-top">
                Наводим так, чтобы он весь уместился на экране и был как можно более параллелен смартфону. Ждём, пока наша программа проанализирует. 
                В итоге у нас должен появиться текст ... как на фото ниже.

                Если получилось, поздравляю Вас с первой AR - программой. 

                Очень просто. Верно?
            </p>
        </article>
        <article className="uk-article uk-margin-large-bottom">
            <p>Можете протестировать мой результат прежде чем возиться со своим, или чтобы сравнить свой с моим</p>
                    Что ещё интересного почитать по этой теме? 1.
        </article>
    </div>
  );
}

export default CenterBlock;
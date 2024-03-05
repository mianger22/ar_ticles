import Code from "../../Common/Code";
import BoldCode from "../../Common/BoldCode";
import intro from "../../pictures/intro.jpg";
import intro2 from "../../pictures/intro2.jpg";
import gitclone from "../../pictures/gitclone.jpg";
import CopyButton from "../../Common/CopyButton";
import CardCode from "../../Common/CardCode";

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
        git push`
}

function CenterBlock() {
  return (
    <div>
        <div className="flex items-center justify-center my-6">
            <h1 className="uk-heading-small">Создание первого AR-приложения с помощью AR.js</h1>
        </div>
        <div className="mb-6">
            <img src="https://images.firstpost.com/wp-content/uploads/2019/02/Google-Maps-AR.jpg" alt="imagear" />
        </div>
        <div className="italic flex items-center justify-center mb-6">
            Всё просто.
        </div>
        <article className="uk-article">
            <p className="uk-text-lead">1. Создаём стандартный html-файл.</p>
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
            <p className="uk-text-lead">2. Подключаем библиотеку AR.js, прописывая соответствующие теги в index.html в разделе body:</p>
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
            <p className="uk-text-lead">3. Добавляем следующий код:</p>
            <div className="uk-card uk-card-default uk-card-body uk-margin-medium-top uk-margin-medium-bottom">
                <p>
                    <Code content={Codes.body_AR} />
                </p>
            </div>
            <p>
                Что он делает?
            </p>
            <p>
                Во-первых, <b>a-scene</b> создаёт сцену
            </p>
            <p>
                Во-вторых, <b>a-marker</b> ищет маркер наведённой камерой. Его аттрибут <b>preset="hiro"</b> позволяет программе понять - какой маркер ей искать
                Всё, что внутри - выводит нужное нам содержимое над маркеромю. У нас это текст
            </p>
            <p>
                Внимание! Я использовал <b>a-text</b> вместо <b><a-entity text="value: My first AR application"></a-entity></b>, для того чтобы текст был крупнее. Вы же можете использовать стандартный а-ембеддед
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
            <p className="uk-text-lead uk-margin-medium-bottom">4. Теперь запускаем приложение.</p>
            <p className="uk-margin-small-bottom">4.1. Для этого создаём репозиторий на гитхабе.</p>
            <p>
                <p>
                    Переходим по ссылке <a href="https://github.com/new">https://github.com/new</a>
                    Затем заполняем Repository name - название Вашего репозитория, 
                    ставим галочку на Add a readme file (она упростит клонирование репозитория) и нажимаем Create repository.
                    В итоге Вы создали пустой репозиторий для запуска Вашего AR-приложения.
                </p>
                <p>
                    <div className="flex items-center justify-center my-6">
                        <img 
                            src={intro} 
                            alt="Создание репозитория"
                        />
                    </div>  
                </p>
            </p>
            <p className="uk-margin-small-bottom">4.2. Клонируем репозиторий на свой ПК.</p>
            <p>
                <p>
                    Для этого формируем и переходим по ссылке https://github.com/ваш ник на гитхаб/название вашего репозитория
                    Например, у меня доступ к репозиторию и следовательно к его клонированию получился https://github.com/mianger22/ar_dudar_lesson
                    Перейдя по ссылке, мы попадаем на страницу репозитория.
                    Жмем по зелёной кнопке Code и копируем значение из поля строки, кликнув по иконке сбоку
                </p>
                <p>
                    <div className="flex items-center justify-center my-6">
                        <img 
                            src={intro2} 
                            alt="Создание репозитория"
                        />
                    </div>
                </p>
            </p>
            <p>4.3. Теперь открываем диск С, ищем место, где будет лежать наш склонированный проект.</p>
            <p>
                <p>
                    Перед этим нужно установить GIT, вдобавок к нему можете скачать Git Bush (удобный инструмент для работы с GIT) 
                    Если решили пользоваться данной программой, то когда её установите, кликаете в выбранном месте правой кнопкой, выбираете open git bash here, запускаете
                    Если же нет, то надо открыть командную строку. Объяснять не буду, загуглите. 
                    В общем, при любом решении у Вас откроется терминал. 
                    Туда пишите git clone и нажимаете комбинацию Shift+Insert, чтобы вставилась скопированная строка с github`a, а затем - Enter
                </p>
                <p>
                    <div className="flex items-center justify-center my-6">
                        <img 
                            src={gitclone} 
                            alt="Создание репозитория"
                        />
                    </div>
                </p>
            </p>
            <p>4.4. Теперь открываем склонированную папку и скидываем туда наш index.html.</p>
            <p>
                <p>
                    После - открываем git bash или командную строку, если уже закрыли, если нет, то вводим cd {"наименование склонированной папки"} и 
                    и пишем и запускаем следующие команды по очереди: 
                </p>
                <CardCode 
                    set_codes={
                        {
                            "git": Codes.git_commands,
                        }
                    }
                />
                <p className="uk-margin-small-bottom">
                    Что они делают?
                </p>
                <p>
                    а) <b>git add --all</b> добавляет все изменения в отслеживаемые
                </p>
                <p>
                    б) <b>git commit -m "my first commit</b> коммитит их
                </p>
                <p>
                    в) <b>git push</b> отправляет (сохраняет) изменения (наш код) на GitHub 
                </p>
                <p>
                    Ура! Наш код сохранён. И мы его не потеряем в случае утраты компьютера. 
                </p>
            </p>
            <p>4.5. Теперь запускаем наш проект, включив github pages.</p>
            <p>
                <p>Для этого:</p>
                <p>4.5.1. Заходим в настройки проекта, как на скриншоте</p>
                <p>4.5.2. Далее мы включаем данную настройку, чтобы у нас запустился сервис</p>
                <p className="uk-margin-small-top">Готово!</p>
            </p>
        </article>
        <article className="uk-article">
            <p className="uk-text-lead uk-margin-medium-bottom">5. Теперь смотрим - заработало ли приложение.</p>
            <p>
                Для этого 
            </p>
            <p>
                5.1. создаём адрес в соответствие с шаблоном - - , где это - ваш ник на гитхаб, а это - имя репозитория. Сохраняем данный адрес, заливаем его в мессенджер, используемый Вами. Например, в телеграмм. 
            </p>
            <p>
                5.2. Заходим с телефона по нему. Вуаля! <b>Наше приложение запущено!</b> тут анимация или смайл
            </p>
            <p>
                5.3. Теперь наводим камерой на следующий маркер (мы его указывали в коде командой ..)
            </p>
            <p>
                <div className="flex items-center justify-center my-6 uk-margin-medium-top uk-margin-medium-bottom">
                    <img 
                        src="https://leonardo.osnova.io/af634cb0-038a-5245-8169-385adf3fb9ad/-/preview/1000/-/format/webp/" 
                        alt="AR метка"
                    />
                </div> 
            </p>
            <p>
                Наводим так, чтобы он весь уместился на экране и был как можно более параллелен смартфону. Ждём, пока наша программа проанализирует. 
                В итоге у нас должен появиться текст ... как на фото ниже.

                Если получилось, поздравляю Вас с первой AR - программой. 

                Очень просто. Верно?
            </p>
        </article>
        <article className="uk-article uk-margin-large-bottom">
            <p>Можете протестировать мой результат прежде чем возиться со своим, или чтобы сравнить свой с моим</p>
        </article>
    </div>
  );
}

export default CenterBlock;
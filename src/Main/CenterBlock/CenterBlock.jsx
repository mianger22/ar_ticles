import Code from "../../Common/Code";
import BoldCode from "../../Common/BoldCode";

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
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-text value="YA LUBLU TEBYA, MALISH :*" color="blue" scale="2 2 1"></a-text>
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
    <div className="item2 col-span-5 flex justify-center">
        <div>
            <div className="flex items-center justify-center my-6">
                <h1 className="text-xl font-bold">
                    Создание первого AR-приложения с помощью AR.js
                </h1>
            </div>

            <div className="mb-6">
                <img src="https://images.firstpost.com/wp-content/uploads/2019/02/Google-Maps-AR.jpg" alt="imagear" />
            </div>

            <div>
                <div className="italic flex items-center justify-center mb-6">
                    Всё просто.
                </div>

                <div className="mb-6">
                    <div className="mb-6">1. Создаём стандартный html-файл.</div>
                    <div className="mb-6 py-6 bg-amber-400">
                        <Code content={Codes.head_code} />
                        <b><Code content={Codes.comments.code} /></b>
                        <Code content={Codes.end_code} />
                        <button onClick={() => {navigator.clipboard.writeText(Codes.head_code + Codes.comments.code + Codes.end_code)}}>copy</button>
                    </div>
                    <div>
                        <b>Attention!</b> Мы пишем <BoldCode content={Codes.correct_meta} /> 
                        вместо <BoldCode content={Codes.uncorrect_meta} /> для того, чтобы камера была без неприятного и неудобного увеличения
                    </div>
                </div>

                <div className="mb-6">
                    <div className="mb-6">2. Подключаем библиотеку AR.js, прописывая соответствующие теги в index.html в разделе body:</div>
                    <div className="py-6 bg-amber-400">
                        <Code content={Codes.head_code} />
                        <b><Code content={Codes.connect_AR} /></b>
                        <b><Code content={Codes.comments.connect} /></b>
                        <Code content={Codes.end_code} />
                        <button onClick={() => {navigator.clipboard.writeText(Codes.head_code + Codes.connect_AR + Codes.comments.connect + Codes.end_code)}}>copy</button>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="mb-6">3. Добавляем следующий код:</div>
                    
                    <div className="mb-6 bg-amber-400"><Code content={Codes.body_AR} /></div>
                    
                    <div className="mb-6">Что он делает?</div>

                    <div className="mb-3">Во-первых, <b>a-scene</b> создаёт сцену</div>
                    <div className="mb-3">Во-вторых, <b>a-marker</b> ищет маркер наведённой камерой. Его аттрибут <b>preset="hiro"</b> позволяет программе понять - какой маркер ей искать
                    Всё, что внутри - выводит нужное нам содержимое над маркеромю. У нас это текст</div>

                    <div className="mb-3">Внимание! Я использовал <b>a-text</b> вместо <b><a-entity text="value: My first AR application"></a-entity></b>, для того чтобы текст был крупнее. Вы же можете использовать стандартный а-ембеддед</div>

                    <div className="mb-6">В итоге получился следующий код нашего первого AR-приложения:</div>
                    
                    <div className="py-6 bg-amber-400">
                        <Code content={Codes.head_code} />
                        <Code content={Codes.connect_AR} />
                        <Code content={Codes.body_AR} />
                        <Code content={Codes.end_code} />
                        <button onClick={() => {navigator.clipboard.writeText(Codes.head_code + Codes.connect_AR + Codes.body_AR + Codes.end_code)}}>copy</button>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="mb-3">
                        4. Теперь деплоим на гитхаб, меняем настройки, переходим по следующему адресу на созданный github pages c телефона, наводим на этот маркер
                        ожидаем, держа камеру так, чтобы картинка была параллельна. Как это сделать - в следующей статье.
                    </div>

                    <div>
                        1. Создаём репозиторий на гитхабе

                            Для этого переходим по ссылке <a href="https://github.com/new">https://github.com/new</a>

                            Заполняем Repository name - название Вашего репозитория, ставим галочку на Add a readme file (она упростит клонирование репозитория)
и нажимаем Create repository

Ура! Вы создали пустой репозиторий для запуска Вашего AR-приложения.

                            <div className="flex items-center justify-center my-6">
                                <img 
                                    src="../pictures/intro.jpeg" 
                                    alt="Создание репозитория"
                                />
                            </div>  

                        2. Клонируем его на свой ПК 

                            Для этого формируем и переходим по ссылке https://github.com/ваш ник на гитхаб/название вашего репозитория

                            Например, у меня доступ к репозиторию и следовательно к его клонированию получился https://github.com/mianger22/ar_dudar_lesson

                            Перейдя по ссылке, мы попадаем на страницу репозитория.

                            Жмем по зелёной кнопке Code и копируем значение из поля строки, кликнув по иконке сбоку
                        
                            <div className="flex items-center justify-center my-6">
                                <img 
                                    src="../pictures/intro2.jpeg" 
                                    alt="Создание репозитория"
                                />
                            </div>

                        3. Теперь открываем диск С, ищем место, где будет лежать наш склонированный проект. 
                        
                        Перед этим нужно установить GIT, вдобавок к нему можете скачать Git Bush (удобный инструмент для работы с GIT)
Если решили пользоваться данной программой, то когда её установите, кликаете в выбранном месте правой кнопкой, выбираете open git bash here, запускаете

                        Если же нет, то надо открыть командную строку. Объяснять не буду, загуглите. 

                        В общем, при любом решении у Вас откроется терминал. 

                        Туда пишите git clone и нажимаете комбинацию Shift+Insert, чтобы вставилась скопированная строка с github`a, а затем - Enter

                        <div className="flex items-center justify-center my-6">
                                <img 
                                    src="../pictures/gitclone.jpeg" 
                                    alt="Создание репозитория"
                                />
                            </div>

                        3. Теперь открываем склонированную папку и скидываем туда наш index.html. После - открываем git bash или командную строку, если уже закрыли, если нет, то вводим cd {"наименование склонированной папки"} и 

                        и пишем и запускаем следующие команды по очереди: 

                        <div className="py-6 bg-amber-400">
                            <Code content={Codes.git_commands} />
                            <button onClick={() => {navigator.clipboard.writeText(Codes.git_commands)}}>copy</button>
                        </div>

                        Что они делают?

                        а) <b>git add --all</b> добавляет все изменения в отслеживаемые
                        б) <b>git commit -m "my first commit</b> коммитит их
                        в) <b>git push</b> отправляет (сохраняет) изменения (наш код) на gitnub 

                        4. Заливаем его следующей командой:
                        
                        Ура! Наш код сохранён. И мы его не потеряем в случае утраты компьютера. Теперь запускаем наш проект, включив github pages

                        Для этого: 

                        1. Заходим в настройки проекта, как на скриншоте
                        2. Далее мы включаем данную настройку, чтобы у нас запустился сервис

                        Готово! 

                        Теперь создаём адрес в соответствие с шаблоном - - , где это - ваш ник на гитхаб, а это - имя репозитория

                        Сохраняем данный адрес, заливаем его в мессенджер, используемый Вами. Например, в телеграмм. 

                        Заходим с телефона по нему.

                        Вуаля! Наше приложение запущено! 

                        Теперь наводим камерой на следующий маркер (мы его указывали в коде командой ..)

                        <div className="flex items-center justify-center my-6">
                            <img 
                                src="https://leonardo.osnova.io/af634cb0-038a-5245-8169-385adf3fb9ad/-/preview/1000/-/format/webp/" 
                                alt="AR метка"
                            />
                        </div>                        

                        Наводим так, чтобы он весь уместился на экране и был как можно более параллелен смартфону.

                        Ждём, пока наша программа проанализирует. 

                        В итоге у нас должен появиться текст ... как на фото ниже

                        Если получилось, поздравляю Вас с первой AR - программой. 

                        Очень просто. Верно?
                    </div>

                    <div>
                        Можете протестировать мой результат прежде чем возиться со своим, или чтобы сравнить свой с моим
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CenterBlock;
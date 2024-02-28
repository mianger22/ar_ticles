import Code from "../../Common/Code";
import BoldCode from "../../Common/BoldCode";

const Codes = {
    0: `<!DOCTYPE html>
        <html lang="ru">
            \u00a0\u00a0\u00a0<head>
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta charset="UTF-8">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta http-equiv="X-UA-Compatible" content="ie=edge">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<title>Our first AR application</title>
            \u00a0\u00a0\u00a0</head>
            \u00a0\u00a0\u00a0<body>`,
    "comments": {
        "code": `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// Тут будет наш код`,
        "connect": `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// Мы подключили библиотеку AR.js`
    },
    2: `
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

    `,
    3: `
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    `,
    4: `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>`,
    5: `\u00a0\u00a0\u00a0</body>
        </html>`,
    6: `\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-scene embedded arjs>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-marker preset="hiro">
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-text value="YA LUBLU TEBYA, MALISH :*" color="blue" scale="2 2 1"></a-text>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</a-marker>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<a-entity camera></a-entity>
        \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0</a-scene>`,
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
                        <Code content={Codes[0]} />
                        <b><Code content={Codes.comments.code} /></b>
                        <Code content={Codes[5]} />
                    </div>
                    <div>
                        <b>Attention!</b> Мы пишем <BoldCode content={Codes[2]} /> 
                        вместо <BoldCode content={Codes[3]} /> для того, чтобы камера была без неприятного и неудобного увеличения
                    </div>
                </div>

                <div className="mb-6">
                    <div className="mb-6">2. Подключаем библиотеку AR.js, прописывая соответствующие теги в index.html в разделе body:</div>
                    <div className="py-6 bg-amber-400">
                        <Code content={Codes[0]} />
                        <b><Code content={Codes[4]} /></b>
                        <b><Code content={Codes.comments.connect} /></b>
                        <Code content={Codes[5]} />
                    </div>
                </div>

                <div className="mb-6">
                    <div className="mb-6">3. Добавляем следующий код:</div>
                    
                    <div className="mb-6 bg-amber-400"><Code content={Codes[6]} /></div>
                    
                    <div className="mb-6">Что он делает?</div>

                    <div className="mb-3">Во-первых, <b>a-scene</b> создаёт сцену</div>
                    <div className="mb-3">Во-вторых, <b>a-marker</b> ищет маркер наведённой камерой. Его аттрибут <b>preset="hiro"</b> позволяет программе понять - какой маркер ей искать
                    Всё, что внутри - выводит нужное нам содержимое над маркеромю. У нас это текст</div>

                    <div className="mb-3">Внимание! Я использовал <b>a-text</b> вместо этого, для того чтобы текст был крупнее. Вы же можете использовать стандартный а-ембеддед</div>

                    <div className="mb-6">В итоге получилось следующий код нашего первого AR-приложения:</div>
                    
                    <div className="py-6 bg-amber-400">
                        <Code content={Codes[0]} />
                        <Code content={Codes[4]} />
                        <Code content={Codes[6]} />
                        <Code content={Codes[5]} />
                    </div>
                </div>

                <div className="mb-6">
                    <div className="mb-3">
                        4. Теперь деплоим на гитхаб, меняем настройки, переходим по следующему адресу на созданный github pages c телефона, наводим на этот маркер
                        ожидаем, держа камеру так, чтобы картинка была параллельна. Как это сделать - в следующей статье.
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
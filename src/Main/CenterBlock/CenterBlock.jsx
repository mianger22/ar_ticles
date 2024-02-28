import Code from "../../Common/Code";
import BoldCode from "../../Common/BoldCode";

const Codes = {
    1: `
        <!DOCTYPE html>
        <html lang="ru">
            \u00a0\u00a0\u00a0<head>
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta charset="UTF-8">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<meta http-equiv="X-UA-Compatible" content="ie=edge">
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0<title>Our first AR application</title>
            \u00a0\u00a0\u00a0</head>
            \u00a0\u00a0\u00a0<body>
            \u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0// Тут будет наш код
            \u00a0\u00a0\u00a0</body>
        </html>

    `,
    2: `
        <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">

    `,
    3: `
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    `,
    4: `
        <!DOCTYPE html>
        <html lang="ru">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Our first AR application</title>
            </head>
            <body>
    `,
    5: `
            <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
            <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
            // Мы подключили библиотеку AR.js
    `,
    6: `
            </body>
        </html>
    `,
    7: `
        <a-scene embedded arjs>
            <a-marker preset="hiro">
                <a-text value="YA LUBLU TEBYA, MALISH :*" color="blue" scale="2 2 1"></a-text>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    `,
    8: `
        <!DOCTYPE html>
        <html lang="ru">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Our first AR application</title>
            </head>
            <body>
                <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
                <script src="https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js"></script>
                <a-scene embedded arjs>
                    <a-marker preset="hiro">
                        <a-text value="YA LUBLU TEBYA, MALISH :*" color="blue" scale="2 2 1"></a-text>
                    </a-marker>
                    <a-entity camera></a-entity>
                </a-scene>
            </body>
        </html>
    `
}

function CenterBlock() {
  return (
    <div className="item2 col-span-5 border-2 border-gray-600 border-solid flex justify-center">
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
                <div className="mb-6">
                    Всё просто.
                </div>

                <div className="mb-6">
                    1. Создаём стандартный html-файл. 

                    <Code content={Codes[1]} />

                    ! Внимание - мы пишем <BoldCode content={Codes[2]} /> 
                        вместо <BoldCode content={Codes[3]} /> для того, чтобы камера была без неприятного и неудобного увеличения
                </div>

                <div className="mb-6">
                    2. Подключаем библиотеку AR.js, прописывая соответствующие теги в index.html в разделе body
                    <div>
                        <Code content={Codes[4]} />
                        <span className="font-black">
                            <Code content={Codes[5]} />
                        </span>
                        <Code content={Codes[6]} />
                    </div>
                </div>

                <div className="mb-6">
                    3. Добавляем следующий код
                    <div className="font-black">
                        <Code content={Codes[7]} />
                    </div>

                    Что он делает

                    Во-первых, <b>a-scene</b> создаёт сцену
                    Во-вторых, <b>a-marker</b> ищет маркер наведённой камерой. Его аттрибут <b>preset="hiro"</b> позволяет программе понять - какой маркер ей искать
                    Всё, что внутри - выводит нужное нам содержимое над маркеромю. У нас это текст

                    Внимание! Я испрорльзовал <b>a-text</b> вместо этого, для того чтобы текст был крупнее. Вы же можете использовать стандартный а-ембеддед

                    В итоге получилось следующий код нашего первого AR-приложения:

                    копировать
                    
                    <Code content={Codes[8]} />
                </div>

                <div>
                    4. Деплоим на гитхаб, меняем настройки, переходим по следующему адресу на созданный github pages c телефона, наводим на этот маркер
                    ожидаем, держа камеру так, чтобы картинка была параллельна

                    Можете протестировать мой результат прежде чем возиться со своим, или чтобы сравнить свой с моим
                </div>
            </div>
        </div>
    </div>
  );
}

export default CenterBlock;
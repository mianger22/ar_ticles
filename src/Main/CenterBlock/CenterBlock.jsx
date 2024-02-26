function CenterBlock() {
  return (
    <div className="item2 col-span-5 border-2 border-gray-600 border-solid flex justify-center">
        <div>
            <h1 className="text-3xl font-bold mb-6">
                Создание первого AR-приложения с помощью AR.js
            </h1>
            <div className="mb-6">
                <img src="https://images.firstpost.com/wp-content/uploads/2019/02/Google-Maps-AR.jpg" alt="imagear" />
            </div>
            <div className="mb-6">
                Всё просто.

                1. Создаём стандартный html-файл. 
                2. Подключаем к нему библиотеку AR.js 
                3. Добавляем следующий код

                Что он делает

                Во-первых, а-сцен создаёт сцену
                Во-вторых, а-маркер ищет маркер наведённой камерой
                Всё, что внутри - выводит нужное нам содержимое над маркеромю. У нас это текст

                Внимание! Я испрорльзовал этот вместо этого

                4. Деплоим на гитхаб, меняем настройки, переходим по следующему адресу на созданный github pages c телефона, наводим на этот маркер
                ожидаем, держа камеру так, чтобы картинка была параллельна
            </div>
        </div>
    </div>
  );
}

export default CenterBlock;

# Game
## Папка core
В этой папке находятся фундаментальные классы и модели
### Класс `Game`
Является точкой входа в игру
На вход принимает html ноду на канвас и параметры конфигурации
Параметры конфигурации на данный момент:
> `with` - ширина холста  
> `height` - высота холста  
> `scale` - мастшабирование, ибо спрайты у нас достаточно крупные и надо бы чуть уменьшить все на холсте
#### Свойства
`canvas` нода html элемента canvas
`context` - 2d контекст канваса. С помощью контекста на канвасе все и рисуется
`currentMap` - Объект текущей карты. Объект является наследником суперкласса GameMap. Далее будет создан функционал изменения текущей карты по мере прохождения игры
#### Методы
Метод `initCanvas()` -  Этот метод применяет те параметры, которые мы передали, к холсту
Метод `hideCanvas()` - Скрывает холст. Это необходимо для того, чтобы не отображать холст до тех пор, пока игрок не нажмет кнопку 'старт' и не прогрузятся все ресурсы
 `showCanvas()` - для отображения холста, соответственно
 `start()` - этот метод запускает цикл `gameLoop`
 `gameLoop` - цикл игры. Данный метот запускается около 60 раз в секунду благодаря встроенному методу `requestAnimationFrame`, который выполняет переданную в него функцию.  `gameLoop` при каждом вызове очищает холст и перерисовует объекты с новыми координатами. Перерисовует объекты с помощью карты, которая находится в свойстве `currentMap`.
#
### Папка `core > models`
Тут у нас фундаментальные супер-классыы. Среди них:
- GameMap
- GameObject
- MovableGameObject
##
#### `Класс GameMap`
Класс представляет собой карту игры. Содержит в себе массив объектов, которые необходимо отрисовать на холсте. Для создания новой карты необходимо наследоваться от этого супер-класса и добавить в массив игровых объектов те, которые необходимо

#### Свойства
В конструктор принимает 2d контекст.
`context` - 2d контекст. Далее объект карты передает этот контекст игровым объектам
`mapObjects` - Массив игровых объектов `GameObject[]`. Все эти объекты должны быть унаследованы от GameObject, который содержит в себе метод `render`, который, в свою очередь, вызывается картой у каждого объекта
`resourcesLoaded` - флаг отвечающий за то, что все ресурсы(спрайты) успешно загружены, пока этот флаг будет иметь значение `false`, игровой цикл не будет отрисовывать что-либо на холсте

#### Методы
`loadResources()` - метод, который запускает загрузку ресурсов у всех объектов в массиве карты и дожидается успешной загрузки всех. Если возникает ошибка - игра не запускается
`render()` - данный метод проходится по всем объектам в массиве `mapObjects` и у каждого вызывает метод `render()`, в котором каждый объект рисует на холст что-то свое
##
#### Класс `GameObject`
Этот класс представляет собой супер-класс для игрового объекта. Любая сущность, будь то чародей, кусок земли, либо что-то еще, что необходимо нарисовать на холсте, должна быть наследником этого класса

#### Параметры конструктора
В конструктор принимает набор свойств среди которых:  
`context`,  
`size` - объект вида `{width: number, heigth: number}` - не обязательный, по умолчанию ширина и высота объекта 100px  
`position` - `{x: number, y: number}` - с помощью этого объекта можно задать начальное положения сущности на холсте. Не обязательное - по умолчанию 0:0  
`sprites` - `{resource: ImageResource, frames: number}` - с помощью этого свойства игровой объект работает с спрайтами. `resource` - экземпляр класса ImageResource, который загружает необходимое изображение по переданному пути. `frames` - число изображений в спрайте

#### Свойства класса
`context` - уже знакомый 2d контекст  
`sprite options` - Объект который содержит в себе 3 свойства:
- `sprites` - массив спрайтов типа `TSprite`
- `currentFrame` - текущий кадр спрайта
- `currentSpriteIndex` - Индекст текущего спрайта, к примеру, котогда персонаж бегает в право, нам нужен спрайт движения в право, когда он стоит на месте, то нужно переключить на спрайт там где он стоит на месте и просто дышит    

`position` - x, y координаты положения игрового объекта на холсте, относительно левого, верхнего угла  
`size` - width, height - ширина и высота игрового объекта

#### Методы класса
`getResources()` - возвращает объекты ресурсов из спрайтов  
`setPosition()` - сеттер для поля `position`  
`setSize()` - сеттер для поля `size` 
`spriteTick()` - метод, который вызывается каждый раз при перерисовке. Данный метод рисует на холсте определенный кадр спрайта, если кадры в спрайте закончились, то начинает с 1 кадра и по новой
`setCurrentFrame()` - устанавливает текущий кадр спрайта
`getCurrentSprite()` - возвращает текущий спрайт
`render()` - отрисовка игрового объекта на холсте. В общем случае - отрисовка кадра спрайта по определенным координатам
##
### `MovableGameObject`
Является наследником от супер-класса `GameObject` и расширяет его добавлением возможности движения игрового объекта

### Параметры конструктора
В конструктор этот класс принимает такие же параметры как и `GameObject` и параметры конфигурации движения объекта  
`allowedMoveDirections` - объект вида `{up: boolean, down: boolean, left: boolean, right: boolean}`, в зависимости от значения объект может двигаться вверх, вниз, влево, вправо  
`moveSettings` - объект, который пока что содержит только свойство `speed`, которое изменяет скорость передвижения объекта по холсту  
### Свойства класса
Свойства такие-же как и параметры в конструкторе

### Методы класса
`move()` - отвечат за передвижение объекта путем изменения x,y координат по своей логике. Базовая реализация этого метода заключается в движении игрового объекта в соответствии с нажатием клавиш `left`, `up`, `right`, `down`
#
### Папка `core > services`
В данной папке находятся сервисы. Под сервисами понимаются средства взаимводействия с чем-либо. В настоящее время есть сервис Клавиатуры, который позволяет удобно работать с событиями клавиатуры и сервис Глобальной конфигурации, в которой, например, можно включить или отключить debug режим.  
Сервисы доступны с помощью класса `GameContainer`. Статические поля этого класса являются инстансами сервисов.
##
### класс `KeyboardService`
Этот класс представляет собой средство взаимодействия с нажатиями клавиатуры
### Свойства класса
`pressed` - набор типа `Set` в котором хранятся `keyCode` нажатых в данный момент клавиш. Если ни одна клавиша не нажата, то `pressed` будет пуст.
### Методы класса
`initHandlers()` - устанавливает обработчики на нажатие и отжатие клавиши, которые добавляют и удаляют их коды в `pressed`  
`onKeyDown()` - обработчик нажатия клавиши  
`onKeyUp()` - обработчик отжатия клавиши
`reset()` - удалить всё из `pressed`
`isKeyPressed()` - на вход получает `keyCode` и возвращает `true` либо `false` в зависимости от того, нажата ли клавиша.
#
### Папка `game`
##
### класс `ImageResource`
Этот класс представляет собой менеджер ресурса(изображения)  
### Свойства класса
`path` - путь к изображению  
`image` - само изображение. Html объект, в свойство `src` записывается значение из `path`
### Методы класса
`getImage()` - возвращает html объект изображения  
`load()` - возвращает промис, который разрешается окончанием загрузки изображения, либо ошибкой
#
### Папка `entities`
В этой папке хранятся наследники от `GameObject` и `GameMap`
##
### Папка `entities > gameObjects`
В этой папке на текущий момент хранятся `Wizard(волшебник)` и `Ground(земля)`. Это игровые объекты, которые необходимо отрисовать на холсте
##
### Папка `entities > maps`
Тут находятся карты. На текущий момент там находится единственная карта `TestMap`, которая содержит только `Wizard` и `Ground`
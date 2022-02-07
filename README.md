# Предисловие
Программное обеспечение было разработано при поддержке автовокзала Барнаула в 2021 году в виде курсового проекта студентами 2 курса факультета информационных технологий группы ПИ-03.

# Терминал диспетчера

В наше время трудно представить современный авиа-, авто-, ж/д вокзал без систем громкой связи различного назначения. Это и системы информирования пассажиров, и оповещения внутри или с наружи вокзалов.

Сейчас практически в каждом городе, на любом вокзале можно увидеть электронные светодиодные табло и цифровые панели-мониторы, которые предоставляют пассажирам необходимую информацию. Главным преимуществом таких систем является быстрое изменение информации в любое время суток. На светодиодных табло предлагается справочная информация, в форме таблицы — о расписании самолетов, поездов, с указанием номеров рейсов, времени прибытия-отправления и т.д. В залах ожидания светодиодное табло имеет, как правило, большие размеры и на нем отображается не только расписание транспорта, но и ближайшее прибытие или отправление, а также указывается направление и выход к терминалу или на соответствующую платформу.

Все электронные табло и устройства громкой связи включены в одну систему, управление которой осуществляется через компьютер, с использованием сервера и специальных программ. Информацию вводят операторы-кассиры и диспетчер вокзала.
Объекты транспортной инфраструктуры ежедневно обслуживают большое количество пассажиров, значительная часть которых сосредоточена на сравнительно небольших площадях. Для грамотного информирования такого количества людей нужна удобная, гибкая и отказоустойчивая система.

# Программное обеспечение системы оповещения пассажиров объектов транспортной инфраструктуры с использованием визуальных, звуковых и индивидуальных каналов связи.
![](https://sun9-87.userapi.com/impg/DmRVv9Kw85QYx_gYwY4PiKOQiMvYZ0xSWuI3wQ/efMf5Fa2eOo.jpg?size=1920x996&quality=96&sign=9185dd003480cf7ac11a7aa9ed7a2d24&type=album)
Данный репозиторий представляет собой программный диспетчерский терминал , который представляет собой desktop-приложение, устанавливаемое на ПК под управлением Windows, является клиентским приложением и реализует в себе следующие функции:

<ul>
  <li>Программная микрофонная консоль, позволяющая выборочно передавать речевые сообщения в одну или несколько зон оповещения, предварительно настроенных на сервере.</li>
  <li>Программная визуальная консоль, позволяющая выборочно передавать визуальную информацию в одну или несколько зон оповещения, предварительно настроенных на сервере.</li>
  <li>Программная телефонная консоль, позволяющая выборочно передавать речевые, текстовые сообщения на любой тип телефонов.</li>
  <li>Программная Email консоль, позволяющая выборочно передавать аудио, видео, текстовые сообщения.</li>
  <li>Удобное управление аудио-видео информацией, с возможностью создания планов публикаций на те или иные устройства с последующим редактированием плана.</li>
  <li>Автоматическая и ручная верификация поступающей информации.</li>
</ul>

Необходимо учесть, что пользователь будет работать с диспетчерским терминалом долгое время без перерывов, поэтому необходимо снизить зрительную нагрузку – сделать интерфейс понятным, не перегруженным, с мягкой цветовой гаммой, где имеется акцент на важных деталях интерфейса.

Для реализации клиентской части в среде разработки Atom, был выбран стек web технологий, а именно:
<ul>
  <li>Html 5</li>
  <li>CSS 3</li>
  <li>JavaScript (ECMAScript 6)</li>
  <li>Node JS</li>
  <li>Chromium</li>
  <li>Electron</li>
</ul>

Для сохранения пользовательских настроек был использован локальный кэш Chromium local storage.
# Локальный запуск
1) Разместить файлы расширения .json из папки JSON по адресу "http://192.168.253.9:8080/Json/"
2) При желание url можно изменить в файле js\DataClasses.js
3) Запустить локальный сервер
4) Прописать в терминале проекта "npm start"
# Дальнейшее развите проекта
Использование React js

Интеграция  С++ компонентов

### Создание нативного приложения для Android на React Native
Android-приложение размещается на мобильных устройствах под управлением операционной системы Android, является клиентским приложением и реализует в себе следующие функции:
<ul>
  <li>Возможность бронирования, просмотра билетов на интересующий общественный транспорт.</li>
  <li>Вывод информации о текущем рейсе или о запланированных рейсах.</li>
  <li>Вывод расписания рейсов выбранного вокзала.</li>
  <li>Интеграция коммерческой информации.</li>
  <li>Возможность связаться с поддержкой или компанией перевозчиком.</li>
  <li>Своевременное push-уведомление о задержке, отмене, прибытию, отправлению рейса.</li>
  <li>Интерактивная карта вокзала, с которого будет происходить отправление или прибытие пассажира.</li>
</ul>

Данное клиентское приложение предоставляется широкой массе людей, поэтому интерфейс должен быть современным, простым, удобным и комфортным для рядового пользователя.

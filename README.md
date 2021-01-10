# Vacancy--it-special
<div>
   <div>
      <div><span style="font-size:20px;line-height:28px"><strong>Тестовое задание для React разработчика</strong></span></div>
      <div>Необходимо разработать React компонент для сортировки таблиц с данными и сверстать адаптивную таблицу.</div>
      <div>&nbsp;</div>
      <div><strong>Функциональность:</strong></div>
      <ul>
         <li>Сортировка по столбцам: при нажатии на название столбца строки таблицы сортируются по возрастанию, при повторном клике - по убыванию. Графическим элементом или текстовым сообщением указывается направление сортировки.</li>
         <li>Клиентская пагинация: данные необходимо отображать постранично, максимум 25 элементов на страницу. Необходимо предоставить пользовательскую навигацию для перехода по страницам.</li>
         <li>Фильтрация: компонент предоставляет текстовое поле, в которое пользователь может ввести текст и строки таблицы, данные которых не содержат подстроку, введённую пользователем, скрываются. Фильтрация осуществляется по нажатию на кнопку ""Найти"".</li>
         <li>По клике на строку таблицы значения полей выводятся в дополнительном блоке под таблицей.</li>
         <li>Данные в таблицу загружаются с сервера.</li>
      </ul>
      <div>Для демонстрации работы компонента необходимо сделать простую HTML страницу с адаптивной таблицей.</div>
      <div>&nbsp;</div>
      <div><strong>Данные берутся по ссылке</strong>:</div>
      <div><a href="http://www.filltext.com/?rows=100&amp;id=" rel="noopener noreferrer" target="_blank" data-saferedirecturl="https://www.google.com/url?q=http://www.filltext.com/?rows%3D100%26id%3D&amp;source=gmail&amp;ust=1610395726358000&amp;usg=AFQjCNGXCWs8M8RfgkBu_hLGlb8EZ23LMg">http://www.filltext.com/?rows=<wbr>100&amp;id=</a>{number|1000}&amp;<wbr>firstName={firstName}&amp;<wbr>lastName={lastName}&amp;email={<wbr>email}&amp;phone={phone|(xxx)xxx-<wbr>xx-xx}&amp;adress={addressObject}&amp;<wbr>description={lorem|32}</div>
      <div>&nbsp;</div>
      <div><strong>Требования:</strong></div>
      <ul>
         <li>Код должен быть написан на React &nbsp; &nbsp;</li>
         <li>Во время загрузки данных необходимо отображать индикатор</li>
         <li>Для хранения данных, полученных с API, должен использоваться &nbsp;redux, а также должен быть подключен reduxDevTools (во время build он должен остаться)</li>
      </ul>
      <div><strong>Дополнительным плюсом будет:</strong></div>
      <ul>
         <li>Корректное дробление основной компоненты на более мелкие части и переиспользование компонент</li>
         <li>Использование styled-components</li>
         <li>Использование typescript (можно совместно с propTypes)</li>
         <li>Минимальное количество rerender компонент (whyDidYouRender)</li>
      </ul>
      <div><strong>Схема визуального представления данных:</strong></div>
      <div>&nbsp;</div>
      <div>Если выбран пользователем с id = 101 , то под таблицей выводим следующую информацию:</div>
      <div>&gt; Выбран пользователь &lt;b&gt;Sue Corson&lt;/b&gt;</div>
      <div>&gt; Описание:</div>
      <div>&gt; &lt;textarea&gt;</div>
      <div>&gt; et lacus magna dolor...</div>
      <div>&gt; &lt;/textarea&gt;</div>
      <div>&gt; Адрес проживания: &lt;b&gt;9792 Mattis Ct&lt;/b&gt;</div>
      <div>&gt; Город: &lt;b&gt;Waukesha&lt;/b&gt;</div>
      <div>&gt; Провинция/штат: &lt;b&gt;WI&lt;/b&gt;</div>
      <div>&gt; Индекс: &lt;b&gt;22178&lt;/b&gt;</div>
      <div>&nbsp;</div>
   </div>
</div>

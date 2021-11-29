var IdElement

/*Сортировка*/
function Sort(device, sortProperty, order){
  if(order == 1){
    if(device == 'SMSDevice'){
      let data = DeviceDataSMS[IdElement]
      let newStr = '<tr class="tr"><th class="th th_left" onclick="Sort(\'SMSDevice\', \'time\', 2)">Время</th><th class="th" onclick="Sort(\'SMSDevice\', \'group\', 2)">Группа</th><th class="th" onclick="Sort(\'SMSDevice\', \'name\', 2)">Наименование</th><th class="th" onclick="Sort(\'SMSDevice\', \'recipient\', 2)">Кому</th><th class="th" onclick="Sort(\'SMSDevice\', \'content\', 2)">Текст</th><th class="th" onclick="Sort(\'SMSDevice\', \'status\', 2)">Статус</th><th class="th">Действие</th><th class="th th_right">Действие <p class="p_margin_0">над группой</p></th></tr>'
      if(sortProperty == 'time'){
        data.item.sort((prev, next) => prev.date.time - next.date.time);
      }
      else if(sortProperty=='status'){
        data.item.sort((prev, next) => prev.status - next.status);
      }
      else if(sortProperty=='recipient'){
        data.item.sort((prev, next) => prev.recipient - next.recipient);
      }
      else if(sortProperty=='group'){
        data.item.sort((prev, next) => prev.group.localeCompare(next.group));
      }
      else if(sortProperty=='name'){
        data.item.sort((prev, next) => prev.name.localeCompare(next.name));
      }
      else if(sortProperty=='content'){
        data.item.sort((prev, next) => prev.content.localeCompare(next.content));
      }
      PrintOnWindow(data, newStr)
    }
  }
  else if(order == 2){
    if(device == 'SMSDevice'){
      let data = DeviceDataSMS[IdElement]
      let newStr = '<tr class="tr"><th class="th th_left" onclick="Sort(\'SMSDevice\', \'time\', 1)">Время</th><th class="th" onclick="Sort(\'SMSDevice\', \'group\', 1)">Группа</th><th class="th" onclick="Sort(\'SMSDevice\', \'name\', 1)">Наименование</th><th class="th" onclick="Sort(\'SMSDevice\', \'recipient\', 1)">Кому</th><th class="th" onclick="Sort(\'SMSDevice\', \'content\', 1)">Текст</th><th class="th" onclick="Sort(\'SMSDevice\', \'status\', 1)">Статус</th><th class="th">Действие</th><th class="th th_right">Действие <p class="p_margin_0">над группой</p></th></tr>'
      if(sortProperty == 'time'){
        data.item.sort((next, prev) => prev.date.time - next.date.time);
      }
      else if(sortProperty=='status'){
        data.item.sort((next, prev) => prev.status - next.status);
      }
      else if(sortProperty=='recipient'){
        data.item.sort((next, prev) => prev.recipient - next.recipient);
      }
      else if(sortProperty=='group'){
        data.item.sort((next, prev) => prev.group.localeCompare(next.group));
      }
      else if(sortProperty=='name'){
        data.item.sort((next, prev) => prev.name.localeCompare(next.name));
      }
      else if(sortProperty=='content'){
        data.item.sort((next, prev) => prev.content.localeCompare(next.content));
      }
      PrintOnWindow(data, newStr)
    }
  }
}
/*---Сортировка---*/

/*Выводы в таблицы*/
function PrintOnWindow(data, newStr){
  let color  // Цвет строки таблицы
  let icon  // Иконка статуса
  let time  // Время

  // В таблицу
  document.getElementById('rezult').innerHTML = newStr;
  for (let i in data.item){
    // Формирование времени в удобочитаемом формате
    time = data.item[i].date.time[0]+''+data.item[i].date.time[1]+':'+data.item[i].date.time[2]+''+data.item[i].date.time[3]
    // Не отправленно
    if(data.item[i].status == 0){
      color = '<tr class="tr tr-red">'
      icon = '<div class="tdStatusNo"></div>'
    }
    // Отправленно
    else if(data.item[i].status == 1){
      color = '<tr class="tr">'
      icon = '<div class="tdStatusOK"></div>'
    }
    // Ожидание отправления
    else if (data.item[i].status == 2){
      color = '<tr class="tr tr-yelow">'
      icon = '<div class="tdStatusUnknow"></div>'
    }
    // Вывод
    document.getElementById('rezult').innerHTML += color+'<td class="td">'+ time +'</td><td class="td">'+ data.item[i].group +'</td><td class="td">'+ data.item[i].name+'</td><td class="td">'+ data.item[i].recipient+'</td><td class="td">'+ data.item[i].content+'</td><td class="td">'+icon+'</td><td class="td"><div class="tdActionDelete"></div></td><td class="td"><div class="tdActionDelete"></div></td></tr>';
   }
}
/*---Выводы в таблицы---*/

/*Информация о каналах СМС*/
function Device_info(IdElementNew, device){
    IdElement = IdElementNew // Id елемента
    let data        // Инофрмация из бд
    let sortProperty// Поле сортировки

    if(device == 'SMSDevice'){
      data = DeviceDataSMS[IdElement];
      document.getElementById('info_device').style.display='block';
      document.getElementById('TopLeftRightBtn_CMC').style.display='flex';
      sortProperty = 'time'
    }
    else if(device == 'EmailDevice'){
      data = DeviceDataEmail[IdElement];
    }
    else if(device == 'SpeakersDevice'){
      data = DeviceDataSpeakers[IdElement];
    }
    else if(device == 'ScoreboardDevice'){
      data = DeviceDataScoreboard[IdElement];
    }
    // Сортировка и вывод таблицы
    Sort(device, sortProperty, 1);
    // Секция информации о канале/устройстве
    document.getElementById('view_list_item').innerHTML = '';
    document.getElementById('view_list_item').innerHTML += '<div class="view_list_item_start_end_btn"><button type="button" class="view_list_item_end_btn">END</button><button class="view_list_item_start_btn">START</button></div><div class="item_status_light item_view_status_light_device" style="background:'+data.status+'"></div><div class="item_descriptions item_descriptions_view"><div class="item_descriptions_text item_descriptions_text--device">Имя: <span class="item_descriptions_text_meaning item_descriptions_text_meaning--device">'+data.name+'</span></div><div class="item_descriptions_text item_descriptions_text--device">Статус: <span class="item_descriptions_text_meaning item_descriptions_text_meaning--device">'+data.statusText+'</span></div><div class="item_descriptions_text item_view_descriptions_text">Описание: <span class="item_descriptions_text_meaning item_descriptions_text_meaning--device">'+data.description+'</span></div></div>'

  }
/*---Информация о каналах СМС---*/
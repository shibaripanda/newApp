export const getFixserviceSettings = () => {

    const listFastDevice = [
        {label: 'Ноутбуки', link: 'device4', request: 'Ноутбук'},
        {label: 'Телефоны', link: 'device1', request: 'Телефон'},
        {label: 'Планшеты', link: 'device2', request: 'Планшет'},
        {label: 'Картриджи', link: 'device3', request: 'Картридж'},
        {label: 'Reset', link: 'device0', request: ''}
    ]
    const listOrdersFields = [

        {
            index: 'name', 
            label: 'Заказчик',         
            variants: false,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 1  
        },
        {
            index: 'clientTel', 
            label: 'Телефон',        
            variants: false,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 2    
        },
        {
            index: 'addres', 
            label: 'Адрес Заказчика',
            variants: false,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 3  
        },
        {
            index: 'title' , 
            label: 'Устройство',      
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 4   
        },
        {
            index: 'firm', 
            label: 'Бренд',           
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 5    
        },
        {
            index: 'problem', 
            label: 'Неисправность',   
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 8    
        },
        {
            index: 'model', 
            label: 'Модель',          
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 6    
        },
        {
            index: 'sn' , 
            label: 'Серийный номер',  
            variants: false,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 7   
        },
        {
            index: 'view', 
            label: 'Внешний вид',     
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 9     
        },
        {
            index: 'speed', 
            label: 'Срочность',       
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 10     
        },
        {
            index: 'info', 
            label: 'Заметки',         
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 12   
        },
        {
            index: 'cost', 
            label: 'Стоимость',      
            variants: false,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 11     
        },
        {
            index: 'complect', 
            label: 'Комплектация',      
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false,
            place: 13     
        },
        {
            index: 'order', 
            label: 'ID',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'date', 
            label: 'Дата',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'dateOut', 
            label: 'Дата Выдачи',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'status', 
            label: 'Статус',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'manager', 
            label: 'Мененджер',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'masters', 
            label: 'Мастер',      
            variants: false,
            maintable: true,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'createdAt', 
            label: 'createdAt',      
            variants: false,
            maintable: false,
            neworder: false,
            card: false,
            block: true 
        },
        {
            index: 'updatedAt', 
            label: 'updatedAt',      
            variants: false,
            maintable: false,
            neworder: false,
            card: false,
            block: true 
        },
        {
            index: '__v', 
            label: '__v',      
            variants: false,
            maintable: false,
            neworder: false,
            card: false,
            block: true 
        },
        {
            index: '_id', 
            label: '_id',      
            variants: false,
            maintable: false,
            neworder: false,
            card: false,
            block: true 
        },
        {
            index: 'historylist', 
            label: 'История',      
            variants: false,
            maintable: false,
            neworder: false,
            card: true,
            block: true 
        },
        

    ]
    const listOfDataForFastInput = {
                    name: ['dfdfdf'],
               clientTel: ['dfdf'],
                  addres: ['rtrtrt'],
                   title: ['bnbnbn'],
                    firm: ['cvcvcbc'],
                 problem: ['qw'],
                   model: ['ete'],
                      sn: ['fg'],
                    view: ['rtyrtrtrt'],
                   speed: ['uiuiui'],
                    info: ['565656'],
                    cost: ['676767'],
                complect: ['dfdfdf']
    }
    const listOfStatuses = [
        {
            index: 'warranty', 
            label: 'Warranty',
            freez: true 
        },
    
        {
            index: 'new', 
            label: 'New',
            freez: true 
        },
        {
            index: 'process', 
            label: 'Process',
            freez: true 
        },
        {
            index: 'wait', 
            label: 'Waiting',
            freez: true 
        },
        
        {
            index: 'ready', 
            label: 'Ready',
            freez: true 
        },
        {
            index: 'close', 
            label: 'Close',
            freez: true 
        },
        {
            index: 'cancel', 
            label: 'Сancel',
            freez: true 
        },
        

    ]
    const docprint = {

        namecomp: {label: 'Название сервисного центра', 
        text: 'XF Service'},

        name: {label: 'Название главного документа о приемке в ремонт', 
        text: 'Заказ на оказание услуг'},

        time: {label: 'Время работы исполнителя', 
        text:  'пн-пт: 11:00 - 20:00, сб-вскр: 11:00 - 18:00'},

        varantname: {label: 'Название гарантийного документа', 
        text:  'Акт приёмки-передачи оборудования и выполненных работ'},

        cancelname: {label: 'Название документа о выдаче без ремонта', 
        text:  'Акт приёмки-передачи оборудования'},

        recviz: {label: 'Реквизиты компании (Исполнитель)', 
        text: 'ЧСУП "Компьютер и Принтер", Минск, Лобанка 94, павильон 10'},

        oznak: {label: 'Подтверждение ознакомления', 
        text: 'Заказчик ознакомлен с данным заказ-нарядом и принимает все условия.'},

        canceloznak: {label: 'Согласие о получении без ремонта', 
        text: 'Заказчик не имеет претензий по качеству и срокам оказанных услуг.'},

        soglas: {label: 'Информация о согласовании', 
        text: 'Стоимость согласовывается в течении 10 дней, ОПЛАТА ПРОИЗВОДИТСЯ ТОЛЬКО ПОСЛЕ ОКОНЧАНИЯ РЕМОНТА'},

        filial: {label: 'Название филиала', 
        text: 'Сухарево'},

        telefonnumber: {label: 'Телефоны компании', 
        text: '+375 44 7310419 A1 +375 33 6351401 МТС'},

        varanttext: {label: 'Текст гарантии', 
        text: `- Исполнитель берет на себя обязанность на безвозмездное устранение неисправностей связанных с выполнением выше указанных работ в течении гарантийного срока.
        - Гарантийный ремонт выполняется по новому заказу на оказание услуг в стандартные сроки.
        - Если в результате диагностики выясняется, что случай не является гарантийным, то такие работы могут быть произведены на платной основе по согласованию с заказчиком.
        - Гарантийный срок продлевается на время нахождения оборудования в мастерской
        
        Гарантийные обязательства по бесплатному ремонту не распространяется на следующие случаи:
        - Механические повреждения, попадания внутрь жидкости и других посторонних предметов (насекомые и т.п.)
        - Нарушены правила эксплуатации, хранения или транспортировки товара в случае действий покупателя, третьих лиц или обстоятельств непреодолимой силы (пожар, наводнение и т. п.)
        - Отсутствует или испорчен гарантийный талон (гарантийный талон не восстанавливается, ксерокопии или другие копии действительными не считаются).
        - Нарушение маркировки или невозможность считывания серийного номера с изделия, нарушены пломбы, наклейки, стикеры, обнаружены следы их переклеивания, восстановления и т. п.
        - Повреждения, вызванные стихийными бедствиями, пожаром, неблагоприятными бытовыми факторами (например, повышенной влажностью помещения, где использовалось изделие)
        - Есть следы механических, химических, электротехнических повреждений, как самого товара, так и его компонентов, а также в случае присутствия следов перегрева или переохлаждения либо воздействия пыли или насекомых.
        - Нарушена или испорчена комплектность оборудования.
        - Есть следы использования изделия в режимах с нагрузкой, превышающей нормативную. 
        - Присутствует вмешательство в техническую начинку товара, следы самостоятельного ремонта. Ремонт в не уполномоченном сервисном центре, либо произведенный лицами, не имеющими полномочий производить ремонт.
        - Гарантия не распространяется на з/ч предоставленные заказчиком.
        
        Заказчик не имеет претензий по сроку и качеству оказанных услуг.`},

        maintext: {label: 'Главный текст приемки оборудования в ремонт', 
        text: `1. Предварительный срок диагностики и ремонта до 15 рабочих дней (без учета суббот, воскресений и праздников), за исключением п.2 и п.3. В момент сдачи оборудования в ремонт приемщик оговаривает ОРИЕНТИРОВОЧНЫЕ СРОКИ, которые могут измениться ввиду отсутствия или пересортицы з/ч, загруженности мастера и иных обстоятельств, но без согласования с заказчиком не может превышать срока установленного в данном пункте.
        2. При отсутствии деталей, диагностика и (или) ремонт может продлеваться на срок до их получения по согласованию с заказчиком.
        3. При периодически появляющейся неисправности ремонт может продлеваться на неопределенный срок, до полного устранения дефектов по согласованию с заказчиком.
        4. В случае отказа заказчика от дальнейшей диагностики и (или) ремонта по п.2 и п.3 оборудование выдается в течении 5 рабочих дней с момента требования, после оплаты заказчиком расходов понесенных мастерской, если такие имели место и если была согласована платная услуга или были заказаны детали.
        5. После диагностики и (или) ремонта могут оставаться незначительные следы вскрытия и внешнего воздействия.
        6. Ремонт производится только в отношении неисправностей, которые указаны заказчиком при приёмке, за исключением п.7.
        7. Если в результате ремонта возникли неисправности, заведомо не оговоренные, но препятствующие исправлению первоначальных неисправностей и (или) препятствующие полноценной работе оборудования, то данные работы проводятся после согласования с заказчиком. Заказчик и исполнитель обязуются считать такие согласования имеющими силу.
        8. При диагностике и (или) ремонте оборудования в некоторых случаях невозможно вернуть состояние оборудования на момент сдачи в ремонт.
        9. Оборудование, с согласия заказчика принимается без разборки и проверки скрытых неисправностей и повреждений. Заказчик согласен, что все обнаруженные в процессе диагностики и ремонта неисправности возникли до сдачи оборудования в ремонт.
        10. Сервисный центр не несет ответственности за любую информацию (а так же карты памяти и sim карты, оставленные в оборудовании), хранящуюся на оборудовании.
        11. При обнаружении в оборудовании следов воздействия влаги, а также при сильных механических повреждениях, гарантия на произведенный ремонт НЕ РАСПРОСТРАНЯЕТСЯ (п.11.4, СТБ 1303-2007).
        12. Заказчик принимает на себя риск возможной полной или частичной утраты работоспособности оборудования в процессе диагностики и (или) ремонта в случае грубых нарушений пользователем условий эксплуатации, наличия следов коррозии, попадания жидкости либо механических воздействий.
        13. Первичная диагностика производится БЕСПЛАТНО. Стоимость акта диагностики, если таковой необходим заказчику стоит 75 б.р..
        14. Ремонт без согласования стоимости с заказчиком допускается, если его стоимость не превышает предварительно согласованную стоимость, указанную в заказе.
        15. Исполнитель в праве передавать оборудование на ремонт и (или) диагностику третьим организациям или индивидуальным предпринимателям под свою ответственность без согласования с заказчиком.
        16. Согласование с заказчиком может осуществляться любым доступным способом (звонок, переписка в мессенджерах, устное согласование, письменное согласование).`},
    }
    
    
    return (
        {
            userSettings: {
                userFastDevices: listFastDevice,
                userStatusFilter: listOfStatuses.map(item => item.index),
                userMainTable: listOrdersFields.filter(item => item.maintable === true) //.map(item => item.index)
            } ,
            documentSettings: {
                documents: docprint
            },
            generalSettings: {
                generalOrderList: listOrdersFields,
                generalDataList: listOfDataForFastInput,
                generalStatusList: listOfStatuses
            }
        }
    )
}
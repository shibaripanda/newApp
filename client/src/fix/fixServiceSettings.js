export const fixServiceSettings = async () => {

    const listFastDevice = [
        {label: 'Ноутбуки', link: 'device4', request: 'Ноутбук'},
        {label: 'Телефоны', link: 'device1', request: 'Телефон'},
        {label: 'Планшеты', link: 'device2', request: 'Планшет'},
        {label: 'Картриджи', link: 'device3', request: 'Картридж'},
        {label: 'Reset', link: 'device0', request: ''}
    ]

    const listOrdersFields = [

        {client :       { label: 'Заказчик',        variants: false, freez: true, data: false, maintable: true }},
        {contact :      { label: 'Телефон',         variants: false, freez: true, data: false, maintable: true }},
        {clientAdress : { label: 'Адрес Заказчика', variants: false, freez: true, data: false, maintable: true }},
        {title :        { label: 'Устройство',      variants: true,  freez: true, data: false, maintable: true }},
        {firm :         { label: 'Бренд',           variants: true,  freez: true, data: false, maintable: true }},
        {problem :      { label: 'Неисправность',   variants: true,  freez: true, data: false, maintable: true }},
        {model :        { label: 'Модель',          variants: true,  freez: true, data: false, maintable: true }},
        {sn :           { label: 'Серийный номер',  variants: false, freez: true, data: false, maintable: false }},
        {look :         { label: 'Внешний вид',     variants: true,  freez: true, data: false, maintable: false }},
        {speed :        { label: 'Срочность',       variants: true,  freez: true, data: false, maintable: false }},
        {info :         { label: 'Заметки',         variants: true,  freez: true, data: false, maintable: false }},
        {cost :         { label: 'Стоимость',       variants: false, freez: true, data: false, maintable: false }},
    ]

    const listOfDataForFastInput = {
               client: ['dfdfdf'],
              contact: ['dfdf'],
        clientAdress : ['rtrtrt'],
                title: ['bnbnbn'],
                 firm: ['cvcvcbc'],
              problem: ['qw'],
                model: ['ete'],
                   sn: ['fg'],
                 look: ['rtyrtrtrt'],
                speed: ['uiuiui'],
                 info: ['565656'],
                 cost: ['676767']
    }
    
    return (
        {
            listFastDevice: listFastDevice,
            listOrdersFields: listOrdersFields,
            listOfDataForFastInput: listOfDataForFastInput
        }
    )
}
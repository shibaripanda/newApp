export const fixServiceSettings = async () => {
    const listFastDevice = [
        {label: 'Ноутбуки', link: 'device4', request: 'Ноутбук'},
        {label: 'Телефоны', link: 'device1', request: 'Телефон'},
        {label: 'Планшеты', link: 'device2', request: 'Планшет'},
        {label: 'Картриджи', link: 'device3', request: 'Картридж'},
        {label: 'Reset', link: 'device0', request: ''}
    ]

    const listOrdersFields = [
        {label: 'Заказчик',        index: 'client',          variants: false, freez: true, data: ['dfdfdf', 'dfdfdfdf', 'dfdfdfsesefs']},
        {label: 'Телефон Заказчика',         index: 'contact', variants: false, freez: true, data: ['dfdfdf', 'dfdfdfdf', 'dfdfdfsesefs']},
        {label: 'Адрес Заказчика', index: 'clientAdress',    variants: true,  freez: false, data: ['dfdfdf', 'dfdfdfdf', 'dfdfdfsesefs']},
        {label: 'Устройство',      index: 'title',           variants: true,  freez: true, data: ['dfdfdf', 'dfdfdfdf', 'dfdfdfsesefs']},
        {label: 'Бренд',           index: 'firm',            variants: true,  freez: true, data: ['dfdfdf', 'dfdfdfdf', 'dfdfdfsesefs']},
        {label: 'Модель',          index: 'model',           variants: true,  freez: true, data: ['dfdfdf', 'dfdfdfdf', 'dfdfdfsesefs']},
        {label: 'Серийный номер',  index: 'sn',              variants: false, freez: true, data: ['dfdfdf', 'dfdfdfdf', 'dfdfdfsesefs']},
        {label: 'Внешний вид',     index: 'look',            variants: true,  freez: true, data: ['dfdfdf', 'dfdfdfdf', 'dfdfdfsesefs']},
        {label: 'Срочность',       index: 'speed',           variants: true,  freez: false, data: ['dfdfdf', 'dfdfdfdf', 'dfdfdfsesefs']},
        {label: 'Заметки',         index: 'info',            variants: false, freez: false, data: ['dfdfdf', 'dfdfdfdf', 'dfdfdfsesefs']},
        {label: 'Предварительная стоимость',    index: 'cost',  variants: false, freez: false, data: ['dfdfdf', 'dfdfdfdf', 'dfdfdfsesefs']},
    ]

    return (
        {
            listFastDevice: listFastDevice,
            listOrdersFields: listOrdersFields
        }
    )
}
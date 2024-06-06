export const fixServiceSettings = async () => {

    const listFastDevice = [
        {label: 'Ноутбуки', link: 'device4', request: 'Ноутбук'},
        {label: 'Телефоны', link: 'device1', request: 'Телефон'},
        {label: 'Планшеты', link: 'device2', request: 'Планшет'},
        {label: 'Картриджи', link: 'device3', request: 'Картридж'},
        {label: 'Reset', link: 'device0', request: ''}
    ]

    const listOrdersFields = [

        {
            index: 'client', 
            label: 'Заказчик',         
            variants: false, 
            freez: true, 
            data: false, 
            maintable: true,
            hide: false  
        },
        {
            index: 'contact', 
            label: 'Телефон',        
            variants: false, 
            freez: true, 
            data: false, 
            maintable: true,
            hide: false  
        },
        {
            index: 'clientAdress', 
            label: 'Адрес Заказчика',
            variants: false, 
            freez: true, 
            data: false, 
            maintable: true,
            hide: false
        },
        {
            index: 'title' , 
            label: 'Устройство',      
            variants: true,  
            freez: true, 
            data: false, 
            maintable: true,
            hide: false 
        },
        {
            index: 'firm', 
            label: 'Бренд',           
            variants: true,  
            freez: true, 
            data: false, 
            maintable: true,
            hide: false  
        },
        {
            index: 'problem', 
            label: 'Неисправность',   
            variants: true,  
            freez: true, 
            data: false,
            maintable: true,
            hide: false  
        },
        {
            index: 'model', 
            label: 'Модель',          
            variants: true,  
            freez: true, 
            data: false, 
            maintable: true,
            hide: false  
        },
        {
            index: 'sn' , 
            label: 'Серийный номер',  
            variants: false, 
            freez: true,
            data: false, 
            maintable: false,
            hide: false 
        },
        {
            index: 'look', 
            label: 'Внешний вид',     
            variants: true,  
            freez: true, 
            data: false, 
            maintable: false,
            hide: false   
        },
        {
            index: 'speed', 
            label: 'Срочность',       
            variants: true,  
            freez: true, 
            data: false, 
            maintable: false,
            hide: false   
        },
        {
            index: 'info', 
            label: 'Заметки',         
            variants: true,  
            freez: true, 
            data: false, 
            maintable: false,
            hide: false  
        },
        {
            index: 'cost', 
            label: 'Стоимость',      
            variants: false, 
            freez: true, 
            data: false,
            maintable: false,
            hide: false   
        },
        {
            index: 'orderId', 
            label: 'ID',      
            variants: false, 
            freez: true, 
            data: false,
            maintable: true,
            hide: true  
        },
        {
            index: 'date', 
            label: 'Дата',      
            variants: false, 
            freez: true, 
            data: false,
            maintable: false,
            hide: true 
        },
        {
            index: 'status', 
            label: 'Статус',      
            variants: false, 
            freez: true, 
            data: false,
            maintable: false,
            hide: true 
        },
        {
            index: 'manager', 
            label: 'Мененджер',      
            variants: false, 
            freez: true, 
            data: false,
            maintable: false,
            hide: true 
        },
        {
            index: 'masters', 
            label: 'Мастер',      
            variants: false, 
            freez: true, 
            data: false,
            maintable: false,
            hide: true 
        },
        

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
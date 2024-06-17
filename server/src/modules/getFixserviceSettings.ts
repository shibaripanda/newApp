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
            index: 'client', 
            label: 'Заказчик',         
            variants: false,
            maintable: true,
            neworder: true,
            card: true,
            block: false  
        },
        {
            index: 'contact', 
            label: 'Телефон',        
            variants: false,
            maintable: true,
            neworder: true,
            card: true,
            block: false  
        },
        {
            index: 'clientAdress', 
            label: 'Адрес Заказчика',
            variants: false,
            maintable: true,
            neworder: true,
            card: true,
            block: false
        },
        {
            index: 'title' , 
            label: 'Устройство',      
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false 
        },
        {
            index: 'firm', 
            label: 'Бренд',           
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false  
        },
        {
            index: 'problem', 
            label: 'Неисправность',   
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false  
        },
        {
            index: 'model', 
            label: 'Модель',          
            variants: true,
            maintable: true,
            neworder: true,
            card: true,
            block: false  
        },
        {
            index: 'sn' , 
            label: 'Серийный номер',  
            variants: false,
            maintable: false,
            neworder: true,
            card: true,
            block: false 
        },
        {
            index: 'look', 
            label: 'Внешний вид',     
            variants: true,
            maintable: false,
            neworder: true,
            card: true,
            block: false   
        },
        {
            index: 'speed', 
            label: 'Срочность',       
            variants: true,
            maintable: false,
            neworder: true,
            card: true,
            block: false   
        },
        {
            index: 'info', 
            label: 'Заметки',         
            variants: true,
            maintable: false,
            neworder: true,
            card: true,
            block: false  
        },
        {
            index: 'cost', 
            label: 'Стоимость',      
            variants: false,
            maintable: false,
            neworder: true,
            card: true,
            block: false   
        },
        {
            index: 'orderId', 
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
            maintable: false,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'status', 
            label: 'Статус',      
            variants: false,
            maintable: false,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'manager', 
            label: 'Мененджер',      
            variants: false,
            maintable: false,
            neworder: false,
            card: true,
            block: false 
        },
        {
            index: 'masters', 
            label: 'Мастер',      
            variants: false,
            maintable: false,
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
            index: 'history', 
            label: 'История',      
            variants: false,
            maintable: false,
            neworder: false,
            card: true,
            block: true 
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
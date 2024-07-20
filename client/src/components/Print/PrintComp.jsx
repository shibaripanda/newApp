import React from "react"
import { Text } from "@mantine/core";


export const PrintComp = React.forwardRef((props, ref) => {

    // console.log(props.props.data)

    const camp = {}
    camp.docprint = {
        namecomp: 'XF Service',
        name: 'Заказ на оказание услуг',
        time: 'пн-сб: 11:00 - 20:00, вскр: 11:00 - 18:00',
        maintext: <Text size="15px"> 
        <p>1. Предварительный срок диагностики и ремонта до 15 рабочих дней (без учета суббот, воскресений и праздников), за исключением п.2 и п.3. В момент сдачи оборудования в ремонт приемщик оговаривает ОРИЕНТИРОВОЧНЫЕ СРОКИ, которые могут измениться ввиду отсутствия или пересортицы з/ч, загруженности мастера и иных обстоятельств, но без согласования с заказчиком не может превышать срока установленного в данном пункте.</p>
        <p>2. При отсутствии деталей, диагностика и (или) ремонт может продлеваться на срок до их получения по согласованию с заказчиком.</p>
        <p>3. При периодически появляющейся неисправности ремонт может продлеваться на неопределенный срок, до полного устранения дефектов по согласованию с заказчиком.</p>
        <p>4. В случае отказа заказчика от дальнейшей диагностики и (или) ремонта по п.2 и п.3 оборудование выдается в течении 5 рабочих дней с момента требования, после оплаты заказчиком расходов понесенных мастерской, если такие имели место и если была согласована платная услуга или были заказаны детали.</p>
        <p>5.После диагностики и (или) ремонта могут оставаться незначительные следы вскрытия и внешнего воздействия.</p>
        <p>6. Ремонт производится только в отношении неисправностей, которые указаны заказчиком при приёмке, за исключением п.7.</p>
        <p>7. Если в результате ремонта возникли неисправности, заведомо не оговоренные, но препятствующие исправлению первоначальных неисправностей и (или) препятствующие полноценной работе оборудования, то данные работы проводятся после согласования с заказчиком. Заказчик и исполнитель обязуются считать такие согласования имеющими силу.</p>
        <p>8. При диагностике и (или) ремонте оборудования в некоторых случаях невозможно вернуть состояние оборудования на момент сдачи в ремонт.</p>
        <p>9. Оборудование, с согласия заказчика принимается без разборки и проверки скрытых неисправностей и повреждений. Заказчик согласен, что все обнаруженные в процессе диагностики и ремонта неисправности возникли до сдачи оборудования в ремонт.</p>
        <p>10. Сервисный центр не несет ответственности за любую информацию (а так же карты памяти и sim карты, оставленные в оборудовании), хранящуюся на оборудовании.</p>
        <p>11. При обнаружении в оборудовании следов воздействия влаги, а также при сильных механических повреждениях, гарантия на произведенный ремонт НЕ РАСПРОСТРАНЯЕТСЯ (п.11.4, СТБ 1303-2007).</p>
        <p>12. Заказчик принимает на себя риск возможной полной или частичной утраты работоспособности оборудования в процессе диагностики и (или) ремонта в случае грубых нарушений пользователем условий эксплуатации, наличия следов коррозии, попадания жидкости либо механических воздействий.</p>
        <p>13. Первичная диагностика производится БЕСПЛАТНО. Стоимость акта диагностики, если таковой необходим заказчику стоит 75 б.р..</p>
        <p>14. Ремонт без согласования стоимости с заказчиком допускается, если его стоимость не превышает предварительно согласованную стоимость, указанную в заказе.</p>
        <p>15. Исполнитель в праве передавать оборудование на ремонт и (или) диагностику третьим организациям или индивидуальным предпринимателям под свою ответственность без согласования с заказчиком.</p>
        <p>16. Согласование с заказчиком может осуществляться любым доступным способом (звонок, переписка в мессенджерах, устное согласование, письменное согласование).</p></Text>,

        varantname: 'Акт приёмки-передачи оборудования и выполненных работ',
        
        recviz: 'ЧСУП "Компьютер и Принтер" , РБ, Минск, ул. Лобанка, д. 94, павильон 10',
        oznak: 'ddd',
        soglas: 'dddd',
        filial: 'ffsfsf'
    }
    
    const post = props.props.data
    console.log(post)
    
    const textSet = (index) => {
        if(typeof camp.docprint[index] !== 'undefined'){
            return camp.docprint[index]
        }
        return 'не настроено'
    }

    return (
        <div ref={ref} className="App">
            
        <table border="0" cellSpacing="0" cellPadding="0" width='775px' className="table">
            <tbody>
            <tr>
                <td align="left"><b><font size="2">{camp.docprint.namecomp ? camp.docprint.namecomp : 'не настроено'}</font></b></td>  
            </tr>
            <tr>
                <td align="center"><b><font size="3">{textSet('name')} № {post.order} от {new Date(post.date).toLocaleString().split(',')[0]}</font></b></td>
            </tr>
            </tbody>
        </table>
        
        <table border="1" cellSpacing="0" cellPadding="0" width='775px' className="table">
            <tbody>
            <tr>
                <td colSpan="5" rowSpan="2" align="center"><b>&nbsp;Исполнитель принимает, а заказчик передает нижеуказанное оборудование</b></td>
                <td colSpan="3" rowSpan="2" align="center"><b><h2>&nbsp;{post.clientTel}</h2></b></td>
                <td colSpan="1" rowSpan="14" className='vertical'><span><h1>&nbsp;{post.order}</h1></span></td>
            </tr>
            <tr>
                
            </tr>
            <tr>
                <td colSpan="2"><b>&nbsp;Заказ №</b></td>
                <td align="center">&nbsp;{post.order}</td>
                <td colSpan='2' align="center">&nbsp;{new Date(post.date).toLocaleString()}</td>
                <td align="center">&nbsp;Сотрудник СЦ:</td>
                <td colSpan='2' align="center">&nbsp;{post.manager}</td>
            </tr>
            <tr>
                <td colSpan="2"><b>&nbsp;Заказчик:</b></td>
                <td colSpan="6">&nbsp;{post.name}, {post.addres}, {post.clientTel}</td>
            </tr>    
            <tr>
                <td colSpan="2"><b>&nbsp;Оборудование:</b></td>
                <td colSpan="3">&nbsp;{post.title}</td>
                <td colSpan="3">&nbsp;{post.model}</td>
            </tr>
            <tr>
                <td colSpan="2"><b>&nbsp;Серийный номер:</b></td>
                <td colSpan="6">&nbsp;{post.sn}</td>
            </tr>
            <tr>
                <td colSpan="2"><b>&nbsp;Внешний вид:</b></td>
                <td colSpan="6">&nbsp;{post.view}</td>
            </tr>
            <tr>
                <td colSpan="2"><b>&nbsp;Комплектация:</b></td>
                <td colSpan="6">&nbsp;{post.complect}</td>
            </tr>
            <tr>
                <td colSpan="2"><b>&nbsp;Неисправность со слов заказчика:</b></td>
                <td colSpan="6">&nbsp;{post.problem}</td>
            </tr>
            <tr>
                <td colSpan="2"><b>&nbsp;Предварительная стоимость:</b></td>
                <td colSpan="6"><b>&nbsp;{post.cost} бел.руб.</b></td>
            </tr>
            <tr>
                <td colSpan="8"><b>&nbsp;{camp.docprint.soglas ? camp.docprint.soglas : 'не настроено'}</b></td>
            </tr>
            <tr>
                <td colSpan={2}><b>&nbsp;Телефоны для справок:</b></td>
                <td colSpan={6}>&nbsp;{camp.docprint.telefonnumber ? camp.docprint.telefonnumber : 'не настроено'}</td>
                
            </tr>
            <tr>
                <td colSpan={2}><b>&nbsp;Исполнитель:</b></td>
                <td colSpan={6}>&nbsp;{camp.campinfo}</td>
            </tr>
            <tr>
                <td colSpan={2}><b>&nbsp;Время работы исполнителя:</b></td>
                <td colSpan={6}>&nbsp;{camp.docprint.time ? camp.docprint.time : 'не настроено'}</td>
            </tr>
            </tbody>
        </table>

        <table border="0" cellSpacing="0" cellPadding="0" width='775px' className="table">
            <tbody>
            <tr>
                <td align="center" colSpan={5}><b><font size="3">Правила и условия ремонта и (или) диагностики.</font></b></td>
            </tr>
            <tr>
                <td className="border" colSpan={5}>
                <font size="3">
                <div className="perenos">{camp.docprint.maintext ? camp.docprint.maintext : 'не настроено'}</div>
                </font>
                </td>
            </tr>
            <tr>
                <td colSpan={5}><font size="4"><b>&nbsp;{camp.docprint.oznak ? camp.docprint.oznak : 'не настроено'}</b></font></td>
            </tr>
            <tr>
                <td colSpan={5}>&nbsp;</td>
            </tr>
            <tr>
                <td align="left" colSpan={2} width={'50%'}><font size="3">Заказчик:</font></td>
                <td align="right">&nbsp;</td>
                <td align="left" colSpan={2} width={'50%'}><font size="3">Сотрудник СЦ:</font></td>
            </tr>
            <tr>
                <td align="center" colSpan={2}>&nbsp;</td>
                <td align="right">&nbsp;</td>
                <td align="center" colSpan={2}>&nbsp;</td>
            </tr>
            <tr>
                <td align="left" width={'10%'}><font size="3">Подпись:</font></td>
                <td align="right" width={'35%'}><font size="3">{post.name}</font></td>
                <td align="right" width={'10%'}>&nbsp;</td>
                <td align="left" width={'10%'}><font size="3">Подпись:</font></td>
                <td align="right" width={'35%'}><font size="3">{post.manager}</font></td>
            </tr>
            <tr>
                <td align="left" colSpan={2}><div className="create-line"></div></td>
                <td align="right">&nbsp;</td>
                <td align="left" colSpan={2}><div className="create-line"></div></td>
            </tr>
            </tbody>
        </table>

        </div>
    )
})
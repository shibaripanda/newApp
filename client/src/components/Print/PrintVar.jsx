import React from "react"
// import rubles from '('rubles').rubles'
var rubles = require('rubles').rubles


export const PrintVar = React.forwardRef((props, ref) => {
    
    const post = props.props.post
    const camp = props.props.camp

    const serviceList = () => {

        if(post.service.length){
            const list = [
                <tr key={0}>
                <td width={'70%'} align="center">
                    <b>{'Выполненная работа'}</b>
                </td>
                <td width={'15%'} align="center">
                    <b>{'Гарантия'}</b>
                </td>
                <td width={'15%'} align="center">
                    <b>{'Стоимость'}</b>
                </td>
                </tr>
            ]
            for(let i of post.service){
                list.push(
                        <tr key={post.service.indexOf(i) + 1}>
                            <td align="left">
                            &nbsp;&nbsp;{Number(post.service.indexOf(i) + 1) + '. ' + i.name}
                            </td>
                            <td align="center">
                                {i.var + ' дней '}
                            </td>
                            <td align="center">
                                {i.cost + ' бел.руб. '}
                            </td>
                        </tr>
                )
            }
            const sumCost = post.service.reduce((sum, a) => sum + Number(a.cost), 0)
            if(sumCost > 0){
                list.push(
                    <tr key={1000}>
                        <td align="center">
                        {rubles(post.service.reduce((sum, a) => sum + Number(a.cost), 0))[0].toUpperCase() + rubles(post.service.reduce((sum, a) => sum + Number(a.cost), 0)).substr(1)}
                        </td>
                        <td align="center">
                        {' Итого: '}
                        </td>
                        <td align="center">
                            {sumCost + ' бел.руб. '}
                        </td>
                    </tr>
                )
            }
    
            return(
                <div>
                        <div align="center"><b><font size="4"> Акт выполненных работ</font></b></div>
                        <div key={324}>
                        <table border="1" cellSpacing="0" cellPadding="0" width='775px' className='tableAct'>
                            <tbody>
                                {list}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
        
    }

    return (
        <div ref={ref} className="App">

        <table border="0" cellSpacing="0" cellPadding="0" width='775px' className="table">
            <tbody>
                <tr>
                    <td align="left"><b><font size="2">{camp.docprint.filial}</font></b></td>  
                </tr>
                <tr>
                    <td align="center"><b><font size="3">{camp.docprint.varantname} № V{post.order} от {new Date(Date.now()).toLocaleString().split(',')[0]}</font></b></td>
                </tr>
            </tbody>
        </table>
        
        <table border="1" cellSpacing="0" cellPadding="0" width='775px' className="table">
            <tbody>
            <tr>
                <td colSpan="8" rowSpan="2" align="center"><b>&nbsp;Заказчик принимает, а исполнитель передает нижеуказанное оборудование</b></td>
                <td colSpan="1" rowSpan="14" className='vertical'><span><h1>&nbsp;{post.order}</h1></span></td>
            </tr>
            <tr>
                
            </tr>
            <tr>
                <td colSpan="2">&nbsp;Заказ №</td>
                <td align="center">&nbsp;{post.order}</td>
                <td colSpan='2' align="center">&nbsp;{new Date(post.date).toLocaleString()}</td>
                <td align="center">&nbsp;Сотрудник СЦ:</td>
                <td colSpan='2' align="center">&nbsp;{post.manager}</td>
            </tr>
            <tr>
                <td colSpan="2">&nbsp;Заказчик:</td>
                <td colSpan="6">&nbsp;{post.name}, {post.addres}, {post.clientTel}</td>
            </tr>    
            <tr>
                <td colSpan="2">&nbsp;Оборудование:</td>
                <td colSpan="3">&nbsp;{post.title}</td>
                <td colSpan="3">&nbsp;{post.model}</td>
            </tr>
            <tr>
                <td colSpan="2">&nbsp;Серийный номер:</td>
                <td colSpan="6">&nbsp;{post.sn}</td>
            </tr>
            <tr>
                <td colSpan="2">&nbsp;Комплектация:</td>
                <td colSpan="6">&nbsp;{post.complect}</td>
            </tr>
            <tr>
                <td colSpan="2">&nbsp;Неисправность со слов заказчика:</td>
                <td colSpan="6">&nbsp;{post.problem}</td>
            </tr>
            <tr>
                <td colSpan={2}>&nbsp;Телефоны для справок:</td>
                <td colSpan={6}>&nbsp;{camp.docprint.telefonnumber}</td>
                
            </tr>
            <tr>
                <td colSpan={2}>&nbsp;Исполнитель:</td>
                <td colSpan={6}>&nbsp;{camp.campinfo}</td>
            </tr>
            <tr>
                <td colSpan={2}>&nbsp;Время работы исполнителя:</td>
                <td colSpan={6}>&nbsp;пн-сб: 11:00 - 20:00, вскр: 11:00 - 18:00</td>
            </tr>
            </tbody>
        </table>
        
        {serviceList()}
        <div>&nbsp;</div>

        <table border="0" cellSpacing="0" cellPadding="0" width='775px' className="table">
            <tbody>
            <tr>
                <td align="center" colSpan={5}><b><font size="3">Правила и условия гарантийного обслуживания</font></b></td>
            </tr>
            <tr>
                <td className="border" colSpan={5}>
                <font size="3">
                <div className="perenos">{camp.docprint.varanttext}</div>
                </font>
                </td>
            </tr>
            <tr>
                <td colSpan={5}>&nbsp;</td>
            </tr>
            <tr>
                <td colSpan={5}><font size="4"><b>&nbsp;{camp.docprint.oznak}</b></font></td>
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
                <td align="center" colSpan={2}><div className="create-line"></div></td>
                <td align="right">&nbsp;</td>
                <td align="center" colSpan={2}><div className="create-line"></div></td>
            </tr>
            </tbody>
        </table>

        </div>
    )
})
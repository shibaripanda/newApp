import { getLink } from "../modules/getLink"
import { axiosCall } from "../modules/axiosCall"
import { sessionData } from "../modules/sessionData"

export class OrderClass {

    constructor(order){
        this.manager = order.manager
        this.title = order.title
        this.model = order.model
        this.sn = order.sn
        this.problem = order.problem
        this.name = order.name
        this.addres = order.addres
        this.date = order.date
        this.clientTel = order.clientTel
        this.cost = order.cost
        this.historylist = order.historylist
        this.order = order.order
        this.view = order.view
        this.complect = order.complect
        this.speed = order.speed
        this.campId = order.campId
        this.service = order.service
        this.status = order.status
        this.masters = order.masters
        this.dateOut = order.dateOut
        this.info = order.info
        this.firm = order.firm
        this.soglas = order.soglas
        this._id = order._id
        this.link = getLink()
    }
    
    async updateOrder(obj){
          await axiosCall('PUT', `${this.link}/api/orders/${this._id}`, obj)
    }
    async deleteOrder(){
        await axiosCall('DELETE', `${this.link}/api/orders/${this._id}`, {})
    }
    async updateHistory(text, status){
        if(!status){
            await axiosCall('PUT', `${this.link}/api/orders/${this._id}`, {$addToSet: {
              historylist: {date: Date.now(),
                 text: text,
                  name: sessionData('read', 'name')}
                }})
          }
          else{
            if(['warranty', 'new'].includes(status)){
              await axiosCall('PUT', `${this.link}/api/orders/${this._id}`, {dateOut: 0, soglas: false, status: status, $addToSet: {
                historylist: {date: Date.now(), 
                  text: text, 
                  name: sessionData('read', 'name')}
                }})
            }
            else if(['cancel', 'close'].includes(status)){
              const time = Date.now()
              this.dateOut = time
              await axiosCall('PUT', `${this.link}/api/orders/${this._id}`, {dateOut: time, status: status, $addToSet: {
                historylist: {date: Date.now(), 
                  text: text, 
                  name: sessionData('read', 'name')}
                }})
            }
            else{
              await axiosCall('PUT', `${this.link}/api/orders/${this._id}`, {status: status, $addToSet: {
              historylist: {date: Date.now(), 
                text: text, 
                name: sessionData('read', 'name')}
              }})
            }
          }
    }
    async addNewService(service){
        await axiosCall('PUT', `${this.link}/api/orders/${this._id}`, {$addToSet: {
            historylist: {
              date: Date.now(),
              text: 'Добавлена услуга: ' + service.service + ', ' + service.price + 'руб, ' + service.varant + 'дней, ' + service.master,
              name: sessionData('read', 'name')
            },
            service: service
          },
          soglas: false
        })
    }
    async updateServiceSoglas(status){
        if(status){
            await axiosCall('PUT', `${this.link}/api/orders/${this._id}`, {$addToSet: {
              historylist: {
                date: Date.now(),
                text: 'Согласовано на: ' + this.service.reduce((a, b) => a + b.price, 0) + ' руб.',
                name: sessionData('read', 'name')
              }
            },
            soglas: status
          })
        }
        else{
            await axiosCall('PUT', `${this.link}/api/orders/${this._id}`, {$addToSet: {
                historylist: {
                date: Date.now(),
                text: 'Отказ: ' + this.service.reduce((a, b) => a + b.price, 0) + ' руб.',
                name: sessionData('read', 'name')
                }
            },
             soglas: status
            })
        }
    }
    async deleteService(service){
        await axiosCall('PUT', `${this.link}/api/orders/${this._id}`, {$addToSet: {
            historylist: {
              date: Date.now(),
              text: 'Удалена услуга: ' + service.service + ', ' + service.price + 'руб, ' + service.varant + 'дней, ' + service.master,
              name: sessionData('read', 'name')
            }
          }, $pull: {service: service},
          soglas: false
        })
    }
}
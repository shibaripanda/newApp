import React from 'react';
import { PrintComp } from './PrintComp';
import { PrintVar } from './PrintVar';
import ReactToPrint, { PrintContextConsumer } from 'react-to-print';
import { Button } from '@mantine/core';


export class Print extends React.PureComponent {
    constructor(props){
        super(props)
        this.props = props.props
    }

    back = () => {
      this.props.close()
    }
    clickPrint(step){
        step()
        this.back()
    }
    documentSheet(func){
      if(this.props.format === 'order'){
        setTimeout(() => func(), 1000)
        return <PrintComp props={this.props} ref={el => (this.componentRef = el)}/>
      }
      else if(this.props.format === 'var'){
        return <PrintVar props={this.props} ref={el => (this.componentRef = el)}/>
      }
    }

  render() {
    return (
      <div>
        <ReactToPrint bodyClass="print-agreement" content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <div>
              <Button onClick={this.back}  style={{width: 775}}>Отмена</Button>
              <hr></hr>
              <Button autoFocus={true} type="primary" style={{width: 775}} onClick={(e) => this.clickPrint(handlePrint)}>Print</Button>
              {/* {this.props.toString()} */}
              {this.documentSheet(this.clickPrint(handlePrint))}
              </div>
            )}
          </PrintContextConsumer>
        </ReactToPrint>
      </div>
    )
  }
}



// function refreshPage(){
//     window.location.reload()
// }

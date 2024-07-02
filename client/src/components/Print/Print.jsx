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
    checkPress(e, step){
      if(e.key === 'Enter'){
        step()
      }
    }
    clickPrint(step){
        step()
        this.back()
    }
    documentSheet(){
      console.log(this.props)
      if(this.props.format === 'order'){
        return <PrintComp props={this.props} ref={el => (this.componentRef = el)}/>
      }
      else if(this.props.format === 'var'){
        return <PrintVar props={this.props} ref={el => (this.componentRef = el)}/>
      }
    }

  render() {
    console.log(this.props)
    return (
      <div>
        <ReactToPrint bodyClass="print-agreement" content={() => this.componentRef}>
          <PrintContextConsumer>
            {({ handlePrint }) => (
              <div>
              <Button onClick={this.back}  style={{width: 775}}>Отмена</Button>
              <Button autoFocus={true} type="primary" style={{width: 775}} onClick={(e) => this.clickPrint(handlePrint)}>Print</Button>
              {this.props.toString()}
              {/* {this.documentSheet()} */}
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

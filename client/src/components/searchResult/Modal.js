import React from 'react';
import ModalFltDetails from './Modal_FltDetails'

export default class Modal extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
                  <div class="ts-content">
                      <h1 tabindex="0" class="ts-fip__modal__title ts-enable-focus">
                          From <strong>Dubai (DXB)</strong> to <strong>Chandigarh (IXC)</strong></h1>
                      <p class="ts-fip__modal__sub-title">
                          Total duration:<time>9 &nbsp;hrs 5 &nbsp;mins</time>
                      </p>
                      <div class="ts-fip__modal__wrap">
                      <ModalFltDetails />
                      </div>
                  </div>              
          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      );
    }
  }

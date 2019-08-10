import React, { Component } from 'react';
import {getLoggedInUser} from '../utils'

/*
  Render-props можно использовать для вынесения стейтфул логики

  Напишите компонент, который будет добавлять тултип к кнопке.
  Пусть тултип будет обычным `div`

  Пусть на тултипе будет написано "Hello, i'm Tooltip"

  Укажите у тултипа аттрибут `data-testid="tooltip"`

  Кнопка должна получать onClick коллбек из компонента-обёртки
*/

export class WithTooltip extends Component {
  state = {
    isActiveTooltip: false
  }
  onClick = (e) => {
    this.setState({ isActiveTooltip: !this.state.isActiveTooltip })
  }
  render() {
    return (
      <React.Fragment>
        { this.props.children(this.onClick) }
        { this.state.isActiveTooltip ? <div data-testid="tooltip">Hello, i'm Tooltip</div> : null }
      </React.Fragment>
    )
  }
}
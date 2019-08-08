import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ''
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  addNewRecord = value => {
    this.props.saveData([
      ...this.props.savedData,
      { value, id: this.getId(), is_checked: false }
    ]);
  };

  toggleRecordComplete = itemId => {
    this.props.saveData(
      this.props.savedData.map(item => {
        if (item.id === itemId) {
          item.is_checked = !item.is_checked;
        }
        return item;
      })
    );
  };

  createNewRecord = event => {
    event.preventDefault();
    const { inputValue } = this.state;
    if (inputValue) {
      this.addNewRecord(inputValue);
      this.setState({ inputValue: '' });
    }
  };

  render() {
    const { savedData: items } = this.props;
    return (
      <Card title="Список дел">
        <div className="todo t-todo-list">
          <form
            className="todo-item todo-item-new"
            onSubmit={this.createNewRecord}
          >
            <input
              className="todo-input t-input"
              onChange={this.handleChange}
              value={this.state.inputValue}
              placeholder="Введите задачу"
            />
            <button className="plus t-plus" type="submit">
              +
            </button>
          </form>
          {items.map(item => (
            <div className="todo-item t-todo" key={item.id}>
              <div className="todo-item__text">{item.value}</div>
              <span
                className="todo-item__flag t-todo-complete-flag"
                onClick={() => this.toggleRecordComplete(item.id)}
              >
                [{item.is_checked ? 'x' : ' '}]
              </span>
            </div>
          ))}
        </div>
      </Card>
    );
  }

}

export default withLocalstorage('todo-app', [])(Todo);

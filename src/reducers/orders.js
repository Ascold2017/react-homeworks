import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';
import _ from 'lodash';
// Реализуйте редьюсер
// Типы экшенов, которые вам нужно обрабатывать уже импортированы
// Обратите внимание на `orders.test.js`.
// Он поможет понять, какие значения должен возвращать редьюсер.
const orderPositions = [
  'clients',
  'conveyor_1',
  'conveyor_2',
  'conveyor_3',
  'conveyor_4',
  'finish'
];
export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER: {
      const {
        id,
        ingredients = [],
        position = 'clients',
        recipe
      } = action.payload;
      return [...state, { id: +id, ingredients, position, recipe }];
    }
    case MOVE_ORDER_NEXT: {
      return state.slice(0).map(order => {
        if (order.id === +action.payload) {
          const nextPositionIndex =
            orderPositions.findIndex(pos => pos === order.position) + 1;
          if (
            nextPositionIndex !== 0 &&
            nextPositionIndex < orderPositions.length -1
          ) {
            order.position = orderPositions[nextPositionIndex];
          }
          if (
            nextPositionIndex === orderPositions.length - 1 &&
            _.isEqual(_.sortBy(order.recipe), _.sortBy(order.ingredients))
          ) {
            order.position = orderPositions[nextPositionIndex];
          }
        }
        return order;
      });
    }
    case MOVE_ORDER_BACK: {
      return state.slice(0).map(order => {
        if (order.id === +action.payload) {
          const prevPositionIndex =
            orderPositions.findIndex(pos => pos === order.position) - 1;
          if (prevPositionIndex >= 1) {
            order.position = orderPositions[prevPositionIndex];
          }
        }
        return order;
      });
    }
    case ADD_INGREDIENT: {
      const { from, ingredient } = action.payload;
      return state.slice(0).map(order => {
        if (order.position === from) {
          order.ingredients = [...order.ingredients, ingredient];
        }
        return order;
      });
    }
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);

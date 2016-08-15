import { CHANGE_NETWORK_PROPERTY, CHANGE_NODE_ID } from '../actions';

const initialState = {
  name: 'Rede Bayesiana',
  height: 500,
  width: 800,
  selectedNodes: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NETWORK_PROPERTY:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case CHANGE_NODE_ID:
      return {
        ...state,
        selectedNodes: state.selectedNodes.map(x =>
          (x === action.payload.id ? action.payload.nextId : x)
        ),
      };
    default:
      return state;
  }
};
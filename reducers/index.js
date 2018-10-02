import {GET_DECKS, GET_DECK, ADD_CARD_TO_DECK, SAVE_DECK_TITLE} from '../actions'

const decks = (state = {}, action) => {
  switch (action.type) {
    case GET_DECKS :
      return {
        ...state,
        ...action.decks
      }
    case GET_DECK :
      return {
        ...state,
        ...action.deck
      }
    case SAVE_DECK_TITLE :
      return {
        ...state,
        [action.newDeck]: {
          title: action.newDeck,
          questions: []
        }
      }
    case ADD_CARD_TO_DECK :
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: [...state.questions, action.title]
        }
      }
    default :
      return state
  }
}

export default decks


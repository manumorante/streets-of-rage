/**
 * 
 */
export function reducer(state, action) {
  switch (action.type) {
    case 'PLAY':
      return { ...state, play: true }
    default:
      throw new Error()
  }
}

export const initialState = {
  playing: false,
  step: 0,
}
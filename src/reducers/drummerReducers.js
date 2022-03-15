import { INCREASE_SCORE, RESET_SCORE } from '../actions/types'

const intialState = {
  drummers: [
    {
      id: 0,
      image:
        'https://variety.com/wp-content/uploads/2021/10/Joe-Wong-Matt-Cameron-by-Michael-Kravetsky-Ohana-2021-MRK07509.jpg',
      score: 0,
      name: "Drummer A"
    },
    {
      id: 1,
      image:
        'https://thumbs.dreamstime.com/b/punk-male-drummer-playing-drum-set-isolated-white-background-punk-male-drummer-playing-drum-set-195243849.jpg',
      score: 0,
      name: "Drummer B"
    },
    {
      id: 2,
      image:
        'https://media.istockphoto.com/photos/drum-kit-picture-id483556448?k=20&m=483556448&s=612x612&w=0&h=IRxZEEcE-PPiozoBZ41kOoiMM6NTWvZDl8Fe8mrtYWc=',
      score: 0,
      name: "Drummer C"
    },
    {
      id: 3,
      image:
        'https://media.istockphoto.com/photos/closeup-of-red-drum-set-on-white-background-picture-id146967607?k=20&m=146967607&s=612x612&w=0&h=GXDkI4FI8kW65kPwJBrapyH2Msu_cN3b4F_569FAvsw=',
      score: 0,
      name: "Drummer D"
    }
  ]
}

const drummerReducer = (state = intialState, action) => {
  switch (action.type) {
    case INCREASE_SCORE:
      return {
        ...state,
        drummers: action.payload
      }
    case RESET_SCORE:
      let updatedDrummers = state.drummers.map(drummer => {
        return { ...drummer, score: 0 }
      })
      return {
        ...state,
        drummers: updatedDrummers
      }

    default:
      return state
  }
}

export default drummerReducer

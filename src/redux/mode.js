export function light() {
  return {
    type: 'LIGHT_MODE',
  };
}

export function dark() {
  return {
    type: 'DARK_MODE',
  };
}

function modeReducer(mode = 'dark', action) {
  switch (action.type) {
    case 'LIGHT_MODE':
      return 'light';
    case 'DARK_MODE':
      return 'dark';
    default:
      return mode;
  }
}

export default modeReducer;

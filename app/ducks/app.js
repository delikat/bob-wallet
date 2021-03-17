import { clientStub as settingClientStub } from '../background/setting/client';

const SET_DEEPLINK = 'app/setDeeplink';
const SET_DEEPLINK_PARAMS = 'app/setDeeplinkParams';
const SET_ITEMS_PER_PAGE = 'app/setItemsPerPage';

const settingClient = settingClientStub(() => require('electron').ipcRenderer);

const initialState = {
  deeplink: '',
  deeplinkParams: {},
  itemsPerPage: 5,
};

export const setDeeplink = url => ({
  type: SET_DEEPLINK,
  payload: url,
});

export const clearDeeplink = () => ({
  type: SET_DEEPLINK,
  payload: '',
});

export const setDeeplinkParams = params => ({
  type: SET_DEEPLINK_PARAMS,
  payload: params,
});

export const clearDeeplinkParams = () => ({
  type: SET_DEEPLINK_PARAMS,
  payload: {},
});

export const setItemsPerPage = (itemsPerPage) => async (dispatch) => {
  await settingClient.setItemsPerPage(itemsPerPage) ;
  dispatch({
    type: SET_ITEMS_PER_PAGE,
    payload: itemsPerPage,
  });
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DEEPLINK:
      return {
        ...state,
        deeplink: action.payload,
      };
    case SET_DEEPLINK_PARAMS:
      return {
        ...state,
        deeplinkParams: action.payload,
      };
    case SET_ITEMS_PER_PAGE:
      return {
        ...state,
        itemsPerPage: action.payload,
      }
    default:
      return state;
  }
}

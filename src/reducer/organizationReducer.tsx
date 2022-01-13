import { debug } from 'console';
import {
    GET_ORGANIZATION_LIST,
    UPDATE_SELECTED_ORGANIZATION
} from '../constants/index';

const initialOrganizationList = [{name: '' ,id: 0}];

const initialStates = {
    organizationList: initialOrganizationList,
    selectedOrganizationInfo: {}
};

function organizationReducer(state = initialStates, action: any) {
    switch(action.type) {
        case GET_ORGANIZATION_LIST:
            return {...state, organizationList: action.payload};
        case UPDATE_SELECTE
            return {...state, selectedOrganizationInfo: action.payload};
        default:
            return state;
    }
}

export default organizationReducer;
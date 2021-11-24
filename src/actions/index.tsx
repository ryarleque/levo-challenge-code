import axios from 'axios';
import {
    GET_ORGANIZATION_LIST,
    UPDATE_SELECTED_ORGANIZATION,
    GET_TEST_REPORT_LIST,
    GET_TEST_REPORT_DETAIL,
    FILTER_BY_SERVICE
} from '../constants/index';

export const getOrganizationList = () => (dispatch: any) => {
    return axios.get("https://my.api.mockaroo.com/organizations.json?key=2e435a20")
    //using only finally because the provied service got the maximun limited of requests per day. So I am mocking data.
    .finally(() => {
        dispatch({
            type: GET_ORGANIZATION_LIST,
            payload: [
                {name: 'Organization Name A', id: 10},
                {name: 'Organization Name B', id: 20},
                {name: 'Organization Name C', id: 30},
                {name: 'Organization Name D', id: 40}
            ]
        }); 
    });
}

export const updateSelectedOrganization = (organizationId : number) => (dispatch: any) => {
    return axios.get("https://my.api.mockaroo.com/organizations.json?key=2e435a20&organizationId"+organizationId)
    //using only finally because the provied service got the maximun limited of requests per day. So I am mocking data.
    .finally(() => {
        dispatch({
            type: UPDATE_SELECTED_ORGANIZATION,
            payload: {name: 'Organization Name A', id: 10}
        }); 
    });
}


export const getTestReportList = (organizationId : number) => (dispatch: any) => {
    return axios.get("https://my.api.mockaroo.com/organizations.json?key=2e435a20&organizationId"+organizationId)
    //using only finally because the provied service got the maximun limited of requests per day. So I am mocking data.
    .finally(() => {
        dispatch({
            type: GET_TEST_REPORT_LIST,
            payload: [
                {id: 100, executionNumber: 1, startedTime: "3 hours ", durationTime: "10m", passedItems: 10, failedItems: 2},
                {id: 200, executionNumber: 2, startedTime: "1 hour", durationTime: "9m", passedItems: 12, failedItems: 1},
                {id: 300, executionNumber: 3, startedTime: "58 min", durationTime: "10m", passedItems: 10, failedItems: 3},
                {id: 400, executionNumber: 4, startedTime: "10 min", durationTime: "8m", passedItems: 15, failedItems: 4}
            ]
        }); 
    });
}

export const getTestReportDetail = (organizationId : number, reportId: number) => (dispatch: any) => {
    return axios.get("https://my.api.mockaroo.com/organizations.json?key=2e435a20&organizationId="+organizationId+"&reportId="+reportId)
    //using only finally because the provied service got the maximun limited of requests per day. So I am mocking data.
    .finally(() => {
        dispatch({
            type: GET_TEST_REPORT_DETAIL,
            payload: 
            {
                totalTests: 14,
                failedTests: 3,
                passedTests: 11,
                isSuccess: false,
                failedList: [
                    { id: 10000, title: "GET /application/{id}/services", durationTime: "10s" },
                    { id: 10001, title: "GET /application/{id}/services", durationTime: "20s" },
                    { id: 10002, title: "PUT /application/{id}/services", durationTime: "50s" }
                ],
                passedList: [
                    { id: 10004, title: "POST /application/{id}/services", durationTime: "36s" },
                    { id: 10005, title: "GET /application/{id}/services", durationTime: "4s" },
                    { id: 10006, title: "PUT /application/{id}/services", durationTime: "10s" },
                    { id: 10007, title: "POST /application/{id}/services", durationTime: "2s" },
                    { id: 10008, title: "GET /application/{id}/services", durationTime: "10s" },
                    { id: 10009, title: "PUT /application/{id}/services", durationTime: "1s" },
                    { id: 10010, title: "POST /application/{id}/services", durationTime: "10s" },
                    { id: 10011, title: "GET /application/{id}/services", durationTime: "7s" },
                    { id: 10012, title: "POST /application/{id}/services", durationTime: "1s" },
                    { id: 10013, title: "PUT /application/{id}/services", durationTime: "20s" }
                ]
            }
        }); 
    });
}

export const filterByService = (item: string) => (dispatch: any) => {
    return axios.get("https://my.api.mockaroo.com/organizations.json?key=2e435a20&item="+item)
    //using only finally because the provied service got the maximun limited of requests per day. So I am mocking data.
    //Since I am using mock data, I will filter based on the "saved" list
    .finally(() => {
        dispatch({
            type: FILTER_BY_SERVICE,
            payload: item
        }); 
    });
}
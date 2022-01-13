import {
    GET_TEST_REPORT_LIST,
    GET_TEST_REPORT_DETAIL,
    FILTER_BY_SERVICE
} from '../constants/index';


const initialReportData = [
    {id: 0, executionNumber: 0, startedTime: "", durationTime: "", passedItems: 0, failedItems: 0}
];

const initialTestReportDetailData =[
{
    totalTests: 0,
    failedTests: 0,
    passedTests: 0,
    isSuccess: false,
    failedList: 
        { id: 0, title: "", durationTime: "" },
    passedList: 
        { id: 0, title: "", durationTime: "" }
}];

const initialStates = {
    testReportList: initialReportData,
    testReportDetail: initialTestReportDetailData
};

function testReportReducer(state = initialStates, action: any) {
    switch(action.type) {
        case GET_TEST_REPORT_LIST:
            return {...state, testReportList: action.payload};
        case GET_TEST_REPORT_DETAIL:
            return {...state, testReportDetail: action.payload};
        // case FILTER_BY_SERVICE:
        //     const faildList = state.testReportDetail.faildList;
        //     const passedList = state.testReportDetail.passedList;
        //     return {
        //         ...state.testReportDetail, 
        //         failedList: faildList.filter((item: any) => item.title.includes(action.payload)),
        //         passedList: passedList.filter((item: any) => item.title.includes(action.payload))
        //     };
        default:
            return state;
    }
}

export default testReportReducer;
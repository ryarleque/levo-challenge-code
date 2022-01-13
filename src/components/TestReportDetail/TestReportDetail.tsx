import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTestReportDetail, filterByService } from '../../actions';
import HeaderComponent from '../Header/Header';
import InfoCardComponent from '../InfoCard/InfoCard';
import LoaderComponent from '../Spinner/Spinner';

import {
    TestReportContainer,
    TestReportStyled,
    TestReportDetail,
    TestReportDetailTopInfo,
    SuccessLabelStyled,
    FailedLabelStyled,
    LabelStatusStyled
} from './TestReportDetail.style'

interface testReportListModel {   
    id: number,
    title: string,
    durationTime: string,
}

const TestReportDetailComponent: React.FC<any> = () => {

    const dispatch = useDispatch();
    const params : any = useParams();
    const testReportListDetail = useSelector((state: any) => state?.testReport.testReportDetail);

    const searchByService = (event: any) => {
        dispatch(filterByService(event.currentTarget.value));
    }

    useEffect(() => {
        dispatch(getTestReportDetail(params.organizationId, params.reportId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);   

    return (
        <TestReportContainer>
            <HeaderComponent isSimpleCongiguration={false} name={'Levo'} seletedOption={'Test Reports Detail'}/>
            <TestReportDetail>
                <TestReportDetailTopInfo>
                    <TestReportStyled>Test Reports</TestReportStyled>
                    <div>{'> Execution # '} {params.organizationId}</div>
                    { testReportListDetail.isSuccess ? (
                        <SuccessLabelStyled>Success</SuccessLabelStyled>
                    ) : (
                        <FailedLabelStyled>Failed</FailedLabelStyled>
                    )}                    
                </TestReportDetailTopInfo>
                <div>Results</div>
                <input type="text" placeholder="Filter by endpoint..." onChange={$event => searchByService($event)}/>                
                {
                    testReportListDetail?.length === 1 ? <LoaderComponent/> : (     
                    <>
                        <LabelStatusStyled>Failed Tests({testReportListDetail.failedTests} / {testReportListDetail.totalTests})</LabelStatusStyled>
                        {
                            testReportListDetail?.failedList.map((item: testReportListModel, index: number) =>
                                <InfoCardComponent 
                                    key={item.id}
                                    title={item.title}
                                    descriptionInfo={item.durationTime}
                                    isSuccess={false}
                                />
                            )
                        }

                        <LabelStatusStyled>Passed Tests({testReportListDetail.passedTests} / {testReportListDetail.totalTests})</LabelStatusStyled>
                        {
                            testReportListDetail?.passedList.map((item: testReportListModel, index: number) =>
                                <InfoCardComponent 
                                    key={item.id}
                                    title={item.title}
                                    descriptionInfo={item.durationTime}
                                    isSuccess={true}
                                />
                            )
                        }
                    </>
                )}
            </TestReportDetail>
        </TestReportContainer>
    );
}

export default TestReportDetailComponent;
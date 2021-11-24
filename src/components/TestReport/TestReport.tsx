import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getTestReportList, updateSelectedOrganization } from '../../actions';
import HeaderComponent from '../Header/Header';
import InfoCardComponent from '../InfoCard/InfoCard';
import LoaderComponent from '../Spinner/Spinner';

import {
    TestReportContainer,
    TestReportStyled,
    TestReportDetail
} from './TestReport.style'

interface testReportListModel {   
    id: number, 
    executionNumber: number, 
    startedTime: string,
    durationTime: string,
    passedItems: number,
    failedItems: number
};

const TestReportComponent: React.FC<any> = () => {

    const dispatch = useDispatch();
    const organizationId : any = useParams();
    const testReportList = useSelector((state: any) => state?.testReport.testReportList);

    useEffect(() => {
        dispatch(updateSelectedOrganization(organizationId));
        dispatch(getTestReportList(organizationId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TestReportContainer>
            <HeaderComponent isSimpleCongiguration={false} name={'Levo'} seletedOption={'Test Reports'}/>
            <TestReportDetail>
                <TestReportStyled>Test Reports</TestReportStyled>
                {
                    testReportList?.length === 1 ? <LoaderComponent/> : (
                    testReportList.map((item: testReportListModel, index: number) =>
                        <Link to={"/testReportDetail/"+ organizationId.organizationId + '/' + item.id} style={{textDecoration: 'none'}} key={item.id} >
                            <InfoCardComponent 
                                title={"Execution # "+ item.executionNumber}
                                subTitle={item.startedTime + ' ago  -  ' + item.durationTime + ' long'}
                                successInfo={item.passedItems}
                                failedInfo={item.failedItems}
                                isInfoMessage={true}
                            />
                        </Link>)
                    )
                }
            </TestReportDetail>
        </TestReportContainer>
    );
}

export default TestReportComponent;
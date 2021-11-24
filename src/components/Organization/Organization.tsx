import * as React from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from 'react-redux';
import HeaderComponent from '../Header/Header';
import CardComponent from '../Card/Card';
import LoaderComponent from '../Spinner/Spinner';

import {
    OrganizationContainerStyled,
    TitleOrganizationStyled,
    SubTitleOrganizationStyled,

} from './Organization.style';

import { getOrganizationList } from '../../actions';

interface organizationListModel {    
    name: string,
    id: number
};

const OrganizationComponent: React.FC<any> = () => {   

    const dispatch = useDispatch();
    const organizationList = useSelector((state: any) => state.organization.organizationList);
    useEffect(() => {
        dispatch(getOrganizationList());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>            
            <HeaderComponent isSimpleCongiguration={true} name={'Levo'}/>
            <OrganizationContainerStyled>
                <TitleOrganizationStyled>Organizations</TitleOrganizationStyled>
                <SubTitleOrganizationStyled>Pick the organization you want to access to</SubTitleOrganizationStyled>
                {
                    organizationList?.length === 1 ? <LoaderComponent/> : (              
                    organizationList?.map((item: organizationListModel, index : number) => 
                        <Link to={"/testReport/"+item.id} style={{textDecoration: 'none'}} key={index}>
                            <CardComponent name={item.name}></CardComponent>
                        </Link>
                    )
                )}
             </OrganizationContainerStyled>
        </>
    );
}

export default OrganizationComponent;
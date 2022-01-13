import * as React from 'react';
import { useSelector } from 'react-redux';
import {
    HeaderContainerStyled,
    TitleHeaderStyled,
    ItemStyled
} from './Header.style';

interface HeaderComponentProps {    
    isSimpleCongiguration: boolean,
    name: string,
    seletedOption?: string
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({ isSimpleCongiguration, name, seletedOption }) => {
    const selectedOrganizationInfo = useSelector((state: any) => state?.organization.selectedOrganizationInfo);

    return (
        <HeaderContainerStyled className={isSimpleCongiguration ? '' : 'detail'}>
            <TitleHeaderStyled>{name}</TitleHeaderStyled>
            {!isSimpleCongiguration && (
                <div>
                    <div>{selectedOrganizationInfo.name}</div>
                    <ItemStyled>{seletedOption}</ItemStyled>
                </div>
            )}
        </HeaderContainerStyled>
    );
}

export default HeaderComponent;
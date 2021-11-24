import * as React from 'react';

import {
    TitleStyled,
    SubTitleStyled,
    SuccessInfoStyled,
    FailedInfoStyled,
    DescriptionInfoStyled,
    InfoCardContainer,
    DetailSectionStyled
} from './InfoCard.style';

interface InfoCardComponentProps {
    title: string,
    subTitle?: string,
    successInfo?: number,
    failedInfo?: number,
    descriptionInfo?: string,
    isSuccess?: boolean,
    isInfoMessage?: boolean
};

const InfoCardComponent: React.FC<InfoCardComponentProps> = ({ 
    title,
    subTitle,
    successInfo,
    failedInfo,
    descriptionInfo,
    isSuccess,
    isInfoMessage }) => {

    return (
        <InfoCardContainer className={!isInfoMessage ? (isSuccess ? 'success' : 'failed') : ''}>
            <div>
                <TitleStyled>{title}</TitleStyled>
                { subTitle && <SubTitleStyled>{subTitle}</SubTitleStyled>}
            </div>
            <DetailSectionStyled>
                { successInfo && <SuccessInfoStyled>{successInfo} passed</SuccessInfoStyled>}
                { failedInfo && <FailedInfoStyled>{failedInfo} failed</FailedInfoStyled>}
                { descriptionInfo && <DescriptionInfoStyled>{descriptionInfo}</DescriptionInfoStyled>}
            </DetailSectionStyled>
        </InfoCardContainer>
    );
}

export default InfoCardComponent;
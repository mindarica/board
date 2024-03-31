import { ContentContainer, Description, NotFoundPageContainer, Title } from "./PageNotFound.style";

export const NotFound = () => {
    return (
        <NotFoundPageContainer>
            <ContentContainer>
                <Title>Page Not Found</Title>
                <Description>The requested page could not be found.</Description>
            </ContentContainer>
        </NotFoundPageContainer>
    );
};


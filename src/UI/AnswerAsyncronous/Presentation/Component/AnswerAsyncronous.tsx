import { JSX } from "react";

interface Props {
    isError: boolean,
    isLoading: boolean,
    errorComponent: JSX.Element,
    loadingComponent: JSX.Element
};

const AnswerAsyncronous: React.FC<Props> = (
    { isError,
        isLoading,
        errorComponent,
        loadingComponent
    }) => {

    if (isLoading) return loadingComponent;
    if (isError) return errorComponent;
};

export default AnswerAsyncronous;
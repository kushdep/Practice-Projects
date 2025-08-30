import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";

export default function Error(){
    const error = useRouteError()

    let title = 'An Error Occured'
    let message = 'Something went wrong'

    if(error.status === 500){
        message=error.data.message
    }
    if(error.status === 404){
        title='Page not found'
    }

    return <>
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    </>
}
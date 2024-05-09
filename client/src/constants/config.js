//API_NOTIFICATON_MESSAGES
export const API_NOTIFICATON_MESSAGES = {
    loading: {
        title: 'Loading...',
        message: 'Data is being loaded, Please wait'
    },
    success: {
        title: 'Success',
        message: 'Data successfully loaded'
    },
    responseFailure: {
        title: 'Error',
        message: 'An error occured while fetching response from the server. Please try again'
    },
    requestFailure: {
        title: 'Error',
        message: 'An error occured while parsing the requested data'
    },
    networkError: {
        title:'Error',
        message:'Unable to connect with the server. PLease check the internet connection and try again.'
    }
}

//API SERVICE CALL
//SAMPLE REQUEST
//NEED SERVICE CALL: {url: '/' , method:'POST/GET/PUT/DELETE' params: true/false,query:true/false}
export const SERIVCE_URLS = {
    userSignup: { url: '/signup', method: 'POST' }
}

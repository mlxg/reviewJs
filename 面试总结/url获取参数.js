const getRequest = () => {
    const url = 'www.a.com?name=aa&age=12';
    const theRequest = {};
    if (url.indexOf('?')) {
        const strs = url.split('?')[1].split('&');
        for (let i in strs) {
            const str = strs[i].split('=');
            theRequest[str[0]] = str[1];
        }
    }
    // return theRequest;
    console.log(theRequest);

};

getRequest();

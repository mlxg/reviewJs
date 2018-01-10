const url = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10'

function getJSON(url) {
    return new Promise(function (resolve, reject) {
        let XHR = new XMLHttpRequest();
        XHR = open('get', url, true);
        XHR = send();
        XHR.onreadystatechange = function () {
            if (XHR.readyState === 4) {
                if (XHR.status === 200) {
                    try {
                        let response = JSON.parse(XHR.responseText);
                        resolve(response);
                    } catch (e) {
                        reject(e);
                    }
                }
            } else {
                reject(new Error(XHR.statusText))
            }
        }
    })
}

getJSON(url).then(resp => {
    console.log(resp)
});
import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            arr: {}
        };
        this.get = this.get.bind(this);
    }

    get() {
        axios.get('./data/data.json').then((res) => {
            console.log(res.data);
            console.log(res.data[3]);
        }).catch((err) => {
            console.log(err.status);
        });
    }

    render() {
        return <div>
            <input type="button" value="按钮" onClick={this.get}/>
        </div>;
    }
}

ReactDom.render(
    <Nav/>,
    document.querySelector('#app')
);

//参数
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);

//
const qs = require('qs');
axios.post('/foo', qs.stringify({'bar': 123}));

this.$http.post('/login/index.php?user&q=action/login', params, {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// proxyTable: {
//     '/shopping':{//此处并非一定和url一致。
//         target:'https://mainsite-restapi.ele.me/shopping',
//             changeOrigin:true,//允许跨域
//             pathRewrite:{
//             '^/shopping': ''
//         }
//     }
// }
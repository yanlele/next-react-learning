/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-12-30 14:17
 */
import '../style/index.less';
import Head from 'next/head'
import React, {Component} from 'react';

class Index extends Component {
    constructor() {
        super();

        console.log(123);
    }

    render() {
        let str = 'yanlele';
        return (
            <div>
                <Head>
                    <title>My page title</title>
                </Head>
                <p>hello 123</p>
                <p className="test">{str}</p>
            </div>
        )
    }
}

export default Index;
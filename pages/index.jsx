/**
 * create by yanle
 * connect me 331393627@qq.com
 * create time 2018-12-30 14:17
 */
import '../style/index.less';
import Head from 'next/head'
import Link from 'next/link'
import React, {Component} from 'react';
import { withRouter } from 'next/router'

class Index extends Component {
    constructor() {
        super();
    }

    static async getInitialProps({req}) {
        // const res = await fetch('https://api.github.com/repos/zeit/next.js')
        // const json = await res.json()
        // return { stars: json.stargazers_count }
        return { stars:  123}
    }

    render() {
        const {router} = this.props;
        let str = 'yanlele';
        return (
            <div>
                <Head>
                    <title>My page title</title>
                </Head>
                <p>hello 123</p>
                <p className="test">{str}</p>
                <p>Hello World {this.props.stars}</p>

                <hr/>
                {/*<Link href="/home/home">*/}
                    {/*<a>here</a>*/}
                {/*</Link>{' '}*/}

                <button onClick={()=>this.props.router.push('/home/home')}>编程式跳转路由</button>

            </div>
        )
    }
}

export default withRouter(Index);
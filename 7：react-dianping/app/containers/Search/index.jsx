//搜索结果页，可以用this.props.params获取路由携带的参数
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import SearchHeader from '../../components/SearchHeader/index.jsx' //搜索头部
class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const params = this.props.params
        return (
            <div>
                <SearchHeader keyword={params.keyword}/> {/*传入keyword的作用是进入到搜索结果页时显示搜索的关键词到input上*/}
            </div>
        )
    }
    componentDidMount() {
        const params = this.props.params //路由携带的参数
        console.log('category param: ' + params.category)
        console.log('key param:' + params.keyword)
    }
}

export default Search
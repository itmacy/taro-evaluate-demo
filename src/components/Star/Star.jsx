import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import '../Star/Star.scss'
import PropTypes from "prop-types";

export default class Star extends Component {

  config = {
    navigationBarTitleText: ''
  }
  constructor (props) {
    super(props)
    this.state = {
      selected: [
          // true,
          // true,
          // true,
          // true,
          // true,
      ],
    }
  }

  componentWillMount () {
    this.init()
  }

  componentWillReceiveProps () {
    console.log('componentWillReceiveProps')
  }
  componentDidMount () { }

  componentWillUnmount () {
  }

  componentDidShow () { }

  componentDidHide () { }

  onPullDownRefresh() { }

  onReachBottom() { }

  /**
   * 初始化星星
   * @private
   */
  init(){
    let count = 5
    let value = 5
    if (this.props.count){
      count = this.props.count
    }
    if (this.props.value){
      value = this.props.value
    }

    if (this.props.value > this.props.count){
      value = count
    }
    let arr = []
    // 选中的星星
    for (let i = 0; i < value; i++) {
      arr.push(true)
    }
    // 未选中的星星
    for (let i = 0 ; i < count - value; i++) {
      arr.push(false)
    }
    this.setState({
      selected: arr
    })
  }

  /**
   * 选中星星
   * 算法：判断当前索引状态，
   * 如果为true，则把当前索引之后的全部索引全部置为false
   * 如果为true，则把当前索引之前的全部索引全部置为true
   * @param index
   */
  onStarClick = (index) => {
    let datas = this.state.selected
    if (datas[index]){
      for (let i = index + 1; i <datas.length ; i++) {
        datas[i] = false
      }
    }else {
      for (let i = 0; i < index + 1 ; i++) {
        datas[i] = true
      }
    }
    this.setState({
      selected:datas
    },() => {
      const selectedCounts = this.state.selected.filter(item => item)
      this.props.onSelected(selectedCounts.length)
    })
  }

  render () {
    return (
        <View className='starBtn'>
          {this.state.selected.map((item,index) => {
            return (
                <Image
                    key={index}
                    className='star'
                    src={item? require('./svg/star1.svg'):require('./svg/star2.svg')}
                    onClick={ this.onStarClick.bind(this,index)}
                />
            )
          })}
        </View>
    )}
}
Star.propTypes = {
  onSelected:PropTypes.func, // 点击星星后的回调函数，参数为选中的星星个数
  count: PropTypes.number, //星星个数，默认为5个星
  value: PropTypes.number //分数，默认为5分
};

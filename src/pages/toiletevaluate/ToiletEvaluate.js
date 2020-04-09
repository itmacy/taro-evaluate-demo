import Taro, { Component } from '@tarojs/taro'
import {View, Text, Textarea} from '@tarojs/components'
import './ToiletEvaluate.scss'
import Star from "../../components/Star/Star";
import PropTypes from "prop-types";

export default class ToiletEvaluate extends Component {

  config = {
    navigationBarTitleText: '智能卫厕评价'
  }
  constructor (props) {
    super(props)
    this.state = {
      hygienicLevel: 5, // 卫生情况
      facilitiesLevel:5, //设施服务
      managementLevel: 5,// 管理服务
      evaluateList:[
        {
          desc: '卫生不错',
          isActive: true
        },
        {
          desc: '设备齐全',
          isActive: true
        },
        {
          desc: '位置合理',
          isActive: true
        },
        {
          desc: '人流量少',
          isActive: true
        },
        {
          desc: '空气优质',
          isActive: true
        },
        {
          desc: '卫生较差',
          isActive: false
        },
        {
          desc: '设备不全',
          isActive: false
        },
        {
          desc: '位置难找',
          isActive: false
        },
        {
          desc: '人多拥挤',
          isActive: false
        },
        {
          desc: '空气差劲',
          isActive: false
        },

      ],
      advice: '', //建议
    }
  }

  componentWillMount () {
    this.setState({
      param: this.props.param
    })
  }

  componentDidMount () { }

  componentWillUnmount () {
  }

  componentDidShow () { }

  componentDidHide () { }

  onPullDownRefresh() { }

  onReachBottom() { }

  onPageScroll(res) {
  }

  onEvaluateClick = (data) => {

    let list = this.state.evaluateList
    list.forEach(item => {
      if (item.desc === data.desc){
        return item.isActive = !item.isActive
      }
    })
    this.setState({
      evaluateList: list
    })

  }
  onSave = () => {
    let { hygienicLevel, facilitiesLevel, managementLevel,evaluateList, advice } = this.state
    let param = {
      hygienicLevel,
      facilitiesLevel,
      managementLevel,
      evaluateList,
      advice,
    }
    console.log('提交的内容：', param)
    global.ui.toast('感谢您宝贵的意见')
  }

  /**
   * 获取评价样式
   **/
  getEvaluateStyle(isActive){
    return isActive ? 'evaluateBtnActive':'evaluateBtn'
  }
  render () {
    return (
          <View className='block'>
            <View className='itemView6'>
              <Text className='itemView61'/>
              <Text className='itemView62'>
                我要评价
              </Text>
            </View>
            <View className='itemView7'>
              <View className='itemView71'>
                <Text>卫生情况</Text>
                <Star
                  count={5}
                  value={this.state.hygienicLevel}
                  onSelected = {(level) => {
                    this.setState({
                      hygienicLevel: level
                    },() => {
                      console.log('hygienicLevel选中个数：',this.state.hygienicLevel)
                    })
                }}/>
              </View>
              <View className='itemView71'>
                <Text>设施服务</Text>
                <Star
                  count={5}
                  value={this.state.facilitiesLevel}
                  onSelected = {(level) => {
                    this.setState({
                      facilitiesLevel: level
                    },() => {
                      console.log('facilitiesLevel选中个数：',this.state.facilitiesLevel)
                    })
                }}/>
              </View>
              <View className='itemView71'>
                <Text>管理服务</Text>
                <Star
                  count={5}
                  value={this.state.managementLevel}
                  onSelected = {(level) => {
                    this.setState({
                      managementLevel: level
                    },() => {
                      console.log('managementLevel选中个数：',this.state.managementLevel)
                    })
                }}/>
              </View>
              <View className='itemView72'>
                {
                  this.state.evaluateList.map((item,index) => {
                    return(
                      <View key={index} className={this.getEvaluateStyle(item.isActive)} onClick={this.onEvaluateClick.bind(this, item)}>{item.desc}</View>

                    )
                  })
                }
              </View>
              <Textarea className='itemView73'
                        placeholder='请留下您宝贵的意见和建议......'
                        value={this.state.advice}
                        onInput = { (e) => {
                          this.setState({
                            advice: e.detail.value
                          })
                        }}
              />
              <View className= 'bottomBtnGroup'>
                <Text className='bottomBtn' onClick={ this.onSave }>点击提交</Text>
                <Text className='bottomBtn' onClick={ () => {
                  global.ui.toast("此功能暂未开放！");
                }}>我要纠错</Text>
              </View>
            </View>
          </View>
    )}
}
ToiletEvaluate.propTypes = {
  param: PropTypes.object,
};

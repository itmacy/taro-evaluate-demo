import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import ToiletEvaluate from "../toiletevaluate/ToiletEvaluate";
import React from "react";

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <ToiletEvaluate param={{toiletId: 123}}/>
      </View>
    )
  }
}

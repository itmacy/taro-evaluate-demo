import Taro from '@tarojs/taro'
/**
 * 全局的toast和弹窗
 */
let isLoading = false
let UI = {
    //toastMessage
    toast(msg,duration) {
        Taro.showToast({
            title: msg,
            icon: 'none',
            duration: duration || 2000
        })
    },
    toastSuccess(msg,duration){
        Taro.showToast({
            title: msg,
            icon: 'success',
            duration: duration || 2000
        })
    },

    hideToast(){
        Taro.hideToast();
    },

    showLoading(msg,duration){
        if (!isLoading){
            Taro.showLoading({
                title: msg,
                mask:true
            })
            setTimeout(()=>{
                isLoading = false
                Taro.hideLoading()
            },duration !== undefined && typeof duration == 'number'?duration:30*1000)
        }
    }

}
export default UI;

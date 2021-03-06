import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { CameraRoll, Image, View, BackHandler, Text, Platform, DeviceEventEmitter, BackAndroid, AppState, Linking, Dimensions, ScrollView, Animated, Easing, NetInfo, StyleSheet, } from 'react-native';
import moment from 'moment';
import { connect } from 'react-redux'
import QRCode from 'react-native-qrcode-svg';
import codePush from 'react-native-code-push'
import ViewShot from "react-native-view-shot";
import Upgrade from 'react-native-upgrade-android';
import SplashScreen from 'react-native-splash-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Button from '../components/Button'
import { EasyToast } from "../components/Toast"
import { EasyShowLD } from "../components/EasyShow"
import { EasyAdress } from "../components/Address"

import Coins from './Coins'
import Coin from './Coins/Detail'

import Home from './Home'
import AddAssets from './Home/AddAssets'
import addressManage from './Home/addressManage'
import AssetInfo from './Home/AssetInfo'
import AssetSearch from './Home/AssetSearch'
import ChoiceToken from './Home/ChoiceToken'
import FreeMortgage from './Home/FreeMortgage'
import FunctionsMore from './Home/FunctionsMore'
import TradeDetails from './Home/TradeDetails'
import TurnInAsset from './Home/TurnInAsset'
import TurnOutAsset from './Home/TurnOutAsset'

import Login from './Login'
import AssistantQrcode from './Login/AssistantQrcode'
import Forget from './Login/Forget'
import Helpcenter from './Login/Helpcenter'
import ProblemFeedback from './Login/ProblemFeedback'
import SignIn from './Login/SignIn'

import News from './News'
import DappWeb from './News/DappWeb'
import Dappsearch from './News/Dappsearch'
import OCTactivity from './News/OCTactivity'

import Settings from './Settings'
import Activity from './Settings/Activity'
import AgentInfo from './Settings/AgentInfo'
import Bvote from './Settings/Bvote'
import Community from './Settings/Community'
import Imvote from './Settings/Imvote'
import MortgageRecord from './Settings/MortgageRecord'
import Nodevoting from './Settings/Nodevoting'
import Resources from './Settings/Resources'
import Set from './Settings/Set'
import undelegated from './Settings/undelegated' 
import WithdrawMoney from './Settings/WithdrawMoney'

import Transaction from './Transaction'
import Detailsofmoney from './Transaction/Detailsofmoney'
import Ram from './Transaction/Ram'
import RecordQueryET from './Transaction/RecordQueryET';
import RecordQueryRam from './Transaction/RecordQueryRam';
import Tradingpool from './Transaction/Tradingpool';
import Warning from './Transaction/Warning'

import ActivationAt from './Wallet/ActivationAt'
import APactivation from './Wallet/APactivation'
import AuthChange from './Wallet/AuthChange'
import AuthExchange from './Wallet/AuthExchange'
import AuthManage from './Wallet/AuthManage'
import AuthTransfer from './Wallet/AuthTransfer'
import BackupsAOkey from './Wallet/BackupsAOkey'
import BackupsPkey from './Wallet/BackupsPkey'
import BarCode from './Wallet/BarcodeTest'
import CreateWallet from './Wallet/CreateWallet'
import ExportPublicKey from './Wallet/ExportPublicKey'
import ImportEosKey from './Wallet/ImportEosKey'
import ModifyPassword from './Wallet/ModifyPassword'
import WalletDetail from './Wallet/WalletDetail'
import WalletManage from './Wallet/WalletManage'

import Boot from './Boot'
import Homepage from './Homepage'
import Share from './ShareInvite'
import Splash from './Splash'
import Web from './Web'

import UImage from '../utils/Img'
import UColor from '../utils/Colors'
import { redirect } from '../utils/Api'
import Constants from '../utils/Constants'
import ScreenUtil from '../utils/ScreenUtil'



require('moment/locale/zh-cn');
var DeviceInfo = require('react-native-device-info');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var WeChat = require('react-native-wechat');
var TabContainer = TabNavigator(
  {
    Home: { screen: Home },
    Coins: { screen: Coins },
    Transaction: { screen: (Transaction) },
    News: { screen: News },
    Settings: { screen: Settings }
  },
  {
    initialRouteName: "News", // 默认页面组件
    lazy: true,
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    //tabBarComponent:props => <Homepage {...props}/>,//用作渲染tab bar的组件
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarOptions: {
      activeTintColor: UColor.tintColor, // 文字和图片选中颜色
      inactiveTintColor: '#727272', // 文字和图片未选中颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      showLabel: true,
      style: { // TabBar 
        height: 50,
        backgroundColor: UColor.btnColor, // tab背景色
        borderBottomWidth: 0,
      },
      labelStyle: { // 文字
        fontSize: 10,
        margin: 0
      },
      indicatorStyle: { // 如TabBar下面显示有一条线，可以设高度为0后隐藏
        opacity: 0 
      },
      tabStyle: {
        padding: 0,
        margin: 0,
        paddingBottom: 5,
      }
    }
  }
);

const Nav = StackNavigator(
  {
    Splash: {
      screen: Splash
    },
    Home: {
      screen: TabContainer,
      navigationOptions: {
        headerLeft: null,
        headerRight: null,
      }
    },
    Web: {
      screen: Web
    },
    Coin: {
      screen: Coin
    },
    Community: {
      screen: Community
    },
    ActivationAt: {
      screen: ActivationAt
    },
    APactivation: {
      screen: APactivation
    },
    CreateWallet: {
      screen: CreateWallet
    },
    BackupsAOkey: {
      screen: BackupsAOkey
    },
    BackupsPkey: {
      screen: BackupsPkey   
    },
    ImportEosKey: {
      screen: ImportEosKey
    },
    WalletManage: {
      screen: WalletManage
    },
    WalletDetail: {
      screen: WalletDetail
    },
    ExportPublicKey: {
      screen: ExportPublicKey
    },
    AuthManage: {
      screen: AuthManage
    },
    AuthExchange: {
      screen: AuthExchange
    },
    AuthChange: {
      screen: AuthChange
    },
    AuthTransfer: {
      screen: AuthTransfer
    },
    ModifyPassword: {
      screen: ModifyPassword
    },
    MortgageRecord: {
      screen: MortgageRecord
    },
    BarCode: {
      screen : BarCode
    },
    Login: {
      screen: Login
    },
    SignIn: {
      screen: SignIn
    },
    AssistantQrcode: {
      screen: AssistantQrcode
    },
    Forget: {
      screen: Forget
    },
    Helpcenter: {
      screen: Helpcenter
    },
    ProblemFeedback: {
      screen: ProblemFeedback
    },
    Share: {
      screen: Share
    },
    Bvote: {
      screen: Bvote
    },
    Resources: {
      screen: Resources
    },
    undelegated: {
      screen: undelegated
    },
    WithdrawMoney: {
      screen: WithdrawMoney
    },
    Set: {
      screen: Set
    },
    Dappsearch: {
      screen: Dappsearch
    },
    DappWeb: {
      screen: DappWeb
    },
    OCTactivity: {
      screen: OCTactivity
    },
    Activity: {
      screen: Activity
    },
    AgentInfo: {
      screen: AgentInfo
    },
    Imvote: {
      screen: Imvote
    },
    Nodevoting: {
      screen: Nodevoting
    },
    AddAssets: {
      screen: AddAssets
    },
    FreeMortgage: {
      screen: FreeMortgage
    },
    AssetSearch: {
      screen: AssetSearch
    },
    ChoiceToken: {
      screen: ChoiceToken
    },
    FunctionsMore: {
      screen:FunctionsMore
    },
    AssetInfo: {
      screen: AssetInfo
    },
    addressManage: {
      screen: addressManage
    },
    TradeDetails: {
      screen: TradeDetails
    },
    Detailsofmoney: {
      screen: Detailsofmoney
    },
    Ram: {
      screen: Ram
    },
    RecordQueryRam: {
      screen: RecordQueryRam
    },
    Tradingpool: {
      screen: Tradingpool
    },
    RecordQueryET: {
      screen: RecordQueryET
    },
    Warning: {
      screen: Warning
    },
    TurnInAsset: {
      screen: TurnInAsset
    },
    TurnOutAsset: {
      screen: TurnOutAsset
    },
    Boot: {
      screen: Boot
    }
  },
  {
    navigationOptions: () => ({
      gesturesEnabled: true,
      headerTitleStyle: {
        fontWeight: 'normal',
        color: UColor.fontColor,
        fontSize: 18,
        alignSelf: 'center'
      },
      headerBackTitle: null,
      headerBackTitleStyle: {
        color: UColor.fontColor
      },
      headerTintColor: UColor.fontColor,
      headerStyle: {
        backgroundColor: UColor.secdColor,
        elevation: 0,
        shadowOpacity: 0,
        borderBottomWidth: 0,
        height: (Platform.OS == 'ios') ? 49 : 72,
        paddingTop: (Platform.OS == 'ios') ? 0 : 18
      },
      headerRight: (
        <View style={{ height: 44, width: 55, justifyContent: 'center', paddingRight: 15 }} />
      ),
      mode: 'card',
      headerMode: 'screen',
      cardStyle: { backgroundColor: UColor.fontColor },
      transitionConfig: (() => ({
        transitionSpec: {
          duration: 300,
          easing: Easing.linear(),
          timing: Animated.timing,
        },
        screenInterpolator: CardStackStyleInterpolator.forHorizontal,
      })),
      onTransitionStart: (() => {
        console.log('页面跳转动画开始');
      }),
      onTransitionEnd: (() => {
        console.log('页面跳转动画结束');
      }),
    }),
  }
);

let routeLength = 0;
@connect(({ banner, news, newsType, common, login, wallet, assets }) => ({ ...banner, ...news, ...newsType, ...common, ...login,  ...wallet, ...assets }))
class Route extends React.Component {

  state = {
    news: {},
    cpu: '0.5',
    net: '0.5',
    ram: '1.5',
    turnintoaccount: '',
    turninamount: '',
    turninsymbol: '',
    turnincontractAccount: '',
    showShare: false,
    showVoteShare:false,
    showTurninShare:false,
    showActivationPay:false,
    showReturnActivationPay: false,
    transformY: new Animated.Value(200),
    transformY1: new Animated.Value(-1000),
    vtransformY: new Animated.Value(200),
    vtransformY1: new Animated.Value(-1000),
    APtransformY: new Animated.Value(200),
    APtransformY1: new Animated.Value(-1000),
    rAPtransformY: new Animated.Value(200),
    rAPtransformY1: new Animated.Value(-1000),
    showDappShare:false,
  }

  constructor(props) {
    super(props)
    WeChat.registerApp('wxc5eefa670a40cc46');
  }

  doUpgrade = (url, version) => {
    if (Platform.OS !== 'ios') {
      this.setState({ visable: false });
      Upgrade.startDownLoad(url, version, "eostoken");
    } else {
      Linking.openURL(url);
    }
  }

  componentWillMount() {
    //调取是否有钱包账户
    this.props.dispatch({ type: 'wallet/info', payload: { address: "1111" }, callback: () => {
      this.props.dispatch({ type: 'wallet/walletList', payload: {}, callback: (walletArr) => {
        if(walletArr == null || walletArr.length == 0){
          this.props.dispatch({ type: 'wallet/updateGuideState', payload: {guide: true}});  
        }
      }
      });

      if(this.props.defaultWallet && this.props.defaultWallet.name){
        this.props.dispatch({ type: 'assets/myAssetInfo', payload: { page: 1, accountName: this.props.defaultWallet.name}, callback: (myAssets) => {}});
      }

    } });

  }
 
  componentDidMount() {
    //回到app触发检测更新
    AppState.addEventListener("change", (newState) => {
      newState === "active" && codePush.sync({ installMode: codePush.InstallMode.ON_NEXT_RESUME }, syncStatus => {
        switch (syncStatus) {
            case CodePush.SyncStatus.UPDATE_INSTALLED:
                CodePush.notifyAppReady();
                break;
        }
      });
    });
    //加载广告
    this.props.dispatch({ type: 'banner/list', payload: {} });
    //加载资讯类别
    this.props.dispatch({ type: 'newsType/list', payload: {} });
    //关闭欢迎页
    setTimeout(() => {
      SplashScreen.hide();
      //APK更新
      if (Platform.OS !== 'ios') {
        Upgrade.init();
        DeviceEventEmitter.addListener('progress', (e) => {
          if (e.code === '0000') { // 开始下载
            EasyShowLD.startProgress();
          } else if (e.code === '0001') {
            EasyShowLD.progress(e.fileSize, e.downSize);
          } else if (e.code === '0002') {
            EasyShowLD.endProgress();
          }
        });
      }
      //升级
      var th = this;
      this.props.dispatch({
        type: 'common/upgrade', payload: { os: DeviceInfo.getSystemName() }, callback: (data) => {
          if (data.code == 0) {
            if (DeviceInfo.getVersion()  < data.data.version) {
              if (data.data.must == 1) {
                EasyShowLD.dialogShow("版本更新", data.data.intr, "升级", null, () => { this.doUpgrade(data.data.url, data.data.version) })
              } else {
                EasyShowLD.dialogShow("版本更新", data.data.intr, "升级", "取消", () => { this.doUpgrade(data.data.url, data.data.version) }, () => { EasyShowLD.dialogClose()})
              }
            }
          }
        }
      })
    }, 1000);
    
    BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid);

    DeviceEventEmitter.addListener('Activation', (news) => {
      var result = JSON.parse(news);// 转成JSON对象
      this.setState({
        showActivationPay: true,
        cpu: result.cpu ? result.cpu : "0.5",
        net: result.net ? result.net : "0.5",
        ram: result.ram ? result.ram : "1.5",
        turnintoaccount: result.account_name ? result.account_name : "",
        turninamount: result.owner ? result.owner : "",
        turninsymbol: result.active ? result.active : "",
      })
      this.state.APtransformY = new Animated.Value(200);
      this.state.APtransformY1 = new Animated.Value(-1000);
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(this.state.APtransformY,
            {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
            }
          ),
          Animated.timing(this.state.APtransformY1,
            {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
            }
          ),
        ]).start();
      }, 300);
    });
    
    DeviceEventEmitter.addListener('ReturnActivation', (news) => {
      var result = JSON.parse(news);// 转成JSON对象
      this.setState({
        showReturnActivationPay: true,
        cpu: result.cpu ? result.cpu : "0.5",
        net: result.net ? result.net : "0.5",
        ram: result.ram ? result.ram : "1.5",
        turnintoaccount: result.account_name ? result.account_name : "",
        turninamount: result.owner ? result.owner : "",
        turninsymbol: result.active ? result.active : "",
      })
      this.state.rAPtransformY = new Animated.Value(200);
      this.state.rAPtransformY1 = new Animated.Value(-1000);
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(this.state.rAPtransformY,
            {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
            }
          ),
          Animated.timing(this.state.rAPtransformY1,
            {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
            }
          ),
        ]).start();
      }, 300);
    });

    DeviceEventEmitter.addListener('share', (news) => {
      this.setState({ news, showShare: true });
      this.state.transformY = new Animated.Value(200);
      this.state.transformY1 = new Animated.Value(-1000);
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(this.state.transformY,
            {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
            }
          ),
          Animated.timing(this.state.transformY1,
            {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
            }
          ),
        ]).start();
      }, 300);
    });
    
    DeviceEventEmitter.addListener('voteShare', (news) => {
      this.setState({showVoteShare: true });
      this.state.vtransformY = new Animated.Value(200);
      this.state.vtransformY1 = new Animated.Value(-1000);
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(this.state.vtransformY,
            {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
            }
          ),
          Animated.timing(this.state.vtransformY1,
            {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
            }
          ),
        ]).start();
      }, 300);
    });

    DeviceEventEmitter.addListener('dappShare', (news) => {
      this.setState({news, showDappShare: true });
      this.state.vtransformY = new Animated.Value(200);
      this.state.vtransformY1 = new Animated.Value(-1000);
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(this.state.vtransformY,
            {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
            }
          ),
          Animated.timing(this.state.vtransformY1,
            {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
            }
          ),
        ]).start();
      }, 300);
    });

    DeviceEventEmitter.addListener('turninShare', (news) => {
      this.setState({showTurninShare: true });
      var result = JSON.parse(news);// 转成JSON对象
 
      if(result.toaccount){
        this.setState({turnintoaccount:result.toaccount});
      }else{
        this.setState({turnintoaccount:""});
      }
      if(result.amount){
        this.setState({turninamount:result.amount});
      }else{
        this.setState({turninamount:""});
      }
      if(result.symbol){
        this.setState({turninsymbol:result.symbol});
      }else{
        this.setState({turninsymbol:""});
      }
      if(result.contractAccount){
        this.setState({turnincontractAccount:result.contractAccount});
      }else{
        this.setState({turnincontractAccount:""});
      }
     
      this.state.vtransformY = new Animated.Value(500);
      this.state.vtransformY1 = new Animated.Value(-1000);
      setTimeout(() => {
        Animated.parallel([
          Animated.timing(this.state.vtransformY,
            {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
            }
          ),
          Animated.timing(this.state.vtransformY1,
            {
              toValue: 0,
              duration: 300,
              easing: Easing.linear,
            }
          ),
        ]).start();
      }, 300);
    });

    // NetInfo.addEventListener('change', this.handleConnectivityChange);

    NetInfo.isConnected.fetch().then(isConnected => {
      Constants.isNetWorkOffline = !isConnected;
    });

    NetInfo.isConnected.addEventListener('connectionChange',this.handleConnectivityChange);
  }

  handleConnectivityChange(isConnected){
    Constants.isNetWorkOffline = !isConnected;
  }

  shareAction = (e) => {
    var th = this;
    if (e == 1) {
      this.refs.viewShot.capture().then(uri => {
        CameraRoll.saveToCameraRoll(uri);
        EasyToast.show("图片已保存到您的相册,打开QQ并选择图片发送吧");
        setTimeout(() => {
          Linking.openURL('mqqwpa://');
          th.setState({ showShare: false });
        }, 2000);
      });
    } else if (e == 2) {
      this.refs.viewShot.capture().then(uri => {
        WeChat.isWXAppInstalled()
          .then((isInstalled) => {
            th.setState({ showShare: false });
            if (isInstalled) {
              WeChat.shareToSession({ type: 'imageFile', imageUrl: uri })
                .catch((error) => {
                  EasyToast.show(error.message);
                });
            } else {
              EasyToast.show('没有安装微信软件，请您安装微信之后再试');
            }
          });
      });
    } else if (e == 3) {
      this.refs.viewShot.capture().then(uri => {
        WeChat.isWXAppInstalled()
          .then((isInstalled) => {
            th.setState({ showShare: false });
            if (isInstalled) {
              WeChat.shareToTimeline({ type: 'imageFile', imageUrl: uri }).then((resp) => {
                // EasyToast.show(JSON.stringify(resp));
                if(resp && resp.errCode == 0){ // 分享成功
                  th.shareSuccess();
                }
              }).catch((error) => {
                  EasyToast.show(error.message);
                });
            } else {
              EasyToast.show('没有安装微信软件，请您安装微信之后再试');
            }
          });
      });
    }
    // else if (e == 4) {
    //   this.refs.viewShot.capture().then(uri => {
         
    //      th.setState({showShare:false});
        //  ShareUtile.share('sssss','http://dev.umeng.com/images/tab2_1.png','http://www.umeng.com/','title',1,(code,message) =>{
        //   alert(code);
        //   if(code == 0){ // 分享成功
        //     th.shareSuccess();
        //   }else{
        //     EasyToast.show(message);
        //   }
          
        // });

        // WeChat.isWXAppInstalled()
        //   .then((isInstalled) => {
        //     th.setState({ showShare: false });
        //     if (isInstalled) {
        //       WeChat.shareToTimeline({ type: 'imageFile', imageUrl: uri }).then((resp) => {
        //         // EasyToast.show(JSON.stringify(resp));
        //         if(resp && resp.errCode == 0){ // 分享成功
        //           th.shareSuccess();
        //         }
        //       }).catch((error) => {
        //           EasyToast.show(error.message);
        //         });
        //     } else {
        //       EasyToast.show('没有安装微信软件，请您安装微信之后再试');
        //     }
        //   });
    //   });
    // }

  }

  //分享DAPP 链接
  shareDappAction = (e) => {
    var th = this;
    if (e == 1) {
      // this.refs.viewShot.capture().then(uri => {
        WeChat.isWXAppInstalled()
          .then((isInstalled) => {
            th.setState({ showDappShare: false });
            if (isInstalled) {
              WeChat.shareToSession({ 
                type: 'news', 
                webpageUrl: this.state.news,
                title: ''+this.state.news,
                description: 'eos dapp',
              }).then((resp) => {
                // EasyToast.show(JSON.stringify(resp));
                if(resp && resp.errCode == 0){ // 分享成功
                  // th.shareSuccess();
                  EasyToast.show('分享成功');
                  // this.setState({ showDappShare: false }); 
                }
              })
                .catch((error) => {
                  EasyToast.show(error.message);
                });
            } else {
              EasyToast.show('没有安装微信软件，请您安装微信之后再试');
            }
          });
      // });
    } else if (e == 2) {
      // this.refs.viewShot.capture().then(uri => {
        WeChat.isWXAppInstalled()
          .then((isInstalled) => {
            th.setState({ showDappShare: false });
            if (isInstalled) {
              WeChat.shareToTimeline({ 
              type: 'news', 
              webpageUrl: this.state.news ,
              title: 'DAPP分享:'+this.state.news,
            }).then((resp) => {
                // EasyToast.show(JSON.stringify(resp));
                if(resp && resp.errCode == 0){ // 分享成功
                  th.shareSuccess();
                }
              }).catch((error) => {
                  EasyToast.show(error.message);
                });
            } else {
              EasyToast.show('没有安装微信软件，请您安装微信之后再试');
            }
          });
      // });
    } 
  }

  

  shareSuccess(){
    // 增加积分
    this.props.dispatch({ type: 'news/shareAddPoint', payload: { }});
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid);
  }

  onBackAndroid = (navigator) => {
    if (routeLength == 1) {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        BackHandler.exitApp();
        return false;
      }
      this.lastBackPressed = Date.now();
      EasyToast.show('再按一次退出应用');
      return true;
    } else {
      return false;
    }
  };
  getIncrease(){
    this.props.dispatch({ type: 'sticker/listincrease', payload: { type: 0}, callback: (data) => { 
        if(data){
           if(data[0].increase){
            DeviceEventEmitter.emit('eos_increase', data[0].increase);
           }
        }
    } });
  }
  getBalance() { 
    if(this.props.walletList == null){
      return;
    }

    for(var i = 0; i < this.props.walletList.length; i++) {
      if (this.props.walletList[i] != null && this.props.walletList[i].name != null && (this.props.walletList[i].isactived && this.props.walletList[i].hasOwnProperty('isactived'))) {
        this.props.dispatch({
          type: 'wallet/getBalance', payload: { contract: "eosio.token", account: this.props.walletList[i].name, symbol: 'EOS' }
        })
  
      }
    }

    // 其他资产
    if(this.props.myAssets == null){
      return;
    }
          
    this.props.dispatch({
      type: 'assets/getBalance', payload: {myAssets: this.props.myAssets, accountName: this.props.defaultWallet.name}, callback: () => {
        // this.props.dispatch({ type: 'assets/myAssetInfo', payload: { page: 1}, callback: (myAssets) => {}});
      }
    });
  }

  // 此定时器本来用于刷新钱包资产页面，现在暂时取消定时刷新，仅切换至钱包页面时刷新一次，其后通过下拉刷新方式刷新，减少系统开支
  startTimer(){
    // this.timer = setInterval( ()  =>{
      DeviceEventEmitter.emit('refreshWalletInfo', '');

    // },30000);
  }

  stopTimer(){
    // this.timer && clearTimeout(this.timer);
  }

  startTxTimer(){
    this.txTimer = setInterval( ()  =>{
      DeviceEventEmitter.emit('getRamInfoTimer', '');
    },60000);
  }

  stopTxTimer(){
    this.txTimer && clearTimeout(this.txTimer);
  }

  switchRoute = (prevNav, nav, action) => {
    //关闭loading显示,防止进入下一页面，上一个页面的loading显示还在
    if(action && action.routeName){
      EasyShowLD.switchRoute();    
      EasyToast.switchRoute();
    }

    routeLength = nav.routes.length;
    
    //切换到个人中心，更新用户信息
    if (action && action.routeName && action.routeName == "Settings") {
      if (this.props.loginUser) {
        this.props.dispatch({ type: "login/info", payload: { uid: this.props.loginUser.uid, token: this.props.token } });
      }
    }
    //切换到钱包判断是否创建钱包
    if (action && action.routeName && action.routeName == "Home") {
      this.stopTxTimer();
      if(this.props.walletList == null || this.props.walletList.length == 0){
        this.props.dispatch({ type: 'wallet/info', payload: { address: "1111" }, callback: () => {
          this.props.dispatch({ type: 'wallet/walletList', payload: {}, callback: (walletArr) => {
            if(walletArr == null || walletArr.length == 0){
              this.props.dispatch({ type: 'wallet/updateGuideState', payload: {guide: true}, callback: (data) => {  
                if (action && action.routeName) {
                  DeviceEventEmitter.emit('changeTab', action.routeName);
                }
              }
              });
              // this.timer && clearTimeout(this.timer);
              this.stopTimer();
              return;
            }else{
              this.props.dispatch({ type: 'wallet/updateGuideState', payload: {guide: false}, callback: (data) => {
                this.startTimer();
      
                if (action && action.routeName) {
                  DeviceEventEmitter.emit('changeTab', action.routeName);
                }
              }});
            }
          }
          });
        } });
      }else{
        this.props.dispatch({ type: 'wallet/updateGuideState', payload: {guide: false}, callback: (data) => {
          this.startTimer();
          // this.timer = setInterval( ()  =>{
          //   this.getBalance();
          //   this.getIncrease();
          // },30000);

          if (action && action.routeName) {
            DeviceEventEmitter.emit('changeTab', action.routeName);
          }
        }});

        if(Platform.OS == 'ios'){
          this.props.dispatch({ type: 'wallet/updateTipState', payload: {tipFlagIOS: true}});
        }else{
          this.props.dispatch({ type: 'wallet/updateTipState', payload: {tipFlagIOS: false}});
        }
      }
      this.props.dispatch({ type: 'wallet/scanInvalidWallet', callback: (invalidWalletArr) => {
        if(invalidWalletArr == null || invalidWalletArr.length == 0){
          this.props.dispatch({ type: 'wallet/updateInvalidState', payload: {Invalid: false}});
        }else{
          this.props.dispatch({ type: 'wallet/updateInvalidState', payload: {Invalid: true}});
        }
      }});

    }else if((action && action.routeName && action.routeName == "Transaction") || (action && action.routeName && action.routeName == "Ram")){
      this.stopTimer();
      this.startTxTimer();
      DeviceEventEmitter.emit('changeTab', action.routeName);
      this.props.dispatch({ type: 'wallet/updateTipState', payload: {tipFlagIOS: false}});
    }else if (action && action.routeName && (action.routeName == "Coins" || action.routeName == "News" || action.routeName == "Settings")) {
      this.stopTimer();
      this.stopTxTimer();
      if (action && action.routeName) {
        DeviceEventEmitter.emit('changeTab', action.routeName);
      }
      this.props.dispatch({ type: 'wallet/updateTipState', payload: {tipFlagIOS: false}});
    }
  }

  createWallet() {
    DeviceEventEmitter.emit('createWallet');
  }

  getTime(obj){
    var date;
    try {
      date = moment(obj).format('YYYY.MM.DD HH:mm:ss');
    } catch (error) {
      date = "";
    }
    return date;
  }

  render() {
    return (<View style={{ flex: 1 }}>
      <Nav ref="nav" onNavigationStateChange={(prevNav, nav, action) => { this.switchRoute(prevNav, nav, action) }} />
      {this.state.showShare ? (
        <View style={{ position: 'absolute', zIndex: 100000, top: 0, left: 0, width: ScreenWidth, height: ScreenHeight, backgroundColor: UColor.mask }}>
          <Animated.View style={{
            height: ScreenHeight - 180, transform: [
              { translateX: 0 },
              { translateY: this.state.transformY1 },
            ]
          }}>
            <ScrollView style={{ marginTop: 50 }}>
              <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                <ViewShot ref="viewShot" style={{ left: 20, width: ScreenWidth - 40 }} options={{ format: "jpg", quality: 0.9 }}>
                  <View style={{ backgroundColor: UColor.btnColor, flex: 1}}>
                    <Image source={UImage.share_banner} resizeMode="stretch" style={{ width: ScreenWidth - 40, height: (ScreenWidth - 40) * 0.3386 }} />
                   <View style={{ backgroundColor: UColor.btnColor,flexDirection: "row",marginTop: 10,paddingHorizontal: 20,paddingVertical: 5, justifyContent: "flex-start", alignItems:'center', }}>
                      <Image source={UImage.share_time} style={{width: 25,height: 25}} />
                      <Text style={{marginLeft: 5,fontSize: ScreenUtil.setSpText(15),color: UColor.lightgray}}> {this.getTime(this.state.news.createdate)}</Text>
                  </View>
                  <View style={{minHeight: ScreenUtil.autoheight(400), marginVertical: ScreenUtil.autoheight(10), paddingHorizontal: ScreenUtil.autowidth(20), paddingBottom: ScreenUtil.autoheight(5),}}>
                    <Text style={{ color: UColor.startup, fontSize: ScreenUtil.setSpText(24),}} >{this.state.news.title}</Text>
                    <Text style={{ color: UColor.arrow, fontSize: ScreenUtil.setSpText(15), marginTop: ScreenUtil.autoheight(15) ,lineHeight: ScreenUtil.autoheight(25)}} ellipsizeMode='tail'>{this.state.news.content}</Text>
                  </View>
                  <View style={{borderBottomWidth: 1,borderBottomColor: UColor.riceWhite ,justifyContent: 'center',}} >
                  </View>
                  <View style={{ backgroundColor: UColor.btnColor, width: '100%', paddingVertical: 5, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }}>
                      <View style={{ width: ScreenWidth - 40 - (ScreenWidth - 40) * 0.319, justifyContent: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: UColor.tintColor, fontSize: ScreenUtil.setSpText(16), textAlign: 'center', width: '100%', marginTop: 5 }}>ET钱包</Text>
                        <Text style={{ color: UColor.tintColor, fontSize: ScreenUtil.setSpText(16), textAlign: 'center', width: '100%', marginTop: 3 }}>专注于柚子生态</Text>
                        <Text style={{ color: UColor.btnColor, fontSize: ScreenUtil.setSpText(13), textAlign: 'center', padding: 5, backgroundColor: UColor.blueDeep, margin: 15,}}>更多精彩 长按识别二维码</Text>
                      </View>
                      <View style={{ width: (ScreenWidth - 40) * 0.319, justifyContent: 'center', alignSelf: 'center' }}>
                        <QRCode size={(ScreenWidth - 40) * 0.319 - 20} logo={UImage.etlogo} logoSize={ScreenUtil.setSpText(20)} logoBorderRadius={5}
                        value={Constants.rootaddr+redirect + (Constants.loginUser ? Constants.loginUser.uid : "nuid") + "/" + (Constants.token ? Constants.token.substr(0, 4) : "ntk") + "/" + this.state.news.id} />
                      </View>
                    </View>
                  </View>
                </ViewShot>
              </View>
            </ScrollView>
          </Animated.View>
          <View style={{ height: 170, marginTop: 10 }}>
            <Animated.View style={{
              height: 170, flex: 1, backgroundColor: UColor.secdfont, transform: [
                { translateX: 0 },
                { translateY: this.state.transformY },
              ]
            }}>
              <View style={{ height: 125 }}>
                <Text style={{ color: UColor.blackColor, marginTop: 10, width: "100%", textAlign: "center" }}>分享到</Text>
                <View style={{ flexDirection: "row" }}>
                  <Button onPress={() => { this.shareAction(2) }} style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                      <Image source={UImage.share_wx} style={styles.shareimg} />
                      <Text style={[styles.sharetext,{color: UColor.arrow,}]}>微信</Text>
                    </View>
                  </Button>
                  <Button onPress={() => { this.shareAction(1) }} style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                      <Image source={UImage.share_qq} style={styles.shareimg} />
                      <Text style={[styles.sharetext,{color: UColor.arrow,}]}>QQ</Text>
                    </View>
                  </Button>
                  <Button onPress={() => { this.shareAction(3) }} style={{ flex: 1, }}>
                    <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                      <Image source={UImage.share_pyq} style={styles.shareimg} />
                      <Text style={[styles.sharetext,{color: UColor.arrow,}]}>朋友圈</Text>
                    </View>
                  </Button>
                  {/* <Button onPress={() => { this.shareAction(4) }} style={{ width: '25%' }}>
                    <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                      <Image source={UImage.share_pyq} style={styles.shareimg} />
                      <Text style={[styles.sharetext,{color: UColor.arrow,}]}>微博</Text>
                    </View>
                  </Button> */}
                </View>
              </View>
              <Button onPress={() => { this.setState({ showShare: false }) }}>
                  <View style={[styles.cancelout,{backgroundColor: UColor.btnColor}]}>
                    <Text style={[styles.canceltext,{color: UColor.blackColor}]}>取消</Text>
                  </View>
                </Button>
            </Animated.View>
          </View>
        </View>
      ) : null}

      {this.state.showVoteShare ? (
          <View style={{ position: 'absolute', zIndex: 100000, top: 0, left: 0, width: ScreenWidth, height: ScreenHeight, backgroundColor: UColor.mask }}>
            <Animated.View style={{
              height: ScreenHeight - 180, transform: [
                { translateX: 0 },
                { translateY: this.state.vtransformY1 },
              ]
            }}>
              <ScrollView style={{ marginTop: 50 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                  <ViewShot ref="viewShot" style={{ left: 20, width: ScreenWidth - 40 }} options={{ format: "jpg", quality: 0.9 }}>
                    <View style={{ backgroundColor: UColor.btnColor, width: '100%', height: '100%' }}>
                      <View style={{ padding: 10 }}>
                        <Image source={UImage.Invitation_vote} resizeMode="cover" style={{ width: '100%', height:ScreenWidth-70 }} />
                        <View style={{ width: (ScreenWidth - 40) * 0.319, justifyContent: 'center', alignSelf: 'center',paddingBottom:20, }}>
                          <QRCode size={100} style={{ width: 100, }} value={'http://eostoken.im/'} logo={UImage.etlogo} logoSize={ScreenUtil.setSpText(20)} logoBorderRadius={5}/>
                        </View>
                      </View>
                      <View style={{ backgroundColor: UColor.btnColor, width: '100%', paddingVertical: 5, flexDirection: 'row', justifyContent: 'center', alignSelf: 'center' }}>
                        <View style={{ width: ScreenWidth - 40, justifyContent: 'center', alignSelf: 'center' }}>
                          <Text style={{ color: UColor.tintColor, fontSize: 16, textAlign: 'center', width: '100%', marginTop: 5 }}>ET钱包</Text>
                          <Text style={{ color: UColor.tintColor, fontSize: 16, textAlign: 'center', width: '100%', marginTop: 5 }}>专注于柚子生态</Text>
                          <Text style={{ color: UColor.btnColor, fontSize: 16, textAlign: 'center', padding: 5, backgroundColor: UColor.blueDeep, margin: 10 }}>更多精彩 长按识别二维码</Text>
                        </View>                            
                      </View>
                    </View>
                  </ViewShot>
                </View>
              </ScrollView>
            </Animated.View>
            <View style={{ height: 170, marginTop: 10 }}>
              <Animated.View style={{
                height: 170, flex: 1, backgroundColor: UColor.riceWhite, transform: [
                  { translateX: 0 },
                  { translateY: this.state.vtransformY },
                ]
              }}>
                <View style={{ height: 125 }}>
                  <Text style={[styles.sharetitle,{color: UColor.blackColor}]}>分享到</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Button style={{ flex: 1, justifyContent: 'center' }} onPress={() => { this.shareAction(1) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_qq} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>QQ</Text>
                      </View>
                    </Button>
                    <Button  style={{ flex: 1, justifyContent: 'center' }} onPress={() => { this.shareAction(2) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_wx} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>微信</Text>
                      </View>
                    </Button>
                    <Button  style={{ flex: 1, }} onPress={() => { this.shareAction(3) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_pyq} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>朋友圈</Text>
                      </View>
                    </Button>
                  </View>
                </View>
                <Button onPress={() => { this.setState({ showVoteShare: false }) }}>
                  <View style={[styles.cancelout,{backgroundColor: UColor.btnColor}]}>
                    <Text style={[styles.canceltext,{color: UColor.blackColor}]}>取消</Text>
                  </View>
                </Button>
              </Animated.View>
            </View>
          </View>
        ) : null
      }    
   
      {this.state.showDappShare ? (
        <View style={{ position: 'absolute', zIndex: 100000, top: 0, left: 0, width: ScreenWidth, height: ScreenHeight, backgroundColor: UColor.mask }}>
            {/* <Animated.View style={{
              height: ScreenHeight - 180, transform: [
                { translateX: 0 },
                { translateY: this.state.vtransformY1 },
              ]
            }}>
              <ScrollView style={{ marginTop: 50 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                  <ViewShot ref="viewShot" style={{ left: 20, width: ScreenWidth - 40 }} options={{ format: "jpg", quality: 0.9 }}>
                    <View style={{ backgroundColor: UColor.fontColor, width: '100%', height: '100%' }}>
                      <View style={{backgroundColor:UColor.navigation}}>
                        <Image source={UImage.turninhead} resizeMode="stretch" style={{ width: ScreenWidth - 40, height:(ScreenWidth - 40)*0.3167 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'center',alignItems: 'center',}}>
                          <Text style={{fontSize: 30, color: UColor.btnColor, padding: 10, textAlign: 'center',}}>{this.state.turninamount}</Text>
                          <Text style={{fontSize: 22, color: UColor.baseline,}}>{this.state.turninsymbol}</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignSelf: 'center', paddingHorizontal: 30, paddingVertical:20, backgroundColor:UColor.btnColor }}>
                          <QRCode size={150}  logo={UImage.etlogo} logoSize={ScreenUtil.setSpText(30)} logoBorderRadius={5}
                          value={this.state.news }/>
                          <Text style={{ color: UColor.startup, fontSize: 19, textAlign: 'center', marginTop: 20 }}>打开DAPP链接</Text>
                        </View>
                        <Text style={{ color:UColor.baseline, fontSize: 16, textAlign: 'left', marginTop: 5, paddingHorizontal: 30, paddingTop: 10, paddingBottom: 30,}}>DAPP链接: <Text style={{color: UColor.btnColor, fontSize: 15, }}>{this.state.news}</Text></Text>
                      </View>
                    </View>
                  </ViewShot>
                </View>
              </ScrollView>
            </Animated.View> */}
            <View style={{ height: 170, marginTop: ScreenHeight - 180 }}>
              <Animated.View style={{
                height: 170, flex: 1, backgroundColor: UColor.riceWhite, transform: [
                  { translateX: 0 },
                  { translateY: this.state.vtransformY },
                ]
              }}>
                <View style={{ height: 125 }}>
                  <Text style={[styles.sharetitle,{color: UColor.blackColor}]}>分享到</Text>
                  <View style={{ flexDirection: "row" }}>
                    {/* <Button style={{ flex: 1, justifyContent: 'center' }} onPress={() => { this.shareDappAction(4) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_qq} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>QQ</Text>
                      </View>
                    </Button> */}
                    <Button  style={{ flex: 1, justifyContent: 'center' }} onPress={() => { this.shareDappAction(1) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_wx} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>微信</Text>
                      </View>
                    </Button>
                    <Button  style={{ flex: 1, }} onPress={() => { this.shareDappAction(2) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_pyq} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>朋友圈</Text>
                      </View>
                    </Button>
                  </View>
                </View>
                <Button onPress={() => { this.setState({ showDappShare: false }) }}>
                  <View style={[styles.cancelout,{backgroundColor: UColor.btnColor}]}>
                    <Text style={[styles.canceltext,{color: UColor.blackColor}]}>取消</Text>
                  </View>
                </Button>
              </Animated.View>
            </View>
          </View>
        ) : null}   


      {/*  收款分享 */}
      {this.state.showTurninShare ? (
        <View style={{ position: 'absolute', zIndex: 100000, top: 0, left: 0, width: ScreenWidth, height: ScreenHeight, backgroundColor: UColor.mask,justifyContent: 'flex-end', }}>
            {/* <Animated.View style={{
              height: ScreenHeight - 180, transform: [
                { translateX: 0 },
                { translateY: this.state.vtransformY1 },
              ]
            }}>
              <ScrollView style={{ marginTop: 50 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                  <ViewShot ref="viewShot" style={{ left: 20, width: ScreenWidth - 40 }} options={{ format: "jpg", quality: 0.9 }}>
                    <View style={{ backgroundColor: UColor.fontColor, width: '100%', height: '100%' }}>
                      <View style={{backgroundColor:UColor.navigation}}>
                        <Image source={UImage.turninhead} resizeMode="stretch" style={{ width: ScreenWidth - 40, height:(ScreenWidth - 40)*0.3167 }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'center',alignItems: 'center',}}>
                          <Text style={{fontSize: 30, color: UColor.btnColor, padding: 10, textAlign: 'center',}}>{this.state.turninamount}</Text>
                          <Text style={{fontSize: 22, color: UColor.baseline,}}>{this.state.turninsymbol}</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignSelf: 'center', paddingHorizontal: 30, paddingVertical:20, backgroundColor:UColor.btnColor }}>
                          <QRCode size={150}  logo={UImage.etlogo} logoSize={ScreenUtil.setSpText(30)} logoBorderRadius={5}
                          value={this.state.turninsymbol.toLowerCase() +':' + this.state.turnintoaccount + '?amount=' + ((this.state.turninamount == "")?'0':this.state.turninamount) + '&token=' + this.state.turninsymbol.toUpperCase()}/>
                        </View>
                        <Text style={{ color: UColor.startup, fontSize: 19, textAlign: 'center', marginTop: 20 }}>扫码向他支付</Text>
                        <Text style={{ color:UColor.baseline, fontSize: 16, textAlign: 'left', marginTop: 5, paddingHorizontal: 30, paddingTop: 10, paddingBottom: 30,}}>收款账号: <Text style={{color: UColor.btnColor, fontSize: 15, }}>{this.state.turnintoaccount}</Text></Text>
                      </View>
                    </View>
                  </ViewShot>
                </View>
              </ScrollView>
            </Animated.View> */}
            <View style={{ height: ScreenUtil.autowidth(336), marginTop: ScreenUtil.autowidth(10) }}>
              <Animated.View style={{
                height: ScreenUtil.autowidth(336), flex: 1, backgroundColor: UColor.riceWhite, transform: [
                  { translateX: 0 },
                  { translateY: this.state.vtransformY },
                ]
              }}>
                <View style={{ height: ScreenUtil.autowidth(290) }}>
                  <Text style={{ fontSize: ScreenUtil.setSpText(18), color: UColor.blackColor, marginVertical: ScreenUtil.autowidth(10), width: ScreenWidth, textAlign: "center" }}>分享</Text>
                  <View style={{ flexDirection: 'column', justifyContent: 'center',alignItems: 'center',  }}>
                    <ViewShot ref="viewShot" style={{ width: ScreenUtil.autowidth(130) }} options={{ format: "jpg", quality: 0.9 }}>
                      <View style={{ backgroundColor: UColor.fontColor,}}>
                        <View style={{flexDirection: 'row',backgroundColor: UColor.btnColor,justifyContent: 'center', alignItems: 'center',}}>
                          <Image source={UImage.etlogo} resizeMode="stretch" style={{ width: ScreenUtil.autowidth(23), height: ScreenUtil.autowidth(23), marginRight: ScreenUtil.autowidth(9), }} />
                          <Text style={{ color: UColor.blackColor, fontSize: ScreenUtil.setSpText(10), textAlign: 'center', lineHeight: ScreenUtil.autowidth(30),}}>EosToken</Text>
                        </View>
                        <View style={{backgroundColor:UColor.tintColor, justifyContent: 'center' }}>
                          <Text style={{color: UColor.btnColor, fontSize: ScreenUtil.setSpText(10), textAlign: 'center', lineHeight: ScreenUtil.autowidth(20),}}>{this.state.turnintoaccount}</Text>
                          <View style={{ justifyContent: 'center', alignSelf: 'center', padding: ScreenUtil.autowidth(10), backgroundColor:UColor.btnColor }}>
                            <QRCode size={ScreenUtil.autowidth(69)}  logo={UImage.etlogo} logoSize={ScreenUtil.setSpText(16)} logoBorderRadius={5}
                            value={this.state.turninsymbol.toLowerCase() +':' + this.state.turnintoaccount + '?amount=' + ((this.state.turninamount == "")?'0':this.state.turninamount) + '&contractAccount=' + this.state.turnincontractAccount + '&token=' + this.state.turninsymbol.toUpperCase()}/>
                          </View> 
                          <Text style={{ color: UColor.btnColor, fontSize: ScreenUtil.setSpText(10), textAlign: 'center', lineHeight: ScreenUtil.autowidth(20),}}>扫描二维码向他付款</Text>
                        </View>
                      </View>
                    </ViewShot>
                  </View>
                 
                  <View style={{ flexDirection: "row" }}>
                    <Button style={{ flex: 1, justifyContent: 'center' }} onPress={() => { this.shareAction(1) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_qq} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>QQ</Text>
                      </View>
                    </Button>
                    <Button  style={{ flex: 1, justifyContent: 'center' }} onPress={() => { this.shareAction(2) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_wx} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>微信</Text>
                      </View>
                    </Button>
                    <Button  style={{ flex: 1, justifyContent: 'center' }} onPress={() => { this.shareAction(3) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_pyq} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>朋友圈</Text>
                      </View>
                    </Button>
                  </View>
                </View>
                <Button onPress={() => { this.setState({ showTurninShare: false }) }}>
                  <View style={[styles.cancelout,{backgroundColor: UColor.btnColor}]}>
                    <Text style={[styles.canceltext,{color: UColor.blackColor}]}>取消</Text>
                  </View>
                </Button>
              </Animated.View>
            </View>
          </View>
        ) : null}   


        {this.state.showActivationPay ? (
          <View style={{ position: 'absolute', zIndex: 100000, top: 0, left: 0, width: ScreenWidth, height: ScreenHeight, backgroundColor: UColor.mask }}>
            <Animated.View style={{
              height: ScreenHeight - 180, transform: [
                { translateX: 0 },
                { translateY: this.state.APtransformY1 },
              ]
            }}>
              <ScrollView style={{ marginTop: 50 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                  <ViewShot ref="viewShot" style={{ left: 20, width: ScreenWidth - 40 }} options={{ format: "jpg", quality: 0.9 }}>
                    <View style={{ backgroundColor: UColor.btnColor, width: ScreenWidth - 40,}}>
                      <View style={{ }}>
                        <Image source={UImage.activation_head} resizeMode="stretch" style={{ width: ScreenWidth - 40, height: (ScreenWidth - 40)*0.234}} />
                        <View style={{ justifyContent: 'center', alignSelf: 'center',paddingVertical:20, }}>
                          <QRCode size={120}  logo={UImage.etlogo} logoSize={ScreenUtil.setSpText(26)} logoBorderRadius={5}
                          value={'{"action":"' + 'activeWallet'  + '","account":"' + this.state.turnintoaccount + '","owner":"' + this.state.turninamount + '","active":"' + this.state.turninsymbol  + '","cpu":"' + this.state.cpu  + '","net":"' + this.state.net  + '","ram":"' + this.state.ram + '"}'}/>
                        </View>
                        <Text style={{ color: UColor.arrow, fontSize: 15, textAlign: 'center',}}>使用ET钱包扫一扫支付EOS激活此账号</Text>
                        <View style={{paddingVertical: 10, paddingHorizontal: 20,}}>
                            <View style={{ flexDirection: 'row', alignItems: 'center',marginVertical: 5,}}>
                              <Text style={{fontSize: 20, color: UColor.blackColor, }}>账号：</Text>
                              <Text style={{fontSize: 18, color: UColor.blackColor,}}>{this.state.turnintoaccount}</Text>
                            </View>
                            <Text style={{fontSize: 15, color:UColor.arrow, marginVertical: 5,}}>Active公钥：</Text>
                            <Text style={{fontSize: 14, color: UColor.blackColor,}}>{this.state.turninsymbol}</Text>
                            <Text style={{fontSize: 15, color: UColor.arrow, marginVertical: 5, }}>Owner公钥：</Text>
                            <Text style={{fontSize: 14, color: UColor.blackColor,}}>{this.state.turninamount}</Text>
                        </View>
                        <View style={{backgroundColor: UColor.riceWhite, paddingHorizontal: 18, paddingVertical: 8,}}>
                            <Text style={{color: UColor.fontColor, fontSize: 12, lineHeight: 25,}}>该好友正在使用EosToken钱包激活账号并向您发出代付求助，建议帮助他支付激活前先联系确认清楚！</Text>
                        </View>
                      </View>
                    </View>
                  </ViewShot>
                </View>
              </ScrollView>
            </Animated.View>
            <View style={{ height: 170, marginTop: 10 }}>
              <Animated.View style={{
                height: 170, flex: 1, backgroundColor: UColor.riceWhite, transform: [
                  { translateX: 0 },
                  { translateY: this.state.APtransformY },
                ]
              }}>
                <View style={{ height: 125 }}>
                  <Text style={[styles.sharetitle,{color: UColor.blackColor}]}>分享到</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Button style={{ flex: 1, justifyContent: 'center' }} onPress={() => { this.shareAction(1) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_qq} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>QQ</Text>
                      </View>
                    </Button>
                    <Button  style={{ flex: 1, justifyContent: 'center' }} onPress={() => { this.shareAction(2) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_wx} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>微信</Text>
                      </View>
                    </Button>
                    <Button  style={{ flex: 1, }} onPress={() => { this.shareAction(3) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_pyq} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>朋友圈</Text>
                      </View>
                    </Button>
                  </View>
                </View>
                <Button onPress={() => { this.setState({ showActivationPay: false }) }}>
                  <View style={[styles.cancelout,{backgroundColor: UColor.btnColor}]}>
                    <Text style={[styles.canceltext,{color: UColor.blackColor}]}>取消</Text>
                  </View>
                </Button>
              </Animated.View>
            </View>
          </View>
        ) : null}


         {this.state.showReturnActivationPay  ? (
          <View style={{ position: 'absolute', zIndex: 100000, top: 0, left: 0, width: ScreenWidth, height: ScreenHeight, backgroundColor: UColor.mask }}>
            <Animated.View style={{
              height: ScreenHeight - 180, transform: [
                { translateX: 0 },
                { translateY: this.state.rAPtransformY1 },
              ]
            }}>
              <ScrollView style={{ marginTop: 50 }}>
                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                  <ViewShot ref="viewShot" style={{ left: 20, width: ScreenWidth - 40 }} options={{ format: "jpg", quality: 0.9 }}>
                    <View style={{ backgroundColor: UColor.btnColor, width: ScreenWidth - 40,}}>
                      <Image source={UImage.activation_head} resizeMode="stretch" style={{ width: ScreenWidth - 40, height: (ScreenWidth - 40)*0.234}} />
                      <View style={{ paddingHorizontal: 20, paddingVertical: 10,}}>
                        <Text style={{ color: UColor.arrow, fontSize: 15, textAlign: 'left', paddingVertical: 15,}}>我在ET钱包成功激活了该EOS账号</Text>
                        <View style={{ flexDirection: 'row',alignItems: 'center',marginVertical: 5,}}>
                          <Text style={{fontSize: 20, color: UColor.blackColor, }}>账号：</Text>
                          <Text style={{fontSize: 18, color: UColor.blackColor,}}>{this.state.turnintoaccount}</Text>
                        </View>
                        <View style={{ flexDirection: 'row',borderBottomColor: UColor.arrow, borderBottomWidth: 0.5, }}>
                          <View  style={{ flex: 1,  alignItems: 'center',}}>
                            <Text style={{fontSize: 14, color: UColor.blackColor, lineHeight: 30, }}>{this.state.ram}</Text>
                            <Text style={{fontSize: 15, color: UColor.arrow, paddingBottom: 10,}}>分配内存( EOS )</Text>
                            <Text style={{fontSize: 14, color: UColor.blackColor, lineHeight: 30,}}>{this.state.net}</Text>
                            <Text style={{fontSize: 15, color: UColor.arrow, paddingBottom: 10,}}>网络抵押( EOS )</Text>
                          </View>
                          <View style={{ flex: 1,  alignItems: 'center',}}>
                            <Text style={{fontSize: 14, color: UColor.blackColor, lineHeight: 30,}}>{this.state.cpu}</Text>
                            <Text style={{fontSize: 15, color: UColor.arrow, paddingBottom: 10,}}>CPU抵押( EOS )</Text>
                          </View>
                        </View>
                        <View style={{paddingVertical: 10, borderBottomColor: UColor.arrow, borderBottomWidth: 0.5, }}>
                          <Text style={{fontSize: 15, color: UColor.arrow, marginVertical: 5,}}>Active公钥：</Text>
                          <Text style={{fontSize: 14, color: UColor.blackColor,}}>{this.state.turninsymbol}</Text>
                          <Text style={{fontSize: 15, color: UColor.arrow, marginVertical: 5, }}>Owner公钥：</Text>
                          <Text style={{fontSize: 14, color: UColor.blackColor,}}>{this.state.turninamount}</Text>
                        </View>
                        <View style={{ backgroundColor: UColor.btnColor, paddingVertical: 10, flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center',}}>
                          <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                            <Text style={{ color: UColor.arrow, fontSize: 16, textAlign: 'center',}}>扫码进入区块链浏览器</Text>
                            <Text style={{ color: UColor.arrow, fontSize: 16, textAlign: 'center', marginBottom: 10 }}>查询该账号激活信息</Text>
                            <Text style={{ color: UColor.btnColor, fontSize: 12, textAlign: 'center',width: '100%', paddingVertical: 5, backgroundColor: UColor.blueDeep,}}>EosToken技术提供</Text>
                          </View>
                          <View style={{justifyContent: 'center', alignSelf: 'center', paddingLeft: 10, }}>
                            <QRCode size={96} logo={UImage.etlogo} logoSize={ScreenUtil.setSpText(26)} logoBorderRadius={5}
                            value={"https://eosmonitor.io/account/" + this.state.turnintoaccount} logo={UImage.etlogo} logoSize={ScreenUtil.setSpText(29)} logoBorderRadius={5}/>
                          </View>
                        </View>
                      </View>
                    </View>
                  </ViewShot>
                </View>
              </ScrollView>
            </Animated.View>
            <View style={{ height: 170, marginTop: 10 }}>
              <Animated.View style={{
                height: 170, flex: 1, backgroundColor: UColor.riceWhite, transform: [
                  { translateX: 0 },
                  { translateY: this.state.rAPtransformY },
                ]
              }}>
                <View style={{ height: 125 }}>
                  <Text style={[styles.sharetitle,{color: UColor.blackColor}]}>分享到</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Button style={{ flex: 1, justifyContent: 'center' }} onPress={() => { this.shareAction(1) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_qq} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>QQ</Text>
                      </View>
                    </Button>
                    <Button  style={{ flex: 1, justifyContent: 'center' }} onPress={() => { this.shareAction(2) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_wx} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>微信</Text>
                      </View>
                    </Button>
                    <Button  style={{ flex: 1, }} onPress={() => { this.shareAction(3) }}>
                      <View style={{ alignSelf: 'center', width: ScreenWidth, }}>
                        <Image source={UImage.share_pyq} style={styles.shareimg} />
                        <Text style={[styles.sharetext,{color: UColor.arrow,}]}>朋友圈</Text>
                      </View>
                    </Button>
                  </View>
                </View>
                <Button onPress={() => { this.setState({ showReturnActivationPay: false }) }}>
                  <View style={[styles.cancelout,{backgroundColor: UColor.btnColor}]}>
                    <Text style={[styles.canceltext,{color: UColor.blackColor}]}>取消</Text>
                  </View>
                </Button>
              </Animated.View>
            </View>
          </View>
        ) : null}                                  
    </View>)
  }
}

const styles = StyleSheet.create({
  sharetitle: {
    width: ScreenWidth, 
    textAlign: "center",
    marginTop: ScreenUtil.autowidth(10), 
  },
  shareimg: {
    alignSelf: 'center',
    width: ScreenUtil.autowidth(50), 
    height: ScreenUtil.autowidth(50), 
    marginTop: ScreenUtil.autowidth(10), 
    marginBottom: ScreenUtil.autowidth(5), 
  },
  sharetext: {
    textAlign: 'center',
    fontSize: ScreenUtil.setSpText(16), 
  },

  cancelout: {
    width: ScreenWidth, 
    alignSelf: 'center' ,
    justifyContent: 'center',
    height: ScreenUtil.autowidth(45), 
  },
  canceltext: {
    textAlign: "center", 
    fontSize: ScreenUtil.setSpText(18), 
  },

})


let codePushOptions = { checkFrequency: codePush.CheckFrequency.ON_APP_RESUME };
Route = codePush(codePushOptions)(Route);

export default Route;

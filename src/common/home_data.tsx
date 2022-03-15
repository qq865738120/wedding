import { Badge, Group, Highlight, List, Space } from "@mantine/core";
import * as React from "react";

export const menu = [
  {
    text: "个人信息",
    href: "#1",
  },
  {
    text: "求职意向",
    href: "#2",
  },
  {
    text: "工作经验",
    href: "#3",
  },
  {
    text: "教育",
    href: "#4",
  },
  {
    text: "项目",
    href: "#5",
  },
  {
    text: "技能",
    href: "#6",
  },
  {
    text: "奖项荣誉",
    href: "#7",
  },
];

export const infoList = [
  {
    icon: "icon-mail",
    title: "邮箱",
    desc: "zhengwenjun1994@gmail.com",
  },
  {
    icon: "icon-phone",
    title: "电话",
    desc: "+8616602756604",
  },
  {
    icon: "icon-link",
    title: "个人博客",
    desc: "https://blog.ddnszwj.top",
  },
  {
    icon: "icon-github-fill",
    title: "Github",
    desc: "https://github.com/qq865738120",
  },
];

export const companyList = [
  {
    image: "https://minio.ddnszwj.top/web/personal-page/hydee.webp",
    name: "上海海典软件股份有限公司",
    infos: [
      {
        name: "工作时间",
        icon: "icon-time-circle",
        detail: <Highlight highlight="">2020年6月 - 目前</Highlight>,
      },
      {
        name: "简介",
        icon: "icon-detail",
        detail: (
          <Highlight className="content" highlight="">
            上海海典软件股份有限公司创建于2004年，专注医药流通行业17年，员工人数达900余人。公司总部位于上海，分别在⻓沙、沈阳、厦门、重庆、西安、济南设立6家分公司，在长沙投资2家子公司。公司以“科技赋能健康产业”为使命，致力于为用户提供专业的医药流通行业信息化解决方案及数字化转型服务
          </Highlight>
        ),
      },
      {
        name: "职位",
        icon: "icon-codelibrary",
        detail: <Highlight highlight="">前端开发工程师</Highlight>,
      },
      {
        name: "工作内容",
        icon: "icon-file-ppt",
        detail: (
          <List>
            <List.Item>
              负责C端微商城项目开发工作。包括日常版本迭代、新功能开发、历史代码重构等内容
            </List.Item>
            <List.Item>
              负责C端微商城项目架构以及优化工作。包括解决项目历史遗留问题、优化小程序打包后文件体积、提升构建打包速度、流程自动化进而提升开发体验、日志埋点线上bug诊断等内容
            </List.Item>
            <List.Item>
              负责B端商户平台项目的开发工作。包括日常版本迭代、新更能开发等内容
            </List.Item>
          </List>
        ),
      },
    ],
  },
  {
    image: "https://minio.ddnszwj.top/web/personal-page/webull.webp",
    name: "湖南福米信息科技有限责任公司",
    infos: [
      {
        name: "工作时间",
        icon: "icon-time-circle",
        detail: <Highlight highlight="">2017年4月 - 2020年6月</Highlight>,
      },
      {
        name: "简介",
        icon: "icon-detail",
        detail: (
          <Highlight className="content" highlight="">
            湖南福米信息科技有限责任公司是一家全球可靠的数据服务商，服务涵盖信息、辅助交易。
            旗下系列产品覆盖13+个国家/地区、3大品类、29个交易所、100000+个投资标的，
            全球多地部署有数据中心，为用户提供极速数据和交易服务，完整呈现市场细节。
          </Highlight>
        ),
      },
      {
        name: "职位",
        icon: "icon-codelibrary",
        detail: <Highlight highlight="">前端开发工程师</Highlight>,
      },
      {
        name: "工作内容",
        icon: "icon-file-ppt",
        detail: (
          <List>
            <List.Item>
              负责运营活动页面（pc/mobile）开发，主要使用React相关技术栈，TypeScript进行开发。
            </List.Item>
            <List.Item>
              负责运营人员内部后台管理系统开发以及维护工作，为内部人员提供高效的处理工单、活动配置的能力。主要使用了React、Antd作为主要UI框架。
            </List.Item>
            <List.Item>
              负责公司官方网站的开发以及维护工作，并参与SEO的优化，图表渲染优化等任务。
            </List.Item>
          </List>
        ),
      },
    ],
  },
];

export const schoolList = [
  {
    name: "学校",
    value: "武汉大学珞珈学院",
  },
  {
    name: "专业",
    value: "软件工程",
  },
  {
    name: "类型",
    value: "统招全日制本科",
  },
  {
    name: "课程",
    value:
      "C语言程序设计、数据结构与算法、计算机组成原理、Java编程、Linux原理、计算机操作系统、编译原理、SQL Server数据库、计算机网络、编译原理等。",
  },
];

export const projectList = [
  {
    name: "微商城",
    nature: "商业项目",
    duty: (
      <Group>
        <Badge variant="outline">前端开发</Badge>
        <Badge variant="outline" color="red">
          架构优化
        </Badge>
      </Group>
    ),
    detail:
      "线上购药商城，同时支持h5端与小程序端。为不同商户托管小程序的开发与维护。支持商户个性化配置首页模板，同时根据不同用户需求可自由切换OBC模式、预约模式等。目前承载了上百家商户，高度自定义化，满足不同商户的个性化需求。",
    technologies: (
      <Group>
        <Badge variant="dot" color="teal">
          Taro
        </Badge>
        <Badge variant="dot" color="indigo">
          React
        </Badge>
        <Badge variant="dot" color="red">
          Mobx
        </Badge>
        <Badge variant="dot" color="blue">
          TypeScript
        </Badge>
        <Badge variant="dot" color="orange">
          Webpack
        </Badge>
        <Badge variant="dot" color="lime">
          Babel
        </Badge>
        <Badge variant="dot" color="pink">
          Sass
        </Badge>
        <Badge variant="dot" color="green">
          eslint
        </Badge>
        <Badge variant="dot" color="yellow">
          husky
        </Badge>
        <Badge variant="dot" color="cyan">
          sentry
        </Badge>
      </Group>
    ),
    codeLink: "",
    images: [
      { width: 400, height: 400, thumb: "1-1.webp" },
      { width: 400, height: 400, thumb: "1-2.webp" },
      { width: 400, height: 400, thumb: "1-3.webp" },
    ],
    code: {
      language: "tsx",
      text: `import Taro, { Component } from '@tarojs/taro'
import { inject, observer } from '@tarojs/mobx'
import { View, Image, Text, Button } from '@tarojs/components'
import rankIcon1 from '~/assets/images/dst/rank_icon_1.png'
import rankIcon2 from '~/assets/images/dst/rank_icon_2.png'
import rankIcon3 from '~/assets/images/dst/rank_icon_3.png'
import linkIcon from '~/assets/images/dst/link_icon.png'
import downloadIcon from '~/assets/images/dst/download_icon.png'
import './fans.scss'
import { HdFloatLayout } from '@hydee/components-taro'
import pages from '~/utils/page'
import { IDistributionStoreProps } from '~/store/distribution'
import { getIn } from '~/utils/tools'
import pic from '~/utils/pic'
import meta from '~/utils/meta'
import share, { IShareBase } from '~/utils/share'
import others from '~/utils/others'

interface IProps {
  app: any
  distribution: IDistributionStoreProps
}
interface IPageState {
  isShowDialog: boolean
}

/**
 * 分销粉丝页面
 *
 * @class SettleMent
 * @extends {Component<IPageState>}
 */
@inject('app', 'distribution')
@observer
export default class Fans extends Component<IProps, IPageState> {
  constructor(props) {
    super(props)
    this.state = {
      isShowDialog: false,
    }
  }

  componentDidMount() {
    const { isShowDialog } = this.$router.params
    this.setState({ isShowDialog: isShowDialog as unknown as boolean })
    meta.setTitle('粉丝')
    this.init()

    // TODO 埋点记录
    this.props.app.handleGlobalAutoTrack({
      requestParams: {
        action: '分销粉丝',
      },
    })
  }

  async onReachBottom() {
    const { distribution } = this.props

    if (
      this.currentPage >=
      getIn(distribution, ['floolwList', 'followPage', 'totalPage'], 0)
    ) {
      return
    }

    this.currentPage = this.currentPage + 1
    Taro.showLoading({
      title: '加载中...',
      mask: true,
    })
    await distribution.fetchFollowDetail({
      currentPage: this.currentPage,
    })
    Taro.hideLoading()
  }

  // 当前分页
  currentPage = 1

  init = async () => {
    const { distribution } = this.props

    Taro.showLoading({
      title: '加载中...',
      mask: true,
    })
    await Promise.all([
      distribution.fetchFollowDetail({
        currentPage: this.currentPage,
      }),
      distribution.fetchUserInfo(),
    ])
    this.shareConfig()
    Taro.hideLoading()
  }

  /**
   * 分享配置
   */
  shareConfig = () => {
    const { userInfo } = this.props.distribution
    const { merCode, appGlobalShareParams, saveAppGlobalShareParams } =
      this.props.app

    return share.shareBaseFunc(this, () => {
      const scene = others.queryStringFy({
        merCode,
        userMobile: getIn(userInfo, ['userMobile']),
        shareCode: getIn(userInfo, ['shareCode']),
      })
      const result: IShareBase = {
        title: '分销邀请',
        desc:
          getIn(userInfo, ['userName'], '-') +
          '邀请您成为分销员，分销商品得佣金。',
        path: '',
        imgUrl: getIn(userInfo, ['avatar']),
      }
      return result
    })
  }

  onCloseDialog = () => {
    this.setState({ isShowDialog: false })
  }

  onButtonClick = () => {
    this.setState({ isShowDialog: true })
  }

  onDownloadPoster = () => {
    pages.jumpToDstPoster()
  }

  onShareLinkClick = () => {
    share.handlerWXShareTip()
  }

  onShareAppMessage() {
    return this.shareConfig()
  }

  render() {
    const { isShowDialog } = this.state
    const { floolwList } = this.props.distribution

    console.log('floolwList', floolwList)

    return (
      <View className='dst-fans-page'>
        <View className='part-1'>
          <View className='left'>
            <Text className='title'>粉丝总数（人）</Text>
            <Text className='desc'>{getIn(floolwList, ['count'], '-')}</Text>
          </View>
          <View className='right'>
            <Text className='title'>粉丝返佣（元）</Text>
            <Text className='desc'>
              {getIn(floolwList, ['allIncome'], '-')}
            </Text>
          </View>
        </View>

        <View className='part-2'>
          {getIn(floolwList, ['followPage', 'data'], []).map((item, index) => (
            <View key={JSON.stringify(item)} className='item'>
              <View className='left'>
                <View className='icon'>
                  <Image
                    className='image'
                    webp
                    src={pic.getImgUrl(getIn(item, ['avatar']), { w: 200 })}
                  />
                  {index < 2 ? (
                    <Image
                      className='logo'
                      webp
                      src={
                        index === 0
                          ? rankIcon1
                          : index === 1
                          ? rankIcon2
                          : rankIcon3
                      }
                    />
                  ) : null}
                </View>

                <Text className='title'>{getIn(item, ['userName'], '-')}</Text>
              </View>
              <View className='right'>
                <Text className='title'>返佣</Text>
                <Text className='desc'>
                  {getIn(item, ['invitedCommissionAmount'], '-')}
                </Text>
              </View>
            </View>
          ))}
        </View>

        <View className='part-3' onClick={this.onButtonClick}>
          发展粉丝赚收益
        </View>

        <HdFloatLayout
          visible={isShowDialog}
          onClose={this.onCloseDialog}
          title='邀请好友'
          maskClick
        >
          <View className='dialog-body'>
            {/* <View className='item' onClick={this.onShareLinkClick}>
              <Image className='icon' src={linkIcon} />
              <Text className='text'>分享链接</Text>
            </View> */}
            <Button
              className='item wx-btn'
              openType='share'
              onClick={this.onShareLinkClick}
            >
              <Image webp className='icon' src={linkIcon} />
              <Text className='text'>分享链接</Text>
            </Button>
            <View
              className='item'
              style={{ zIndex: 1 }}
              onClick={this.onDownloadPoster}
            >
              <Image webp className='icon' src={downloadIcon} />
              <Text className='text'>下载海报</Text>
            </View>
          </View>
        </HdFloatLayout>
      </View>
    )
  }
}`,
    },
  },
  {
    name: "jks-cli",
    nature: "开源项目",
    duty: (
      <Group>
        <Badge variant="outline">前端开发</Badge>
        <Badge variant="outline" color="yellow">
          界面设计
        </Badge>
        <Badge variant="outline" color="red">
          架构设计
        </Badge>
      </Group>
    ),
    detail:
      "一款Jenkins命令行工具。实现了一键构建多个项目、保存构建命令、导入导出设置、构建完成通知等功能。",
    technologies: (
      <Group>
        <Badge variant="dot" color="pink">
          Ink
        </Badge>
        <Badge variant="dot" color="indigo">
          React
        </Badge>
        <Badge variant="dot">NodeJs</Badge>
        <Badge variant="dot" color="cyan">
          conf
        </Badge>
        <Badge variant="dot" color="violet">
          shelljs
        </Badge>
        <Badge variant="dot" color="orange">
          meow
        </Badge>
        <Badge variant="dot" color="blue">
          TypeScript
        </Badge>
        <Badge variant="dot" color="green">
          eslint
        </Badge>
        <Badge variant="dot" color="dark">
          ava
        </Badge>
      </Group>
    ),
    codeLink: "https://github.com/qq865738120/jks-cli",
    player: "464102",
    code: {
      language: "tsx",
      text: `import { Box } from "ink"
import React, { FC, useEffect, useMemo, useState } from "react"
import { readSetting } from "./common/settingHelper"
import { ISetForm } from "./components/SetForm"
import shell from "shelljs"
import Tips, { ITipsProps } from "./components/Tips"
import Select from "./components/Select"
import meow from "meow"
import BuildView from "./BuildView"

export interface IRunView {
  cli: meow.Result<meow.AnyFlags>
  quick: string
}

const RunView: FC<IRunView> = ({ quick, cli }) => {
  // 步骤
  const [setup, setSetup] = useState(-1)
  // 是否展示build视图
  const [isShowBuildView, setIsShowBuildView] = useState(false)
  // build视图job参数
  const [buildJobs, setBuildJobs] = useState<string[]>([])
  // build视图symbol参数
  const [buildSymbol, setBuildSymbol] = useState<string>(",")
  // 设置
  const [setting, setSetting] = useState<{
    list?: ISetForm[]
    userInfo?: string
  }>()
  const [quickList, setQuickList] = useState<
    { label: string; value: string, subLabel: string }[]
  >([])
  // 提示
  const [tips, setTips] = useState<ITipsProps>({
    isShow: false,
    type: "success",
    message: "",
  })

  useEffect(() => {
    setSetting((readSetting() || {}) as any)
  }, [])

  useEffect(() => {
    if (setting) {
      const item = setting.list?.find(item => item.title === quick)
      if (item && item.command) {
        setTips({
          isShow: true,
          type: "info",
          message: "开始运行",
        })
        runCommand(item.command)
      } else {
        setQuickList(
          (setting.list || []).map(item => {
            return {
              label: item.title,
              value: item.command,
              subLabel: item.remark
            }
          })
        )
        if ((setting.list || []).length === 0) {
          setTips({
            isShow: true,
            type: "error",
            message:
              "您还没有设置快捷方式，请使用jks-cli set命令新增一些快捷方式。",
          })
        } else {
          setSetup(0)
        }
      }
    }
  }, [setting])

  const onSelectQuick = (item: any) => {
    setSetup(1)
    setTips({
      isShow: true,
      type: "info",
      message: \`快捷方式: \${item.label}\`,
    })
    runCommand(item.value)
  }

  const runCommand = (command: string) => {
    if (/^jks-cli\s*build\s*/.test(command)) {
      setIsShowBuildView(true)
      setBuildJobs(
        command
          .replace(/^jks-cli\s*build\s*/, "")
          .split(/\s*(--job|--j)\s*/g)
          .filter(Boolean)
          .filter(
            (item: string) =>
              item !== "--job" && item !== "--j" && !/^--/.test(item)
          )
          .map((item: string) => item.split(/\s*--.*$/g)[0] || "")
      )
      const symbolStr: any = /(--symbol\s*\S*)|(--s\s*\S*)/g.exec(command)
      const symbol = symbolStr ? symbolStr[0].split(/--s(ymbol)?\s*/) : [","]
      setBuildSymbol(symbol.pop())
    } else {
      const result = shell.exec(command)
      if (result.code === 0) {
        setTips({
          isShow: true,
          type: "success",
          message: "运行完成",
        })
      } else {
        setTips({
          isShow: true,
          type: "error",
          message: "出错啦，请检查快捷方式 command 是否正确",
        })
      }
    }
  }

  const build = useMemo(
    () => (
      <BuildView
        cli={cli}
        jobs={buildJobs}
        symbol={buildSymbol}
        onFinish={() =>
          setTips({
            isShow: true,
            type: "success",
            message: "运行完成",
          })
        }
      />
    ),
    [buildJobs, buildSymbol]
  )

  return (
    <Box flexDirection='column'>
      {setup === 0 && (
        <Select
          label='您要运行哪一个快捷方式？'
          items={quickList}
          onConfirm={onSelectQuick}
        />
      )}

      {setup === 1 && isShowBuildView && build}

      <Tips {...tips}></Tips>
    </Box>
  )
}

export default RunView`,
    },
  },
  {
    name: "UI组件库",
    nature: "商业项目",
    duty: (
      <Group>
        <Badge variant="outline">前端开发</Badge>
      </Group>
    ),
    detail:
      "微商城项目通用组件库。封装了包括基础组件、复杂组件等一些业务无关的纯UI组件。",
    technologies: (
      <Group>
        <Badge variant="dot" color="teal">
          Taro
        </Badge>
        <Badge variant="dot" color="indigo">
          React
        </Badge>
        <Badge variant="dot" color="blue">
          TypeScript
        </Badge>
        <Badge variant="dot" color="orange">
          Webpack
        </Badge>
        <Badge variant="dot" color="lime">
          Babel
        </Badge>
        <Badge variant="dot" color="pink">
          Sass
        </Badge>
        <Badge variant="dot" color="green">
          eslint
        </Badge>
        <Badge variant="dot" color="yellow">
          husky
        </Badge>
        <Badge variant="dot" color="cyan">
          lerna
        </Badge>
      </Group>
    ),
    images: [
      { width: 400, height: 400, thumb: "3-1.webp" },
      { width: 800, height: 400, thumb: "3-2.webp" },
      { width: 400, height: 400, thumb: "3-3.webp" },
    ],
    code: {
      language: "tsx",
      text: `/**
* 按钮组件
*/

import Taro, { Component } from '@tarojs/taro'
import { Button } from '@tarojs/components'

import './Button.scss'
import Loading from '../Loading/Loading'

/**
* props属性
*/
interface IProps {
  /**
  * 是否水平方向铺满
  */
  horizontalThrough?: boolean
  /**
  * 是否加载中
  */
  isLoading?: boolean
  /**
  * 按钮宽度
  */
  width?: number
  /**
  * 是否吸底
  */
  isBottomFixed?: boolean
  /**
  * 按钮尺寸
  */
  size?: 'large' | 'medium' | 'small' | 'mini'
  /**
  * 主题
  */
  theme?: 'default' | 'red' | 'blue' | 'golden'
  /**
  * 按钮圆角大小
  */
  radius?: number
  /**
  * 点击事件
  */
  onClick?: Function
  /**
  * 是否禁用
  */
  disabled?: boolean
  /**
  * 自定义类名
  */
  'custom-class'?: string
  /**
  * 幽灵按钮
  */
  plain?: boolean
  /**
  * 参考小程序元素open-type属性
  */
  openType?:
    | 'contact'
    | 'contactShare'
    | 'share'
    | 'getRealnameAuthInfo'
    | 'getAuthorize'
    | 'getPhoneNumber'
    | 'getUserInfo'
    | 'lifestyle'
    | 'launchApp'
    | 'openSetting'
    | 'feedback'
    | undefined
}

/**
* 组件内部属性
*/
interface IState {
  touchClass: string
}

class HdButton extends Component<IProps, IState> {
  static defaultProps: IProps = {
    theme: 'default',
    radius: 96,
    isLoading: false,
  }

  constructor(props) {
    super(props)
    this.state = {
      touchClass: '',
    }
  }

  /**
  * 外部样式类
  */
  static externalClasses = ['custom-class']

  handleClick() {
    const { onClick, disabled, isLoading } = this.props
    if (disabled || isLoading) {
      return
    }
    onClick && onClick()
  }

  onTouchStart = () => {
    const { disabled } = this.props
    if (disabled) {
      return
    }
    this.setState({ touchClass: 'touch' })
  }

  onTouchEnd = () => {
    const { disabled } = this.props
    if (disabled) {
      return
    }
    setTimeout(() => {
      this.setState({ touchClass: '' })
    }, 100)
  }

  getColor = () => {
    const { theme, plain } = this.props
    let result = ''
    switch (theme) {
      case 'default':
        result = plain ? '#5C5C5C' : '#5C5C5C'
        break
      case 'red':
        result = plain ? '#f32525' : '#ffffff'
        break
      case 'blue':
        result = plain ? '#426bfe' : '#ffffff'
        break
      case 'golden':
        result = plain ? '#f7c27b' : '#ffffff'
        break
      default:
        result = '#5C5C5C'
        break
    }
    return result
  }

  render() {
    const {
      size,
      horizontalThrough,
      theme,
      disabled,
      isBottomFixed,
      plain,
      openType,
      radius,
      isLoading,
      width,
    } = this.props
    const { touchClass } = this.state
    const h5ClassName = this.props['custom-class']
    // console.log('children', ((children as any) || []).length)

    return (
      <Button
        openType={openType}
        className={\`hd-taro-button size-\${size} \${
          process.env.TARO_ENV === 'h5' ? h5ClassName : 'custom-class'
        } \${horizontalThrough ? 'horizontal-through' : ''} theme-\${theme} \${
          disabled ? 'disabled' : ''
        } \${isBottomFixed ? 'bottom-fixed' : ''} \${
          plain ? 'plain' : ''
        } \${touchClass}\`}
        style={{
          borderRadius: Taro.pxTransform(radius || 96),
          ...(width ? { width: Taro.pxTransform(width) } : {}),
          ...(width ? { minWidth: Taro.pxTransform(width) } : {}),
        }}
        onClick={this.handleClick.bind(this)}
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
      >
        {isLoading ? (
          <Loading
            custom-class='loading'
            size={size === 'mini' ? 32 : 40}
            color={this.getColor()}
            style={
              ((this.props.children || []) as any).length > 0
                ? { marginRight: Taro.pxTransform(20) }
                : {}
            }
          />
        ) : null}
        {this.props.children}
      </Button>
    )
  }
}

export default HdButton`,
    },
  },
  {
    name: "coder-notifier",
    nature: "开源项目",
    duty: (
      <Group>
        <Badge variant="outline">前端开发</Badge>
        <Badge variant="outline" color="yellow">
          界面设计
        </Badge>
        <Badge variant="outline" color="red">
          架构设计
        </Badge>
      </Group>
    ),
    detail:
      "一款定时提醒命令行工具。通过预先设置一些提醒任务，就可以实现自动提醒喝水、休息等功能。未来还将引入插件机制，可以根据需求自行扩展。",
    technologies: (
      <Group>
        <Badge variant="dot" color="pink">
          Ink
        </Badge>
        <Badge variant="dot" color="indigo">
          React
        </Badge>
        <Badge variant="dot">NodeJs</Badge>
        <Badge variant="dot" color="cyan">
          schedule
        </Badge>
        <Badge variant="dot" color="violet">
          shelljs
        </Badge>
        <Badge variant="dot" color="orange">
          meow
        </Badge>
        <Badge variant="dot" color="blue">
          TypeScript
        </Badge>
        <Badge variant="dot" color="green">
          eslint
        </Badge>
        <Badge variant="dot" color="dark">
          ava
        </Badge>
        <Badge variant="dot" color="yellow">
          pm2
        </Badge>
      </Group>
    ),
    codeLink: "https://github.com/qq865738120/coder-notifier",
    player: "464113",
    code: {
      language: "tsx",
      text: `import { Box } from "ink"
import React, { FC, useEffect, useState } from "react"
import Logo from "./components/Logo"
import Tips, { ITipsProps } from "./components/Tips"
import shell from "shelljs"
import pm2 from "pm2"
import MyTable from "./components/MyTable"
import Loading from "./components/Loading"
import { readSetting } from "./common/settingHelper"
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path")
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs")

const setting = readSetting() || {}

const SaveView: FC = () => {
  // 提示
  const [tips, setTips] = useState<ITipsProps>({
    isShow: false,
    type: "success",
    message: "",
  })
  // pm2进程表格
  const [pm2List, setPm2List] = useState<any>([])
  const [loadingOption, setLoadingOption] = useState({
    isLoading: process.platform !== "win32",
    text: "正在安装pm2",
  })

  useEffect(() => {
    if ((setting.list || []).length === 0) {
      setLoadingOption({ isLoading: false, text: "" })
      setTips({
        isShow: true,
        type: "info",
        message: "没有发现通知，请先设置通知。",
      })
    } else {
      if (process.platform === "darwin") {
        saveToOSX()
      } else if (process.platform === "win32") {
        saveToWin()
      } else {
        setTips({
          isShow: true,
          type: "error",
          message: "暂时不支持该系统。",
        })
      }
    }

    return () => {
      return pm2.disconnect()
    }
  }, [])

  const saveToOSX = () => {
    const result = shell.exec("npm install pm2 -g", {
      silent: true,
    })
    setLoadingOption({ isLoading: false, text: "" })
    if (result.code === 0) {
      setTips({
        isShow: true,
        type: "success",
        message: "安装pm2成功",
      })
    } else {
      setTips({
        isShow: true,
        type: "error",
        message: "安装pm2失败",
      })
      setTimeout(() => {
        process.exit(1)
      }, 0)
    }
    pm2.connect(err => {
      if (err) {
        setTips({
          isShow: true,
          type: "error",
          message: "连接pm2失败",
        })
        setTimeout(() => {
          process.exit(1)
        }, 0)
      }
      pm2.start(
        {
          name: "coder-notifier",
          script: "coder-notifier",
          args: "start",
          log_date_format: "YYYY-MM-DD HH:mm Z",
        },
        err => {
          if (err) {
            setTips({
              isShow: true,
              type: "error",
              message: "启动coder-notifier进程失败，请检查是否安装成功。",
            })
            setTimeout(() => {
              process.exit(1)
            }, 0)
          } else {
            setTips({
              isShow: true,
              type: "success",
              message: "启动coder-notifier进程成功",
            })
            const result = shell.exec("pm2 startup", {
              silent: true,
            })
            shell.exec(result.stdout.replace("sudo", ""), {
              silent: true,
            })
            shell.exec("pm2 save --force", {
              silent: true,
            })
            pm2.list((err, list) => {
              if (!err) {
                const tableData = list.map(item => {
                  return {
                    id: item.pm_id,
                    name: item.name,
                    status: item.pm2_env?.status,
                  }
                })
                setPm2List(tableData)
                setTips({
                  isShow: true,
                  type: "success",
                  message: "完成",
                })
                setTimeout(() => {
                  process.exit(0)
                }, 0)
              } else {
                setTips({
                  isShow: true,
                  type: "info",
                  message: "获取进程列表失败",
                })
                setTimeout(() => {
                  process.exit(1)
                }, 0)
              }
            })
          }
        }
      )
    })
  }

  const saveToWin = () => {
    setTips({
      isShow: false,
      type: "success",
      message: "",
    })
    const result = shell.exec("npm root -g", {
      silent: true,
    })
    const tempArr = result.stdout.split("\\")
    tempArr.pop()
    const batLinkPath = path.join(
      "C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\win-save-link.vbs"
    )
    const batPath = path.join(
      ...tempArr,
      "node_modules/coder-notifier/win-save.vbs"
    )
    if (!fs.existsSync(batLinkPath)) {
      fs.symlinkSync(batPath, batLinkPath, "file")
      setTips({
        isShow: true,
        type: "success",
        message: "保存开机启动项成功",
      })
    }

    shell.exec(batPath)
    setTips({
      isShow: true,
      type: "success",
      message: "启动成功",
    })
    setTimeout(() => {
      process.exit(0)
    }, 0)
  }

  return (
    <Box flexDirection='column'>
      <Logo />

      {loadingOption.isLoading && <Loading>{loadingOption.text}</Loading>}

      {pm2List.length > 0 && (
        <MyTable title='pm2进程列表' data={(pm2List || []) as any}></MyTable>
      )}

      <Tips {...tips}></Tips>
    </Box>
  )
}

export default SaveView`,
    },
  },
  {
    name: "taro-plugin-image-compress",
    nature: "开源项目",
    duty: (
      <Group>
        <Badge variant="outline">前端开发</Badge>
        <Badge variant="outline" color="red">
          架构设计
        </Badge>
      </Group>
    ),
    detail:
      "一款自动化的图片无损压缩Taro插件，自动压缩项目中png、jpg/jpeg、gif、svg、webp格式的图片。采用异步压缩、缓存等机制提升速度。",
    technologies: (
      <Group>
        <Badge variant="dot" color="pink">
          imagemin
        </Badge>
        <Badge variant="dot" color="indigo">
          Taro
        </Badge>
        <Badge variant="dot">NodeJs</Badge>
        <Badge variant="dot" color="violet">
          jest
        </Badge>
        <Badge variant="dot" color="blue">
          TypeScript
        </Badge>
      </Group>
    ),
    codeLink: "https://github.com/qq865738120/taro-plugin-image-compress",
    player: "464119",
    code: {
      language: "tsx",
      text: `import { doCache, getCache } from "./cache.js";
import { getFileHash, getBufferHash } from "./hash.js";
import isNeedCompress from "./isNeedCompress.js";
const imagemin = require("imagemin");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");
const imageminWebp = require("imagemin-webp");

const fsPath = require("fs-path");

const compress = (ctx, dirPath?: string) => {
  const { chalk } = ctx.helper;
  const cache = getCache();
  const pluginObj = {
    gif: imageminGifsicle(),
    png: imageminOptipng(),
    jpg: imageminJpegtran(),
    jpeg: imageminJpegtran(),
    svg: imageminSvgo(),
    webp: imageminWebp(),
  };
  let count = 0;
  let compressCount = 0;

  const imageFiles: string[] = fsPath.findSync(
    dirPath || "./src",
    (_filepath, stats, filename) => {
      if (
        stats === "file" &&
        /\.png$|\.jpg$|\.jpeg$|\.svg$|\.gif$/.test(filename)
      ) {
        return true;
      }
      if (stats === "directory") {
        return true;
      }
      return false;
    }
  ).files;

  imageFiles.map((path) => {
    let _path = path;
    if (process.platform === "win32") {
      _path = _path.split("\\").join("/");
    }
    getFileHash(path, (hash) => {
      if (isNeedCompress(_path, hash, cache)) {
        const destinationArr = _path.split("/");
        const fileName = destinationArr.pop() || "";
        imagemin([_path], {
          destination: destinationArr.join("/"),
          plugins: [pluginObj[fileName.split(".").pop() || "png"]],
        })
          .then((buffer) => {
            count++;
            if (!buffer || buffer.length === 0) {
              return;
            }
            const newHash = getBufferHash(buffer[0].data);
            // 替换新的hash值
            cache[buffer[0].sourcePath] = newHash;
            compressCount++;
            console.log(chalk.yellowBright("压缩 "), \`✅\${path}\`);
          })
          .catch((err) => {
            count++;
            console.error("压缩出错", err);
          });
      } else {
        count++;
      }
    });
  });

  const timerId = setInterval(() => {
    if (count === imageFiles.length) {
      doCache(cache);
      clearInterval(timerId);
      console.log(
        chalk.blueBright("结束 "),
        \`✅taro-plugin-image-compress已为您压缩\${compressCount}张图片！👏👏👏\`
      );
    }
  }, 100);
};
// compress();
export default compress;`,
    },
  },
  {
    name: "babel-plugin-console-clear",
    nature: "商业项目",
    duty: (
      <Group>
        <Badge variant="outline">前端开发</Badge>
        <Badge variant="outline" color="red">
          架构设计
        </Badge>
      </Group>
    ),
    detail:
      "清除代码中的console语句。根据需求可以自行配置需要保留的console语句，默认配置下清除所有。该插件提供两个可配置参数，ignore为string[]类型，ignoreTag为string[]类型，插件会匹配第一个参数中是否包含需要忽略的tag，包含的话则不清除。",
    technologies: (
      <>
        <Badge variant="dot" color="lime">
          Babel
        </Badge>
      </>
    ),
    codeLink: "",
    images: [
      { width: 400, height: 400, thumb: "6-1.webp" },
      { width: 400, height: 400, thumb: "6-2.webp" },
      { width: 400, height: 400, thumb: "6-3.webp" },
    ],
    code: {
      language: "js",
      text: `module.exports = function ({ types: t }) {
return {
  visitor: {
    ExpressionStatement(path, state) {
      const { opts } = state;
      const propertyArr = [
        "assert",
        "clear",
        "context",
        "count",
        "countReset",
        "debug",
        "dir",
        "dirxml",
        "error",
        "group",
        "groupCollapsed",
        "groupEnd",
        "info",
        "log",
        "profile",
        "profileEnd",
        "table",
        "time",
        "timeEnd",
        "timeLog",
        "timeStamp",
        "trace",
        "warn",
      ];

      if (path.node.expression.type !== "CallExpression") return;

      if (!path.node.expression.callee) return;

      // 拿到object与property, 比如console.log语句的object name为console, property name为log
      const { object, property } = path.node.expression.callee;
      const literal = path.node.expression.arguments[0];

      if (!property) return;
      if (!object) return;
      // 如果表达式语句的object name不为console, 不作处理
      if (object.name !== "console") return;
      if (!propertyArr.includes(property.name)) return;

      // 判断property name是不是插件配置里被忽略的
      const isIgnore =
        (opts.ignore || []).find((ele) => ele === property.name) || false;
      const isIgnoreTag =
        literal && literal.value
          ? (opts.ignoreTag || []).find(
              (ele) => JSON.stringify(literal.value).indexOf(ele) > -1
            ) || false
          : false;
      // 如果不是, 删除此条语句
      if (!isIgnore && !isIgnoreTag) path.remove();
    },
  },
};
};`,
    },
  },
  {
    name: "home-page",
    nature: "开源项目",
    duty: (
      <Group>
        <Badge variant="outline">前端开发</Badge>
        <Badge variant="outline" color="yellow">
          界面设计
        </Badge>
        <Badge variant="outline" color="red">
          架构设计
        </Badge>
      </Group>
    ),
    detail:
      "个人导航页项目，采用Gatsby开发，支持ssr，支持yaml文件配置，无需修改代码。支持自动化部署，实现零门槛快速搭建自己的导航页",
    technologies: (
      <Group>
        <Badge variant="dot" color="grape">
          Gatsby
        </Badge>
        <Badge variant="dot" color="red">
          Redux
        </Badge>
        <Badge variant="dot" color="indigo">
          React
        </Badge>
        <Badge variant="dot" color="blue">
          TypeScript
        </Badge>
        <Badge variant="dot" color="violet">
          GraphiQL
        </Badge>
      </Group>
    ),
    codeLink: "https://github.com/qq865738120/home-page",
    images: [
      { width: 400, height: 400, thumb: "7-1.webp" },
      { width: 400, height: 400, thumb: "7-2.webp" },
      { width: 400, height: 400, thumb: "7-3.webp" },
    ],
    code: {
      language: "tsx",
      text: `import * as React from "react";
import "./home.scss";
import InputComponent from "../components/input";
import ThemeSwitchComponent from "../components/theme_switch";
import ContentBoxComponent from "../components/content_box";
import { graphql } from "gatsby";
import backgroundLightImg from "../images/background_light.png";
import backgroundDarkImg from "../images/background_dark.png";
import { useSelector } from 'react-redux';

// markup
const IndexPage = () => {
  const currentTheme = useSelector(state => state.theme);

  return (
    <main className={\`index-page index-page-\${currentTheme}\`}>
      <section className="content">
        <div className="theme-switch">
          <ThemeSwitchComponent />
        </div>
        <InputComponent />
        <ContentBoxComponent />
      </section>

      <img
        className="background-img"
        src={currentTheme === "light" ? backgroundLightImg : backgroundDarkImg}
        alt="bg"
      />
      <img
        className="background-cover"
        src={currentTheme === "light" ? backgroundLightImg : backgroundDarkImg}
        alt="bg"
      />
    </main>
  );
};

export default IndexPage;`,
    },
  },
  {
    name: "自由视角小程序",
    nature: "商业项目",
    duty: (
      <Group>
        <Badge variant="outline">前端开发</Badge>
        <Badge variant="outline" color="red">
          架构设计
        </Badge>
      </Group>
    ),
    detail:
      "一款视频小程序，支持360度全方位观看视频，同时支持缩放操作。用户可用实时操控视频视角，延迟极低，几乎无感知。",
    technologies: (
      <Group>
        <Badge variant="dot" color="grape">
          axios
        </Badge>
        <Badge variant="dot" color="red">
          websocket
        </Badge>
        <Badge variant="dot" color="indigo">
          trtc
        </Badge>
      </Group>
    ),
    images: [
      { width: 400, height: 400, thumb: "8-1.webp" },
      { width: 400, height: 400, thumb: "8-2.webp" },
      { width: 400, height: 400, thumb: "8-3.webp" },
    ],
    code: {
      language: "javascript",
      text: `/**
* 首页
*/
import regeneratorRuntime from 'regenerator-runtime'
import {
  mapToData
} from 'minii'
import commonStore from '../../stores/common.js';
import {
  px2Rpx,
  getIn
} from '../../common/tools.js';

const app = getApp()
const sysInfo = wx.getSystemInfoSync();
let orderField = "degree";
let currentPage = 1;
let searchVal = "";

const connect = mapToData((state) => ({
  isInit: state.common.isInit,
  userInfo: state.common.userInfo,
  isAuthorization: state.common.isAuthorization,
  activityListRes: state.common.activityListRes,
  activityType: state.common.activityType,
}))

Page(connect({
  data: {
    topBarSelected: 1,
    listHeight: px2Rpx(sysInfo.windowHeight) - 200 + "rpx",
    isLoading: false,
    orderType: ["desc", "desc"] // 活动列表排序状态，desc降序，asc升序
  },

  async onLoad() {
    const timer = setInterval(() => {
      if (this.data.isInit) {
        console.log("isAuthorization", this.data.isAuthorization);
        clearInterval(timer);
      }
    }, 100);
  },

  onShow() {
    currentPage = 1;
    this.setData({
      topBarSelected: 1,
      orderType: ["desc", "desc"]
    });
    commonStore.refechActivityList({
      orderField: "update_time",
      condition: searchVal,
      orderType: "desc",
      ...this.data.activityType
    });
  },

  async onSearch(e) {
    await commonStore.refechActivityList({
      orderField,
      condition: e.detail.detail.value
    });
    searchVal = e.detail.detail.value;
    currentPage = 1;
  },

  async onclean() {
    searchVal = "";
    currentPage = 1;
    await commonStore.refechActivityList({
      orderField,
      condition: searchVal
    });
  },

  onTopBarTap(e) {
    const firstOrderType = this.data.orderType[0] === "desc" ? "asc" : "desc";
    const secondOrderType = this.data.orderType[1] === "desc" ? "asc" : "desc";

    if (e.currentTarget.dataset.index === 0 && this.data.topBarSelected === e.currentTarget.dataset.index) {
      this.setData({
        orderType: [firstOrderType, this.data.orderType[1]]
      })
    } else if (e.currentTarget.dataset.index === 1 && this.data.topBarSelected === e.currentTarget.dataset.index) {
      this.setData({
        orderType: [this.data.orderType[0], secondOrderType]
      })
    }

    switch (e.currentTarget.dataset.index) {
      case 0:
        commonStore.refechActivityList({
          orderField: "degree",
          condition: searchVal,
          orderType: this.data.topBarSelected === e.currentTarget.dataset.index ? firstOrderType : this.data.orderType[0],
          ...this.data.activityType
        });
        orderField = "degree";
        currentPage = 1;
        break;
      case 1:
        commonStore.refechActivityList({
          orderField: "update_time",
          condition: searchVal,
          orderType: this.data.topBarSelected === e.currentTarget.dataset.index ? secondOrderType : this.data.orderType[1],
          ...this.data.activityType
        });
        orderField = "update_time";
        currentPage = 1;
        break;
    }

    this.setData({
      topBarSelected: e.currentTarget.dataset.index
    });
  },

  onFilterTap() {
    wx.navigateTo({
      url: "/pages/filter/filter",
    })
  },

  onGoMore(e) {
    commonStore.changeCurrentActivity(e.currentTarget.dataset.activity)
    wx.navigateTo({
      url: "/pages/more/more",
    })
  },

  onGoVideo(e) {
    commonStore.changeCurrentVideo({ id: e.currentTarget.dataset.activity.defaultVideoId })
    wx.navigateTo({
      url: "/pages/room/room",
    })
  },

  async scrollToLower(e) {
    if (this.data.activityListRes.canLoad) {
      currentPage = currentPage + 1;
      this.setData({
        isLoading: true
      });
      await commonStore.refechActivityList({
        orderField,
        current: currentPage,
        condition: searchVal
      });
      this.setData({
        isLoading: false
      });
    }
  },

  onShareAppMessage() {
    return {
      title: getIn(this.data.activityListRes, ["0", "name"], ""),
      path: \`/pages/index/index\`,
      imageUrl: getIn(this.data.activityListRes, ["0", "videoBgImgSrc"], "")
    }
  },

}))`,
    },
  },
  {
    name: "easyUI",
    nature: "开源项目",
    duty: (
      <Group>
        <Badge variant="outline">前端开发</Badge>
        <Badge variant="outline" color="yellow">
          界面设计
        </Badge>
        <Badge variant="outline" color="red">
          架构设计
        </Badge>
      </Group>
    ),
    detail:
      "一款简单易用的微信小程序组库，封装开发中常用的组件，提高开发效率，以及代码的可维护性。超越一行代码的极限，体验开箱即用开发方式。默认配置即可满足大部分需求，特殊情况可自定义相关属性来满足需求。",
    technologies: (
      <Group>
        <Badge variant="dot" color="grape">
          axios
        </Badge>
      </Group>
    ),
    codeLink: "https://github.com/qq865738120/easyUI",
    images: [
      { width: 400, height: 400, thumb: "9-1.webp" },
      { width: 400, height: 400, thumb: "9-2.webp" },
      { width: 400, height: 400, thumb: "9-3.webp" },
    ],
    code: {
      language: "javascript",
      text: `// component/senior/tabs/tabs.js
const themes = {
  smallBar: 'smallBar'
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items: {
      type: Array,
      value: ['item1', 'item2', 'item3', 'item4'],
      observer: function (newVal) {
        if (newVal && newVal.length < 5) {
          this.setData({
            itemWidth: (750 / newVal.length) - 60
          })
        }
      }
    },
    height: {
      type: String,
      value: '120'
    },
    textColor: {
      type: String,
      value: '#666666'
    },
    textSize: {
      type: String,
      value: '28'
    },
    selectColor: {
      type: String,
      value: '#FE9036'
    },
    selected: {
      type: String,
      value: '0',
      observer: function (newVal) {
        this.setData({
          mSelected: newVal
        })
        this.onItemTap({ currentTarget: { dataset: { index: newVal } } })
      }
    },
    theme: {
      type: String,
      value: 'default',
      observer: function (newVal) {
        if (this.data.theme == themes.smallBar) {
          this.setData({
            bottom: this.data.height / 2 - this.data.textSize - 8,
            scrollStyle: ''
          })
        }
      }
    },
    dataCus: {
      type: Array,
      value: '',
      observer: function (newVal) {
        this.setData({
          mDataCus: newVal
        });
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    itemWidth: 128,
    isScroll: true,
    scrollStyle: 'border-bottom: 1px solid #e5e5e5;',
    left: '0',
    right: '750',
    bottom: '0',
    mSelected: '0',
    lastIndex: 0,
    transition: 'left 0.5s, right 0.2s',
    windowWidth: 375,
    domData: [],
    textDomData: [],
    mDataCus: []
  },

  externalClasses: ['cus'],

  /**
   * 组件的方法列表
   */
  methods: {
    barLeft: function(index, dom) {
      let that = this;
      dom[index] && this.setData({
        left: dom[index].left
      })
    },
    barRight: function (index, dom) {
      let that = this;
      this.setData({
        right: that.data.windowWidth - (dom[index] && dom[index].right),
      })
    },
    onItemTap: function(e) {
      const index = e.currentTarget.dataset.index;
      let str = this.data.lastIndex < index ? 'left 0.5s, right 0.2s' : 'left 0.2s, right 0.5s';
      this.setData({
        transition: str,
        lastIndex: index,
        mSelected: index
      })
      if (this.data.theme == themes.smallBar) {
        this.barLeft(index, this.data.textDomData);
        this.barRight(index, this.data.textDomData);
      } else {
        this.barLeft(index, this.data.domData);
        this.barRight(index, this.data.domData);
      }
      this.triggerEvent('itemtap', e, { bubbles: true });
    }
  },

  lifetimes: {
    ready: function () {
      let that = this;
      const sysInfo = wx.getSystemInfoSync();
      this.setData({
        windowWidth: sysInfo.screenWidth
      })
      const query = this.createSelectorQuery();
      query.in(this).selectAll('.item').fields({
        dataset: true,
        rect: true,
        size: true
      }, function (res) {
        that.setData({
          domData: res,
        })
        that.barLeft(that.data.mSelected, that.data.domData);
        that.barRight(that.data.mSelected, that.data.domData);
      }).exec()
      query.in(this).selectAll('.text').fields({
        dataset: true,
        rect: true,
        size: true
      }, function (res) {
        that.setData({
          textDomData: res,
        })
        if (that.data.theme == themes.smallBar) {
          that.barLeft(that.data.mSelected, that.data.textDomData);
          that.barRight(that.data.mSelected, that.data.textDomData);
        }
      }).exec()
    },
  },
})`,
    },
  },
  {
    name: "react-neat",
    nature: "开源项目",
    duty: (
      <Group>
        <Badge variant="outline">前端开发</Badge>
        <Badge variant="outline" color="red">
          架构设计
        </Badge>
      </Group>
    ),
    detail:
      "轻量级的状态管理库，采用react hook实现，不依赖任何三方库。同时还支持异步操作，非常适合在小型项目中使用。API设计理念参考了redux，容易上手。",
    technologies: (
      <Group>
        <Badge variant="dot" color="indigo">
          React
        </Badge>
        <Badge variant="dot" color="yellow">
          husky
        </Badge>
        <Badge variant="dot" color="blue">
          TypeScript
        </Badge>
        <Badge variant="dot" color="orange">
          Rollup
        </Badge>
        <Badge variant="dot" color="lime">
          Babel
        </Badge>
        <Badge variant="dot" color="violet">
          Jest
        </Badge>
        <Badge variant="dot" color="green">
          eslint
        </Badge>
      </Group>
    ),
    codeLink: "https://github.com/qq865738120/react-neat",
    images: [
      { width: 400, height: 400, thumb: "10-1.webp" },
      { width: 400, height: 400, thumb: "10-2.webp" },
      { width: 400, height: 400, thumb: "10-3.webp" },
    ],
    code: {
      language: "typescript",
      text: `import { createContext, useContext, useState } from "react";
import * as React from "react";
import Store from "./store";
// import { Reducer } from "./type";
import { ParamsException } from "./utils/exceptions";
import { isPromise } from "./utils/baseUtil";

const storeList: Store[] = [];

/**
 * Get store list.
 */
export const getStoreList = (): Store[] => {
  return storeList;
};

/**
 * Determines whether the specified store exists.
 *
 * @param storeName store name
 */
export const hasStore = (storeName: string): boolean => {
  const storeObj: Store = storeList
    .filter(item => item.getName() === storeName)
    .pop();
  return storeObj ? true : false;
};

/**
 * Get the specified store.
 * If the store does not exist, it will be created.
 *
 * @param storeName store name
 * @param actions If the store has never been obtained, please pass in the reducer parameter.
 */

/**
 * Get the specified store.
 * If the store does not exist, it will be created.
 *
 * @export
 * @template T - The action type you defined.
 * @param {string} storeName - The store name, you can find the corresponding store through \`storeName\`
 * @param {T} [actions] - The action object can provide multiple actions, and each action corresponds to an operation.
 * @returns {Store} - The Store object
 */
export function getStore<T>(storeName: string, actions?: T): Store {
  let storeObj: Store = storeList
    .filter(item => item.getName() === storeName)
    .pop();

  if (storeObj) {
    return storeObj;
  }

  if (!actions) {
    throw new ParamsException(
      "If the store has never been obtained, please pass in the reducer parameter."
    );
  }

  const context = createContext(null);
  storeObj = new Store(storeName, actions, context);
  storeList.push(storeObj);
  return storeObj;
}

/**
 * The store reducer interface.
 *
 * @interface StoreReducer
 * @template T - The action type you defined.
 * @template U - The state type you defined.
 */
export interface StoreReducer<T, U> {
  state: U;
  actions: T;
}

/**
 * Use the store hook.
 *
 * @export
 * @template T
 * @template U
 * @param {Store} store - The store instance you want to use.
 * @param {*} initialState - Initial state.
 * @returns {StoreReducer<T, U>} - \`StoreReducer\` is an interface that provides \`state\` and \`actions\` to operate \`state\`.
 */
export default function useStore<T, U>(
  store: Store,
  initialState
): StoreReducer<T, U> {
  // const value = useReducer(store.getActions(), initialState, initializer);
  // return value;
  const actions = {} as T;
  console.log("store.getReducer()", store.getActions());
  const [state, setState] = useState(initialState);
  Object.keys(store.getActions()).forEach(name => {
    actions[name] = (arg): any => {
      const res = store.getActions()[name].call(this, state, arg);
      if (isPromise(res)) {
        Promise.resolve(res).then(ret => {
          setState({ ...state, ...ret });
        });
      } else {
        setState({ ...state, ...res });
      }
    };
  });
  return { state, actions };
}

interface ProviderProps<T, U> {
  store: Store;
  value: StoreReducer<T, U>;
  children: React.ReactNode[] | React.ReactNode;
}

/**
 * Store Provider component.
 * This component will distribute the state in the store to its children.
 * If you need to use multiple stores at the same time, you should use \`Providers\`.
 *
 * @export
 * @template T - The action type you defined.
 * @template U - The state type you defined.
 * @param {ProviderProps<T, U>} props - React component props.
 * @returns {React.FunctionComponentElement<React.ProviderProps<ProvidersProps<T, U>>>}
 */
export function Provider<T, U>(
  props: ProviderProps<T, U>
): React.FunctionComponentElement<React.ProviderProps<ProvidersProps<T, U>>> {
  const { store, value, children } = props;
  const childrenArr = Array.isArray(children) ? children : [children];
  return React.createElement(
    store.getContext().Provider,
    { value },
    ...childrenArr
  );
}

interface ProvidersProps<T, U> {
  stores: Store[];
  values: StoreReducer<T, U>[];
  children: React.ReactNode[] | React.ReactNode;
}

/**
 * Store Provider component.
 * This component will distribute the state in the store to its children.
 *
 * @export
 * @template T - The action type you defined.
 * @template U - The state type you defined.
 * @param {ProvidersProps<T, U>} props - React component props.
 * @returns {React.FunctionComponentElement<React.ProviderProps<ProvidersProps<T, U>>>}
 */
export function Providers<T, U>(
  props: ProvidersProps<T, U>
): React.FunctionComponentElement<React.ProviderProps<ProvidersProps<T, U>>> {
  const { stores, values, children } = props;
  const childrenArr = Array.isArray(children) ? children : [children];
  if (stores.length !== values.length) {
    throw new ParamsException("Stores and values must correspond one by one.");
  }

  const queue = [];

  stores.map((item, index) => {
    if (index === 0) {
      queue.push(
        React.createElement(
          item.getContext().Provider,
          { value: values[index] },
          ...childrenArr
        )
      );
    } else {
      queue.push(
        React.createElement(
          item.getContext().Provider,
          { value: values[index] },
          queue.pop()
        )
      );
    }
  });
  return queue.pop();
}

/**
 * Use context to get the state provided in the store.
 * \`useContext\` is the encapsulation method of \`useStoreContext\`.
 * The provider must be injected into the global component before use.
 *
 * @export
 * @template T - The action type you defined.
 * @template U - The state type you defined.
 * @param {Store} store - Pass in the store whose context you want to use
 * @returns {StoreReducer<T, U>} - \`StoreReducer\` is an interface that provides \`state\` and \`actions\` to operate \`state\`.
 */
export function useStoreContext<T, U>(store: Store): StoreReducer<T, U> {
  return useContext(store.getContext());
}`,
    },
  },
  {
    name: "背景国际音乐节门户网站",
    nature: "商业项目",
    duty: (
      <Group>
        <Badge variant="outline">前端开发</Badge>
        <Badge variant="outline" color="red">
          架构设计
        </Badge>
      </Group>
    ),
    detail:
      "背景国际音乐节艺术基金会门户网站，用于展示各类音乐资讯文章，以及演出购票入口。主要包括客户网站以及后台管理两个子项目，均采用Vue以及Nuxt框架搭建。客户网站部分采用ssr方式渲染，后台管理系统则采用spa方式。",
    technologies: (
      <Group>
        <Badge variant="dot" color="teal">
          Vue
        </Badge>
        <Badge variant="dot" color="lime">
          Nuxt
        </Badge>
        <Badge variant="dot" color="blue">
          TypeScript
        </Badge>
        <Badge variant="dot" color="blue">
          element-ui
        </Badge>
        <Badge variant="dot" color="pink">
          Sass
        </Badge>
        <Badge variant="dot" color="green">
          eslint
        </Badge>
        <Badge variant="dot" color="dark">
          i18n
        </Badge>
      </Group>
    ),
    images: [
      { width: 400, height: 400, thumb: "11-1.webp" },
      { width: 400, height: 400, thumb: "11-2.webp" },
      { width: 400, height: 400, thumb: "11-3.webp" },
    ],
    code: {
      language: "tsx",
      text: `<i18n lang="yaml">
zh:
  search: "搜索感兴趣的内容"
  news: "新闻资讯"
  more: "查看更多"
en:
  search: "Search for content of interest"
  news: "News"
  more: "View More"
</i18n>

<template>
  <section class="index-page">
    <section class="search-box">
      <img src="@/assets/search.png" />
      <input v-model="searchValue" type="text" :placeholder="$t('search')" @keyup="onInputKeyUp" />
    </section>

    <video ref="video" class="part-1" autoplay loop muted>
      <source
        src="http://bmffile.kuke.com/fundwebsite/th24-bmf-fund.mp4"
        type="video/mp4"
      />
    </video>

    <section class="part-2">
      <section class="title">
        <div class="text">NEWS INFORMATION</div>
        <div class="line-warp">
          <div class="line"></div>
          <img src="@/assets/triangle.png" />
          <div class="line"></div>
        </div>
        <div class="text-bg">{{ $t('news') }}</div>
      </section>

      <section class="top">
        <div v-for="item in list.slice(0, 3)" :key="item.id" class="item">
          <div class="img">
            <img :src="item.cover_img" />
          </div>
          <p class="title">{{ item.news_name }}</p>
        </div>
      </section>

      <section class="center">
        <NeswItem v-for="item in list.slice(3)" :key="item.id" :detail="item" />
      </section>

      <section class="bottom" @click="onMoreClick">{{ $t('more') }}</section>
    </section>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import NeswItem from '@/components/NewsItem.vue'
import { getPath } from '~/utils'
export default Vue.extend({
  components: {
    NeswItem,
  },
  layout: 'page',
  async asyncData(context) {
    const res = await context.$axios.$get('/V1/news/list', {
      params: {
        page: 1,
        pageSize: 12,
      },
    })
    if (res.ret === 0) {
      return { list: res.data.data }
    }
  },
  data() {
    return {
      list: [] as any[],
      searchValue: ''
    }
  },
  mounted() {
  },
  methods: {
    async _fetchNewsList() {
      const res = await this.$axios.$get('/V1/news/list', {
        params: {
          page: 1,
          pageSize: 12,
        },
      })
      console.log('_fetchDelete', res)
      if (res.ret === 0) {
        this.list = res.data.data
      }
    },
    onMoreClick() {
        this.$router.push(getPath(this.$store.state.app.lang, '/news-list'))
    },
    onInputKeyUp(event: any) {
      if (event.key === 'Enter') {
        this.$router.push({
          path: getPath(this.$store.state.app.lang, '/search'),
          query: {
            word: this.searchValue
          },
        })
      }
    }
  },
})
</script>

`,
    },
  },
  {
    name: "webpack-del-file-plugin",
    nature: "开源项目",
    duty: (
      <Group>
        <Badge variant="outline">前端开发</Badge>
      </Group>
    ),
    detail: "webpack的插件，用来删除一些构建后的文件，例如sourceMap文件。",
    technologies: (
      <Group>
        <Badge variant="dot" color="orange">
          Webpack
        </Badge>
        <Badge variant="dot" color="lime">
          Babel
        </Badge>
        <Badge variant="dot">NodeJs</Badge>
        <Badge variant="dot" color="violet">
          jest
        </Badge>
        <Badge variant="dot" color="green">
          eslint
        </Badge>
      </Group>
    ),
    images: [
      { width: 400, height: 400, thumb: "12-1.webp" },
      { width: 400, height: 400, thumb: "12-2.webp" },
      { width: 400, height: 400, thumb: "12-3.webp" },
    ],
    codeLink: "https://github.com/qq865738120/webpack-del-file-plugin",
    code: {
      language: "javascript",
      text: `import fs from 'fs'
import path from 'path'

const PLUGIN_NAME = 'WebpackDelFilePlugin'
const DEFAULT_DELETE_REGEX = /\.map$/

module.exports = class SentryPlugin {
  constructor(options) {
    this.deleteRegex = options.deleteRegex || DEFAULT_DELETE_REGEX
  }

  apply(compiler) {
    compiler.hooks.done.tapPromise(PLUGIN_NAME, async (stats) => {
      await this.deleteFiles(stats)
    })
  }

  // eslint-disable-next-line class-methods-use-this
  getAssetPath(compilation, name) {
    return path.join(
      compilation.getPath(compilation.compiler.outputPath),
      name.split('?')[0]
    )
  }

  async deleteFiles(stats) {
    Object.keys(stats.compilation.assets)
      .filter(name => this.deleteRegex.test(name))
      .forEach((name) => {
        const filePath = this.getAssetPath(stats.compilation, name)
        if (filePath) {
          fs.unlinkSync(filePath)
        }
        else {
          // eslint-disable-next-line no-console
          console.warn(
            \`\${PLUGIN_NAME}: unable to delete '\${name}'. \` +
              'File does not exist; it may not have been created ' +
              'due to a build error.'
          )
        }
      })
  }
}`,
    },
  },
  {
    name: "personal-page",
    nature: "开源项目",
    duty: (
      <Group>
        <Badge variant="outline">前端开发</Badge>
        <Badge variant="outline" color="yellow">
          界面设计
        </Badge>
        <Badge variant="outline" color="red">
          架构设计
        </Badge>
      </Group>
    ),
    detail:
      "个人首页。没错，你现在看到的就是本项目。该项目包括前后端两个子项目，前端是Gatsby框架搭建，后端则是NestJS框架搭建，数据库则用的是PostgreSQL（用了一次就再也离不开的数据库）。",
    technologies: (
      <Group>
        <Badge variant="dot" color="grape">
          Gatsby
        </Badge>
        <Badge variant="dot" color="indigo">
          React
        </Badge>
        <Badge variant="dot" color="blue">
          TypeScript
        </Badge>
        <Badge variant="dot" color="pink">
          Mantain
        </Badge>
        <Badge variant="dot" color="red">
          NestJS
        </Badge>
        <Badge variant="dot" color="violet">
          fastify
        </Badge>
        <Badge variant="dot" color="cyan">
          PostgreSQL
        </Badge>
      </Group>
    ),
    images: [
      { width: 400, height: 400, thumb: "13-1.webp" },
      { width: 400, height: 400, thumb: "13-2.webp" },
      { width: 400, height: 400, thumb: "13-3.webp" },
    ],
    codeLink: "https://github.com/qq865738120/personal-page-new",
    code: {
      language: "tsx",
      text: `import * as React from "react";
import "./home.scss";
import Bg1 from "../images/bg-1.svg";
import Bg2 from "../images/bg-2.svg";
import { useSelector } from "react-redux";
import {
  Card,
  Image,
  Timeline,
  Text,
  Title,
  Badge,
  Space,
  SimpleGrid,
  ScrollArea,
  Progress,
  Highlight,
  Modal,
} from "@mantine/core";
import { Prism } from "@mantine/prism";
import {
  companyList,
  infoList,
  menu,
  projectList,
  schoolList,
  skillList,
} from "../common/home_data";
import { useMediaQuery, useScrollIntoView } from "@mantine/hooks";
import { ResponsiveTreeMap } from "@nivo/treemap";
import axios from "axios";
import { useNotifications } from "@mantine/notifications";
import { isBrowser } from "../utils/index";
import AsciinemaPlayer from "../lib/asciinema-player";

// markup
const IndexPage = () => {
  // const currentTheme = useSelector(state => state.theme);
  const [menuIndex, setMenuIndex] = React.useState(0);
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);
  const [isOpenImagePreview, setIsOpenImagePreview] = React.useState(false);
  const [imagePreview, setImagePreview] = React.useState<any>({});
  const isPhone = useMediaQuery("(max-width: 760px)");
  const notifications = useNotifications();
  const scrollIntoView1 = useScrollIntoView({ offset: 80 });
  const scrollIntoView2 = useScrollIntoView({ offset: 80 });
  const scrollIntoView3 = useScrollIntoView({ offset: 80 });
  const scrollIntoView4 = useScrollIntoView({ offset: 80 });
  const scrollIntoView5 = useScrollIntoView({ offset: 80 });
  const scrollIntoView6 = useScrollIntoView({ offset: 80 });

  React.useEffect(() => {
    const player = [];
    if (isBrowser()) {
      projectList
        .filter((item) => item.player)
        .map((item) => {
          player.push(
            AsciinemaPlayer({}).create(
              \`https://asciinema.org/a/\${item.player}.cast\`,
              document.getElementById(item.player),
              {
                loop: true,
                autoPlay: true,
                idleTimeLimit: 1,
                theme: "solarized-light",
                cols: isPhone ? 47 : 90,
                rows: isPhone ? 24 : 42,
              }
            )
          );
        });
    }

    return () => {
      player.map((item) => item && item.dispose());
    };
  }, []);

  React.useEffect(() => {
    getAccess();
  }, []);

  const getAccess = React.useCallback(async () => {
    try {
      const res = await axios.get(
        "https://server.ddnszwj.top/api/v1/personal-page/access"
      );
      if (res.data) {
        notifications.showNotification({
          title: "通知",
          message: \`欢迎访问我的个人主页，您是第\${res.data.data}位访客！\`,
        });
      } else {
        notifications.showNotification({
          icon: (
            <i
              className="icon icon-close"
              style={{ fontSize: "16px", color: "white" }}
            />
          ),
          color: "red",
          message: \`发生了一点意外，但不影响您正常访问。\`,
        });
      }
    } catch (error) {
      notifications.showNotification({
        icon: (
          <i
            className="icon icon-close"
            style={{ fontSize: "16px", color: "white" }}
          />
        ),
        color: "red",
        message: \`发生了一点意外，但不影响您正常访问。\`,
      });
      console.error(error);
    }
  }, []);

  const onMenuClick = React.useCallback(() => {
    setIsOpenMenu(!isOpenMenu);
  }, [isOpenMenu]);

  const onNavigationClick = React.useCallback((index) => {
    console.log("index", index);
    setMenuIndex(index);
    if (index < 2) {
      scrollIntoView1.scrollIntoView();
    } else {
      [
        scrollIntoView1,
        scrollIntoView2,
        scrollIntoView3,
        scrollIntoView4,
        scrollIntoView5,
        scrollIntoView6,
      ][index - 1].scrollIntoView();
    }
    setIsOpenMenu(false)
  }, []);

  const onImageClick = React.useCallback((item) => {
    setImagePreview(item);
    setIsOpenImagePreview(true);
  }, []);

  return (
    <main className={\`index-page\`}>
      <section className="head">
        <div
          className={\`menu \${isOpenMenu ? "open-menu" : ""}\`}
          onClick={onMenuClick}
        />
        <div className="left">
          <img src="../../icon.webp" />
          <span>CODE_XIA</span>
        </div>
        <div className="center center-pc">
          {menu.map((item, index) => (
            <a
              className={index === menuIndex ? "active" : ""}
              key={item.text}
              onClick={onNavigationClick.bind(this, index)}
            >
              {item.text}
            </a>
          ))}
        </div>
        {isOpenMenu && (
          <div className="center center-mobile">
            {menu.map((item, index) => (
              <a
                className={index === menuIndex ? "active" : ""}
                key={item.text}
                onClick={onNavigationClick.bind(this, index)}
              >
                {item.text}
              </a>
            ))}
          </div>
        )}
        <div></div>
      </section>

      <section className="part-1" ref={scrollIntoView1.targetRef}>
        <div className="top">
          <img src="../../head.png" />
          <p className="title">郑文军</p>
          <p className="desc">前端开发工程师</p>
        </div>
        <Highlight className="content" highlight={["5年"]}>
          具有5年前端开发经验，熟练使用React、Vue、小程序等前端框架。熟悉nodejs、Java等后端开发。对跨平台开发（RN、flutter、Taro）技术以及Android原生开发有一定的了解。具备前端项目架构能力，能够熟练使用Webpack、Rollup、Babel等前端工具链，能够不断解决疑难杂症，持续优化项目架构。关注最新技术热点，从而提不断升产品质量以及用户体验。
        </Highlight>
        <div className="center">
          {infoList.map((item) => (
            <div key={item.icon} className="item">
              <i className={\`icon \${item.icon}\`} />
              <div>
                <p className="title">{item.title}</p>
                <p className="desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="part-2">
        <div className="bg-1">
          <Bg1 />
        </div>
        <div className="body">
          <h2>履历</h2>
          <div className="box-1" ref={scrollIntoView2.targetRef as any}>
            <h3>工作经验</h3>
            <div className="item-warp">
              {companyList.map((item) => (
                <div className="item" key={item.name}>
                  <Card shadow="sm" padding="lg">
                    <Card.Section>
                      <Image src={item.image} height={200} alt="Norway" />
                    </Card.Section>
                    <p className="title">{item.name}</p>
                    <Timeline
                      className="desc"
                      color="teal"
                      active={4}
                      bulletSize={24}
                      lineWidth={2}
                    >
                      {item.infos.map((it) => (
                        <Timeline.Item
                          key={it.name}
                          bullet={<i className={\`icon \${it.icon}\`} />}
                          title={it.name}
                        >
                          <Text color="dimmed" size="sm">
                            {it.detail}
                          </Text>
                        </Timeline.Item>
                      ))}
                    </Timeline>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="box-2" ref={scrollIntoView3.targetRef as any}>
            <h3>教育</h3>
            <div className="item-warp">
              <div className="left">
                {schoolList.map((item) => (
                  <div key={item.name}>
                    <Text weight={500} size="lg" style={{ color: "#1a1b1e" }}>
                      {item.name}：
                    </Text>
                    <Text size="lg" style={{ color: "#747f8a" }}>
                      {item.value}
                    </Text>
                  </div>
                ))}
              </div>
              <div className="right">
                <Image
                  src={"../../school.jpeg"}
                  height={450}
                  width={700}
                  alt="Norway"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="part-3">
        <div className="bg-1 bg-2">
          <Bg2 />
        </div>
        <div className="body">
          <h2>成就</h2>
          <div className="box-1" ref={scrollIntoView4.targetRef as any}>
            <h3>项目</h3>
            {projectList.map((item) => (
              <div key={item.name} className="item">
                <div className="top">
                  <Title order={4}>{item.name}</Title>
                  <div className="line">
                    <Text
                      weight={500}
                      size="lg"
                      style={{ color: "#1a1b1e", flexShrink: "0" }}
                    >
                      类型：
                    </Text>
                    <Text size="lg" style={{ color: "#747f8a" }}>
                      {item.nature}
                    </Text>
                  </div>
                  <div className="line" style={{ alignItems: "center" }}>
                    <Text
                      weight={500}
                      size="lg"
                      style={{ color: "#1a1b1e", flexShrink: "0" }}
                    >
                      职责：
                    </Text>
                    <div>{item.duty}</div>
                  </div>
                  <div className="line">
                    <Text
                      weight={500}
                      size="lg"
                      style={{ color: "#1a1b1e", flexShrink: "0" }}
                    >
                      简介：
                    </Text>
                    <Text size="lg" style={{ color: "#747f8a" }}>
                      {item.detail}
                    </Text>
                  </div>
                  <div className="line">
                    <Text
                      weight={500}
                      size="lg"
                      style={{ color: "#1a1b1e", flexShrink: "0" }}
                    >
                      技术栈：
                    </Text>
                    <div>{item.technologies}</div>
                  </div>
                  {item.codeLink && (
                    <div className="line">
                      <Text
                        weight={500}
                        size="lg"
                        style={{ color: "#1a1b1e", flexShrink: "0" }}
                      >
                        源代码：
                      </Text>
                      <Text
                        variant="link"
                        component="a"
                        href={item.codeLink}
                        size="lg"
                        style={isPhone ? { wordBreak: "break-all" } : {}}
                      >
                        {item.codeLink}
                      </Text>
                    </div>
                  )}
                </div>
                <SimpleGrid className="center" cols={2} spacing="lg">
                  <div className="left">
                    {item.images ? (
                      <>
                        <Image
                          radius="md"
                          className="first-image"
                          src={\`../../\${item.images[0].thumb}\`}
                          height={300}
                          onClick={onImageClick.bind(this, item.images[0])}
                        />
                        <SimpleGrid
                          cols={2}
                          spacing="xs"
                          style={{ marginTop: "10px" }}
                        >
                          {item.images.map(
                            (it, index) =>
                              index !== 0 && (
                                <Image
                                  radius="md"
                                  className="image"
                                  src={\`../../\${it.thumb}\`}
                                  key={it.thumb}
                                  height={200}
                                  onClick={onImageClick.bind(this, it)}
                                />
                              )
                          )}
                        </SimpleGrid>
                      </>
                    ) : (
                      <div id={item.player} className="preview"></div>
                    )}
                  </div>
                  <ScrollArea className="right">
                    <Prism
                      className="right"
                      language={item.code.language as any}
                    >
                      {item.code.text}
                    </Prism>
                  </ScrollArea>
                </SimpleGrid>
              </div>
            ))}
          </div>
          <div className="box-2" ref={scrollIntoView5.targetRef as any}>
            <h3>技能</h3>
            <div className="content">
              {isBrowser() && (
                <ResponsiveTreeMap
                  data={skillList}
                  identity="name"
                  value="loc"
                  valueFormat=" >-0.0%"
                  label={(e) => e.id + " (" + e.formattedValue + ")"}
                  labelSkipSize={12}
                  labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 1.2]],
                  }}
                  parentLabelTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                  }}
                  colors={{ scheme: "nivo" }}
                  borderColor="#ffffff"
                />
              )}
            </div>
          </div>
          <div className="box-3" ref={scrollIntoView6.targetRef as any}>
            <h3>荣誉</h3>
            <SimpleGrid className="content" cols={2} spacing="lg">
              <div className="right">
                <Image
                  src="https://mantine.dev/static/dark-theme-image-6f35e745c6b3f25b9ed3b7d5fab1ec72.png"
                  height={450}
                  alt="Norway"
                />
              </div>
              <div className="left">
                <Title order={4}>蓝桥杯个人算法大赛</Title>
                <div style={{ marginTop: '16px' }}>
                  <Text>
                    蓝桥杯全国软件和信息技术专业人才大赛，是由工业和信息化部人才交流中心举办的全国性IT学科赛事。共有北京大学、清华大学、上海交通大学等全国1200余所高校参赛，累计参赛人数超过40万人。
                  </Text>
                  <Text>
                    2020年，蓝桥杯大赛被列入中国高等教育学会发布的“全国普通高校学科竞赛排行榜”，是高校教育教学改革和创新人才培养的重要竞赛项目。
                  </Text>
                </div>
              </div>
            </SimpleGrid>
          </div>
        </div>
      </section>

      <Modal
        opened={isOpenImagePreview}
        onClose={() => setIsOpenImagePreview(false)}
        size={imagePreview.width + 40}
        title="图片预览"
      >
        <Image width={imagePreview.width} src={"../../" + imagePreview.thumb} />
      </Modal>
    </main>
  );
};

export default IndexPage;`,
    },
  },
];

export const skillList = {
  name: "技能分布",
  color: "#000",
  children: [
    {
      name: "前端",
      children: [
        {
          name: "react",
          loc: 0.95,
        },
        {
          name: "vue",
          loc: 0.8,
        },
        {
          name: "Taro",
          loc: 0.95,
        },
        {
          name: "微信小程序",
          loc: 0.9,
        },
        {
          name: "HTML5",
          loc: 0.9,
        },
        {
          name: "CSS3",
          loc: 0.9,
        },
        {
          name: "Less",
          loc: 0.9,
        },
        {
          name: "Sass",
          loc: 0.9,
        },
        {
          name: "Canvas",
          loc: 0.7,
        },
        {
          name: "TypeScript",
          loc: 0.9,
        },
        {
          name: "JavaScript",
          loc: 0.9,
        },
        {
          name: "Ant Design",
          loc: 0.9,
        },
        {
          name: "Element UI",
          loc: 0.9,
        },
        {
          name: "Mantine",
          loc: 0.8,
        },
        {
          name: "Vux",
          loc: 0.8,
        },
        {
          name: "Mobx",
          loc: 0.8,
        },
        {
          name: "Redux",
          loc: 0.8,
        },
        {
          name: "Gatsby",
          loc: 0.8,
        },
        {
          name: "Next",
          loc: 0.75,
        },
        {
          name: "Nuxt",
          loc: 0.8,
        },
        {
          name: "Umi",
          loc: 0.75,
        },
        {
          name: "Echarts",
          loc: 0.9,
        },
        {
          name: "nivo",
          loc: 0.7,
        },
        {
          name: "Three.js",
          loc: 0.5,
        },
      ],
    },
    {
      name: "跨平台",
      children: [
        {
          name: "React Native",
          loc: 0.7,
        },
        {
          name: "Flutter",
          loc: 0.6,
        },
        {
          name: "Dart",
          loc: 0.6,
        },
        {
          name: "Electron",
          loc: 0.7,
        },
      ],
    },
    {
      name: "后端",
      children: [
        {
          name: "NodeJS",
          loc: 0.8,
        },
        {
          name: "Express",
          loc: 0.8,
        },
        {
          name: "Koajs",
          loc: 0.8,
        },
        {
          name: "Fastify",
          loc: 0.8,
        },
        {
          name: "Egg",
          loc: 0.7,
        },
        {
          name: "NestJS",
          loc: 0.7,
        },
        {
          name: "Java",
          loc: 0.8,
        },
        {
          name: "Spring Boot",
          loc: 0.6,
        },
        {
          name: "Tomcat",
          loc: 0.6,
        },
        {
          name: "Nginx",
          loc: 0.6,
        },
        {
          name: "Mysql",
          loc: 0.7,
        },
        {
          name: "SQL Server",
          loc: 0.6,
        },
        {
          name: "PostgreSQL",
          loc: 0.6,
        },
        {
          name: "Mongodb",
          loc: 0.6,
        },
        {
          name: "Redis",
          loc: 0.7,
        },
      ],
    },
    {
      name: "工具集",
      children: [
        {
          name: "Webpack",
          loc: 0.9,
        },
        {
          name: "Rollup",
          loc: 0.8,
        },
        {
          name: "Maven",
          loc: 0.6,
        },
        {
          name: "Gradle",
          loc: 0.6,
        },
        {
          name: "Npm",
          loc: 0.9,
        },
        {
          name: "Yarn",
          loc: 0.9,
        },
        {
          name: "ESLint",
          loc: 0.9,
        },
        {
          name: "Puppeteer",
          loc: 0.8,
        },
        {
          name: "Jest",
          loc: 0.8,
        },
        {
          name: "Junit",
          loc: 0.8,
        },
        {
          name: "Git",
          loc: 0.8,
        },
        {
          name: "PM2",
          loc: 0.9,
        },
        {
          name: "CentOS",
          loc: 0.9,
        },
        {
          name: "Debian",
          loc: 0.9,
        },
        {
          name: "Docker",
          loc: 0.6,
        },
      ],
    },
  ],
};

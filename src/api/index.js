import requests from './requests'

// 获取全部车辆详情
export const reqAllCar = () => requests({ url: '/peach/car/getAllCar', method: 'get' })
// 登录
export const reqToken = (username, password) => requests({ url: `/peach/authentication/form?username=${username}&password=${password}`, method: 'post', params: { username, password } })
// 紧急联系人
export const reqEmergency = () => requests({ url: '/peach/user/getEmergencyNumber', method: 'get' })
// 健康数据（15）
export const reqLastUserHealth = () => requests({ url: '/peach/health/getLastUserHealth', method: 'get' })
// 添加车
export const reqaddCar = (data) => requests({ url: '/peach/car/addCar', method: 'post', data })
// 删除车
export const reqDelCar = (data) => requests({ url: '/peach/car/deleteCarByIds', method: 'post', data })
// 完善个人信息
export const perfectInformation = (data) => requests({ url: '/peach/user/perfectInformation', method: 'post', data })
// /peach/user/getUser
export const reqGetUser = () => requests({ url: '/peach/user/getUser', method: 'get' })
// 获取一天的驾驶记录
export const reqDrivingInformationByDay = (beginTimeS) => requests({ url: `/peach/drivingInformation/getDrivingInformationByDay?beginTimeS=${beginTimeS}`, method: 'get' })
// 获取一段时间的驾驶记录
export const reqDrivingInformationByTime = (params) => requests({ url: `/peach/drivingInformation/getDrivingInformationByTime?beginTimeS=${params.beginTimeS}&endTimeS=${params.endTimeS}`, method: 'get' })

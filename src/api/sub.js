import request from '@/utils/request'
const GetSubs = () => { // 获取全部节点
  return request.post('/get_subs')
}
const GetSub = (name) => { // 获取全部节点
  return request.post(`/get_sub/${name}`)
}
const CreateSub = (obj) => { // 新建节点
  return request.post('/create_sub', obj)
}
const GetSubName = (name) => { // 查看指定订阅节点
  return request.post('/get_sub/' + name)
}
const DelSub = (name) => { // 删除指定订阅
  return request.post('/del_sub/' + name)
}
const DelSubNode = (id) => { // 删除指定节点
  return request.post('/del_sub_node/' + id)
}
const SetSub = (obj) => { // 删除指定订阅节点
  return request.post('/set_sub', obj)
}
const DecodeSub = (obj) => {
  return request.post('/decode_sub', obj)
}
const RenameSub = (name, obj) => {
  return request.post(`/rename_sub/${name}`, obj)
}
export {
  GetSubs,
  GetSub,
  CreateSub,
  GetSubName,
  DelSub,
  DelSubNode,
  SetSub,
  DecodeSub,
  RenameSub
}

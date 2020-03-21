import request from '../utils/request';

const host='/apis'

export function query() {
  return request('/api/users');
}
//模板
export function getTestData(){
  return request(`${pro}/v1/topics`)
}
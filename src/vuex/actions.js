import Vue from 'vue'
import VueResource from 'vue-resource'
import * as types from './mutation-types'

Vue.use(VueResource);

const http = Vue.http;
http.options.root = 'http://localhost:3001';

export function getList({dispatch}){
  var data = [{
    id:1,
    title:"test"
  }];
  return dispatch(types.RECEIVE_LIST, data);

  //return http.get('list').then((res) => {
  //  dispatch(types.RECEIVE_LIST, res.data);
  //}).catch((err) => {
  //  dispatch(types.RECEIVE_LIST, [])
  //})

}

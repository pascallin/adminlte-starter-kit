import Vue from 'vue'
import VueResource from 'vue-resource'
import * as types from './mutation-types'

Vue.use(VueResource);

const http = Vue.http;
//if (process.env.NODE_ENV !== 'production')
//  http.options.root = 'http://192.168.1.110:3001/backend';
//else
//  http.options.root = '/backend';
http.options.root = 'http://192.168.1.110:3001/backend';

export function getTasks({dispatch}){
  return http.get('tasksearch?id=*').then((res) => {
    console.log("request the api");
    if (res.ok){
      console.log(res.data.result);
      dispatch(types.RECEIVE_TASK, res.data.result);
    }else{
      dispatch(types.RECEIVE_TASK, [])
    }
  }).catch((err) => {
    const message = `[${err.status}:${err.statusText}]:cannot fetch data from server, please try again later`;
    alert(message);
    dispatch(types.RECEIVE_TASK, [])
  })
}

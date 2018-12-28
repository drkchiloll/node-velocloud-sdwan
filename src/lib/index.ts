process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import axios, { AxiosInstance, AxiosResponse, AxiosPromise } from 'axios';
import * as Promise from 'bluebird';
import { AuthObject, NetworkGetNetworkEnterprisesResultItem } from '../models';

export class VelocloudApi {
  public account: AuthObject;
  public apiRequest: AxiosInstance;
  public isAuthenticated = false;
  public loginPath: string = '/login/';
  constructor({ email, username, password, host, accountType }) {
    this.account = {
      email,
      username,
      password
    };
    this.loginPath += accountType === 'operator' ?
      'operatorLogin': 'enterpriseLogin';
    this.apiRequest = axios.create({
      baseURL: `https://${host}/portal/rest`,
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      adapter: require('axios/lib/adapters/http'),
      withCredentials: true
    })
  }
  login(): AxiosPromise<any> {
    return this.apiRequest.post(this.loginPath, {
      ...this.account
    }).then(resp => {
      this.apiRequest.defaults.headers['Cookie'] =
        resp.headers['set-cookie'][1];
      return resp.data;
    });
  }
  logout() {
    return this.apiRequest.post(`/logout`);
  }
  handleErrors(e) {}
  verifyAuth() {
    return new Promise((resolve, reject) => {
      if(this.isAuthenticated) return resolve();
      else {
        return this.login().then(resolve);
      }
    })
  }
  get({ uri, data = {} }) {
    return this.verifyAuth().then(() => {
      return this.apiRequest.post(uri, data);
    }).then(({ data }) => data).catch(this.handleErrors)
  }
  getNetEnterprises() {
    return this.get({
      uri: `/network/getNetworkEnterprises`, data: {}
    }).then((resp: AxiosResponse<NetworkGetNetworkEnterprisesResultItem>) =>
      resp.data
    )
  }
}

const velo = new VelocloudApi({
  host: '11.0.255.101',
  accountType: 'operator',
  email: 'demo@wwt.com',
  username: 'demo@wwt.com',
  password: 'WWTwwt1!'
})

velo.getNetEnterprises().then(net => {
 net.
});
import HttpRequest from '@/services/http-request';

export const getSomeData = async () =>
  HttpRequest.get('/api/login/GetInfoToken');

import request from '@/utils/request';

export function getApiStatus({ url }) {
  return request(`${url}api/v1.0/status`);
}

export function upload({ url, payload, auth }) {
  return request(`${url}api/v1.0/ranking`, {
    method: 'POST',
    data: payload,
    headers: {
      Authorization: auth,
    },
  });
}

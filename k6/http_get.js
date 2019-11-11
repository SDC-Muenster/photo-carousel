import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '60s', target: 1000 },
    // { duration: '60s', target: 10 },
    // { duration: '60s', target: 100 },
    // { duration: '60s', target: 1000 },
  ]
};

export default function(){
  let res = http.get('http://localhost:3022?id=12345');
  check(res, {
    'status was 200': (r) => r.status == 200,
    'transaction time OK': (r) => r.timings.duration < 200,
  });
  sleep(1);
}

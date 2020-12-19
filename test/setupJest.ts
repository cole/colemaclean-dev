import CloudflareWorkerGlobalScope from 'types-cloudflare-worker';
declare let self: CloudflareWorkerGlobalScope;

import makeCloudflareWorkerEnv from 'cloudflare-worker-mock';

declare let global: any;
Object.assign(global, makeCloudflareWorkerEnv());

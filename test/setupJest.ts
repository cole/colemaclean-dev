import CloudflareWorkerGlobalScope from 'types-cloudflare-worker';
declare var self: CloudflareWorkerGlobalScope;
  
import makeCloudflareWorkerEnv from 'cloudflare-worker-mock';

declare var global: any
Object.assign(global, makeCloudflareWorkerEnv())

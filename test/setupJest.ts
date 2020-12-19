import CloudflareWorkerGlobalScope from 'types-cloudflare-worker';
import makeCloudflareWorkerEnv from 'cloudflare-worker-mock';

declare const global: CloudflareWorkerGlobalScope;
Object.assign(global, makeCloudflareWorkerEnv());

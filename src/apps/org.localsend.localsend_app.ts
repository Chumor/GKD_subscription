import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.localsend.localsend_app',
  name: 'LocalSend',
  groups: [
    {
      key: 1,
      name: '功能类-文件传输时自动点击[高级]',
      rules: [
        {
          fastQuery: true,
          activityIds: '.MainActivity',
          actionCd: 5000,
          matches: '[desc="高级"][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/26321028',
          excludeSnapshotUrls: 'https://i.gkd.li/i/26314724', // 高级信息已显示
          exampleUrls: [
            'https://e.gkd.li/54a7208c-03b2-4e74-a8ed-99829d72c8c5',
            'https://e.gkd.li/8cda8b96-aace-4137-887d-dbfe7c17b320', // 高级信息已显示
          ],
        },
      ],
    },
  ],
});

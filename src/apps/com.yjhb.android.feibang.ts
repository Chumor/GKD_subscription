import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yjhb.android.feibang',
  name: '赏帮赚',
  groups: [
    {
      key: 1,
      name: '功能类-取消报名直接确认',
      desc: '跳过二次确认',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.zx.core.code.activity.MyTaskActivity',
          matches:
            '[text="确定取消报名？"] < LinearLayout + [childCount=2] >2 [text="确定"]',
          snapshotUrls: 'https://i.gkd.li/i/26903991',
          exampleUrls: 'https://e.gkd.li/eebf7a06-0263-4d0d-961f-eae45a328f08',
        },
      ],
    },
  ],
});

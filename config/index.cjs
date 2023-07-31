/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx7384d324fc324d26',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '371adba99a204cc500eab2aa1cbbb4e3',

  PROVINCE: '福建',
  CITY: '莆田',

  USERS: [
    {
      // 我宝宝
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oqAUs6xW1MJb9km2P5Ot3d7bLMdM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'ZYesetUWdYAhozlKJbrRrEEYsILLCKM5b6x2HwDMdUo',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '陈钰', year: '2003', date: '11-28',
        },
        {
          type: '你宝宝生日', name: '你宝宝', year: '2002', date: '04-10',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-04-01' },
        // 距离下次见面还有
        { keyword: 'next_meet_day', date: '2023-09-03' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG


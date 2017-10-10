var create = () => {
  return {
    url: 'http://localhost:8080',
    post_data_text: '',
    input:[
      {
        title: 'POST DATAを追加する(複数の場合は改行区切り)',
        type: 'data',
        key: '-d',
        value:'',
        enable: false,
        is_array: true
      },
      {
        title: 'SSLを無視する',
        type: 'insecure',
        key: '-k',
        enable: false,
        is_flag: true
      },
      {
        title: 'リクエストメソッドを指定する',
        type: 'method',
        key: '-X',
        value:'POST',
        enable: false
      },
      {
        title: 'PROXYを指定する',
        type: 'proxy',
        key: '-x',
        value:'',
        enable: false
      },
      {
        title: 'プログレスバーを消す',
        type: 'none_progress',
        key: '-s',
        enable: false,
        is_flag: true
      },
      {
        title: 'エラーを表示する',
        type: 'show_err',
        key: '-S',
        enable: false,
        is_flag: true
      },
      {
        title: 'ResponseHeaderを出力する',
        type: 'show_res_header',
        key: '-I',
        enable: false,
        is_flag: true
      },
      {
        title: 'ResonseHeaderとBodyを出力する',
        type: 'show_res_header_body',
        key: '-i',
        enable: false,
        is_flag: true
      },
      {
        title: 'RequestHeaderを出力する',
        type: 'show_req_header',
        key: '-v',
        enable: false,
        is_flag: true
      },
      {
        title: 'すべてのデータを出力する',
        type: 'show_all',
        key: '--trace',
        enable: false,
        is_flag: true
      },
      {
        title: 'RequestHeaderを追加する(複数の場合は改行区切り)',
        type: 'add_req_header',
        key: '-H',
        value:'',
        enable: false,
        is_array: true
      },
      {
        title: 'cookieを管理する',
        type: 'use_cookie',
        value:'cookie.txt',
        enable: false,
        create: (_this) => `-c "${_this.value}" -b "${_this.value}"`
      },
    ],
  }
}

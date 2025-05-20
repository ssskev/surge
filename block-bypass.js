// 获取请求 URL
let url = $request.url;

// 解析原始链接参数（微信通常会加密或变换参数名，但有些仍包含原始 URL）
let matched = url.match(/(url|target|jumpurl|origin)=([^&]+)/i);
let redirectUrl = matched ? decodeURIComponent(matched[2]) : null;

// 尝试从 Referer 或 fallback 提供跳转提示
let referer = $request.headers['Referer'] || '';
let fallbackUrl = redirectUrl || referer || 'https://www.baidu.com';

$done({
  status: "200",
  headers: {
    "Content-Type": "text/html"
  },
  body: `
    <html>
      <head>
        <meta charset="utf-8" />
        <title>跳转中...</title>
        <meta http-equiv="refresh" content="0;url=${fallbackUrl}">
        <style>
          body { font-family: sans-serif; padding: 2em; text-align: center; }
        </style>
      </head>
      <body>
        <h2>正在跳转到原始链接…</h2>
        <p>如果未自动跳转，<a href="${fallbackUrl}">点此访问</a></p>
      </body>
    </html>
  `
});
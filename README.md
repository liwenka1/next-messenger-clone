# Messenger Clone: Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher

这是我通过学习课程所练习的一个 Next.js 项目，这个项目对 Messenger 进行了 Clone，通过该项目我学到了很多，如果你和我一样对 Next.js 感兴趣，不妨也试着学习一下

## 教程链接

[VIDEO TUTORIAL](https://www.youtube.com/watch?v=PGPGcKBpAk8)

## 预览地址

[Messenger Clone](https://message.liwenkai.asia/)

## 本地启动

### 环境要求

**Node version 14.x**

### 克隆项目

```shell
git clone https://github.com/liwenka1/next-messenger-clone.git
```

### 安装依赖

```shell
pnpm i
```

### 创建 .env 文件（同我所创建的 .env.example 一样即可）


```js
DATABASE_URL=
NEXTAUTH_SECRET=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### 利用 Prisma 同步数据库

```shell
npx prisma db push
```

### 启动项目

```shell
pnpm run dev
```

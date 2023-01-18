# 安装

Splade 基于 Laravel 项目开发，所以安装 Splade 之前需要先安装 Laravel。

针对 Splade 项目的安装有两种不同的情况，分别是自动安装和手动安装。

当项目不存在可以选择自动安装的方式，而当项目已经存在一些业务逻辑时则可以选择手动安装。

## 自动安装

```bash
# 1. 安装 Laravel 项目
composer create project laravel/laravel splade-demo

# 2. 进入到项目目录
cd splade-demo

# 3. 下载 splade 依赖
composer require protonemedia/laravel-splade

# 4. 初始化 splade
php artisan splade:install
```

执行初始化 splade 命令的同时还会构建前端资产，可以使用下面的命令运行 Vite 开发服务器

```bash
yarn dev
```


## 手动安装


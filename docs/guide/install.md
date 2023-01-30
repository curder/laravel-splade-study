# 安装

[Splade](https://splade.dev) 是基于 Laravel 项目开发，所以在安装 Splade 之前需要先安装 [Laravel](https://laravel.com/docs)。

针对 Splade 项目的安装有两种不同的情况，分别是自动安装和手动安装。

当新建项目时可以选择自动安装的方式，而当项目已经存在一些业务逻辑后添加 Splade 支持时则可以选择手动安装。

## 自动安装

安装前的准备，假如当前演示安装的项目名 `splade-demo`：

```bash
# 1. 安装 Laravel 项目
composer create project laravel/laravel splade-demo

# 2. 进入到项目目录
cd splade-demo
```

安装完 Laravel 项目后可以选择安装 [laravel-splade](https://github.com/protonemedia/laravel-splade) 或 [laravel-splade-breeze](https://github.com/protonemedia/laravel-splade-breeze) 依赖。

相对而言 `laravel-splade-breeze` 包含基本的用户授权、个人信息管理等功能，可以根据实际业务选择对应依赖进行安装。

- 安装 `laravel-splade`

    ```bash
    # 3. 下载 laravel-splade 依赖
    composer require protonemedia/laravel-splade

    # 4. 初始化 splade
    php artisan splade:install
    ```

- 安装 `laravel-splade-breeze`

    ```bash
    # 3. 下载 laravel-splade-breeze 依赖
    composer require protonemedia/laravel-splade-breeze

    # 4. 初始化 breeze
    php artisan breeze:install
    ```

执行初始化 splade 命令的同时还会构建前端资产，可以使用下面的命令运行 Vite 开发服务器

```bash
yarn dev
```

## 手动安装


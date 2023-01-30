# 安装

[Splade](https://splade.dev) 是基于 Laravel 项目开发，所以在安装 Splade
之前需要先安装 [Laravel](https://laravel.com/docs)。

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

安装完 Laravel 项目后可以选择安装 [laravel-splade](https://github.com/protonemedia/laravel-splade)
或 [laravel-splade-breeze](https://github.com/protonemedia/laravel-splade-breeze) 依赖。

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

### 后端 Server-side

1. 使用 composer 安装 Laravel Splade 包：
    ```bash
    composer require protonemedia/laravel-splade
    ```

2. 在路由中间件添加到 `app/Http/Kernel.php` 文件中：
    ```php
    <?php

    namespace App\Http;

    use Illuminate\Foundation\Http\Kernel as HttpKernel;

    class Kernel extends HttpKernel
    {
       // ...
        protected $routeMiddleware = [
             // ...
            'splade' => \ProtoneMedia\Splade\Http\SpladeMiddleware::class, // [!code focus]
        ];
    }
    ```

3. 在路由文件 `web.php` 中，使用 `splade` 中间件：

    ```php
    <?php

    use Illuminate\Support\Facades\Route;
   
    Route::middleware('splade')->group(function () { // [!code focus]
        Route::view('/', 'welcome'); // [!code focus]
        Route::view('/contact', 'contact'); // [!code focus]
    }); // [!code focus]
    ```

4. 在 `Exceptions/Handler.php` 文件的 `register` 方法中，注册 Splade 的错误处理：

    ```php
    <?php

    namespace App\Exceptions;

    use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
    use ProtoneMedia\Splade\SpladeCore;
    use Throwable;

    class Handler extends ExceptionHandler
    {
        public function register()
        {
            $this->renderable(SpladeCore::exceptionHandler($this)); // [!code focus]
        }
    }
    ```

### 前端 Client-side

**在前端必须确保正确配置了 [Tailwind CSS 3.0](https://tailwindcss.com/) 和 [Vue 3.0](https://vuejs.org/)。**

1. 安装 Splade 前端依赖：

   :::code-group
    ```bash [Yarn]
    yarn add -D @protonemedia/laravel-splade
    ```

    ```bash [Npm]
    npm install @protonemedia/laravel-splade
    ```
   :::

2. 在 Tailwind 配置文件 `tailwind.conf.js` 中，确保将 Splade 包添加到内容数组中：

    ```javascript
    module.exports = {
        content: [
            //...
     
            './vendor/protonemedia/laravel-splade/lib/**/*.vue', // [!code focus]
            './vendor/protonemedia/laravel-splade/resources/views/**/*.blade.php', // [!code focus]
     
            //...
        ],
    };
    ```

   3. 在主 JavaScript 文件的 `createApp` 部分，需要使用 Splade 插件以及自定义渲染方法
       ```javascript
       import "@protonemedia/laravel-splade/dist/style.css"; // [!code focus]

       import { createApp } from "vue/dist/vue.esm-bundler.js";
       import { renderSpladeApp, SpladePlugin } from '@protonemedia/laravel-splade' // [!code focus]

       const el = document.getElementById('app')

       createApp({
         render: renderSpladeApp({ el }) // [!code focus]
       })
       .use(SpladePlugin) // [!code focus]
       .mount(el);
       ```
      上面的代码逻辑中包含了一个默认样式表来支持[表单组件](https://splade.dev/docs/form-overview)
      的 `Choices.js`、`FilePond` 和 `Flatpickr` 集成。

      这个默认样式表在逻辑中是可选的。

      在 Blade 模版的根布局中，可以在 `body` 中使用 `@splade` 指令，在 head 中使用 `@spladeHead` 指令。

      这将呈现标题和元标签，以及将安装 Vue 应用程序的默认 `<div id="app"></div>` 元素。

      ```html
      <!doctype html>
      <html lang="en">
         <head>
           @spladeHead
         </head>

         <body class="antialiased">
           @splade
         </body>
      </html>
      ```

      Splade 假定上面内容的文件路径是 `resources/views/root.blade.php`。如果需要改变它，可以调用 Splade
      类门面的 `setRootView` 方法进行自定义。

      例如，在 `AppServiceProvider` 类中：

      ```php
      <?php

      namespace App\Providers;

      use Illuminate\Support\ServiceProvider;
      use ProtoneMedia\Splade\Facades\Splade;

      class AppServiceProvider extends ServiceProvider
      {
          public function boot()
          {
              // resources/views/layouts/master.blade.php
              Splade::setRootView('layouts.master'); // [!code focus]
          }
      }
      ```
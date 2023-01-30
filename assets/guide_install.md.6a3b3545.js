import{_ as a,c as s,o as e,d as l}from"./app.9b04fb11.js";const b=JSON.parse('{"title":"安装","description":"","frontmatter":{},"headers":[{"level":2,"title":"自动安装","slug":"自动安装","link":"#自动安装","children":[]},{"level":2,"title":"手动安装","slug":"手动安装","link":"#手动安装","children":[]}],"relativePath":"guide/install.md","lastUpdated":1675056697000}'),n={name:"guide/install.md"},p=l(`<h1 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h1><p><a href="https://splade.dev" target="_blank" rel="noreferrer">Splade</a> 是基于 Laravel 项目开发，所以在安装 Splade 之前需要先安装 <a href="https://laravel.com/docs" target="_blank" rel="noreferrer">Laravel</a>。</p><p>针对 Splade 项目的安装有两种不同的情况，分别是自动安装和手动安装。</p><p>当新建项目时可以选择自动安装的方式，而当项目已经存在一些业务逻辑后添加 Splade 支持时则可以选择手动安装。</p><h2 id="自动安装" tabindex="-1">自动安装 <a class="header-anchor" href="#自动安装" aria-hidden="true">#</a></h2><p>安装前的准备，假如当前演示安装的项目名 <code>splade-demo</code>：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 1. 安装 Laravel 项目</span></span>
<span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">create</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">project</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">laravel/laravel</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">splade-demo</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 2. 进入到项目目录</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">splade-demo</span></span>
<span class="line"></span></code></pre></div><p>安装完 Laravel 项目后可以选择安装 <a href="https://github.com/protonemedia/laravel-splade" target="_blank" rel="noreferrer">laravel-splade</a> 或 <a href="https://github.com/protonemedia/laravel-splade-breeze" target="_blank" rel="noreferrer">laravel-splade-breeze</a> 依赖。</p><p>相对而言 <code>laravel-splade-breeze</code> 包含基本的用户授权、个人信息管理等功能，可以根据实际业务选择对应依赖进行安装。</p><ul><li><p>安装 <code>laravel-splade</code></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 3. 下载 laravel-splade 依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">require</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">protonemedia/laravel-splade</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 4. 初始化 splade</span></span>
<span class="line"><span style="color:#FFCB6B;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">artisan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">splade:install</span></span>
<span class="line"></span></code></pre></div></li><li><p>安装 <code>laravel-splade-breeze</code></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 3. 下载 laravel-splade-breeze 依赖</span></span>
<span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">require</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">protonemedia/laravel-splade-breeze</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 4. 初始化 breeze</span></span>
<span class="line"><span style="color:#FFCB6B;">php</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">artisan</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">breeze:install</span></span>
<span class="line"></span></code></pre></div></li></ul><p>执行初始化 splade 命令的同时还会构建前端资产，可以使用下面的命令运行 Vite 开发服务器</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"></span></code></pre></div><h2 id="手动安装" tabindex="-1">手动安装 <a class="header-anchor" href="#手动安装" aria-hidden="true">#</a></h2>`,13),o=[p];function t(r,c,i,d,C,y){return e(),s("div",null,o)}const A=a(n,[["render",t]]);export{b as __pageData,A as default};

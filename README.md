# exam-cli

简单的前端脚手架 + 打包工具

## 技术栈

- 项目为标准的 pnpm `monorepo` 多包结构，[pnpm workspace](https://pnpm.io/workspaces) 处理多包依赖

- yargs

- webpack

## 开发

### 安装依赖

> 安装前，请确保 pnpm 升级到 9.x 版本（可执行 pnpm add -g pnpm）

- 初始化的安装

  ```bash
  pnpm i
  ```

- 给某个 package 安装依赖

  `pnpm` 提供了 [--filter](https://pnpm.io/filtering) 参数，可以对特定的 package 执行 `pnpm` 命令

  例如给 `example` 安装 react：

  ```bash
  pnpm --filter example add react

  pnpm --filter example -D add @types/react # 安装dev依赖
  ```

  `--filter` 除了指定包名，还可以使用通佩符，例如执行所有 package 的构建：

  ```bash
  pnpm --filter "./packages/**" build
  ```

- 重新安装依赖
  若依赖安装出现问题，项目无法正常启动，可删除所有依赖，重新安装

  ```bash
  # 清除
  pnpm clear
  # 安装
  pnpm i
  ```

## 发布（主分支）

```bash
pnpm pub
```

将所有变更的包发布到 npm

#### 发布 beta 版本

有时候我们在测试，不想发布正式的包，影响到线上的东西。这时，可以使用 [prerelease](https://github.com/changesets/changesets/blob/main/docs/prereleases.md) 发布预发版本的包

> 切记： beta 版本请勿在主分支（main分支）中编辑和发布，避免污染他人工作流！

1. 进入预发模式

```bash
pnpm enter-beta
```

2. 更新版本

执行正式工作流的 1. 2. 步骤，更新版本

3. 退出预发模式

```bash
pnpm exit-beta
```

4. 发布版本

```bash
pnpm pub:beta
```

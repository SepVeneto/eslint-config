# @sepveneto/eslint-config

## 使用

### 安装

```bash
npm i -D @sepveneto/eslint-config
yarn add -D @sepveneto/eslint-config
pnpm i -D @sepveneto/eslint-config
```

### 配置`.eslintrc`

```json
{
  "extends": "@sepveneto"
}
```

### 在vscode中配置自动修复

```json
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```


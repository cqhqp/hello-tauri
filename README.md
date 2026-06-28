# Tauri + Vanilla TS

This template should help get you started developing with Tauri in vanilla HTML, CSS and Typescript.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## 🚀 安装指南 (Linux)

根据您的 Ubuntu 版本，请选择合适的安装方式以获得最佳体验：

### 🟢 Ubuntu 22.04 / 24.04 (推荐)
直接下载 **AppImage** 文件：
1. 下载 `hello-tauri_x86_64.AppImage`
2. 赋予执行权限：`chmod +x hello-tauri_x86_64.AppImage`
3. 直接运行：`./hello-tauri_x86_64.AppImage`

### 🔵 Ubuntu 26.04+ (前沿版本)
由于系统库版本过高，AppImage 可能会出现输入框无法获取焦点的问题。**强烈建议使用 Flatpak 版本**：
1. 下载 `hello-tauri.flatpak`
2. 安装包：`flatpak install --user hello-tauri.flatpak`
3. 运行：`flatpak run com.cqhqp.hello-tauri`
*注意：如果提示缺少 Runtime，请运行 `flatpak install flathub org.gnome.Platform//45`*

## 📱 安装指南 (Android)

从 Release 页面下载 `app-release.apk` 并安装到 Android 设备（Android 7.0+）。

### 开发环境搭建

如需在本地构建 Android 版本，请先准备以下环境：

1. 安装 [Android Studio](https://developer.android.com/studio)
2. 配置环境变量（Windows 示例）：

   ```powershell
   [System.Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Program Files\Android\Android Studio\jbr", "User")
   [System.Environment]::SetEnvironmentVariable("ANDROID_HOME", "$env:LocalAppData\Android\Sdk", "User")
   ```

3. 安装 Rust Android target：

   ```bash
   rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android
   ```

4. 初始化 Android 项目并运行：

   ```bash
   npm run tauri android init
   npm run tauri:android
   ```

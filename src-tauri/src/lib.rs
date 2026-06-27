// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("你好, {}! 这是来自 Rust 后端的问候 ❤️", name)
}

// 1. 保证手机端能启动 (必须保留)
#[cfg_attr(mobile, tauri::mobile_entry_point)]
// 2. 保证 Mac M 芯片优化 (可选)
#[cfg_attr(
    target_os = "macos",
    target_arch = "arm64",
    option(feature = "macos-arm64")
)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

# Google Drive 連結批次匯出工具 名稱 及 連結
# Google Drive Link batch Extractor name and link

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)](https://github.com/blues32767/google-drive-link-extractor/releases)

<div align="center">
  <h2>
    <a href="#chinese-中文">中文</a> | 
    <a href="#english">English</a>
  </h2>
</div>

---


<a name="chinese-中文"></a>
## 中文版

一個簡單易用的工具，可以擷取 Google Drive 資料夾中的[名稱]與[分享連結]，並匯出為 CSV 清單。

### 線上使用

工具連結：
[https://script.google.com/macros/s/AKfycbxvKJuFiXlsMoH9t7rWpOuwcRZfPLuZKvrhlIS46GKJPeRNAJH9dNjbV_y1k_DzyZsk/exec](https://script.google.com/macros/s/AKfycbxvKJuFiXlsMoH9t7rWpOuwcRZfPLuZKvrhlIS46GKJPeRNAJH9dNjbV_y1k_DzyZsk/exec)
(Google Apps Script 部署版本)
## ☕ 支持開發者 (Support Me)

如果您覺得這個工具幫您省下了寶貴的時間，歡迎請我喝杯咖啡，這將支持我繼續維護與開發更多好用的工具！

If this tool saved you time, consider buying me a coffee! Your support helps me maintain this project and build more open-source tools.

<a href="https://www.buymeacoffee.com/blues32767" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>

### 功能特色
－20250306更新：新增網頁下方可直接複製的表格。
- 從 Google Drive 資料夾中擷取所有檔案和子資料夾的名稱與連結
- 支援中文和英文界面
- 將結果匯出為 UTF-8 編碼的 CSV 檔案
- 簡潔直觀的使用者介面
- 完全免費且開源


### 使用說明

1. 開啟應用程式連結
2. 確保你的 Google Drive 資料夾權限設定為「知道連結的任何人為檢視者或編輯者」
3. 在輸入框中貼上 Google Drive 資料夾連結（格式如：https://drive.google.com/drive/folders/...）
4. 點擊「下載 CSV 檔案」按鈕
5. 等待處理完成，CSV 檔案會自動下載到你的裝置

### 自行部署

#### 方法一：Google Apps Script 部署

1. 前往 [Google Apps Script](https://script.google.com/)
2. 點擊「新專案」建立一個新的專案
3. 刪除編輯器中的預設程式碼
4. 新增 `index.html` 和 `code.gs` 檔案，並複製本儲存庫中對應的程式碼
5. 點擊「部署」>「新增部署」
6. 選擇部署類型為「網頁應用程式」
7. 設定執行身分為「我自己」，存取權限為「任何人」
8. 點擊「部署」按鈕並授予必要的權限

### 技術說明

- 前端：HTML、CSS、JavaScript
- 後端：Google Apps Script
- API：Google Drive API
- 輸出格式：CSV (UTF-8 編碼)

### 常見問題

#### 為什麼我無法擷取某些資料夾的內容？
請確保資料夾的權限設定為「知道連結的任何人為檢視者或編輯者」，否則應用程式無法存取資料夾內容。

#### 是否支援巢狀資料夾？
目前版本只支援擷取指定資料夾的直接子資料夾和檔案，不會遞迴擷取更深層的內容。

#### 支援哪些瀏覽器？
本工具支援所有現代瀏覽器，包括 Chrome、Firefox、Safari 和 Edge 的最新版本。

### 授權協議

本專案採用 MIT 授權協議 - 詳見 [LICENSE](LICENSE) 檔案

### 聯絡資訊

- 開發者：blues32767
- GitHub：https://github.com/blues32767/
- 版本：1.1.1
- 最後更新：2025/03/06

---

<a name="english"></a>
## English Version

A simple tool to extract file names and sharing links from Google Drive folders and export them as a CSV list.

### Online Usage

Tool link：
[https://script.google.com/macros/s/AKfycbxvKJuFiXlsMoH9t7rWpOuwcRZfPLuZKvrhlIS46GKJPeRNAJH9dNjbV_y1k_DzyZsk/exec](https://script.google.com/macros/s/AKfycbxvKJuFiXlsMoH9t7rWpOuwcRZfPLuZKvrhlIS46GKJPeRNAJH9dNjbV_y1k_DzyZsk/exec)
(Google Apps Script deployed version):
## ☕ 支持開發者 (Support Me)

如果您覺得這個工具幫您省下了寶貴的時間，歡迎請我喝杯咖啡，這將支持我繼續維護與開發更多好用的工具！

If this tool saved you time, consider buying me a coffee! Your support helps me maintain this project and build more open-source tools.

<a href="https://www.buymeacoffee.com/blues32767" target="_blank">
  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
</a>
### Features
- Update 20250306: Added a table that can be copied directly at the bottom of the web page.
- Extract all files and subfolders names and links from a Google Drive folder
- Support for both Chinese and English interfaces
- Export results as UTF-8 encoded CSV files
- Clean and intuitive user interface
- Completely free and open source


### How to Use

1. Open the application link
2. Make sure your Google Drive folder's permission is set to "Anyone with the link as Viewer or Editor"
3. Paste your Google Drive folder link in the input box (format: https://drive.google.com/drive/folders/...)
4. Click the "Download CSV" button
5. Wait for processing to complete, and the CSV file will automatically download to your device

### Self-Deployment

#### Method 1: Google Apps Script Deployment

1. Go to [Google Apps Script](https://script.google.com/)
2. Click "New Project" to create a new project
3. Delete the default code in the editor
4. Add `index.html` and `code.gs` files, and copy the corresponding code from this repository
5. Click "Deploy" > "New deployment"
6. Select deployment type as "Web application"
7. Set execution identity as "Me" and access as "Anyone"
8. Click the "Deploy" button and grant the necessary permissions

### Technical Details

- Frontend: HTML, CSS, JavaScript
- Backend: Google Apps Script
- API: Google Drive API
- Output Format: CSV (UTF-8 encoded)

### FAQ

#### Why can't I extract content from certain folders?
Make sure the folder's permission is set to "Anyone with the link as Viewer or Editor", otherwise the application cannot access the folder contents.

#### Does it support nested folders?
The current version only supports extracting direct subfolders and files from the specified folder. It does not recursively extract deeper content.

#### Which browsers are supported?
This tool supports all modern browsers, including the latest versions of Chrome, Firefox, Safari, and Edge.

### Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

### Contact Information

- Developer: blues32767
- GitHub: https://github.com/blues32767/
- Version: 1.1.0
- Last Updated: 2025/03/04

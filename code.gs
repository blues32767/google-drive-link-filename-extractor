function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function getDriveDataAsCsv(folderUrl) {
  try {
    // 解析資料夾 ID
    var folderMatch = folderUrl.match(/folders\/([a-zA-Z0-9-_]+)/);
    if (!folderMatch) {
      return "資料夾連結格式不正確！";
    }
    var folderId = folderMatch[1];
    Logger.log("資料夾 ID：" + folderId);

    // 取得資料夾物件
    var folder = DriveApp.getFolderById(folderId);

    // 取得資料夾內的所有資料夾
    var subFolders = folder.getFolders();

    // 取得資料夾內的所有檔案
    var files = folder.getFiles();

    // 建立要轉換為 CSV 的資料陣列
    var data = [["名稱", "連結"]]; // 新增標題列

    // 迭代子資料夾物件，抓取資料夾名稱和連結
    while (subFolders.hasNext()) {
      var subFolder = subFolders.next();
      var folderName = subFolder.getName();
      var folderUrl = subFolder.getUrl();
      data.push([folderName, folderUrl]);
    }

    // 迭代檔案物件，抓取檔案名稱和連結
    while (files.hasNext()) {
      var file = files.next();
      var fileName = file.getName();
      var fileUrl = file.getUrl();
      data.push([fileName, fileUrl]);
    }

    // 將資料轉換為 CSV 格式
    var csv = convertArrayToCsv(data);

    return csv;
  } catch (e) {
    Logger.log("發生錯誤：" + e.toString());
    return "發生錯誤：" + e.toString();
  }
}

// 將二維陣列轉換為 CSV 字串
function convertArrayToCsv(data) {
  var csv = "\ufeff";
  for (var i = 0; i < data.length; i++) {
    for (var j = 0; j < data[i].length; j++) {
      if (j > 0) csv += ",";
      csv += '"' + data[i][j] + '"';
    }
    csv += "\r\n";
  }
  return csv;
}
function doGet() {
  
  return HtmlService
      .createTemplateFromFile('Index')
      .evaluate()
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);
}


function getClassList() {
  var classList = new Array();
    var classReportUrl = "https://script.google.com/a/macros/jointheleague.org/s/AKfycbw9loWCF3x-oTU2j3NGLHgokdS2s_HiyHyeXccH8m3h/exec";
    var classReportUrl = "https://script.google.com/macros/s/AKfycbxBCBiiwiRV4Z2Y01JFvzQ6e8lUcexeJmZb_qEpKOarTT6wT0vI/exec";
  var classReportFiles = DriveApp.getFoldersByName("League Class Reports").next().getFiles();
  while (classReportFiles.hasNext()) {
    var class = classReportFiles.next();
    var className = class.getName();
    var classURL = classReportUrl + "?classID=" + class.getId();
    if(!contains(className, "(Responses)") && !contains(className, "*** League Class Report Form Template ***")) {
       classList.push(new Class(className, classURL));                                                  
     }
  }
 return classList;
}

function Class(name, url) {
  this.name = name;
  this.url = url;
}

function contains (haystack, needle) {
    return haystack.indexOf(needle) >= 0;
}

     

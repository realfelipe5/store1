function open() {
    var win = window.open("", "win",
                "width = 500, height = 300");
                 
    win.document.write("<p>New Window</p>");
     
    win.opener.document.write("<p>Parent Window</p>");
}
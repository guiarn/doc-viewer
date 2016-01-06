function interceptRequest(request)
{
	if (request && request.url) {
		if (request.type == "main_frame") {
			if (request.url.indexOf("docs.google.com") == -1) {
				return { 
					redirectUrl: "https://docs.google.com/viewer?url=" + request.url 
				};
			}
		}
	}
}

chrome.webRequest.onBeforeRequest.addListener(
		interceptRequest, 
		{ urls: ["*://*/*.doc", "*://*/*.docx", 
				"*://*/*.ppt", "*://*/*.pptx", 
				"*://*/*.xls", "*://*/*.xlsx"
				]}, 
		['blocking']
);


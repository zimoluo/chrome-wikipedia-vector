chrome.runtime.onMessage.addListener(function(request) {
    if (request.type === 'updateUrl') {
        let url = window.location.href;
        if (!url.includes('useskin=vector')) {
            if (url.includes('?')) {
                url += '&useskin=vector';
            } else {
                url += '?useskin=vector';
            }
            window.location.href = url;
        }
    }
});
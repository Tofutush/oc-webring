function fakeRedirect(mode) {
    fetch('../_data/sites.json')
        .then(response => response.json()).then(siteList => {
            let url = new URLSearchParams(window.location.search);
            let originalSite = url.get('site');
            let index;
            for (let z = 0; z < siteList.length; z++) {
                if (siteList[z].name === originalSite) {
                    index = z;
                    break;
                }
            }
            if (index === undefined) {
                window.location.assign('/oc-webring/no-such-site/');
                return;
            }
            switch (mode) {
                case 'prev':
                    window.location.assign(siteList[index === 0 ? siteList.length - 1 : index - 1].chUrl);
                    break;
                case 'next':
                    window.location.assign(siteList[index === siteList.length - 1 ? 0 : index + 1].chUrl);
                    break;
                case 'rand':
                    window.location.assign(siteList[getRandomNumberButExcludeOne(0, siteList.length - 1, index)].chUrl);
                    break;
                default:
                    throw new Error(`redirect mode ${mode} not found`);
            }
        }).catch(err => console.error(err));
}

function getRandomNumberButExcludeOne(min, max, exclude) {
    let num;
    do {
        num = Math.floor(Math.random() * (max - min + 1)) + min;
    } while (num === exclude);
    return num;
}
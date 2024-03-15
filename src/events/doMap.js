let myUrls = [];
function doMap(array) {
    array.map((e, i) => {
        myUrls[i] = e.urls.regular;
    });
}

export { doMap, myUrls };

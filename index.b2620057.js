function insertSvgSprite(svgSprite) {
    const div = document.createElement('div');
    div.innerHTML = svgSprite;
    div.style.display = 'none';
    document.body.insertBefore(div, document.body.firstChild);
}
async function loadSvg(path) {
    const response = await fetch(path);
    const svgSprite = await response.text();
    return svgSprite;
}
async function loadAllSvgs() {
    const svgList = [
        '../icons/sprite.svg'
    ];
    const svgPromises = svgList.map((path)=>loadSvg(path));
    const svgResults = await Promise.all(svgPromises);
    svgResults.forEach(insertSvgSprite);
}
loadAllSvgs();

//# sourceMappingURL=index.b2620057.js.map

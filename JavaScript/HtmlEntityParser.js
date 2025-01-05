/**
 * @param {string} text
 * @return {string}
 */
var entityParser = function(text) {
    const mapHtml = mapEntities();

    text = text.replace(/&amp;|&quot;|&apos;|&gt;|&lt;|&frasl;/g, (c) => {
        return mapHtml.get(c);
    })

    return text;
};

const mapEntities = () => {
    const mapHtml = new Map();

    mapHtml.set('&quot;', '"');
    mapHtml.set('&apos;', '\'');
    mapHtml.set('&amp;', '&');
    mapHtml.set('&gt;', '>');
    mapHtml.set('&lt;', '<');
    mapHtml.set('&frasl;', '/');
    mapHtml.set('&quot;', '"');

    return mapHtml;
}
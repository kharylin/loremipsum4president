var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var politicsSUX = text.replace(/Corinthians|Timão|corinthians|palmeiras|la casa de papel|tokio|tokyo|Palmeiras/g, ' ');

            if (politicsSUX!== text) {
                element.replaceChild(document.createTextNode(politicsSUX), node);
            }
        }
    }
}

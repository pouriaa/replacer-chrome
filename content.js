// Get all elements into an array
var elements = document.getElementsByTagName('*');

// loop through elements
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    // loop through child nodes of element
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        // If this is a text node (nodeType of 3)
        if (node.nodeType === 3) {
            
            // Get all text in node
            var text = node.nodeValue;  

            // Make the replacement
            replaceString('Pouria', 'The one and only - POURIA!', text);
        }
    }
}

/* Replace String
 * Replace all occurences of specified string in given text
 *
 * @param stringToReplace
 * @param newString
 * @param textToSearch
 * @return replacedText
 */
function replaceString (stringToReplace, newString, textToSearch) {

    // Use RegExp to find 
    var searchedRegExp = new RegExp(stringToReplace, "gi");

    // Do a case sensitive search (RegExp) of the node and keep the replaced text
    var replacedText = text.replace(searchedRegExp, newString);

    // If there was something to replace, make the replacement
    if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
    }
}
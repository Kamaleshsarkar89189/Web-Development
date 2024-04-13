/*
Chapter 7 (according to video) : Walking the DOM

DOM tree refers to the HTML page where all the nodes are objects. There can be 3 main types of nodes in the DOM tree:

    1. text nodes
    2. element nodes
    3. comment nodes

    In an HTML page, <html> is at the root and <head> and <body> are its children, etc.

    A  text node is always a leaf of the tree.

Auto correction

    If an erroneous HTML is encountered by the browser, it tends to correct it for example, if we put something after the body, it is automatically
    moved inside the body. Another example is <table> tag which must contain <tbody>


Walking the DOM

    <html>
    <head>
    <title>Kamalesh</title> document.body-->Page body tag
    </head>
    <body>

    </body>

Note : ducument.body can sometimes be null if the javascript is written before the body tag.

Children of an element

    Direct as well as deeply nested elements of an element are called its children

    Child nodes --> Elements that are direct children for example head & body are children of <html>

    Descendant nodes--> All nested elements, children, their children and so on...



FirstChild, lastChild & childNodes

    element.firstChild --> first child element
    element.lastChild --> last child element
    element.childNodes --> All child nodes

    
    Following is always true:
        elem.childNodes[0]===elem.firstChild
        elem.childNode[elem.childNode.lenght - 1] ==== elem.lastChild


    There is aslo a method elem.hasChildNodes() to check whether there are any child nodes.


    Note: ChildNode loks like an array. But it's not actually an array but a collection. 
    We can use array from (collection) to convert it into an array.--->Array method won't work


    Note on DOM collections

    -->They are read-only
    -->They are live elem.childNodes variable(referene) will automatically update if childNodes of 
    elem is changed.
    -->They are iterate using for of loop


    
    Siblings and the parent
    
    siblings are nodes that are children of the some parent

    -->For Example: <head> and <body> are siblings. siblings have some parent. In the above example its html

    --> <body> is said to be the "next" or "right" siblings of  <head> , <head> is said to be the previous
    or "left" siblings of <body> 

    -->The nex siblings is in nextSiblings property, and the previous one in previousSiblings.
    The parent is available as parentNode.

        alert(document.documentElement.parentNode); //document
        alert(document.documentElement.parentElement); //null


    Element only Navigation
    
        Sometimes, we don't want text or comment nodes. Some inks only take Element nodes into account.
        For example

            document.previousElementSibling --->Previous sibling which is an element
            document.nextElementSibling --->next sibling(element)
            document.firstElementSibling --->first element child
            document.lastElementSibling --->last element child



    Table Links

    Certain DOM element may provide additional proprties specific to their type for convenience.
    Table element supports the following properties:

            table.row ---> collection of tr element
            table.row ---> reference of <caption>
            table.row ---> reference to <thred>
            table.row ---> reference to <tfoot>
            table.row ---> collection of <tbody> element
            table.row ---> collection of <tr> inside
            tr.cells ---> collections o fd and th
            tr.sectionRowIndex  ---> Row number stating from 0
            td.cellIndex ---> no of cell inside enclosing <tr> 



    Searching the DOM

        DOM navigation properties are helpfull when the elements are close to each other. If they are not close
        to each other, we have some more methods to search the DOM

    --> document.getElement By id
    Ths method is used to get the element with a given "id" attribute

        let span = document.getElementByid('span')
        span.style.color = "red"

    --> document.querySelector
    Returns the first element for the given CSS Selector.
    A efficient version of elem.queryselectorALl(css)[0]

    --> document.getElement By TagName
    Returns elements with the given tag name

    --> document.getElement By className
    Returns element that have the given css class

    --> document.getElementByName
    Searches element by the name attribute.



    matches,closest & contains methods
    There are three important methods to search the DOM

    1. elem.matches(css) --> To check of element matches the given CSS selector

    2. elem.closest(css) --> To look for the nearest ancestor that mathes the given CSS. Selector. The elem isself is also checked

    3. elemA.Contains(elemB) --> Returns true if elemB is inside elemA(a descendant of elemA) or when elemA==elemB
    
*/
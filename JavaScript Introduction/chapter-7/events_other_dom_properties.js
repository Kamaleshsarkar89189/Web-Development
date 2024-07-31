/*
Chapter 8 - Even & other DOM properties

console.dir function 

    console.log shows the DOM tree
    console.dir shows the element as an abject with it's properties


tagName/nodeName

    User to read tag name of an element
    tagName --> Only exists for Element nodes
    nodeName --> Defined for any node (text, comment etc.)

InnerHTML and outer HTML

    The innerHTML property allows to get the html inside the element as a string.

    The outer HTML property contains the HTML inside the element itself.
    innerhtml is valid only for element nodes. For other node types we can use nodeValue or data.

text Content

    Property access to the text inside the element: only text, minus all tags.


The hidden property

    The "hidden" attribute and the DOM property specifies whether the element is visible or not.
    
        <div hidden> I'm hidden</div>
        <div id="element" hidden> I can be hidden</div>

        <script>
        element.hidden = true;
        </script>


    Attribute methods

    1. elem.hasAttribute(name) ----> Method to check for exestence of an attribute

    2. elem.getAttribute(name) ----> Method used to get the value of an attribute

    3. elem.getAttribute(name,value) ----> Method used to set the value of an attribute.

    4. elem.removeAttribute(name) ----> Method to remove the attribute from elem.

    5. elem.attribute ----> Method to get the collection of all attributes.


    data-* attributes 

        We can always create custom attribute but the once starting with "data-" are reserved for
        programmers use. They are available in a property named dataset.

        If an element has an attribute named "data-one", it's available as element.dataset.one


    Insertion methods

        We looked at some ways to insert element in the DOM.Here is another way:

            let div = document.createElement('div') //create

            div.className = "alert" // set class

            div.innerHTML = "<span>hello</span>"

            document.body.append(div)

            Here are some more insertion methods:

                1. node.append(e) -->append at the end of node
                2. node.prepend(e) -->insert at the beginning of node
                3. node.before(e) -->insert before node
                4. node.after(e) -->insert after node
                5. node.replaceWith(e) -->replace node with the given node.
                
                

            Insert Adjacent HTML/ Text/Element

                This method is used to insert HTML. The first parameter is a code word, specifying where to insert. Must be one og the following:

                1. "beforebegin" --> Insert HTML immediately before element

                2. "afterbegin" --> Insert HTML into element at the beginning

                3. "beforeend" --> Insert HTML into element at the end.

                4. "afterend" --> Insert HTML immediately after element.

                    The second parameter is an HTML string
                    
                    
        */
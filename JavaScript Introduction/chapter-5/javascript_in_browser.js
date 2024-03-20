/*
Chapter - JavaScript in the browser

    JavaScript was initially created to make web oages alive. JS can written right in a web page's 
    HTML to make it interactive.

    The browser has an embedded engine called the JavaScript engine or the JavaScript runtime.

    JavaScript's ability in the browser is very limited to protect the user's safety. For example a webpage on http://google.com can't access http://codeswear.com and steal information from there.

    Developer tools

        Every browser has some developer tools which makes a developer's life a lot easier.

        F12 on chrome opens Dev tools

        We can also write JavaScript commands in the console

    The Script tag

    The script tag is used to insert JavaScript into an HTML page

    The script tag can be used to insert external o rinternal scripts

    <script>
    alert("Hello")
    </script>

    // or..
    <script src="index.js"> </script>

    The benefit of a separate javaScript file is that the browser will download it and store is it's cache.

    Console object methods

    The console object has several method, log being one of them. Some of them are as follows:

        assert() ---> Used to assert a condition
        clear() ---> Clear the Console
        log() ---> Output a messsage to the console
        table() ---> Displays a tabelar data
        warn() ---> Used for warnings
        error() ---> Used for errors
        info() ---> Used for special information

        You will natuarally remember some or all of these with time
        Comprehensive list can be looked up or MDN

    Interaction : alert, prompt and confirm

    alert : Used to invoke a mini window with a msg
            alert("Hello")
        
    prompt : Used to take user input as string
            prompt("Hi", "No) // No is Optional default value

    confirm : Shows a message and writes for the user to press ok or cancle. Returns ture for OK and false for cancle.

        The exact location & look is determined by the browser which is a limitation


    Window object, BOM & DOM
        We have the following when JavaScript runs in  browser

            Window ---> DOM
                   ---> BOM
                   ---> JavaScript core

        Window object represents browser window and provides method to control it. It is a global object

    Document Object Medel (DOM)
    
        Dom represents the page content as HTML

            document.body ---> Page body as Js object

            document.body.style.background = "green" 
                          --> Changes page background to green

    Browser Object Model (BOM)

        The Browser Object Model(BOM) represents additional abjects provided by the browser(host environment)
        for working with everything except the document.

        The function alert/confirm/prompt are also a part of the BOM

                location.href = "https://youtube.com" // Redirect to another URL




*/
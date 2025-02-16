# Overview 
How to connect backend and frontend<br>
There are severale process to create any fullstack app, we will learn the basic this helps you to connect backend and frontend.<br>

# Step 1:
Create backend folder and frontend folder.<br>
# Step 2: 

Go to the backend intregrated terminal.
<br>
Write the following commands: <br>
npm init <br>
npm i express<br>
touch index.js(We cen manually create this)<br>
Go to the package.json<br>
Modify test as start and create a start script (node index.js), which run the code<br>

# To start the app use npm run start


<br><br>
Let's go for frontend<br>
We will use vite<br>
<br>
npm create vite@latest . # To create in exesting folder we use . or ./<br>
npm i axios <br>
# Axios is a JavaScript library used to make HTTP requests from the browser or Node.js. It simplifies sending asynchronous requests to APIs and handling responses.
<br>
Supports GET, POST, PUT, DELETE, etc.<bvr>
Works in browsers and Node.js<br>
Automatically transforms JSON data<br>
Supports request & response interceptors<br>
Handles timeouts & errors<br>
Allows cancellation of requests<br>
Supports async/await & Promises<br>
<br>
To start npm run dev<br><br>

# Install cors <br>
Or otherwise we avoid to insatll cors we simply use proxy.<br>
# Why it is important:

CORS (Cross-Origin Resource Sharing) is used to control which websites can access <br>resources on a different domain. It's a security feature implemented by web <br>browsers to prevent unauthorized cross-origin requests.<br>

# Basic Rule
useEffect(() => {<br>
    axios.get('http://localhost:3000/api/names') <br>
      .then((response) => {<br>
        {/*This is a bad practice we avoide this. In order to avoid this we have to use proxy*/ }<br>
      setNames(response.data)<br>
    })<br>
    .catch((error) => {<br>
      console.log(error);<br>
    })<br>
  })<br>





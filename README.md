# JSON-SERVER

To deploy the proyect:

1- Clone the repository and install the dependencies with:
	```bash
			git clone https://github.com/fabichu/json-server.git
			cd pyshark/src
			npm install
	```
2- start the react project and the json-server:

	```bash
			npm start
			npx json-server --watch src/api/products.json --port 8000
	```
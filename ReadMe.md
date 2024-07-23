**Glass Skin**

This website enables the user to track their skin care routines more efficiently. It is also integrated with a Machine Learning model that helps users get rpoduct recommendations that cater to their needs, based on their skin concerns and skin type.


**Pre-requisites**
1. Must have Node.js and Python installed on PC.
2. Download the code to your local system using git CLI or github desktop application
3. Set up a mongodb database to store the user data. 
4. *Server environmental variables* -- JWT_SECRET_KEY, MONGO_URL, FRONTEND_URL, FLASK_SERVER, PORT
5. *Client environemtnal variables* -- VITE_API_BASE_URL, VITE_FLASK_SERVER_BASE_URL
6. *Flask server environmental variables* -- JWT_SECRET_KEY, FRONTEND_URL, PORT


**Running the application**
1. Open the project directory.
2. *Frontend*

   a. Navigate to the 'Client' directory using *cd Client* in terminal

   b. Run *npm install*

   c. Run *npm run dev* and click on the corresponding link that opens.

3. *Backend*

   a. Navigate to 'Server" directory by : *cd ../Server*

   b. Run *npm run build*

   c. Run *npm start* to start the server

4. *Skincare Recommender*

   a. Navigate to ML directory using *cd ../ML*

   b. Create a virtual environment and install python packages required [flask, flask_cors, python-dotenv, numpy, scikit-learn, pandas]

   c. Run *python app.py* in the ML directory.

   
   
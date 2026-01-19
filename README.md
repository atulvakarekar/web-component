# web-component

# run the application to create web component
ng build --configuration production

# this will created 3 files
   main-XXXX.js
   polyfills-XXX.js
   styles-XXX.css

# Include these files in html with proper path
<script src="polyfills-XXXX.js"></script>
  <script src="main-XXX.js"></script>
  <link href="styles-XXX.css"></link>


# add the web element in body
<payment-card></payment-card>

# run the html file

# output attributes for web element

  <payment-card (tokenCreated)="getToken($event)" (validationError)="getErrors($event)"></payment-card>

# After clicking Pay button with valid data if
 validation success -  getToken() will call
 error occurs -  getErrors() will call




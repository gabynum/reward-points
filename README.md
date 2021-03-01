# reward-points

Simple form for calculating reward points based on transactions.
User enters transaction data in JSON array and clicks calculate.
Reward point totals are displayed below, sorted by user and month.

### Startup
1. npm i
2. npm start
3. go to [http://localhost:3000/](http://localhost:3000/)


### Development

* Used Create React App for initial project set-up
* Created components for rewards page and data display
* Extracted functions for parsing incoming JSON and calculating rewards points into helperFunctions file
* Stored example input in constants file
* Implemented react useState to store user input and customer rewards data
* Form takes a JSON array as input to simplifies the input for the user. The array gets wrapped in a JSON object before being parsed.

### Instruction Notes
* The instructions state:
  * >A customer receives 2 points for every dollar spent over $100 in each transaction, *plus 1 point for every dollar spent over $50* in each transaction
* There is no explicit mention of a cap at $100, however the example output only gives single points for dollars spent over $50 up to $100
  * >e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points
* I have erred on the side of this being a mistake in the example rather than the instructions. Therefore, a single point is awarded for every dollar spent over $50, without limit.
* In case this is incorrect, the alternative version is commented out in helperFunctions.js
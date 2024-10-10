# TypeScript Data Processing Project

This project implements a data processing algorithm and interacts with an API to fetch input data and submit results.

## Overview

The main functionality of this project is encapsulated in the `task4` function, which processes an array of numbers based on specific query types. The project also includes functionality to fetch input data from an API, process it, and submit the results back to another API endpoint.

## Features

1. Data processing algorithm (`task4` function)
2. API interaction for fetching input data and submitting results
3. TypeScript interfaces for strong typing

## Prerequisites

- Node.js
- TypeScript
- A package manager (npm or yarn)

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/maiPhuongLam/SHUB.git
   cd task4
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

To run the project:

```
npm start
```

This will execute the `getData` function, which performs the following steps:

1. Fetches input data from the API
2. Processes the data using the `task4` function
3. Submits the results back to the API

## Code Structure

### Interfaces

- `Query`: Defines the structure of a query object
- `InputData`: Defines the structure of the input data

### Functions

- `task4(arr: InputData): number[]`: Main data processing function
- `getData(): Promise<void>`: Handles API interactions and orchestrates the data flow

## API Endpoints

- Input data: `https://test-share.shub.edu.vn/api/intern-test/input`
- Output submission: `https://test-share.shub.edu.vn/api/intern-test/output`

## Algorithm Explanation

The `task4` function implements two types of queries:

1. Type "1": Calculates the sum of a range in the original array
2. Type "2": Calculates an alternating sum of a range in the original array

The function uses pre-computed arrays `arr1` and `arr2` to optimize query processing.

## Error Handling

The project includes basic error handling for API requests. Any errors encountered during the process are logged to the console.

## Contributing

Feel free to fork this project and submit pull requests for any enhancements or bug fixes.

## License

[Insert your chosen license here]

# Array pairs

![](https://travis-ci.org/kenticny/array-pairs.svg?branch=master)

### Install

```text
npm install array-pairs --save
```


### Usage

```javascript

const obj = {
    name: "kenticny",
    gender: "male",
    age: 26
};

```

encode transform to:

```javascript

[["name", "kenticny"], ["gender", "male"], ["age", 26]]

```

### API

- `.encode(obj)`: encode object to array pairs.

    ```javascript
    const arrayPairs = require("array-pairs");

    let obj = { ... };

    arrayPairs.encode(obj);
    ```

- `.decode(array)`: decode array pairs to object.

    ```javascript
    const arrayPairs = require("array-pairs");

    let arr = [ ... ]

    arrayPairs.decode(arr);
    ```

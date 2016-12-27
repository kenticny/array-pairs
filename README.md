# Array pairs

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
    var arrayPairs = require("array-pairs");

    var obj = { ... };

    arrayPairs.encode(obj);
    ```

- `.decode(array)`: decode array pairs to object.

    ```javascript
    var arrayPairs = require("array-pairs");

    var arr = [ ... ]

    arrayPairs.decode(arr);
    ```
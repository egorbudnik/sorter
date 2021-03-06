class Sorter {
    constructor() {
        this.arr = [];
        this.compareFunction = (a, b) => a - b;
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {
        var tempArr = [];

        for (var i = 0; i < indices.length; i++) {
            tempArr.push(this.arr[indices[i]]);
        }
        tempArr.sort(this.compareFunction);
        indices.sort();
        for (var i = 0; i < indices.length; i++) {
            this.arr[indices[i]] = tempArr[i];
        }
    }

    setComparator(compareFunction) {
       this.compareFunction = compareFunction;
    }
}

module.exports = Sorter;
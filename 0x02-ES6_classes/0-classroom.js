export default class ClassRoom {
    constructor(maxStudentsSize){
        this._maxStudentsSize = maxStudentsSize; 
    }
    set maxStudentsSize(myMaxStudentsSize) {
        if (typeof myMaxStudentsSize === 'number') {
            this._maxStudentsSize = myMaxStudentsSize;
        }
    }
    get maxStudentsSize() {
        return this._maxStudentsSize;
    }
}

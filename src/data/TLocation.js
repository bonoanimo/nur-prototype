class TLocation {
    constructor(name, desc, mapPos, rating) {
        this.name = name;
        this.mapPos = mapPos;
        this.description = desc;
        this.rating = this.setRating(rating);
    }

    setRating(rating) {
        if (rating > 5) rating = 5;
        if (rating < 1) rating = 1;
        this.rating = Math.floor(rating);
    }
}

export default TLocation;

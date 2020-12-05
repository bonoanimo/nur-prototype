import TLocation from "@/data/TLocation";
import MapPos from "@/data/MapPos";

class Traveller {
    constructor() {
        this.locations = [];
    }

    addLocation(name, description, mapPos, rating) {
        let l = new TLocation();
        l.name = name;
        l.description = description;
        l.mapPos = mapPos;
        l.rating = rating;
        this.locations.push(l);
    }
}

let inst = new Traveller();

inst.addLocation('Ostrava', 'OK mesto', new MapPos(24,45), 5);
inst.addLocation('Brno', 'Strasna dira', new MapPos(24,45), 3);

export default inst;

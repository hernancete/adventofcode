
class Moon {

    constructor(x=0, y=0, z=0) {
        this._x = x;
        this._y = y;
        this._z = z;
        this._vx = 0;
        this._vy = 0;
        this._vz = 0;
    }

    updateVel(moons=[]) {
        for (let moon of moons) {
            if (this._x < moon._x) this._vx++;
            if (this._x > moon._x) this._vx--;
            if (this._y < moon._y) this._vy++;
            if (this._y > moon._y) this._vy--;
            if (this._z < moon._z) this._vz++;
            if (this._z > moon._z) this._vz--;
        }
    }

    updatePos(moons=[]) {
        this._x += this._vx;
        this._y += this._vy;
        this._z += this._vz;
    }

    getPos() {
        return [this._x, this._y, this._z];
    }

    getVel() {
        return [this._vx, this._vy, this._vz];
    }

    potentialEnergy() {
        return Math.abs(this._x) + Math.abs(this._y) + Math.abs(this._z);
    }

    kineticEnergy() {
        return Math.abs(this._vx) + Math.abs(this._vy) + Math.abs(this._vz);
    }

    energy() {
        return this.potentialEnergy() * this.kineticEnergy();
    }

}

module.exports = {
    Moon,
};

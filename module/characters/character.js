class Character {
    constructor(job, name, level = 1, xpRange = 0, hp, damage) {
        this.currentJob = job;
        this.currentName = name;
        this.levelValue = level;
        this.xpRangeValue = xpRange;
        this.hpValue = hp;
        this.damageValue = damage;
    }
    get job() {
        return this.currentJob
    }
    get name() {
        return this.currentName
    }
    get level() {
        return this.levelValue
    }
    get xpRange() {
        return this.xpRangeValue
    }
    get hp() {
        return this.hpValue
    }
    get damage() {
        return this.damageValue
    }

    set newJob(newJob) {
        this.currentJob = newJob;
    }
    set newName(newName) {
        this.currentName = newName;
    }
    set newLevel(newLevel) {
        this.levelValue = newLevel;
    }
    set newXpRange(newXpRange) {
        this.xpRangeValue = newXpRange;
    }
    set newHp(newHp) {
        this.hpValue = newHp;
    }
    set newDamage(newDamage) {
        this.damageValue = newDamage;
    }
}
export default Character

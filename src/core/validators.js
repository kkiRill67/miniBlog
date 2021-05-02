export class Validators {
    static required(val) {
        return val && val.trim()
    }
}
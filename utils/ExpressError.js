class ExpressError extends Error {
    constructor(code, message) {
        super();
        this.code = code || 500;
        this.message = message;
    }
}

module.exports = ExpressError;
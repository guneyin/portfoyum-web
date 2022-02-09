var auth = {
    signup: "auth/signup",
    login: "auth/login",
    verify: "auth/verify",
    password: {
        forgot: "auth/password/forgot",
        change: "auth/password/change",
    },
};

var transactions = {
    default: "transactions",
    upload: "transactions/upload",
    save: "transactions/save",
};

var stats = {
    default: "stats",
};

var portfolio = {
    default: "portfolio",
};

export const services = {
    auth,
    transactions,
    stats,
    portfolio,
}

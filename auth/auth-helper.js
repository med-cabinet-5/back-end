module.exports = {
    validateUser
};
  
function validateUser(user) {
    let errors = [];

    if (!user.username || user.username.length < 6) {
        errors.push("Please include a username with at least 6 characters");
    }
    if (!user.password || user.password.length < 8) {
        errors.push("Please include a password with at least 8 characters");
    }

    return {
        isSuccessful: errors.length > 0 ? false : true,
        errors
    };
};
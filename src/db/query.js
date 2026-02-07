const { prisma } = require('../../lib/prisma');
async function signUser(userName,email,password){
    return prisma.user.create({
        data: {
            username: userName,
            email : email,
            password: password
        }
    })
}

module.exports = {signUser}
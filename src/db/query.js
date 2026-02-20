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

async function uploadFile(filelocation,originalName,authorid){
    return prisma.file.create({
        data:{
            fileLocation: filelocation,
            originalName: originalName,
            authorId: authorid
        }

    })
}

module.exports = {signUser, uploadFile}
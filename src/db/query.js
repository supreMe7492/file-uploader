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

async function uploadFile(filelocation,originalName,authorid,folderId){
    return prisma.file.create({
        data:{
            fileLocation: filelocation,
            originalName: originalName,
            authorId: authorid,
            folderId: folderId
        }

    })
}

async function createFolder(folderName,parentId,authorId){
    return prisma.folder.create({
        data:{
            folderName: folderName,
            parentId: parentId,
            authorId: authorId

        }
    })
}
module.exports = {signUser, uploadFile,createFolder}
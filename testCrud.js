const { User, Post } = require('./models');

async function createRecords() {
    const user = await User.create({
        display_name:"Ravoof",
        email:"ravbinhak843@gmail.com",
        username:"mohammadravoof",
        bio:"Yeah buddy!"
    });

    await Post.create({
        content: "Hello, World!",
        user_id: user.id,
        posted_at: new Date()
    });
}

async function fetchRecords() {
    const users = await User.findAll();
    console.log(JSON.stringify(users, null, 2));

    const posts = await Post.findAll();
    console.log(JSON.stringify(posts, null, 2));
}

async function updateRecords() {
    await User.update({bio:"Hello"},{where: {id:1}});
}

async function deleteRecords() {
    await User.destroy({where: {id:1}});
}

// deleteRecords();
// updateRecords();
// fetchRecords();
// createRecords();
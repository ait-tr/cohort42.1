
// SELECT * FROM animals WHERE predatory = true
db.animals.aggregate([
    {$match: {predatory: true}}
]);


//db.animals.find({predatory: true}).sort({weight: -1});
// SELECT * FROM animals WHERE predatory = true ORDER BY weight DESC
db.animals.aggregate([
    {$match: {predatory: true}},
    {$sort: {weight: -1}}
]);

// SELECT * FROM animals
db.animals.aggregate([
    // WHERE predatory = true
    {$match: {predatory: true}},
    // ORDER BY weight DESC
    {$sort: {weight: -1}},
    // LIMIT 1
    {$limit: 1}
]);

db.animals.aggregate([
    {$match: {predatory: true}},
    {$sort: {weight: -1}},
    {$skip: 2},
    {$limit: 1}
]);

//db.animals.find({weight: 5}, {name: 1, foods: 1, _id: 0})
// SELECT name, foods FROM animals WHERE weight = 5
db.animals.aggregate([
    {$match: {weight: 5}},
    {$project: {name: 1, foods: 1, _id: 0}}
]);

// db.animals.find({predatory: false}).count();
db.animals.aggregate([
    {$match: {predatory: false}},
    {$count: 'number_of_planteaters'}
]);

db.animals.aggregate([
    {$sample: { size: 1 } },
]);

// получить всю коллекцию в случайном порядке
db.animals.aggregate([
    {$sample: { size: db.animals.countDocuments() } },
]);

db.animals.aggregate([
    { $match: { weight: { $gt: 100 } } },
    { $sample: { size: 1 } },
]);

db.posts.insertOne({
    _id: ObjectId("65c6096e0451b42a2273e13c"),
    likes: 10,
    text: "Hi, I am glad to be on likedin",
});

db.comments.insertMany([
    {
        email: "fish@mail.com",
        message: "Oh, you are here! Wonderful!",
        post_id: ObjectId("65c6096e0451b42a2273e13c")
    },
    {
        email: "eidelman@mail.com",
        message: "Hey, man!",
        post_id: ObjectId("65c6096e0451b42a2273e13c")
    },
    {
        email: "eidelman@mail.com",
        message: "P.S. love you so!",
        post_id: ObjectId("65c6096e0451b42a2273e13c")
    }
]);

// SELECT * FROM comments
// JOIN posts ON posts._id = comments.post_id

db.comments.aggregate([
    {$lookup: {
            from: "posts", // куда будем подсматривать - коллекция
            localField: "post_id", // как называется в колл. комменте
            foreignField: "_id",   // как называется в колл. посте
            as: 'post_info'
        }}
]);

db.posts.aggregate([
    {$lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "post_id",
            as: 'comments'
        }}
]);

db.posts.aggregate([
    {$lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "post_id",
            as: 'comments'
        }},
    {
        $project: {comments: {email: 1, message: 1},
            text: 1, likes: 1}
    },
    {
        $project: { _id: 0, post_id: 0}
    }
]);

db.kids.insertMany([
    { name: "John", age: 5, gender: "boy" },
    { name: "Anna", age: 6, gender: "girl" },
    { name: "Leyla", age: 4, gender: "girl" },
    { name: "Frieda", age: 3, gender: "boy" },
    { name: "Bob", age: 5, gender: "boy" },
]);

// SELECT gender, AVG(age) AS average_age FROM kids GROUP BY gender
db.kids.aggregate([
    {
        $group:
            {
                _id: "$gender",
                averageAge: { $avg: "$age" }
            }
    }
]);

// SELECT gender, MIN(age) AS average_age FROM kids GROUP BY gender
db.kids.aggregate([
    {$group: {_id: "$gender", minAge: {$min: "$age"}}}
]);

// SELECT gender, MAX(age) AS average_age FROM kids GROUP BY gender
db.kids.aggregate([{
    $group: { _id: "$gender", maxAge: { $max: "$age" } }
}]);





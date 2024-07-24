//SELECT * FROM users;
db.users.find();
// INSERT INTO users (name) VALUES ('Fred')
db.users.insertOne({ name: "Fred"});

// INSERT INTO adresses (country, city) VALUES ('Germany', 'Berlin');
// INSERT INTO users (name, age, adress_id) VALUES ('Davit', 34, 1);
db.users.insertOne(
    {
        name: "Davit",
        age: 34,
        address: { coutry: "Germany", city: "Berlin" }
    }
);
/*
INSERT INTO users (name, age) VALUES
('Egor', 25),
('Ded Igor', 76)
*/
db.users.insertMany(
    [
        {
            name: "Egor", age: 25
        },
        {
            name: "Ded Igor", age: 76
        }
    ]
);


db.users.insertOne(
    {
        name: "John",
        age: 20,
        hobbies: ["music", 'surfing', 'video-games', 'snowboard']
    }
);

// SELECT * FROM users LIMIT 3
db.users.find().limit(3);

// SELECT * FROM users ORDER BY age
db.users.find().sort({age: 1});

// SELECT * FROM users ORDER BY name DESC
db.users.find().sort({name: -1});

// SELECT * FROM users ORDER BY name DESC age ASC
db.users.find().sort({name: -1, age: 1});


db.users.insertOne({name: 'Oleg', age: 25});

// SELECT * FROM users WHERE age = 25
db.users.find({age: 25});

// SELECT * FROM users WHERE age = 25 AND name LIKE 'Egor';
db.users.find({age: 25, name: 'Egor'});

// SELECT * FROM users WHERE age = 25 LIMIT 1
db.users.findOne({age: 25});

// SELECT * FROM users WHERE age > 25
db.users.find(
    {
        age:
            {
                $gt: 25
            }
    }
);

// SELECT * FROM users WHERE age <= 25
db.users.find({age: {$lte: 25}});

// SELECT id, name FROM users WHERE age = 25
db.users.find({age: 25}, {name: 1});

// SELECT name FROM users WHERE age = 25
db.users.find({age: 25}, {name: 1, _id: 0});

// SELECT * FROM users WHERE name IN ('John', 'Oleg');
db.users.find({name: {$in: ["John", "Oleg"]}});

// SELECT * FROM users WHERE name NOT IN ('John', 'Oleg');
db.users.find({name: {$nin: ["John", "Oleg"]}});

// SELECT * FROM users WHERE age = 25 OR name = 'Ded Igor'
db.users.find(
    {
        $or: [
            {
                age: 25
            },
            {
                name: "Ded Igor"
            }
        ]
    }
);

// SELECT * FROM users WHERE age NOT NULL
db.users.find({$exists: {age: true}});

db.users.insertMany([
    {name: "Fred", salary: 2000, costs: 1500},
    {name: "Kristina", salary: 1300, costs: 2500}
]);

// SELECT * FROM users WHERE salary > costs
db.users.find(
    {
        $expr:
            {
                $gt:
                    [
                        "$salary", "$costs"
                    ]
            }
    }
);

db.users.find({hobbies: "surfing"});

db.users.insertMany([
    {name: "John Snow", hobbies: ["swords", "bows", "wolfs", "red-head"], age: 20},
    {name: "Han Solo", hobbies: ["space", "blasters"], age: 36}
]);

db.users.find({hobbies: {$in: ["space", "snowboard"]}});

db.animals.insertMany([
    {kind: "tiger", weight: 300, name: "Alan", predatory: true},
    {kind: "penguin", weight: 2, name: "Kovalsky", predatory: true},
    {kind: "chicken", weight: 1, name: "Cipa", predatory: false},
    {kind: "shark", weight: 400, name: "Sharp", predatory: false},
    {kind: "shark", weight: 450, name: "John", predatory: false},
    {kind: "panda", weight: 200, name: "Po", predatory: false},
]);

// SELECT kind, weight, name, predatory FROM animals
db.animals.find({}, {_id: 0});

// UPDATE animals SET predatory = true WHERE kind = 'shark'
db.animals.updateMany(
    { kind: "shark" },
    { $set: { predatory: true } }
);

db.animals.updateMany({}, {$inc: {weight: 3}});

db.animals.updateMany({}, {$rename: {kind: "species"}})

db.animals.updateMany(
    { predatory: true },
    { $set: { foods: ["fish", "squid"] } }
);

db.animals.updateOne(
    {species: "tiger"},
    {$push: {foods: "wolf"}}
);

db.animals.updateOne(
    {species: "tiger"},
    {$pull: {foods: "squid"}}
);

db.animals.updateOne(
    {species: "chicken"},
    {$unset: {predatory: ""}}
);


db.animals.find();
// SELECT COUNT(*) FROM animals WHERE species = 'shark'
db.animals.countDocuments({species: "shark"});
db.animals.updateOne(
    {_id: ObjectId('66a15546f5a0f4cb748afe95')},
    {$set: {name: "Private"}}
);

db.animals.deleteOne({_id: ObjectId('66a15546f5a0f4cb748afe96')})

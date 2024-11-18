//creates fake information using 'faker' to produce catagories and stories and add them to the json file

import { faker } from "@faker-js/faker";

export const Catagories = {
  catagory: [],
};

function ConvertToSlug(title) {
  title = title.toLowerCase(); //t is the title received
  title = title.trim(); // trim the spaces from start and end
  var slug = title.replace(/[^a-z0-9]+/g, "-"); // replace all the spaces with "-"
  return slug;
}

const catagoryID = [];
export function createRandomCatagory() {
  const name = faker.word.words({ min: 1, max: 5 });
  const id = faker.database.mongodbObjectId();
  catagoryID.push(id);
  const parentID = catagoryID[faker.number.int(catagoryID.length - 1)];

  return {
    id: id,
    count: faker.number.int(1000),
    description: faker.lorem.sentence(),
    slug: faker.helpers.slugify(name),
    parent_id: parentID !== id ? parentID : 0,
    name: name,
    image: faker.image.avatar(),
    iconColor: [faker.color.rgb(), faker.color.rgb()],
    color: faker.color.rgb(),
  };
}

Array.from({ length: 8 }).forEach(() => {
  Catagories.catagory.push(createRandomCatagory());
});

console.log(JSON.stringify(Catagories));

export const Stories = {
  story: [],
};
export function createRandomStory() {
  return {
    id: faker.database.mongodbObjectId(),
    date: faker.date.recent(),
    catagaory_id: Catagories.catagory[faker.number.int(2)].id,
    source: faker.lorem.word(),
    views: faker.number.int(500),
    shares: faker.number.int(500),
    likes: faker.number.int(500),
    title: faker.book.title(),
    Author: faker.person.fullName(),
    merit: `in the merit of ${faker.person.firstName()}`,
    text: faker.lorem.paragraph(),
  };
}

Array.from({ length: 50 }).forEach(() => {
  Stories.story.push(createRandomStory());
});

console.log(JSON.stringify(Stories));

//creates fake information using 'faker' to produce catagories and stories and add them to the db.json file

import { faker } from "@faker-js/faker";
import { Children } from "react";

export const data = {
  categories: [],
  stories: [],
};

function ConvertToSlug(title) {
  title = title.toLowerCase(); //t is the title received
  title = title.trim(); // trim the spaces from start and end
  var slug = title.replace(/[^a-z0-9]+/g, "-"); // replace all the spaces with "-"
  return slug;
}

const categoryID = [];
const childrenID = [];

export function createRandomCategory() {
  const name = faker.word.noun({ length: { min: 3, max: 8 } });
  const id = faker.database.mongodbObjectId();
  categoryID.push(id);
  const categoryItem = {
    id: id,
    count: faker.number.int(1000),
    description: faker.lorem.sentence(),
    slug: faker.helpers.slugify(name),
    //category_children: category_children.length > 0 ? category_children : 0,
    name: name,
    image: faker.image.avatar(),
    iconColor: [faker.color.rgb(), faker.color.rgb()],
    color: faker.color.rgb(),
  };

  let isSubCategory = faker.datatype.boolean();
  const category_children = [];
  isSubCategory && childrenID.push(categoryItem);

  if (!isSubCategory) {
    for (let index = 0; index < faker.number.int(3); index++) {
      if (childrenID.length > 0) {
        let rnd = faker.number.int(childrenID.length - 1);
        category_children.push(childrenID[rnd]);
        childrenID.splice(rnd, 1);
      }
      
    }

    //const parentID = categoryID[faker.number.int(categoryID.length - 1)];

    return {
      id: id,
      count: categoryItem.count,
      description: categoryItem.description,
      slug: categoryItem.slug,
      category_children: category_children.length > 0 ? category_children : 0,
      name: name,
      image: categoryItem.image,
      iconColor: categoryItem.iconColor,
      color: categoryItem.color,
    };
  }
}

Array.from({ length: 8 }).forEach(() => {
  data.categories.push(createRandomCategory());
});

export function createRandomStory() {
  return {
    id: faker.database.mongodbObjectId(),
    date: faker.date.recent().toLocaleDateString(),
    catagaory_id: data.categories[faker.number.int(2)].id,
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
  data.stories.push(createRandomStory());
});

console.log(JSON.stringify(data));

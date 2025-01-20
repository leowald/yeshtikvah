//creates fake information using 'faker' to produce categories and stories and add them to the db.json file

import { faker } from "@faker-js/faker";
import { Children } from "react";

export const data = {
  categories: [],
  stories: [],
};

const categoryID = [];

export function createRandomCategory() {
  const name = faker.word.noun({ length: { min: 3, max: 8 } });
  const id = faker.database.mongodbObjectId();
  categoryID.push(id);

  const category_children = [];

  //creating category children
  for (let index = 0; index < faker.number.int(3); index++) {
    const subCategoryID = faker.database.mongodbObjectId();
    categoryID.push(subCategoryID);
    const subCategoryName = faker.word.noun({ length: { min: 3, max: 8 } });

    category_children.push({
      id: subCategoryID,
      count: faker.number.int(1000),
      description: faker.lorem.sentence(),
      slug: faker.helpers.slugify(subCategoryName),
      name: subCategoryName,
      image: faker.image.avatar(),
      iconColor: [faker.color.rgb(), faker.color.rgb()],
      color: faker.color.rgb(),
    });
  }
  function total(total, num) {
    return (total += num);
  }

  return {
    id: id,
    count:
      category_children.length > 0
        ? category_children.map((item) => item.count).reduce(total)
        : faker.number.int(1000),
    description: faker.lorem.sentence(),
    slug: faker.helpers.slugify(name),
    name: name,
    image: faker.image.avatar(),
    iconColor: [faker.color.rgb(), faker.color.rgb()],
    color: faker.color.rgb(),
    category_children: category_children.length > 0 ? category_children : 0,
  };
}

Array.from({ length: 8 }).forEach(() => {
  data.categories.push(createRandomCategory());
});

export function createRandomStory() {
  return {
    id: faker.database.mongodbObjectId(),
    date: faker.date.recent().toLocaleDateString(),
    category_id: categoryID[faker.number.int(categoryID.length - 1)],
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

//creates fake information using 'faker' to produce catagories and stories and add them to the db.json file

import { faker } from "@faker-js/faker";

export const data = {
  categories: [],
  stories: [],
  menu: [],
};

function ConvertToSlug(title) {
  title = title.toLowerCase(); //t is the title received
  title = title.trim(); // trim the spaces from start and end
  var slug = title.replace(/[^a-z0-9]+/g, "-"); // replace all the spaces with "-"
  return slug;
}

const categoryID = [];
export function createRandomCategory() {
  const name = faker.word.adjective({ length: { min: 3, max: 8 } });
  const id = faker.database.mongodbObjectId();
  categoryID.push(id);
  const parentID = categoryID[faker.number.int(categoryID.length - 1)];

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

export function createMenuObject(child) {
  let menuItem = "";
  if (Array.isArray(data.menu) && data.menu.length === 0 && !child) {
    menuItem = "Stories";
  } else {
    menuItem = faker.helpers.arrayElement([
      "Page",
      "Account",
      "Contact",
      "Donate",
      "FAQ",
      "App",
      "Pesukim",
      "Shiurim",
      "Sources",
      "Subscribe",
    ]);
  }

  let randomNum2 = faker.helpers.rangeToNumber({ min: 0, max: 1 });

  if (child !== 2 && menuItem !== "Stories" && randomNum2 === 1) {
    let randomNum = faker.helpers.rangeToNumber({ min: 0, max: 7 });
    child++;
    var childrenArray = faker.helpers.multiple(() => createMenuObject(child), {
      count: randomNum,
    });
  }
  if (menuItem == "App") {
    return {
      id: faker.database.mongodbObjectId(),
      title: faker.word.noun(),
      children:
        Array.isArray(childrenArray) && childrenArray.length !== 0
          ? childrenArray
          : "",
      url:
        Array.isArray(childrenArray) && childrenArray.length !== 0 ? "" : `/`,
      template:
        Array.isArray(childrenArray) && childrenArray.length !== 0
          ? ""
          : `./App`,
    };
  }
  return {
    id: faker.database.mongodbObjectId(),
    title: faker.word.noun(),
    children:
      Array.isArray(childrenArray) && childrenArray.length !== 0
        ? childrenArray
        : "",
    url:
      Array.isArray(childrenArray) && childrenArray.length !== 0
        ? ""
        : `/${menuItem.toLowerCase()}`,
    template:
      Array.isArray(childrenArray) && childrenArray.length !== 0
        ? ""
        : `./pages/${menuItem}`,
    page_id:
      (Array.isArray(childrenArray) && childrenArray.length !== 0) ||
      menuItem !== "Page"
        ? ""
        : faker.number.int(50),
  };
}

Array.from({ length: 5 }).forEach(() => {
  data.menu.push(createMenuObject(0));
});

console.log(JSON.stringify(data));

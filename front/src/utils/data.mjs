//creates fake information using 'faker' to produce categories and stories and add them to the db.json file

import { faker } from "@faker-js/faker";
import { Children } from "react";

export const data = {
  categories: [],
  stories: [],
  menu: [],
  logo: [],

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
    children: category_children.length > 0 ? category_children : 0,
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
        : menuItem === "Stories" || menuItem === "Page"
        ? `/${menuItem.toLowerCase()}/:id`
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

export function createLogo() {
  // get random logo from array
  const imgName = faker.helpers.arrayElement([
    "ATT",
    "AE",
    "HM",
    "IBM",
    "RamadaInn",
  ]);
  return {
    alt_text: faker.lorem.words({ min: 1, max: 3 }),
    image: {
      sm: `${imgName}-150x150.png`,
      md: `${imgName}-300x300.png`,
      lg: `${imgName}.png`,
    },
  };
}

data.logo.push(createLogo());


console.log(JSON.stringify(data));

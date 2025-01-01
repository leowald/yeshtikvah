//creates fake information using 'faker' to produce catagories and stories and add them to the db.json file

import { faker } from "@faker-js/faker";

export const data = {
  categories: [],
  stories: [],
  menu: [],
  logo: [],

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
  const title = faker.helpers.arrayElement([
    "Page",
    "Account",
    "Contact",
    "Donate",
    "FAQ",
    "App",
    "Pesukim",
    "Shiurim",
    "Sources",
    "Stories",
    "Subscribe",
  ]);
  if (!child) {
    let randomNum = faker.helpers.rangeToNumber({ min: 0, max: 7 });
    var childrenArray = faker.helpers.multiple(
      () => createMenuObject("child"),
      {
        count: randomNum,
      }
    );
  }
  if (title == "App") {
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
        : `/${title.toLowerCase()}`,
    template:
      Array.isArray(childrenArray) && childrenArray.length !== 0
        ? ""
        : `./pages/${title}`,
    page_id:
      (Array.isArray(childrenArray) && childrenArray.length !== 0) ||
      title !== "Page"
        ? ""
        : faker.number.int(50),
  };
}

Array.from({ length: 10 }).forEach(() => {
  data.menu.push(createMenuObject());
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

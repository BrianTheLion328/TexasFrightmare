const client = require("./client");

const { createCelebrities } = require("./index");

async function buildTables() {
  try {
    client.connect();

    // drop tables in correct order
    console.log("Starting to drop tables...");
    await client.query(`
        DROP TABLE IF EXISTS celebrities;
        `);
    console.log("Successfully dropped tables!");

    // build tables
    console.log("Attempting to CREATE TABLES!");
    await client.query(`
        CREATE TABLE celebrities(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            imageUrl VARCHAR(255),
            origin VARCHAR(255),
            description VARCHAR(255),
            photo VARCHAR(255) DEFAULT NULL
        );
        `);
  } catch (error) {
    throw error;
  }
}

async function populateCelebrities() {
  try {
    //data on each celebrity I want to meet at TF

    const seedCelebrities = [
      {
        name: "Kane Hodder",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2019/08/Kane-Hodder1-e1598392804344.png",
        origin: "Friday the 13th part 7, 8, 9, Jason X, Hatchet franchise",
        description:
          "Kane Hodder is best known for playing the iconic Jason Voorhees in the Friday the 13th franchise. He also plays the killer Victor Crowley in the Hatchet movies. Meeting him will check a box off my bucket list!",
          photo: "https://live.staticflickr.com/65535/51476499051_16578079eb_b.jpg"
      },
      {
        name: "Tony Todd",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2019/08/Tony-Todd1-e1598393952692.png",
        origin:
          "Candyman, Night of the Living Dead (1990), Final Destination franchise",
        description:
          "Tony Todd is best know for playing Candyman himself in the 1992 Clive Barker cult classic.",
        photo: "https://live.staticflickr.com/65535/51476738358_a686617a93_b.jpg"
      },
      {
        name: "Malcolm McDowell",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2021/06/Malcolm-McDowell-SM.jpg",
        origin: "A Clockwork Orange, Rob Zombie's Halloween and Halloween II",
        description:
          "Arguably the biggest name on the list this year, Malcolm has starred in too many movies to count, but probably most famous for the lead role in A Clockwork Orange.",
          photo: "https://live.staticflickr.com/65535/51477420550_37e1b42988_b.jpg"
      },
      {
        name: "Dylan McDermott",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2021/08/Dylan-McDermott.jpg",
        origin:
          "American Horror Story: Murder House, American Horror Story: Asylum, American Horror Story: Apocalypse, American Horror Story: 1984, American Horror Stories",
        description:
          "Best know to horror fans as playing the chronic nymphomaniac psychiatrist Ben Harmon in the American Horror Story universe.",
          photo: "https://live.staticflickr.com/65535/51477420745_32e178643a_b.jpg"
      },
      {
        name: "Damien Leone",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2019/08/Damien1-e1598392946629.png",
        origin: "All Hallows Eve, Terrifier, Terrifier 2",
        description:
          "The director, writer, and highly skilled Special Effects Makeup artist resposible for the bloodbath know as Terrifer, and soon to come Terrifer 2.",
          photo: "https://live.staticflickr.com/65535/51475722917_31e1bacedf_b.jpg"
      },
      {
        name: "C.J. Graham",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2019/08/CJ-Graham-e1598392724301.png",
        origin: "Friday the 13th part 6: Jason Lives",
        description:
          "Even though he only played Jason this one time, he made it count, as F13: part 6 is regarded by many fans at the best sequel in the franchise. Both campy and fun, but with a high body count and tons of gore.",
          photo: "https://live.staticflickr.com/65535/51477420355_0a490208bb_b.jpg"
      },
      {
        name: "Ken Foree",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2019/12/Ken-Foree-e1598392622223.png",
        origin:
          "Dawn of the Dead (1978), Leatherface: Texas Chainsaw Massacre III, The Devil's Rejects, Rob Zombie's Halloween, Dawn of the Dead (2004)",
        description:
          "Ken Foree is one of my favorite horror actors of all time, having starred in the original Dawn of the Dead!",
          photo: "https://live.staticflickr.com/65535/51477420710_0a41b46809_b.jpg"
      },
      {
        name: "David Howard Thornton",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2019/11/David-Howard-Thornton-e1598393909623.png",
        origin: "Terrifier and Terrifer 2",
        description:
          "David Howard Thornton plays the black and white maniac Art the Clown in both Terrifier and Terrifier 2.",
          photo: "https://live.staticflickr.com/65535/51477212834_14c7642a43_b.jpg"
      },
      {
        name: "Lar Park Lincoln",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2021/08/Lar-Park-Lincoln.png",
        origin: "Friday the 13th: Part 7: A New Beginning",
        description:
          "Lar Park Lincoln is best known as Tina, the girl with telekinetic powers, from F13: part 7.",
          photo: "https://live.staticflickr.com/65535/51475722842_43db2373e8_b.jpg"
      },
      {
        name: "R.A. Mihailoff",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2019/08/RA-Mihailoff1-e1598393375852.png",
        origin: "Leatherface: Texas Chainsaw Massacre III",
        description:
          "R.A. Mihailoff is best known for playing the chainsaw swinging maniac Leatherface in Texas Chainsaw Massacre III.",
          photo: "https://live.staticflickr.com/65535/51477212774_b9889e53db_b.jpg"
      },
      {
        name: "Tom Savini",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2019/09/Tom-Savini1-e1598393720540.png",
        origin:
          "Night of the Living Dead, Creepshow, Land of the Dead, Dawn of the Dead, Friday the 13th, Machete, Planet Terror, From Dusk Till Dawn, Maniac",
        description:
          "Tom Savini is a GOD in the horror world, having done the special effects makeup for too many movies to count, as well as starring in a some acting roles in a number of horror films.",
          photo: "https://live.staticflickr.com/65535/51477420315_b555b3abe0_b.jpg"
      },
      {
        name: "Nancy Loomis",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2021/07/Nancy-Loomis.jpg",
        origin: "Halloween, Halloween 3: Season of the Witch",
        description:
          "Nancy Loomis is best known as Annie in John Carpenter's Halloween.",
          photo: "https://live.staticflickr.com/65535/51477212889_e31e814320_b.jpg"
      },
      {
        name: "Miguel Nunez Jr.",
        imageUrl:
        "https://www.texasfrightmareweekend.com/wp-content/uploads/2021/08/Miguel-A-Nunez-Jr.png",
        origin:
        "The Return of the Living Dead, Friday the 13th: part 5 - A New Beginning",
        description:
        "Miguel Nunez is best know in the horror universe as Spider from the cult classic zombie film (and my top 2 fav films of all time!) The Return of the Living Dead, and for eating too many enchiladas in Friday the 13th part 5.",
        photo: "https://live.staticflickr.com/65535/51477420635_0c5a522f1e_b.jpg"
      },
      {
        name: "Harvey Guillen",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2019/09/Harvey-Guillen-e1598394227945.png",
        origin: "What We Do In The Shadows (tv show)",
        description:
          "Harvey Guillen is best known as the familiar (assistant) to the vampire Nandor in the vampire comedy What We Do In The Shadows.",
          photo: "https://live.staticflickr.com/65535/51476499471_b270afddd0_b.jpg"
      },
      {
        name: "Danny Trejo",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2019/09/Danny-Trejo1-e1598394001485.png",
        origin:
          "Machete, Machete Kills, Anaconda, Desperado, From Dusk Till Dawn, Predators, American Horror Stories, The Devil's Rejects, Rob Zombie's Halloween, Grindhouse",
        description:
          "Danny Trejo is Hollywood royalty, having starred in way too many films to count, and being best know for his role in Machete.",
          photo: "https://live.staticflickr.com/65535/51476738418_84f8fa6563_b.jpg"
      },
      {
        name: "Ed Neal",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2021/06/Ed-Neal.jpg",
        origin: "The Texas Chainsaw Massacre (1974)",
        description:
          "Ed Neal is famous for playing the deranged hitchhiker in the original masterpiece The Texas Chainsaw Massacre.",
          photo: "https://live.staticflickr.com/65535/51477420515_766edc090a_b.jpg"
      },
      {
        name: "Charles Cyphers",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2021/06/Charles-Cyphers.jpg",
        origin: "John Carpenter's Halloween",
        description:
          "Charles Cyphers is best known as Sheriff Brackett in the original Halloween, and he will be repsiring his role in the upcoming Halloween Kills sequel!",
          photo: "https://live.staticflickr.com/65535/51477420265_0f6b41811e_b.jpg"
      },
      {
        name: "Jonathan Breck",
        imageUrl:
          "https://www.texasfrightmareweekend.com/wp-content/uploads/2020/03/Jonathan-Breck-e1598392092624.png",
        origin: "Jeepers Creepers 1, 2, and 3",
        description:
          "Jonathan Breck is famous for starring as the creeper himself in all of the Jeepers Creepers movies.",
          photo: "https://live.staticflickr.com/65535/51477213044_a6f6eaa5d6_b.jpg"
      },
      {
        name: "John Philbin",
        imageUrl: "https://www.texasfrightmareweekend.com/wp-content/uploads/2021/08/John-Philbin.png",
        origin: "The Retrun of the Living Dead, The Children of the Corn",
        description: "John Philbin is best know for his roles in The Return of the Living Dead and The Children of the Corn.",
        photo: "https://live.staticflickr.com/65535/51476738788_865153178d_b.jpg"
      },
      {
        name: "Dee Wallace",
        imageUrl: "https://www.texasfrightmareweekend.com/wp-content/uploads/2019/11/Dee-Wallace1-e1598394091751.png",
        origin: "E.T., Cujo, The Hills Have Eyes, The Howling, Rob Zombie's Halloween, Critters",
        description: "Coming from way too many films to name, Dee Wallace is horror movie royalty, probably best know for her roles in E.T., Cujo, and The Howling.",
        photo: "https://live.staticflickr.com/65535/51476499356_b8332fd68a_b.jpg"
      }
    ];

    const celebrities = await Promise.all(
      seedCelebrities.map(createCelebrities)
    );

    console.log("Celebrities Created: ", celebrities);
  } catch (error) {
    console.log(error)
  }
}

buildTables()
  .then(populateCelebrities)
  .catch(console.error)
  .finally(() => client.end());

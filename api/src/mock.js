const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const Divisions = require('./models/Divisions');
const SubDivisions = require('./models/SubDivisions');

// Crear usuarios
const createUsers = async () => {
  User.create([
    {
      "id": 1,
      "username": "Bretzs",
      "email": "Sincere1212@april.biz",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 2,
      "username": "Anttonette",
      "email": "Shann212a@melissa.tv",
      "password": "12345",
      "age": "26",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 3,
      "username": "Samantha",
      "email": "Nathan@ye12senia.net",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 4,
      "username": "Karianne",
      "email": "Julianne.OCon12ner@kory.org",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 5,
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 6,
      "username": "Leopoldo_Corkery",
      "email": "Karley_Dach@jasper.info",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 7,
      "username": "Elwyn.Skiles",
      "email": "Telly.Hoeger@billy.biz",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 8,
      "username": "Maxime_Nienow",
      "email": "Sherwood@rosamond.me",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 9,
      "username": "Delphine",
      "email": "Chaim_McDermott@dana.io",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 10,
      "username": "Moriah.Stanton",
      "email": "Rey.Padberg@karina.biz",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    

  ]);
}

const createSubDivisions = async () => {
  SubDivisions.create([
    {
      "name": "Growth",
    },
    {
      "name": "Directorio",
    },
    {
      "name": "Operation",
    },
    {
      "name": "Monetization",
    },
    {
      "name": "Customer",
    },
    {
      "name": "People",
    },
  ])
}

const createDivisions = async () => {
  Divisions.create([
    {
      "name": "Growth",
      "higher": "Direccion General",
      "collaborators": 2,
      "level": 10, 
      "subDivisions": ("62e35f19d47ef7dc31d17f34"),
      "ambassadors": ("62e2d9df3be01b0823768b69"),
    },
    {
      "name": "Directorio",
      "higher": "Operacion",
      "collaborators": 3,
      "level": 10, 
      "subDivisions": ("62e35f19d47ef7dc31d17f35"),
      "ambassadors": ("62e2d9df3be01b0823768b6c"),
    },
    {
      "name": "Operation",
      "higher": "Producto",
      "collaborators": 21,
      "level": 10, 
      "subDivisions": ("62e35f19d47ef7dc31d17f36"),
      "ambassadors": ("62e2d9df3be01b0823768b6d"),
    },
    {
      "name": "Monetization",
      "higher": "Direccion",
      "collaborators": 12,
      "level": 10, 
      "subDivisions":( "62e35f19d47ef7dc31d17f37"),
      "ambassadors": ("62e2d9df3be01b0823768b6e"),
    },
    {
      "name": "People",
      "higher": "Producto",
      "collaborators": 22,
      "level": 10, 
      "subDivisions": ("62e35f19d47ef7dc31d17f38"),
      "ambassadors": ("62e2d9df3be01b0823768b6f"),
    },
    {
      "name": "Customer",
      "higher": "Direccion",
      "collaborators": 32,
      "level": 10, 
      "subDivisions": ("62e35f19d47ef7dc31d17f39"),
      "ambassadors": ("62e2d9df3be01b0823768b70"),
    },
    {
      "name": "Jurisdiction",
      "higher": "Operacion",
      "collaborators": 1,
      "subDivisions": ("62e35f19d47ef7dc31d17f39"),
      "ambassadors": ("62e2d9df3be01b0823768b71"),
    },
    {
      "name": "Finance",
      "higher": "Producto",
      "collaborators": 22,
      "level": 10, 
      "subDivisions":  ("62e35f6c1282db91d5833cf3"),
      "ambassadors": ("62e2d9df3be01b0823768b72"),
    },
    {
      "name": "Human Resources",
      "higher": "Operacion",
      "collaborators": 21,
      "level": 10, 
      "subDivisions":  ("62e35f6c1282db91d5833cf4"),
      "ambassadors": ("62e2d9df3be01b0823768b73"),
    },
    {
      "name": "Quality",
      "higher": "Producto",
      "collaborators": 12,
      "level": 10, 
      "subDivisions": ( "62e35f6c1282db91d5833cf5"),
      "ambassadors": ("62e2d9df3be01b0823768b74"),
    },
    {
      "name": "Web",
      "higher": "Marketing",
      "collaborators": 2,
      "level": 10, 
      "subDivisions":  ("62e35f6c1282db91d5833cf6"),
      "ambassadors": ("62e2d9df3be01b0823768b75"),
    },
    {
      "name": "Research",
      "higher": "Direccion",
      "collaborators": 4,
      "level": 10, 
      "subDivisions":  ("62e35f6c1282db91d5833cf7"),
      "ambassadors": ("62e2d9df3be01b0823768b76"),
    },
    {
      "name": "Youth",
      "higher": "Producto",
      "collaborators": 6,
      "level": 10, 
      "subDivisions":  ("62e35f6c1282db91d5833cf8"),
      "ambassadors": ("62e2d9df3be01b0823768b77"),
    },
    {
      "name": "Technology",
      "higher": "Estrategia",
      "collaborators": 8,
      "level": 10, 
      "subDivisions": ("62e35f6c1282db91d5833cf9"),
      "ambassadors": ("62e2d9df3be01b0823768b78"),
    },
    {
      "name": "Zones",
      "higher": "Logistica",
      "collaborators": 6,
      "level": 10, 
      "subDivisions": ("62e35f72b09ba88f54875fb9"),
      "ambassadors": ("62e2d9df3be01b0823768b79"),
    },
    {
      "name": "Xtreme",
      "higher": "Marketing",
      "collaborators": 5,
      "level": 10, 
      "subDivisions":  ("62e35f72b09ba88f54875fb7"),
      "ambassadors": ("62e2d9df3be01b0823768b7a"),
    },
    {
      "name": "Value",
      "higher": "Direccion",
      "collaborators": 23,
      "level": 10, 
      "subDivisions":  ("62e35f72b09ba88f54875fb6"),
      "ambassadors": ("62e2d9df3be01b0823768b7b"),
    },
    {
      "name": "Network",
      "higher": "Comercial",
      "collaborators": 21,
      "level": 10, 
      "subDivisions":  ("62e35f19d47ef7dc31d17f34"),
      "ambassadors": ("62e2d9df3be01b0823768b7c"),
    },
    {
      "name": "Leadership",
      "higher": "Sistemas",
      "collaborators": 12,
      "level": 10, 
      "subDivisions":  ("62e35f72b09ba88f54875fb6"),
      "ambassadors": ("62e2d9df3be01b0823768b7d"),
    },
    {
      "name": "Horizontal",
      "higher": "Ventas",
      "collaborators": 12,
      "level": 10, 
      "subDivisions":  ("62e35f19d47ef7dc31d17f34"),
      "ambassadors": ("62e2d9df3be01b0823768b7e"),
    },
  ])
}


module.exports = {
  createUsers,
  createDivisions,
  createSubDivisions
};


/*
{
      "id": 11,
      "username": "Bretas",
      "email": "Sincesre@april.biza",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 12,
      "username": "Antonettee",
      "email": "Shanna@melissa.tve",
      "password": "12345",
      "age": "26",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 13,
      "username": "Samanthaa",
      "email": "Nathan@yeseniaa.net",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 14,
      "username": "Kariannes",
      "email": "Julianne.OConner@koryw.org",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 15,
      "username": "Kamrens",
      "email": "Lucio_Hettinger@anniee.cas",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 16,
      "username": "Leopoldo_Corkerys",
      "email": "Karley_Dach@jaspesr.info",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 17,
      "username": "Elwynd.Skiles",
      "email": "Telly.Hoeger@billy.bizz",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 18,
      "username": "Maxime_Nienoww",
      "email": "Sherwood@rosamond.mee",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 19,
      "username": "Delphinex",
      "email": "Chaim_McDermott@dana.iox",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 20,
      "username": "Moriah.Swtanton",
      "email": "Rey.Padberg@kawrina.biz",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 21,
      "username": "Brwet",
      "email": "Sincere@wa21pril.biz",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 22,
      "username": "Antonettet",
      "email": "Shanna@melissa.tvt",
      "password": "12345",
      "age": "26",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 23,
      "username": "Samanthath",
      "email": "Nathan@yesenia.nets",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 24,
      "username": "Karianness",
      "email": "Julianne.OcConner@kory.org",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 25,
      "username": "Kamren",
      "email": "Lucio_Hettinger@annie.ca",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 26,
      "username": "Mrs. Dennis Schulist",
      "email": "Karley_Dach@jasper.infoe",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 27,
      "username": "Kurtis Weissnat",
      "email": "Telly.Hoeger@billy.ebiz",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 28,
      "username": "Nicholas Runolfsdottir V",
      "email": "Sherwood@erosamond.me",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 29,
      "username": "Glenna Reichert",
      "email": "Chaim_McDermott@dana.iow",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    },
    {
      "id": 30,
      "username": "Moriah.Stanton DuBuque",
      "email": "Rey.Padberg@karina.biwz",
      "password": "12345",
      "age": "25",
      "roles": "62e1fcbb1a953512387ac9f2"
    }
*/
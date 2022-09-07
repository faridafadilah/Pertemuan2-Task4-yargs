const { SaveContact, listContact, detailContact } = require('./contact');
const yargs = require('yargs');

yargs.command({
    command: 'add',
    describe: 'add new contact',
    builder: {
        nama: {
            describe: 'Contact Name',
            demandOption: true,
            type: 'string',
        },
        email: {
            describe: 'Contact Email',
            demandOption: false,
            type: 'string',
        },
        nohp: {
            describe: 'Contact Mobile Phone',
            demandOption: true,
            type: 'string',
        },
    },
    handler(argv) {
      SaveContact(argv.nama, argv.email, argv.nohp);
    }
});

// Membuat list 
yargs.command({
  command: 'list',
  describe: 'list contact',
  handler() {
    listContact();
  }
});

// Membuat detail berdasarkan nama
yargs.command({
  command: 'detail',
  describe: 'Detail Contact Berdasarkan nama',
  builder: {
    nama: {
      describe: 'Contact Name',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  }
});

yargs.parse();
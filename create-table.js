import { sql } from './db.js'

sql`
  CREATE TABLE livros (
      id text PRIMARY KEY,
      title character varying(255),
      pages int,
      author character varying(255),
      releaseDate character varying(10)
  );
`.then(() => {
  console.log('tabela criada');
})
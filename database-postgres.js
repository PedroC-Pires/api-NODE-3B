import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listLivros() {
    const livros = await sql`select * from livros`;
    return livros;
  }

  async createLivro(livro) {
    const id = randomUUID();
    console.log('id', id);
    const title = livro.title;
    const pages = livro.pages;
    const author = livro.author;
    const releaseDate = livro.releaseDate;
    
    await sql`insert into livros (id, title, pages, author, releaseDate)
    values (${id}, ${title}, ${pages}, ${author}, ${releaseDate})`
  }

  async updateLivro(id, livro) {
    const title = livro.title;
    const pages = livro.pages;
    const author = livro.author;
    const releaseDate = livro.releaseDate;

    await sql`update livros set 
        title = ${title},
        pages = ${pages},
        author = ${author},
        releaseDate = ${releaseDate},
        where id = ${id}
    `;
  }

  async deleteLivro(id) {
    await sql`delete from livros where id = ${id}`
  }

}
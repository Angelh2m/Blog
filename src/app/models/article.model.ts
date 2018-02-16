export class Article {

  constructor(

    public name: string,
    public category: string,
    public author: string,
    public content: string,
    public date?: string,
    public createdAt?: string,
    public updatedAt?: string,
    public url?: string,
    public labels?: string,
    public comments?: string,
    public image?: string,

  ) {}

}

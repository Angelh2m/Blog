export class Article {

  constructor(

    public name: string,
    public category: string,
    public content: string,
    public labels?: string,
    public image?: string,

  ) {}

}

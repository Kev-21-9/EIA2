 interface Item{
    name: string;
    date: Date;
    info: string;
    person: string;

}

 interface Data{
    [category:string]: Item[]
}

 let data: Data={
    Task:[
        {name: "clean toilet", date:new Date(12, 4, 2023), info:"use big brush", person:"Oliver"},
        {name:"buy candy", date:new Date(11, 4, 2023), info:"Milka", person:"Lydia"}
    ]
}
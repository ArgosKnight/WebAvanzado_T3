let  stories =[
    {
        id: 1,
        name: "Harry Potter",
        author: "K.K Rowling",
        image:"",
        descripcion: "lalalalalalalla",
    },
];

export const list = (req, res) =>{
 return res.status(200).json({
     ok: true,
     data: stories,
 });
};
//POST
export const store = (req, res) =>{
    const body = req.body;
    body.id=stories.length + 1;
    stories.push(body);
    
    return res.status(201).json({
        ok:true,
        data:"Store success",
    });
};

export const update = (req, res) =>{
    const body = req.body;
    body.Id = stories.length +1;
    stories.put(body);

    return res.status(201).json({
        ok:true,
        data:"Update succes",
    });
};

export const destroy = (req, res) =>{
    const {id} = req.params;
    stories = stories.filter((story) => story.id != id);

    return res.status(200).json({
        ok: true,
        data: stories,
    })
};
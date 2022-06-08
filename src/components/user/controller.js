


const data = [];

export const index = (req, res) =>{
    res.json({
        data:"test success",
    });
};

export const login = (req, res)=>{
    const { email, password } = req.body;
    res.json({
        data: {
            type: "login",
            email,
            password,
        },
    });
};

export const singup = (req, res)=>{
    const { name, lastname, email, password }  = req.body;
    res.json({
        data:{
            type:"singup",
            name,
            lastname,
            email,
            password,
        },
    });
};

export const show = (req, res)=>{

};

export const reset = (req, res) =>{

}

export const update  = (req, res) =>{

}

export const dele = (req, res) =>{
    
}

const obj ={
    name: "claudia",
    age: "230",
    lastname: "perez",
};

const {name, age, lastname} = obj;
console.log(name);
console.log(age);
console.log(lastname);
/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];
let result = {
    id: foo.id,
    name: foo.name.charAt(0).toUpperCase() + foo.name.slice(1),
    roles: [...foo.roles, roleSuperUser , roleUser ].map(role => role.toUpperCase()),
    skills: [
       skills[0].charAt(0).toUpperCase() + skills[0].slice(1),
       skills[1].charAt(0).toUpperCase() + skills[1].slice(1),
       ...foo.skills.slice(0,1).map(skill => skill.charAt(0).toUpperCase() + foo.skills[0].slice(1)),
       ...foo.skills.slice(1, 3).map(skill => skill.toUpperCase()),
       skills[2].charAt(0).toUpperCase() + skills[2].slice(1),
       ...foo.skills.slice(3, 7).map(skill => skill.charAt(0).toUpperCase() + skill.charAt(1).toLowerCase() + skill.charAt(2).toLowerCase()+ skill.charAt(3).toLowerCase()+ skill.charAt(4).toLowerCase() + skill.charAt(5).toLowerCase() ),
       skills[3].charAt(0).toUpperCase() + skills[3].slice(1)
    ],
    levels: levels.map(level => ({ LEVEL: level.LEVEL.toUpperCase().replace("-", "") }))
  }


//export result
module.exports = result; 
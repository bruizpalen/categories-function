let categories = ['food', 'services', 'housing', 'education']

const prompt = require('prompt-sync')({ sigint: true });

const option = prompt(`What do you want to do?
Include a new category (I)
Remove a category (D)
See the current categories (S)
Edit a existing category (E)`);

console.log(`Hola, ${option}`)

function include(list_categories){
    let new_category = prompt(`Please type the name of the new category`)
    let not_new = true
    while (not_new){
        if (list_categories.includes(new_category.toLowerCase)){
            new_category = prompt(`Please, that category is already in the list, enter a new one`)
            counter ++
        }else{

        }
    }
    
}

function remove(){

}

function show(){

}

function edit(){

}
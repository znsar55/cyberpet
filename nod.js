  const hero = require ('superheroes')
  const inquirer = require ('inquirer')

  const name = async ()=>{
    let {result} = await inquirer.prompt({
        
        type:'input',
        name:'result',
        message:'type in your pet name'
    })
   return result
}

const pet =async()=>{
    let {result} = await inquirer.prompt({
        type:'list',
        name:'result',
        message:'what pet do you want ',
        choices:['cat','dog','parrot','rabbit'],
       

    })
    return result
}
const activity = async()=>{
  let {result} = await inquirer.prompt({
    type: 'list', 
    name : 'result', 
    message:'what do you want to do now?',
    choices:['play', `eat`],
  })
  return result
}

module.exports = {
 name,pet,activity
 }

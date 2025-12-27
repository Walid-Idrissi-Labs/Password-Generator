let with_symbols=true;
let upper_lower=true;
let with_numbers = true;

let password_length= 20;

//
const random_numbers1 = Math.random() , random_numbers2 = Math.random();
const seed = random_numbers1.toString().split('.')[1].split('').concat(random_numbers2.toString().split('.')[1].split(''));
// console.log("seed" , seed);

const numbers = ["0" , "1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9"];
const alphabet_lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const alphabet_upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const symbols = ["@", "/", "-", "_", "+", "&", "(", ")", "?", "!", ".", ",", ":", ";", "*"];

//const symbol_at = "@" ,symbol_slash="/" , dash="-" , underscore="_" , plus ="+" , and = "&" , par_open="(" , par_close=")" , qst = "?" , exc = "!" , dot ="." , comma="," , colon = ":" , semi_collon=";" , asterix ="*" ; 




function randomArrayItem(array) {  return array[ Math.floor(Math.random()*array.length) ]; }



let password ="";

//function generate password(?)
for(let i=0 ; i<password_length ; i++)
{
    if( !with_symbols && !with_numbers && !upper_lower) //only lowercase alphabet
    {
        //letters
        if(1)
        {
            //pick random letter from> the array
            // password+=alphabet_lower [Math.floor(Math.random()*alphabet_lower.length)] ;
            password+=randomArrayItem(alphabet_lower);
        }
    }
    
    else if(!with_symbols && with_numbers && !upper_lower)
    {
        //letters
        if(seed[i]==="0" ||seed[i]==="1" ||seed[i]==="2" ||seed[i]==="3" ||seed[i]==="4" )
        {
            //random letter
            password+=randomArrayItem(alphabet_lower) ;
        }
        else
        {
            //random number
            password+=randomArrayItem(numbers) ;
        }

    }
    
    else if(!with_symbols && with_numbers && upper_lower)
    {
        //lower letter
        if(seed[i]==="0" ||seed[i]==="1" ||seed[i]==="2" ||seed[i]==="3"  )
        {
            //random letter
            randomArrayItem(alphabet_lower);
        }
        //upp letter
        else if(seed[i]==="4" ||seed[i]==="5" ||seed[i]==="6" )
        {
            randomArrayItem(alphabet_upper);
        }

        else
        {
            //random number
            randomArrayItem(numbers)
        }

    }

    //all enabled
    else
    {   
        //lower letter
        if(seed[i]==="1" ||seed[i]==="2"   )
        {
            //random letter
            randomArrayItem(alphabet_lower)
        }
        //upp letter
        else if(seed[i]==="3" ||seed[i]==="4" ||seed[i]==="5" )
        {
            randomArrayItem(alphabet_upper)
        }

        //number
        else if(seed[i]==="6" ||seed[i]==="7" || seed[i]=="8" || seed[i]=="0" )
        {
            randomArrayItem(numbers)
        }

        else
        {
            //random number
            randomArrayItem(symbols);
        }
    }




}




console.log(password);





// function printArray(array){
// for(let i=0 ; i<array.length ; i++)
// {
//     console.log(i+1 ,":" , array[i]);

// }
// }

// console.log(Math.floor( Math.random()*5)  );
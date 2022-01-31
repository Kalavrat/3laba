let name = "aнтоН"
let surname = "ЖуракОВ"

name1 = name.substr(1)
name2 = name.substr(0, 1)

surname1 = surname.substr(1)
surname2 = surname.substr(0, 1)

name_final = name1.toLowerCase()
name_final = name2.toUpperCase() + name_final
console.log(name_final)

surname_final = surname1.toLowerCase()
surname_final = surname2.toUpperCase() + surname_final
console.log(surname_final)

if (name != name_final || surname!= surname_final)
{
    console.log("Имя было преобразовано")
}
else 
{
    console.log("Имя осталось без изменений")
}
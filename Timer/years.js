let leapyear;
let currentDate = new Date();

let year = currentDate.getFullYear()
if (year % 400 == 0){
    leapyear = true;
}else if (year % 100 != 0 ) {
    leapyear = true;
}else if (year % 4){
    leapyear = true;
}else{
    leapyear = false;
} // true = значит год високосный; false = значит год не високосный



// если високосный то d == 365 иначе 364. Но если вискосный год но начало уже в нем то первый год истечёт когда уже не будет високосного года
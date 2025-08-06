  const ages=[2,100,3];

//   ages.sort();
//   console.log(ages);

// assending order
const sorted_ages=ages.sort(function(a,b)
{
    return a-b
})
console.log(sorted_ages);

// descending order
const sorted_des=ages.sort(function (a,b){
    return b-a;
})
console.log(sorted_des);


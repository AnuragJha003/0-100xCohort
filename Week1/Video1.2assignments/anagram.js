function anagram(str1,str2){
    const sorted1=str1.toLowerCase().sort();
    const sorted2=str2.toLowerCase().sort();

    return sorted1=== sorted2;
}
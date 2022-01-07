let strs = ["flower", "feow", "flight"];

var longestCommonPrefix = function(strs) {
    for (let i =0; i < strs.length; i++) {
        
        for (let j = 0; j < strs[i].length; j++) {
            
            if (strs[i][j] == strs[i+1][j] && strs[i+1][j] == strs[i+2][j]) {
                return(strs[i][j]);
                
            }
            else{
                return ""
            }
        }
        
    }
    
};

console.log(longestCommonPrefix(strs));


function DuplicateRemove(arr, length){
    if (length == 0 || length == 1){
        return length
    }
    
    var a = new Array (length);
    var j = 0;
    for (var i= 0; i< length-1; i++){
        if (arr[i] != arr[i+1]){
            a[j++] = arr[i];
        }
    }

    a[j++] = arr[length-1];

    for (var i=0; i<j; i++) {
        arr[i] = a[i];
    }
    return j;

}

var arr = [1, 2, 2, 3, 4, 4, 4, 5, 6, 6];
    var length = arr.length;
    length = DuplicateRemove(arr, length);
    for (var i=0; i<length; i++){
        document.write( arr[i] + "");
    }
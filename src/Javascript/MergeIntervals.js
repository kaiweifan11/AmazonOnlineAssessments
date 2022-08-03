/*
Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the non-overlapping 
intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    // merge
    const merge = ((arr1, arr2)=>{
        return [arr1[0], arr2[1]];
    })
    
    const n = intervals.length;
    let pointer = 0;
    
    while(pointer < intervals.length-1){
        let arr1 = intervals[pointer];
        let arr2 = intervals[pointer+1];
        
        if(arr1[1] >= arr2[0]){
            const newArray = merge(arr1, arr2);
            intervals.splice(pointer, 2, newArray);
        }else{
            pointer++;
        }
    }
    
    return intervals;
};
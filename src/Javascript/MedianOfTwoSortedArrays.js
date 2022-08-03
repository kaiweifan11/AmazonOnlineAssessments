/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).

Example 1:
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    const mergeArray = (()=>{
        let indexA = 0;
        let indexB = 0;
        const lengthA = nums1.length;
        const lengthB = nums2.length;
        const sortedArray = [];
        let count  = 0;
        
        while((lengthA>0 && indexA<lengthA) || (lengthB >0 && indexB< lengthB)){
            if(count >5) return
            count++;
            
            if(!nums2[indexB] || nums1[indexA] <= nums2[indexB]){
                sortedArray.push(nums1[indexA]);
                indexA++;
            }else if(!nums1[indexA] || nums2[indexB] < nums1[indexA]){
                sortedArray.push(nums2[indexB]);
                indexB++;
            }
        }
        return sortedArray;
    });

    const mergedArray = mergeArray();
    const mid = mergedArray.length > 0 ?Math.floor(mergedArray.length/2): -1;
    return mergedArray.length % 2 !== 0 ? mergedArray[mid] : (mergedArray[mid - 1] + mergedArray[mid]) / 2;
};
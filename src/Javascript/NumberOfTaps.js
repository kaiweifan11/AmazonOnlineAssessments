/*There is a one-dimensional garden on the x-axis. The garden starts at the point 0 and ends at the point n. (i.e The length of the garden is n).

There are n + 1 taps located at points [0, 1, ..., n] in the garden.

Given an integer n and an integer array ranges of length n + 1 where ranges[i] (0-indexed) means the i-th tap can water the area [i - ranges[i], i + ranges[i]] if it was open.

Return the minimum number of taps that should be open to water the whole garden, If the garden cannot be watered return -1.*/

/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
 var minTaps = function(n, ranges) {
    const getLeftRange = ((range, pos)=>{
        if(range<=0) return 0;
        return pos - range;
    });
                       
    const getRightRange = ((range, pos)=>{
       if(range<=0) return 0;
       return pos + range;
    });
    
    // for each position of the tap, get it's range
    const getAllRanges = ((ranges)=>{
        const allRanges = [];
        for(let pos = 0; pos<ranges.length; pos++){
            let range = ranges[pos];
            const leftRange =  getLeftRange(range, pos);
            const rightRange =  getRightRange(range, pos);
            const maxRange = [leftRange, rightRange];
            allRanges.push(maxRange);
        }
        
        return allRanges;
    });
    
    const isAllPointsCovered = ((coveredRange, n)=>{
        if(coveredRange[0] <= 0 && coveredRange[1]>=n){
            return true;
        }
        return false;
    })
    
    const allRanges = getAllRanges(ranges);
    let tapsToOpen = 0;
    const coveredRange = [];
    for(let tapIndex = 0; tapIndex < allRanges.length; tapIndex++){
        const range = allRanges[tapIndex];
        const minPoint = range[0];
        const maxPoint = range[1];
        
        // if tap can cover all points return 1 tap
        if(minPoint <= 0 && maxPoint >=n){
            return 1;
        }
        
        // Add the first tap
        if(coveredRange.length <1){
            coveredRange.push(minPoint);
            coveredRange.push(maxPoint);
            tapsToOpen++;
            // if first tap can cover all points return 1
            if(isAllPointsCovered(coveredRange, n)) return 1;
           
        }else{
            let isAlreadyAdded = false;
            if(minPoint<= coveredRange[0]){
                coveredRange[0] = minPoint;
                isAlreadyAdded = true;
                console.log('tapIndex minPoint', tapIndex)
                tapsToOpen++;
            } 
            if(maxPoint>= coveredRange[1]){
                let isDontAdd = false;
                for(let secondTapIndex = tapIndex+1; secondTapIndex < allRanges.length; secondTapIndex++){
                    let secondTapRange = allRanges[secondTapIndex];
                    if(secondTapRange[0] <= coveredRange[1] && secondTapRange[1] >= maxPoint){
                        isDontAdd = true;
                    }
                }
                if(!isDontAdd) {
                    coveredRange[1] = maxPoint;
                    if(!isAlreadyAdded) tapsToOpen++;
                }
            }

            if(isAllPointsCovered(coveredRange, n)) return tapsToOpen;
        }
    }
   
    if(!isAllPointsCovered(coveredRange, n)) return -1;
   
};
function findLongestPalindromicString(text)
{
    let N = text.length;
        if (N == 0)
            return;
        N = 2 * N + 1; // Position count
        let L = new Array(N + 1); // LPS Length Array
        L[0] = 0;
        L[1] = 1;
        let C = 1; // centerPosition
        let R = 2; // centerRightPosition
        let i = 0; // currentRightPosition
        let iMirror; // currentLeftPosition
        let maxLPSLength = 0;
        let maxLPSCenterPosition = 0;
        let start = -1;
        let end = -1;
        let diff = -1;
   
        // Uncomment it to print LPS Length array
        // printf("%d %d ", L[0], L[1]);
        for (i = 2; i < N; i++)
        {
   
            // get currentLeftPosition iMirror
            // for currentRightPosition i
            iMirror = 2 * C - i;
            L[i] = 0;
            diff = R - i;
   
            // If currentRightPosition i is within
            // centerRightPosition R
            if (diff > 0)
                L[i] = Math.min(L[iMirror], diff);
   
            // Attempt to expand palindrome centered at
            // currentRightPosition i. Here for odd positions,
            // we compare characters and if match then
            // increment LPS Length by ONE. If even position,
            // we just increment LPS by ONE without
            // any character comparison
            while (((i + L[i]) + 1 < N && (i - L[i]) > 0) &&
                               (((i + L[i] + 1) % 2 == 0) ||
                         (text[Math.floor((i + L[i] + 1) / 2)] ==
                          text[Math.floor((i - L[i] - 1) / 2)])))
            {
                L[i]++;
            }
   
            if (L[i] > maxLPSLength) // Track maxLPSLength
            {
                maxLPSLength = L[i];
                maxLPSCenterPosition = i;
            }
   
            // If palindrome centered at currentRightPosition i
            // expand beyond centerRightPosition R,
            // adjust centerPosition C based on expanded palindrome.
            if (i + L[i] > R)
            {
                C = i;
                R = i + L[i];
            }
   
            // Uncomment it to print LPS Length array
            // printf("%d ", L[i]);
        }
   
        start = (maxLPSCenterPosition - maxLPSLength) / 2;
        end = start + maxLPSLength - 1;
        document.write("LPS of string is "+text+" : ");
        for (i = start; i <= end; i++)
            document.write(text[i]);
        document.write("<br>");
}

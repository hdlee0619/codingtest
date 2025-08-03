class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        answer = []

        if len(s) == 0:
            return 0

        for index, char in enumerate(s):
            temp = char
            for j in range(index + 1, len(s)):
                if s[j] == char or s[j] in temp:
                    break
                else:
                    temp += s[j]
            
            answer.append(temp)

        logest = max(answer, key=len)
        
        return len(logest)

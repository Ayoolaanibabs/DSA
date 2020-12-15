def anagram(word1, word2):
    word1 = word1.replace(' ', '')
    word2 = word2.replace(' ', '')
    h1 = len(word1)
    h2 = len(word2)
    if  h1 != h2:
        print ('The words are not anagrams')
        return
    words1 = sorted(word1)
    words2 = sorted(word2)
    for i in range(0, h1):
        if words1[i] != words2[i]:
            print ('Not an anagram')
            return
    print ('yes an anagram')



anagram('he y','yeh')
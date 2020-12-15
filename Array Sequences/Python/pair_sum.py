def pair_sum(arr,tot):
    pair = []
    length = len(arr)
    for i in range(0, length): 
        for j in range(i+1, length):
            if arr[i] + arr[j] == tot:
                pair.append([arr[i],arr[j]])
    print(pair)
pair_sum([1,5,7,-1,5],6)
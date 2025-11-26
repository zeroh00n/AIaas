snake = [[0]*5 for _ in range(5)];
i, j = 0, 0;

for num in range(1, 26):

    if i%2 == 0:
        if j<5:
            snake[i][j] = num;
            j += 1;
        else:
            j -= 1;
            i += 1;
    else:
        if j >= 0:
            snake[i][j] = num;
            j -= 1;
        else:
            i += 1;
            j += 1;


for x in snake:
    print(x);

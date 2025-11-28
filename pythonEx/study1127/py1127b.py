def plus(N):
    if N == 1:
        return 1;
    else:
        return N + plus(N-1);


print(plus(100))
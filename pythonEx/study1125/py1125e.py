N = int(input("정수 입력 ㄱㄱ: "));
n = (2*N)+1

mabang = [[0]*n for _ in range(n)];

i = n -1;
j = n//2;

for num in range(1, n*n +1):
    if mabang[i][j] == 0:
        mabang[i][j] = num;
    else:
        i = (i-1)%n;
        mabang[i][j] = num;

    nexti = (i+1)%5;
    nextj = (j-1)%5;

    if mabang[nexti][nextj] == 0:
        i , j = nexti, nextj;
    else:
        i = (i-1)%n;

for x in mabang:
    print(x);

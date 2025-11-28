N = int(input("정수 입력 ㄱㄱ: "));
n = (2*N)+1

mabang = [[0]*n for _ in range(n)];

i = len(mabang)-1;
j = len(mabang[i])//2;

for num in range(1, n*n + 1):
    if num == 1:
        mabang[i][j] = num;
    else:
        if i+1 <= 2*N and j-1 >=0:
            if mabang[i+1][j-1] == 0:
                i += 1;
                j -= 1;
                mabang[i][j] = num;
            else:
                if i-1>=0:
                    i -= 1;
                    mabang[i][j] =num;
        elif i+1 > 2*N and j-1 >= 0:
            if mabang[0][j-1] == 0:
                i = 0;
                j -= 1;
                mabang[i][j] = num;
            else:
                 if i-1>=0:
                    i -= 1;
                    mabang[i][j] =num;
        elif i+1 <= 2*N and j-1 <0:
            if mabang[i+1][len(mabang[i])-1] ==0:
                i += 1;
                j = len(mabang[i])-1;
                mabang[i][j] =num;
            else:
                 if i-1>=0:
                    i -= 1;
                    mabang[i][j] =num;
        else:
            if mabang[0][0] == 0:
                i = 0;
                j = 0;
                mabang[i][j] =num;
            else:
                 if i-1>0:
                    i -= 1;
                    mabang[i][j] =num;

for x in mabang:
    print(x);

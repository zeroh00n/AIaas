for x in range(2, 10001,):
    i = 2;
    cnt = 0;
    for y in range(2, 10001,):
        if x%y == 0:
            cnt += 1
        elif 2<cnt:
            break
    if cnt == 1:
        print(f"{x} ", end='');
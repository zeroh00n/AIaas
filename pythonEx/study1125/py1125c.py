num1, num2 = map(int, input("정수 2개 입력: ").split())
min=1;
while True:
    if num1%2 == 0 and num2%2 ==0:
        num1 = num1/2;
        num2 = num2/2;
        min = min*2;
        continue;
    elif num1%3 == 0 and num2%3 == 0:
        num1 = num1/3;
        num2 = num2/3;
        min = min*3;
    else :
        break;

max = int(min*num1*num2);

print(f"최대공약수: {min}");
print(f"최소공배수: {max}");
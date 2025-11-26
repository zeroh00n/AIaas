marks = [90, 20, 64, 71, 58];

for mark in marks:
    print(mark, end=' ')

print()
dic = {'name':'kyh', 'gender':'male', 'phone':'101'};
for x in dic:
    print(x, end=' ')
    print(dic[x]);

print('-'*50);
def fourOp(a, b):
    return a+b,a-b,a*b

plus,minus,mul = fourOp(100,4) #튜블로 값을 한번에 리턴받을 수 있음
print(plus,mul)
print(fourOp(10,2)) #실행 시켜보면 튜플안에 값들이 있는것을 볼 수 있다.
print('-'*50)

a =1; #전역변수
def vartest(a):
    a += 1;
    return a; #return 없이 a = vartest(a)를 하면 None이나옴
a = vartest(a); # vartest(a)는 지역변수 이름은 같지만 다르가 때문에 전역 a값을 다시 줘야함
print(a);

print('-'*50);
add = lambda n1, n2 : n1 * n2;
result = add(2,3);
print(result)
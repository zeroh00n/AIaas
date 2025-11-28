f = open('student.txt', 'w');
for i in range(10):
    data = f'{i}*{i} = {i*i}\n';
    f.write(data);

f = open('student.txt', 'r');
lines = f.readlines(); #read()와 다르게 값을 list로 받아온다.
for line in lines:
    print(line, end='');

"""while True:
    line = f.readline(); #readline()은 한줄만 읽어옴 그래서 무한루프로 받아와야함
    if not line:
        break
    print(line, end = '');"""

f.close(); #필수

print('-'*50);
with open('student.txt', 'r') as f:
    line = f.read();
    print(line); #with를 사용하면 f.close()를 할 필요 없이 알아서 끝남

f=open('student.txt', 'a'); #f=open('student.txt', 'w');면 123밖에 안남음
line=input('아무거나 입력: ');
f.write(line);
f.close();
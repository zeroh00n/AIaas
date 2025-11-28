from datetime import date
import re;

day1 =date.today()
print(day1);

p = re.compile('^[a-z]+$');
m = p.match('3python');
if m:
    print('Match found:', m.group())
else:
    print('no match')

e = re.compile('^[a-zA-Z0-9]+@[a-zA-Z]+\.[a-zA-Z]+$')
testE = e.match('test123@gmail.com')
if testE:
    print(True);
else:
    print(False);

n = re.compile('^[0-9]+$')
nstring = n.match('17464971E')
print(bool(nstring));

py = re.compile('^python')
pyT = py.match('pythonnnnn');
print(bool(pyT))

ko = re.compile(r'^[가-힣]+$'); #한국어만
isKo = ko.fullmatch('안녕하세요');
print(bool(isKo));

tel = re.compile(r'[0-9]{3}-[0-9]{4}-[0-9]{4}$')
telisTrue = tel.fullmatch('010-3002-0002');
print(bool(telisTrue))
def makeMenu(fileName):
    menulist = [];
    while True:
        name = input('메뉴명:');
        if not name:
            break;
        price = input('가격:');

        menulist.append(f'{name},{price}')
    with open(fileName, 'w') as f:
        for i in range(len(menulist)):
            f.write(f'{i+1},{menulist[i]} \n');

def readMenu(fileName):
    f = open(fileName, 'r');
    list =[]
    while True:
        line = f.readline().strip();
        if not line:
            break
        splitLine = line.split(',');
        menuNum = splitLine[0];
        menu = splitLine[1];
        price = splitLine[2];
        list.append((menuNum,menu,price));
    return list;
    
def updateMenu(fileName):
    count = 0;
    while True:

        with open(fileName,'r') as f:
            lines = f.readlines();
            count = len(lines);
        with open(fileName, 'a') as f:
            print(f'메뉴번호: {count+1}');
            name = input('메뉴명:');
            if not name:
                break;
            price = input('가격:');
            f.write(f'{count+1},{name},{price}');

def delMenu(fileName):
    delN = int(input('삭제할 메뉴번호를 입력하시오:'));

    f = open(fileName, 'r');
    list =[]
    while True:
        line = f.readline().strip();
        if not line:
            break
        splitLine = line.split(',');
        menuNum = splitLine[0];
        menu = splitLine[1];
        price = splitLine[2];
        list.append((menuNum,menu,price));

    list.pop(delN-1);
    with open(fileName, 'w') as f:
        for i in range(len(list)):
            f.write(f'{i+1},{list[i][1]},{list[i][2]} \n')




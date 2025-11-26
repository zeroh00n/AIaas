from py1126ex1 import makeMenu, readMenu, updateMenu, delMenu;

fname = 'menu.txt';

while True:
    c1 = input('작업을 선택하세요(m:메뉴관리, x: 프로그램 종료)')

    if c1 == 'm':
       while True:
        c2 = input('메뉴작업을 선택하세요(c:메뉴만들기, r:메뉴표시, u:메뉴추가, d:메뉴삭제, x:메뉴관리 종료)')
        if c2 =='c':
            makeMenu(fname);
        elif c2 == 'r':
            menuList = readMenu(fname);
            print(menuList);
        elif c2 == 'u':
            updateMenu(fname);
        elif c2 == 'd':
            delMenu(fname);
        elif c2 == 'x':
            print('메뉴관리 종료');
            break; 
        else:
            print('잘못된 입력입니다');
            continue;

    elif c1 == 'x':
        print('프로그램 종료');
        break; 

    else:
        print('잘못된 입력입니다');
        continue;
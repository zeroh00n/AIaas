from menu_class import Menu

menu1 = Menu();

while True:
    c1 = input('작업을 선택하세요(m:메뉴관리, o: 프로그램 종료)')

    if c1 == 'm':
       while True:
        c2 = input('메뉴작업을 선택하세요(c:메뉴만들기, r:메뉴표시, u:메뉴추가, d:메뉴삭제, x:메뉴관리 종료)')
        if c2 =='c':
            menu1.create();
        elif c2 == 'r':
            menu1.display();
        elif c2 == 'u':
            menu1.update();
        elif c2 == 'd':
            menu1.delete();
        
        
        menu1.save(); 

    elif c1 == 'o':
        pass 

    elif c1 == 's':
        pass
    else:
        print('프로그램 종료');
        break;
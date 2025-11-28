from ast import Or
from Menu_class import Menu
from Order_class import Order
from Sales_class import Sales

menu1 = Menu();
order = Order();
sales = Sales();

while True:
    c1 = input('작업을 선택하세요(m:메뉴관리, o:주문, s:판매 내역, x:프로그램 종료)')

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
        elif c2 =='x':
            break;
        menu1.save(); 

    elif c1 == 'o':
        while True:
            c2 = input('주문작업을 선택하세요 (c/a:주문, r:주문 내역, d:주문 취소, x:주문작업 종료)');
            if c2 =='c' or c2 == 'a':
                order.add();
            elif c2 == 'r':
                order.display();
            elif c2 == 'd':
                order.delete();
            elif c2 == 'x':
                order.mile();
                break;
            order.save();

    elif c1 == 's':
        sales.display();
    elif c1 == 'x':
        print('프로그램 종료');
        break;